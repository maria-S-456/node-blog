

const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./blogRouter');
const app = express();

//const shoppingListRouter = require('./shoppingListRouter');


// log the http layer
app.use(morgan('common'));

app.use(express.static('public'));




// when requests come into `/shopping-list` or
// `/recipes`, we'll route them to the express
// router instances we've imported. Remember,
// these router instances act as modular, mini-express apps.
app.use('/blog-posts', blogRouter);
//app.use('/recipes', recipesRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

/*
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {BlogPosts} = require('./models');

const jsonParser = bodyParser.json();
const app = express();


BlogPosts.create("First Post","Maria Mohl",'We are swept away back to a time when a found coin, stick or rock could be a wondrous experience. To a time before huge grocery stores and department stores filled with plastic distractions. To a time when we were still close to the ground in age, size, and interest, pondering over the found wonders around us, evaluating the “magic” and usefulness in each one.');
BlogPosts.create("Second Post","Maria Mohl",'We are led through his story back to the present, as this now grandfather looks back over his life and realizes that he is the master of all he collects. Don’t we all wish we were the master of the junk we collect in our lives. Yet, we learn and find value through his self-discovery process.');

app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts.get());
});

app.post('/blog-posts', jsonParser, (req, res) => {
  const requiredFields = ['post'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  const item = BlogPosts.create(req.body.post);
  res.status(201).json(item);
});

app.delete('/blog-posts/:id', (req, res) => {
  Blog.delete(req.params.id); 
  console.log(`Deleted blog post \`${req.put.id}\``);
  res.status(204).end();
});


app.put('/blog-posts/:id', jsonParser, (req, res) => {
  const requiredFields = ['post', 'id'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = (
      `Request path id (${req.params.id}) and request body id `
      `(${req.body.id}) must match`);
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating post \`${req.params.id}\``);
  const updatedItem = Blog.update({
    id: req.params.id,
    post: req.body.post,
  });

  res.status(200).json(updatedItem);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
*/
