import NextCors from 'nextjs-cors'
import nextConnect from 'next-connect';


async function cors(req, res, next) {
  // options here: https://github.com/expressjs/cors#configuration-options
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'POST', 'HEAD'],
    origin: ['http://localhost:3000/', 'http://juliancommissaris.com/'],
    optionsSuccessStatus: 200,
  });
  return next()
}

const corsConnect = nextConnect();

corsConnect.use(cors);

export default corsConnect;