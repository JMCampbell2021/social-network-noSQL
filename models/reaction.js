const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema (
  {
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    createdAt:{
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
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
  {
    toJSON: {
      getters: true,
    }
  }
);

const Reaction = module('Reaction', ReactionSchema)

module.exports = Reaction;