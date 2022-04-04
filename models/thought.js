const { Schema, model } = require('mongoose');
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
    username: {
      type:String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

const ThoughtSchema = new Schema (
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
    username: {
      type:String,
      required: true,
      ref: 'User'
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});


const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;