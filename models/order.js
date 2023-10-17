const mongoose = require('mongoose');

// Define el esquema para los pedidos
const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo de usuarios si los pedidos están asociados a usuarios
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Referencia al modelo de productos
      },
      quantity:{ 
        type: Number,
        required: [true, 'La cantidad es requerida']
      },
    },
  ],
  total: Number,
  //ESTADO DEL PEDIDO-VER SI ES NECESARIO
//   status: {
//     type: String,
//     enum: ['Pendiente', 'Enviado', 'Entregado'],
//     default: 'Pendiente',
//   },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;