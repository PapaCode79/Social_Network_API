const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema(
    {
        reactionId: {
            type: String,
            required: true,
            
        },

        reactionBody: {
            type: String,
            required: true,
            maxcharacter: 280

        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },

        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    },

);


module.exports = Thought