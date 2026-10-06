const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  tutionType: { type: String, required: true },
  instructorType: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", ContactFormSchema);

module.exports = Contact;
