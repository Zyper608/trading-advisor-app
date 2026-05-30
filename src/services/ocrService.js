// OCR Service
import { recognize } from 'tesseract.js';

export async function extractStockDataFromImage(imageUri) {
  try {
    const result = await recognize(imageUri, 'eng', { logger: m => console.log(m) });
    const text = result.data.text;
    // TODO: Extract relevant fields (price, ticker, volume, indicators) from text
    return text;
  } catch (err) {
    throw new Error('OCR extraction failed: ' + err.message);
  }
}
