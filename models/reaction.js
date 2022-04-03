const { Schema } = require('mongoose')

const ReactionSchema = new Schema (
  {
    reactionId:{
      
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

const Reaction = module('Reaction', ReactionSchema)

module.exports = Reaction;