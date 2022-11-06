const express = require('express')

const authorRouter = express.Router()

const authorModel = require('../models/authors')

//to return all authors
authorRouter.get('/', (req, res)=>{ 
    authorModel.find({}, (err, author) =>{
        if (err) {
            res.send(err);
        } else{
            res.send(author);
        }        
    })
 })

//to get an author after filtering by title
authorRouter.get('/:authorTitle', (req, res)=>{
    authorModel.find({title: req.params.authorTitle}, (err, article)=>{
        if (err) {
            res.send(err);
        }else{
            res.send(author);
        }
    })
})

module.exports = authorRouter