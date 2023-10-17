const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true, 'El nombre de usuario es requerido'],
  },
  email: {
  type: String,
  required: [true, 'El email es requerido'],
  },

  password:{
    type:String,
    required:[true, 'La contraseña es requerida'],
  },
  role: {
    type: String,
    enum: ['Cliente', 'Administrador'], 
    required: [true, 'La categoría de usuario es requerida'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;