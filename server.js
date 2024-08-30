const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const sgMail = require('@sendgrid/mail'); // Import SendGrid


app.use(cors());
app.use(express.json());

const supabase = createClient(
  'https://glbcekittgbetvjwyuuh.supabase.co', // Replace with your correct Supabase URL
  ''
);


//sgMail.setApiKey('');


app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Check if the email already exists
    const { data: existingEmails, error: fetchError } = await supabase
      .from('newsletter')
      .select('email')
      .eq('email', email);

    if (fetchError) {
      console.error('Supabase fetch error:', fetchError.message);
      throw fetchError;
    }

    // Check if any email was returned
    if (existingEmails && existingEmails.length > 0) {
      console.log('Email already exists in the database:', existingEmails);
      return res.status(409).json({ message: 'Već ste se prijavili za newsletter' });
    }

    // Insert new email
    const { data, error: insertError } = await supabase.from('newsletter').insert([{ email }]);

    if (insertError) {
      console.error('Supabase insertion error:', insertError.message);
      throw insertError;
    }

    const msg = {
      to: email,
      from: 'noklicarecepti@gmail.com', 
      subject: 'Hvala Vam sto ste se priključili našem newsletter-u!',
      text: 'Bićete upućeni u naše najnovije recepte :D!',
      html: '<strong>Hvala Vam što ste se priključili našem newsletter-u!</strong>',
    };

    await sgMail.send(msg); // Send the email
    console.log("Email poslat :" , 
      msg);

    console.log('Successfully inserted email:', data);
    res.status(200).json({ message: 'Uspesno ste se prijavili' });
  } catch (error) {
    console.error('Error inserting email:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




app.post('/api/register', async (req, res) => {
  const { email, password, fullName, age } = req.body;

  if (!email || !password || !fullName || !age) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the email already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email);

    if (fetchError) {
      console.error('Supabase fetch error:', fetchError.message);
      throw fetchError;
    }

    if (existingUser && existingUser.length > 0) {
      return res.status(409).json({ message: 'Korisnik sa ovim email-om već postoji' });
    }

    // Insert new user into the "users" table
    const { data, error: insertError } = await supabase.from('users').insert([{ 
      email,
      password, // In a real-world app, never store plaintext passwords. Use hashing libraries like bcrypt.
      full_name: fullName,
      age,
    }]);

    if (insertError) {
      console.error('Supabase insertion error:', insertError.message);
      throw insertError;
    }

    res.status(201).json({ message: 'Registracija uspešna' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.post('/api/custom-login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check for the user in the "users" table - ako jeste onda je obican user
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single(); // Fetch a single user

    if (error) {
      console.error('Supabase fetch error:', error.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//resi mi preglede
app.post('/api/recipe/view', async (req, res) => {
  const { recipeId, userId } = req.body;

  try {
    // Provera jel vec video
    const { data: existingEntry, error: fetchError } = await supabase
      .from('recipe_stats')
      .select('*')
      .eq('recepti_id', recipeId)
      .eq('user_id', userId)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') throw fetchError; // Ignore 'No rows found' error

    if (existingEntry) {
      // If the entry exists, increment the view count
      const { data, error } = await supabase
        .from('recipe_stats')
        .update({ views: existingEntry.views + 1 })
        .eq('recepti_id', recipeId)
        .eq('user_id', userId);

      if (error) throw error;
      res.status(200).json({ message: 'View count updated', data });
    } else {
      // If no entry exists, insert a new entry with 1 view
      const { data, error } = await supabase
        .from('recipe_stats')
        .insert([{ recepti_id: recipeId, user_id: userId, views: 1, likes: false }]);

      if (error) throw error;
      res.status(200).json({ message: 'View count added', data });
    }
  } catch (error) {
    console.error('Error updating view count:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Resi mi lajkove ove
app.post('/api/recipe/like', async (req, res) => {
  const { userId, recipeId } = req.body;

  try {
    // Provera da li je vec lajkovao
    const { data: existingLike, error: fetchError } = await supabase
      .from('recipe_stats')
      .select('*')
      .eq('recepti_id', recipeId)
      .eq('user_id', userId)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') throw fetchError; // Ignore 'No rows found' error

    if (existingLike && existingLike.likes) {
      return res.status(409).json({ message: 'User has already liked this recipe' });
    }

    if (existingLike) {
      // Update the existing entry to set likes to true
      const { data, error } = await supabase
        .from('recipe_stats')
        .update({ likes: true })
        .eq('recepti_id', recipeId)
        .eq('user_id', userId);

      if (error) throw error;
    } else {
      // Insert a new entry with like set to true
      const { data, error } = await supabase
        .from('recipe_stats')
        .insert([{ recepti_id: recipeId, user_id: userId, views: 1, likes: true }]);

      if (error) throw error;
    }

    //Lajkuj i u tabeli users
    const { data: user, error: userFetchError } = await supabase
      .from('users')
      .select('liked')
      .eq('id', userId)
      .single();

    if (userFetchError) throw userFetchError;

    let likedRecipes = user.liked_recipes ? JSON.parse(user.liked_recipes) : [];
    likedRecipes.push(recipeId);

    const { error: userUpdateError } = await supabase
      .from('users')
      .update({ liked_recipes: JSON.stringify(likedRecipes) })
      .eq('id', userId);

    if (userUpdateError) throw userUpdateError;

    res.status(200).json({ message: 'Recipe liked and user updated' });
  } catch (error) {
    console.error('Error liking recipe:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});