const client = require('./databaseConnection.js');

const collection = client.db(process.env.MONGO_DB).collection('SagieImages');
module.exports.collection = collection;

const addOwnerPipeline = [
    {
        $lookup: {
            from: 'SagieImages',
            localField: 'owner',
            foreignField: '_id',
            as: 'owner'
        }
    },
    { $unwind: '$owner' },
    { $project: { "owner.password": 0 } }
];

// get all images
module.exports.getAll = async function getAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

// get by id
module.exports.getById = async function getById(id) {
    return collection.aggregate(addOwnerPipeline).toArray().then((images) => {
        return images.find(image => image._id == id);
    });
}

// post a new image to the database
module.exports.create = async function create(image) {
    return collection.insertOne(image);
}
