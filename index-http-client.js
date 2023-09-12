import http from 'node:http';

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  port: 80,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac)',
  },
};

const sendGetRequestAsinc = async () => {
  options.method = 'GET';
  options.path = '/posts';

  try {
    const data = await new Promise((resolve, reject) => {
      const req = http.request(options, res => {
        let data = '';

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          console.log('Response data for GET request');
          console.log(data);
          resolve(data);
        });

        res.on('error', err => {
          reject(err);
        });
      });

      req.end();
    });

    console.log(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }

};
sendGetRequestAsinc();

const sendGetRequest = () => {
  options.method = 'GET';
  options.path = '/posts/1';
  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response data for GET request');
      console.log(data);
    });

    res.on('error', err => {
      console.log(err);
    });
  });

  req.end();
};
//sendGetRequest();

const sendPostRequest = () => {
  options.method = 'POST';
  options.path = '/posts';
  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response data for POST request');
      console.log(data);
    });

    res.on('error', err => {
      console.log(err);
    });
  });

  const postData = JSON.stringify({
    title: 'Node js',
    body: 'Testing in node js',
    userId: 1,
  });

  req.write(postData);

  req.end();
};
// sendPostRequest();

const sendPutRequest = () => {
  options.method = 'PUT';
  options.path = '/posts/1';
  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response data for PUT request');
      console.log(data);
    });

    res.on('error', err => {
      console.log(err);
    });
  });

  const postData = JSON.stringify({
    title: 'Node js',
    body: 'Testing in node js',
    userId: 1,
  });

  req.write(postData);

  req.end();
};
// sendPutRequest();

const sendPatchRequest = () => {
  options.method = 'PATCH';
  options.path = '/posts/2';
  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response data for PATCH request');
      console.log(data);
    });

    res.on('error', err => {
      console.log(err);
    });
  });

  const postData = JSON.stringify({
    userId: 46,
  });

  req.write(postData);

  req.end();
};
// sendPatchRequest();

const sendDeleteRequest = () => {
  options.method = 'DELETE';
  options.path = '/posts/100';
  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response data for DELETE request');
      console.log(data);
    });

    res.on('error', err => {
      console.log(err);
    });
  });

  req.end();
};
// sendDeleteRequest();
