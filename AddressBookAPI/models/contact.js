'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const adresseSchema = new Schema({
  ville: String,
  cp: String,
});

const contactSchema = new Schema({
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
  },
  nom: {
    type: String,
    required: true,
  },
  actif: {
    type: Boolean,
    default: true,
  },
  adresse: adresseSchema,
});

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
