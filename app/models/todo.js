var mongoose = require('mongoose');

module.exports = mongoose.model('Expense', {
    data: {
        type: Object,
        default: {}
    }
});