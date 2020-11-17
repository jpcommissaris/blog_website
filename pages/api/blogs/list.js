import nextConnect from 'next-connect';
import connectdb from '../../../actions/database';
import cors from '../../../actions/cors';

const handler = nextConnect();

handler.use(connectdb);
handler.use(cors)

handler.post(async (req, res) => {

    
    let limit = req.body.limit ? parseInt(req.body.limit) : 3
    let skip = req.body.skip ? parseInt(req.body.skip) : 0

    let blogs = await req.db.collection('blogs').find({})
    .sort({createdAt: -1})
    .skip(skip)
    .limit(limit)
    .project({photo: 0})
    .toArray()
    let categories = await req.db.collection('categories').find({})
    .toArray()
    let tags = await req.db.collection('tags').find({})
    .toArray()
    res.json({blogs, categories, tags, size: blogs.length})

}); 


export default handler;