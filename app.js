// app.js — add near the top, after your existing requires
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

// --- MongoDB Connection ---
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// --- CORS Middleware (add alongside your existing app.use() calls) ---
app.use(cors());