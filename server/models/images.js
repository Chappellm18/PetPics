const { client, isConnected } = require('./databaseConnection.js');

const collection = client.db(process.env.MONGO_DB).collection('SagieImages');
module.exports.collection = collection;

// get all images
module.exports.getAll = async function getAll() {
    if (isConnected) {
        return collection.find({}).toArray();
    } else {
        console.log('not connected');
    }
}

// get by id
module.exports.getById = async function getById() {
    if (isConnected) {
        return collection.aggregate([{ $sample: { size: 1 } }]).toArray();
    } else {
        console.log('not connected');
    }
}

// post a new image to the database
module.exports.create = async function create(image) {
    return collection.insertOne(image);
}
