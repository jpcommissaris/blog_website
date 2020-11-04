import nextConnect from 'next-connect';
import dbconnect from '../../../actions/database';

const handler = nextConnect();

handler.use(dbconnect);

handler.post(async (req, res) => {

    
    let limit = req.body.limit ? parseInt(req.body.limit) : 3
    let skip = req.body.skip ? parseInt(req.body.skip) : 0

    let projects = await req.db.collection('projects').find({})
    .sort({createdAt: -1})
    .skip(skip)
    .limit(limit)
    .toArray()
    res.json({projects, size: projects.length})

}); 


export default handler;