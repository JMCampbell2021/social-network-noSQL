const { Schema } = require('mongoose')

const thoughtSchema = new Schema (
  {
    thoughtText:{
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt:{
      type: Date,
      default: Date.now
    },
    // need to connect user that created this thought
    username: {
      type:String,
      required: true,
    },
    // like replies
    reactions:{

    },
  },
)

const Thought = module('Thought', thoughtSchema)

module.exports = Thought;