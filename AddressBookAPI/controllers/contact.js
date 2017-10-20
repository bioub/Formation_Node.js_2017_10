'use strict';

const Contact = require('../models/contact');

module.exports.list = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  }
  catch (err) {
    next(err);
  }
};

module.exports.add = async (req, res, next) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.statusCode = 201;
    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

module.exports.show =  async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndRemove(req.params.id);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
};
