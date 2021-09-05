# Express + MongoDB

Proof of concept for Express and Cloud MongoDB.

## Design Concepts

Using the MongoDB native drive instead of Mongoose. MongoDB doesn't have a very complicated API and it's more portable to learn the database's actual commands versus an abstraction layer.

## Environment File

Create a `.env`:

```
MONGODB_HOST="mongodb+srv://<username>:<password>@<connection-string>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
MONGODB_NAME="sample_restaurants"
```

## Reference
- https://docs.mongodb.com/drivers/node/current/
