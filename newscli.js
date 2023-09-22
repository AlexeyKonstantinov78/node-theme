#!/usr/bin/env node

import { argsParse } from './util/argsParse.js';
import { newsApi } from './util/newsApi.js';

const app = () => {
  const args = argsParse(process.argv);
  console.log('args: ', args);


  const option = {
    lang: 'ru',
    query: '',
    pages: 10,
    category: '',
  };

  if (args.l) {
    option.lang = args.l;
  }

  if (args.q) {
    option.query = args.q;
  }

  if (args.s) {
    option.pages = args.s;
  }

  if (args.c) {
    option.category = args.c;
  }

  newsApi(option);
};

app();
