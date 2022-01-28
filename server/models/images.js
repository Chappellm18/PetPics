const client = require('./databaseConnection.js');

const collection = client.db(process.env.DB_NAME).collection('images');
module.exports.collection = collection;

const addOwnerPipeline = [
    {
        $lookup: {
            from: 'users',
            localField: 'owner',
            foreignField: '_id',
            as: 'owner'
        }
    },
    { $unwind: '$owner' }
];

// get all images
module.exports.getAll = () => {
    return collection.aggregate(addOwnerPipeline).toArray();
}
