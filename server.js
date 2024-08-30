const express = require('express');
const cors = require('cors'); // Import cors
const { createClient } = require('@supabase/supabase-js');
const app = express();

// Dodat COrs middleware ne znam zasto ali samo pomocu ovoga radi
app.use(cors());

const supabase = createClient(
  'https://glbcekittgbetvjwyuuh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsYmNla2l0dGdiZXR2and5dXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODA2MTAsImV4cCI6MjAzMTk1NjYxMH0.PbSmfl3miGYuPUL8Dra0-s3tRs1CyWIQhrWP7VuTYPg'
);

app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  console.log('Received request to subscribe:', req.body);

  if (!email) {
    console.log('Email is missing from the request body');
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    console.log('Attempting to insert email into Supabase:', email);

    const { data, error } = await supabase.from('newsletter').insert([{ email }]);

    if (error) {
      console.error('Supabase insertion error:', error.message);
      throw error;
    }

    console.log('Successfully inserted email:', data);
    res.status(200).json({ message: 'Uspesno ste se prijavili za naš newsletter!' });
  } catch (error) {
    console.error('Error inserting email:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
