const express = require('express')

const articleRouter = express.Router()
const articleModel = require('../models/articles')

//to fetch all articles 
articleRouter.get('/', (req, res)=>{ 
    articleModel.find({}, (err, article) =>{
        if (err) {
            res.send(err);
        } else{
            res.send(article);
        }        
    })
 })

//to get an article after filtering by title
articleRouter.get('/:articleTitle', (req, res)=>{
    articleModel.find({title: req.params.articleTitle}, (err, article)=>{
        if (err) {
            res.status(404).send(err)
            res.send(err);
        }else{
            res.status(200)
            res.send(article);
        }
    })
})

 //to create new articles
articleRouter.post('/', (req, res)=>{   
    const article = new article({
        title: title,
         description: description,
         tags: tags,
         author: author,
         timestamp: timestamp,
         body: body,
         reading_time: reading_time,
         read_count: read_count
     })
    // const title = req.body.title
    // const description = req.body.description
    // const tags = req.body.tags
    // const author = req.body.author
    // const timestamp = new Date()
    // const body = req.body.body
    // const reading_time = req.body.reading_time
    // const read_count = req.body.read_count
    
    
    article.save(err=>{
        if(err) {res.send(err); }
        else {res.send("Article added"); }
    })
})

//to remove articles
articleRouter.delete('/', (req, res) => {
    const title = req.body.title
    article.deleteOne({title: title}, (err, blog)=>{
        if (err) {
            res.send(err);
        } else{
            res.send("Article deleted");
        }
    })
})

module.exports = articleRouter