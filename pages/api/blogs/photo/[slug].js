import nextConnect from 'next-connect';
import connectdb from '../../../../actions/database';

const handler = nextConnect();

handler.use(connectdb);

handler.get(async (req, res) => {
    const slug = req.query.slug.toLowerCase()
    let doc = await req.db.collection('blogs').findOne({slug})
    res.setHeader('Content-type', doc.photo.contentType)
    res.send(doc.photo.data.buffer)
});

export default handler;