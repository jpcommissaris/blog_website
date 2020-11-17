import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import cors from '../../../actions/cors';

const handler = nextConnect();

handler.use(connectdb);
handler.use(cors)

handler.get(async (req, res) => {
    const slug = req.query.slug.toLowerCase()
    let doc = await req.db.collection('blogs').findOne({slug}, { photo: 0 })
    res.json(doc);
});

export default handler;