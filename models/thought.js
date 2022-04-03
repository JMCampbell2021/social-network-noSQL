const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
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
    },
  }
);

const Thought = module('Thought', thoughtSchema)

module.exports = Thought;