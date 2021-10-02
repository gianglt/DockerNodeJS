var express = require('express');
const cors = require('cors');

import db from './dbshare';

//const mysql = require('mysql2');

// const db = mysql.createPool({
//     host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
//     user: 'MYSQL_USER', // database user MYSQL_USER: MYSQL_USER
//     password: 'MYSQL_PASSWORD', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
//     database: 'books' // database name MYSQL_HOST_IP: mysql_db
//   })

var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//get all of the books in the database
router.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM books_reviews";
    db.query(SelectQuery, (err, result) => {
      res.send(result)
    })
  })

// add a book to the database
router.post("/insert", (req, res) => {
    const bookName = req.body.setBookName;
    const bookReview = req.body.setReview;
    const InsertQuery = "INSERT INTO books_reviews (book_name, book_review) VALUES (?, ?)";
    db.query(InsertQuery, [bookName, bookReview], (err, result) => {
      console.log(result)
    })
  })

// delete a book from the database
router.delete("/delete/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    const DeleteQuery = "DELETE FROM books_reviews WHERE id = ?";
    db.query(DeleteQuery, bookId, (err, result) => {
      if (err) console.log(err);
    })
  })

// update a book review
router.put("/update/:bookId", (req, res) => {
    const bookReview = req.body.reviewUpdate;
    const bookId = req.params.bookId;
    const UpdateQuery = "UPDATE books_reviews SET book_review = ? WHERE id = ?";
    db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
      if (err) console.log(err)
    })
  })  

  module.exports = router;