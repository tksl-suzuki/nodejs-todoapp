const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "タスク名をいれてください"],
        trim: true,
        maxlength:[20, "タスク名は20文字以内で入力してください"],
    },
    completed:{
        type: Boolean,
        defalut: false,

    },

});


module.exports = mongoose.model("Task", TaskSchema);