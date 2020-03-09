const mongoose = require('mongoose');
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${username}:${password}@nsv47-kyfht.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

