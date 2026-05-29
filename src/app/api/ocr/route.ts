// src/app/api/ocr/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Tesseract from 'tesseract.js';
import { OCRResponse } from '@/types/ocr';

export async function POST(req: NextRequest) {
  try {
    // Importação dinâmica do pdf-parse para evitar erros de ESM/CommonJS no build do Next.js
    const pdfModule = await import('pdf-parse') as any;
    const pdf = pdfModule.default || pdfModule;

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'Nenhum arquivo foi enviado. Por favor, selecione um comprovante.' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    let extractedText = '';

    if (file.type === 'application/pdf') {
      const pdfData = await pdf(buffer);
      extractedText = pdfData.text;
    } else if (file.type.startsWith('image/')) {
      const { data: { text } } = await Tesseract.recognize(
        buffer,
        'por',
        { 
          logger: m => {
            if (m.status === 'recognizing text') {
              console.log(`OCR Progress: ${m.progress * 100}%`);
            }
          } 
        }
      );
      extractedText = text;
    } else {
      return NextResponse.json(
        { error: 'Formato de arquivo inválido. Por favor, envie apenas Imagens (JPG, PNG) ou PDFs.' },
        { status: 400 }
      );
    }

    const result: OCRResponse = {
      text: extractedText.trim(),
      fileName: file.name,
      type: file.type,
    };

    return NextResponse.json(result);

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('CRITICAL_OCR_ERROR:', error);
    return NextResponse.json(
      { error: `Erro interno ao processar documento: ${errorMessage}` },
      { status: 500 }
    );
  }
}
