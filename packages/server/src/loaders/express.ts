import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import express, { Application } from 'express';

import routes from 'src/api';

const expressLoader = ({
  expressApp,
}: {
  expressApp: Application;
}): Application => {
  expressApp.get('/status', (req, res) => {
    res.status(200).end();
  });
  expressApp.head('/status', (req, res) => {
    res.status(200).end();
  });
  expressApp.enable('trust proxy');

  const whitelist = ['http://localhost:3000', undefined];
  const corsOptions: Partial<CorsOptions> = {
    credentials: true,
    origin(origin, callback) {
      if (whitelist.indexOf(origin as string) !== -1) {
        callback(null, true);
      } else {
        console.log(origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  expressApp.use(cors(corsOptions));
  expressApp.use(express.json());
  expressApp.use(bodyParser.urlencoded({ extended: false }));
  expressApp.use(cookieParser());

  expressApp.use('/api', routes());

  return expressApp;
};

export default expressLoader;
