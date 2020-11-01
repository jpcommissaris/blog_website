import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';

const handler = nextConnect();

handler.use(connectdb);

handler.post(async (req, res) => {
    const {_id, categories} = req.body.blog
    let doc = await req.db.collection('blogs')
    .find({_id: {$ne: _id}, categories: {$in: categories}})
    .limit(3)
    console.log(doc)
    res.json(doc);
});

export default handler;
