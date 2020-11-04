import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import {ObjectId} from 'mongodb'

const handler = nextConnect();

handler.use(connectdb);

handler.post(async (req, res) => {
    const {_id, tags} = req.body.blog
    console.log(_id, ObjectId(_id))
    let tagsobjID = []
    tags.forEach((tag) =>{
        tagsobjID.push(ObjectId(tag))
    })
    let doc = await req.db.collection('blogs')
    .find({_id: {$ne: ObjectId(_id)}, tags: {$in: tagsobjID}})
    .limit(3)
    .project({photo: 0})
    .toArray()
    res.json(doc);
});

export default handler;
