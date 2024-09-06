import fs from 'fs';

export function getDataFromFile(
  filePath: string,
  callback: (data: string) => void
) {
  const stream = fs.createReadStream(filePath);

  let data = '';

  stream.on('data', (chunk) => {
    data += chunk;
  });

  stream.on('end', () => {
    callback(JSON.stringify(data));
  });

  stream.on('error', () => {
    console.error(`${filePath} Erroed`);
  });
}

export function writeDataToFile(
  filePath: string,
  data: string,
  callback: (error: any) => void
) {
  const stream = fs.createWriteStream(filePath);

  stream.on('finish', () => {
    console.log(`${filePath} Updated`);
    callback(null);
  });

  stream.on('error', (e) => {
    console.error(`${filePath} Erroed`);
    callback(e);
  });

  stream.write(data);
  stream.end();
}
