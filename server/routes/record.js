import express from 'express';

//this will helo us connect to the database
import db from "../db/connection.js";

//This help convert the id from strin to ObjectId for the _id
import { ObjectId } from "mongodb";

const router = express.Router();

//get all records
router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//get a single record by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let result = await collection.findOne({ _id: new ObjectId(req.params.id) });

    if (!result) {
       res.send({ message: "Record not found" }).status(404);
    } else {
        res.send(result).status(200);
    }
});

//create a new record
router.post("/", async (req, res) => {
    try{
        let newDocument = {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error adding record" });
    }
});

//update the record by id
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level
            },
        };

        let collection = await db.collection("records");
        let result = await collection.updateOne(query,updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        let collection = await db.collection("records");
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting record");
    }
});

export default router;