const router = require("express").Router();
const Replies = require("../models/repliesModels");

// Global variable for id
let id = 1;

// Reply builder for replies
let replyBuilder = (replyContent, replyID) => {
    let reply = {
        _id : replyID,
        content : replyContent
    }
    return reply;
}

// Post reply function
router.post("/replies/createReply", (req, res, next) => {
    let newReply = replyBuilder(req.body.content, parseInt(id));
    id++;
    // let newReply = req.body;
    Replies.create(newReply)
      .then((result) => res.status(201).send(result))
      .catch((err) => next(err));
});

// View all replies
router.get("/replies/readReplies", (req, res, next) => {
    Replies.find()
      .then((results) => res.send(results))
      .catch((err) => next(err));
  });

// Delete a reply
router.delete("/replies/delete/:id", (req, res, next) => {
    Replies.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send())
    .catch((err) => next(err));
  });

module.exports = router;