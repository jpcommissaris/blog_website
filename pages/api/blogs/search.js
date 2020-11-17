import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import cors from '../../../actions/cors';

const handler = nextConnect();

handler.use(connectdb);
handler.use(cors)

handler.post(async (req, res) => {
    const search = req.body.search
    console.log(search)
    let doc = await req.db.collection('blogs')
    .find({ $text: { $search: search } })
    .limit(5)
    .project({photo: 0})
    .toArray()
    res.json(doc);
});

export default handler