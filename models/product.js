const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido'],
  },
  category: {
    type: String,
    enum: ['Remera', 'Pantalón', 'Zapatilla', 'mochila','buzo'], // Define las categorías permitidas
    required: [true, 'La categoría es requerida'],
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
