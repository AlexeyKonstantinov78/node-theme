import multer from 'multer';
import http from 'node:http';

const PORT = process.env.PORT || 3000;

const folderName = './images';

const storage = multer.diskStorage({
  destination: folderName,
  filename(req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const fileName = `image_${Date.now()}.${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
  });

  if (req.method === 'POST' && req.url === '/upload') {
    try {
      const uploadSingle = upload.single('file');
      uploadSingle(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          res.statusCode = 400;
          res.end('Ошибка при обарботке файла');
          return;
        }

        if (err) {
          res.statusCode = 500;
          res.end('Ошибка при сохранении файла');
          return;
        }

        const filename = req.file.filename;
        const pathFile = `${folderName}/${filename}`;
        console.log(`Изображение сохранено: ${pathFile}`);
        res.end(`Изображение сохранено: ${pathFile}`);
      });
    } catch (error) {
      console.error('error', error);
      res.statusCode = 500;
      res.end('Ошибка при сохранении файла');
    }
  } else {
    res.statusCode = 404;
    res.end('Метод или URL неверный');
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
