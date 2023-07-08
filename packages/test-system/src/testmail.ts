import { createReadStream } from 'fs';
import { MailParser } from 'mailparser'

const parseEmailFromStream = (stream: any) => {
    return new Promise((resolve, reject) => {
      const mailParser = new MailParser();
  
      mailParser.on('end', (parsedEmail) => {
        console.log('parsed email is', JSON.stringify(parsedEmail))
        resolve(parsedEmail);
      });
  
      mailParser.on('error', (error) => {
        console.error('error parsing stream', error)
        reject(error);
      });
  
      stream.pipe(mailParser);
    });
  };

  const filePath = '/home/akrsmv/inctasoft/test-eml-3-attachments-1-dubplicated.eml';

  const readStream = createReadStream(filePath);
  parseEmailFromStream(readStream).catch(console.error).then(parsedEmail => console.log('resoved parsed email is ', parsedEmail))
  
//   // Listen for the 'data' event to read the file content
//   readStream.on('data', (chunk: any) => {
//     // Process each chunk of data
//     console.log(chunk.toString());
//   });
  
  // Listen for the 'end' event to know when the reading is complete
  readStream.on('end', () => {
    console.log('File reading complete');
  });
  
  // Listen for the 'error' event to handle any errors that may occur
  readStream.on('error', (error: any) => {
    console.error('Error reading file:', error);
  });