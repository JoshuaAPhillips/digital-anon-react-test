// app.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { Person } from './models/person.mjs';
import { Object } from './models/object.mjs';
import { Artwork } from './models/artwork.mjs';
import { Place } from './models/place.mjs';
import { Quote } from './models/quote.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const connectionString = process.env.ATLAS_URI || '';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function createRoutes(Model) {
  const router = express.Router();

  // Create a new item
  router.post('/', async (req, res) => {
    try {
      const newItem = new Model(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Read all items
  router.get('/', async (req, res) => {
    try {
      const items = await Model.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update an item by ID
  router.put('/:id', async (req, res) => {
    // Implement update logic here
  });

  // Delete an item by ID
  router.delete('/:id', async (req, res) => {
    // Implement delete logic here
  });

  return router;
}

app.get('/', (req, res) => {
  res.send(`<h1>Hello Earth, this is your friendly local Node server running on port ${PORT}!</h1>`);
})

app.use('/api/persons', createRoutes(Person));
app.use('/api/objects', createRoutes(Object));
app.use('/api/artworks', createRoutes(Artwork));
app.use('/api/places', createRoutes(Place));
app.use('/api/quotes', createRoutes(Quote));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
