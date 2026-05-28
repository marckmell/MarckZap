// src/types/ocr.ts
export interface OCRResponse {
  text: string;
  fileName: string;
  type: string;
}

export interface OCRError {
  error: string;
}
