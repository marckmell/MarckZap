// src/components/Dashboard/OCRUpload.tsx
'use client';

import React, { useState } from 'react';
import { OCRResponse } from '@/types/ocr';

const OCRUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<OCRResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro inesperado ao processar o arquivo.');
      }

      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro inesperado ao processar o arquivo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg max-w-3xl mx-auto animate-fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Leitura de Comprovantes</h3>
          <p className="text-sm text-gray-400">Extraia dados de PDFs e Imagens automaticamente</p>
        </div>
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-[10px] rounded uppercase font-bold">PDF</span>
          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-[10px] rounded uppercase font-bold">JPG/PNG</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-10 bg-gray-900/50 transition-all hover:border-green-500 group">
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileChange}
          className="hidden"
          id="ocr-file-upload"
        />
        <label htmlFor="ocr-file-upload" className="cursor-pointer flex flex-col items-center">
          <div className="p-4 bg-gray-800 rounded-full text-gray-500 group-hover:text-green-400 transition-colors mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>
          <span className="text-gray-300 font-medium text-center">
            {file ? (
              <span className="text-green-400">{file.name}</span>
            ) : (
              'Clique para selecionar ou arraste o comprovante aqui'
            )}
          </span>
          <span className="text-xs text-gray-500 mt-2">Máximo 10MB</span>
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={!file || isLoading}
        className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-green-900/20"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.967l3-2.647z"></path>
            </svg>
            Processando OCR...
          </>
        ) : (
          'Extrair Texto do Comprovante'
        )}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-900/30 text-red-400 rounded-lg text-sm border border-red-800 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-//9a1 1 0 00-1-1v4a1 1 0 102 0v-4a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-400">Conteúdo Extraído:</label>
            <button 
              onClick={() => navigator.clipboard.writeText(result.text)}
              className="text-xs text-green-400 hover:text-green-300 transition-colors"
            >
              Copiar Texto
            </button>
          </div>
          <div className="p-5 bg-gray-900 rounded-lg border border-gray-700 text-gray-300 text-sm font-mono whitespace-pre-wrap max-h-80 overflow-y-auto custom-scrollbar shadow-inner">
            {result.text || 'Nenhum texto detectável foi encontrado no documento.'}
          </div>
        </div>
      )}
    </div>
  );
};

export default OCRUpload;
