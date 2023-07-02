import { gunzipSync, gzipSync } from "zlib";

export const firstCaseUpper = (str: string): any => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
export const firstCaseLower = (str: string): any => `${str.slice(0, 1).toLowerCase()}${str.slice(1)}`

// Encode JSON to Base64 string
export function encodeJSONToBase64(json: object | undefined) {
    if (!json) {
        return undefined
    }
    const jsonString = JSON.stringify(json);
    const buffer = Buffer.from(jsonString);
    return compressBase64String(buffer.toString('base64'));
}

// Decode Base64 string to JSON
export function decodeBase64ToJSON(base64StringGzipped: string | undefined) {
    if (!base64StringGzipped) {
        return undefined
    }
    const buffer = Buffer.from(decompressBase64String(base64StringGzipped), 'base64');
    const jsonString = buffer.toString('utf8');
    return JSON.parse(jsonString);
}

// Compress a Base64 encoded string using gzip
function compressBase64String(base64String: string) {
  const buffer = Buffer.from(base64String, 'base64');
  const compressedBuffer = gzipSync(buffer);
  return compressedBuffer.toString('base64');
}

// Decompress a gzip compressed Base64 encoded string
function decompressBase64String(compressedBase64String: string) {
  const compressedBuffer = Buffer.from(compressedBase64String, 'base64');
  const decompressedBuffer = gunzipSync(compressedBuffer);
  return decompressedBuffer.toString('base64');
}