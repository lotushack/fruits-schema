const mongoose = require('mongoose');
// const schema = mongoose.Schema;

const fruitSchema = new mongoose.Schema({
  name: { type: string, require: true },
  avatar: {type: string},
  grownIn:[{type: string}]
})

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
