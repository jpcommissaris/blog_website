import Cors from 'cors'
import nextConnect from 'next-connect';


async function cors(req, res, next) {
  // options here: https://github.com/expressjs/cors#configuration-options
  res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');

  return next()
}

const corsConnect = nextConnect();

corsConnect.use(cors);

export default corsConnect;