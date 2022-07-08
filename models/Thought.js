const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: true
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

