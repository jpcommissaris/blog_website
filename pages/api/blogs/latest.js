import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import cors from '../../../actions/cors';
import {ObjectId} from 'mongodb'

const handler = nextConnect();

handler.use(connectdb);
handler.use(cors)

handler.post(async (req, res) => {
    const {_id} = req.body.blog
    let doc = await req.db.collection('blogs')
    .find({_id: {$ne: ObjectId(_id)}})
    .sort({createdAt:-1})
    .limit(1)
    .project({photo: 0})
    .toArray()
    res.json(doc);
});

export default handler