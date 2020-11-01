import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';

const handler = nextConnect();

handler.use(connectdb);

handler.get(async (req, res) => {
    const slug = req.query.slug.toLowerCase()
    let doc = await req.db.collection('blogs').findOne({slug})
    console.log(doc)
    res.json(doc);
});

export default handler;