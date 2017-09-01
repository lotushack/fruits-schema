const mongoose = require('mongoose');
const Fruit = ('./models/Fruit');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/Fruit', {useMongoClient: true})
console.log('Fruit', Fruit);
function getAllFruits () {
  return Fruit.find({})
}

function getFruit (fruitId) {
  return Fruit.find({ id: fruitId}).catch(function(err) {
    console.log(fruitId);
  })
}

function getFruitByName (name) {
  return Fruit.find({ name }).catch(function(err){
    console.log(name);
  })
}

function addFruit (newFruit) {
  const fruity = new fruit(newFruit)
  Fruit.save(function (err){
    console.log(newFruit);
  })
  return Promise.resolve('donezo')
}
function deleteFruit (fruitId) {
  return Fruit.deleteOne({ id: fruitId })
}

module.exports = {
  getAllFruits,
  getFruit,
  getFruitByName,
  addFruit,
  deleteFruit
}
