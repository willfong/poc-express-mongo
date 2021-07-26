import { MongoClient } from "mongodb";

const dbHost = process.env.MONGODB_HOST || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_NAME || "test";

const client = new MongoClient(dbHost, { useNewUrlParser: true, useUnifiedTopology: true });

let db = false;
let Restaurants;
let Neighborhoods;
let Users;

client.connect(async err => {
    if (err) {
        console.error("Error connecting to MongDB:");
        console.error(err);
        process.exit(1);
    }
    console.log("Connected to MongoDB");
    db = client.db(dbName);
    Restaurants = db.collection("restaurants");
    Neighborhoods = db.collection("neighborhoods");
    Users = db.collection("users");
});

export const getRestaurants = async () => {
    const projection = { _id: 1, restaurant_id: 1, name: 1 };
    const results = await Restaurants.find({}, { projection }).toArray();
    return results;
}

export const getNeighborhoods = async () => {
    const projection = { _id: 1, name: 1 };
    const results = await Neighborhoods.find({}, { projection }).toArray();
    return results;
}

export const usersNew = async (name) => {
    const doc = {name};
    const result = await Users.insertOne(doc);
    return result;
}

export const usersGet = async () => {
    const result = await Users.find({}).toArray();
    return result;
}
