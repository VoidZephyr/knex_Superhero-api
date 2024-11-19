const express = require('express');
const knex = require('knex')(require('./knexfile.js')["development"])
const port = 3000;

const db = knex(knexConfig);

const app = express();

app.get('/api/superheroes', async (req, res) => {
  try {
    // Query superheroes table and send results as JSON
    const superheroes = await db('superheroes').select('*');
    res.json(superheroes);
  } catch (error) {
    console.error('Database error:', error);  // Log detailed error for debugging
    res.status(500).json({ error: 'Database error', message: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
