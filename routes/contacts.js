const express = require('express');
const router = express.Router();

//Load Contact module
Contact = require('../models/Contact');

//Route All Contacts
router.get('/', (req, res) => {
  Contact.find()
    .then(contact => {
      if (!contact) {
        return res.status(404).json({ contact: 'There a no contacts' });
      }
      res.json(contact);
    })
    .catch(err => res.status(404).json({ contact: 'There a no contacts' }));
});

//Route Add Contact
// /add
router.post('/add', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });

  newContact
    .save()
    .then(contact => res.json(contact))
    .catch(err => console.log(err));
});

//Find Contact by ID
// /:id
router.get('/:id', (req, res) => {
  Contact.findById({ _id: req.params.id })
    .then(contact => {
      if (!contact) {
        res.status(404).json({ contact: 'There is no ID for this user' });
      }
      res.json(contact);
    })

    .catch(err =>
      res.status(404).json({ contact: 'There is no ID for this user' })
    );
});

//Delete Contact
// /:id
router.delete('/:id', (req, res) => {
  Contact.findOneAndDelete({ _id: req.params.id }).then(() =>
    res.json({ success: true })
  );
});

//Update Contact
// /:id
router.post('/update/:id', (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (!contact) {
      res.status(404).send('Data is nor found');
    } else {
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.phone = req.body.phone;
      contact
        .save()
        .then(contact => res.json(contact))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
