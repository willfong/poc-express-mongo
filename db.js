import { MongoClient } from "mongodb";

const dbHost = process.env.MONGODB_HOST || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_NAME || "test";

const client = new MongoClient(dbHost, { useNewUrlParser: true, useUnifiedTopology: true });

let db = false;
let Restaurants;
let Neighborhoods;

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
});

export const getRestaurants = async () => {
    const results = await Restaurants.find({}, {projection: { _id: 1, restaurant_id: 1, name: 1 },}).toArray();
    return results;
}

export const getNeighborhoods = async () => {
    const results = await Neighborhoods.find({}, {projection: { _id: 1, name: 1 },}).toArray();
    return results;
}
