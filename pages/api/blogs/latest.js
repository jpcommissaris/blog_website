import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import {ObjectId} from 'mongodb'

const handler = nextConnect();

handler.use(connectdb);

handler.get(async (req, res) => {
    let doc = await req.db.collection('blogs')
    .find({})
    .sort({createdAt:-1})
    .limit(1)
    .project({photo: 0})
    .toArray()
    res.json(doc);
});

export default handler