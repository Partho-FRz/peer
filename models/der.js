const mongoose = require('mongoose');

const DER_schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    der_name: {
        type: String,
        required: true
    },
    V_pcc: {
        type: Number,
        required: true
    },
    f_pcc: {
        type: Number,
        required: true
    },
    V_DER: {
        type: Number,
        required: true
    },
    P_DER: {
        type: Number,
        required: true
    },
    Q_DER: {
        type: Number,
        required: true
    },
    I_DER: {
        type: Number,
        required: true
    },
})

const DER = mongoose.model("DER",DER_schema);


module.exports.DER = DER;
module.exports.DER_schema = DER_schema;