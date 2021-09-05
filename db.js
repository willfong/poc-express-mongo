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

export { Restaurants, Neighborhoods }; 
