const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema(
    {
        ReactionId: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.friends.length
})


function formatDate(date) {
    return (new Date(date)).toString();
}

const Thought = model('Thought', thoughtSchema);

module.exports = Thought