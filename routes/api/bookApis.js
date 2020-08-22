const express = require("express");
const router = express.Router();

// load book model
const Book = require("../../models/Book");

// @route GET api/bookApis/test
// @description tests books router
// @access public
router.get("/test", (req, res) => res.send("Book route testing!!!"));

// @route GET api/books
// @description Get all books
// @access Public
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) =>
      res.status(404).json({ noBooksFound: "No Books were found!" })
    );
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res.status(404).json({ noBooksFound: "This book is not found!" })
    );
});

// @route GET api/books
// @description add/save book
// @access Public
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book is added successfully!" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this book" }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "The book is updated successfully!" }))
    .catch((err) =>
      res.status(404).json({ error: "Not able to update the DB !!" })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((book) => res.json({ msg: "The book is deleted !!" }))
    .catch((err) =>
      res.status(404).json({ error: "There is No such book !!" })
    );
});

module.exports = router;
