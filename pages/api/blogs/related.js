import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import {ObjectId} from 'mongodb'
import cors from '../../../actions/cors';

const handler = nextConnect();

handler.use(connectdb);
handler.use(cors)

handler.post(async (req, res) => {
    const {_id, tags} = req.body.blog
    let tagsobjID = []
    tags.forEach((tag) =>{
        tagsobjID.push(ObjectId(tag))
    })
    let doc = await req.db.collection('blogs')
    .find({$query: {_id: {$ne: ObjectId(_id)}}, $orderby: {$in: tagsobjID}})
    .limit(3)
    .project({photo: 0})
    .toArray()
    res.json(doc);
});

export default handler;
