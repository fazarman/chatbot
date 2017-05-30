/**
 * Created by arman on 5/25/17.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://herokubase:password@ds151651.mlab.com:51651/heroku_1nvb7lxq');


mongoose.connection.on("open", () =>{
    console.log ("Connected to mongo server!")
});


mongoose.connection.on ("error", (err) =>{
    console.log ("Could not connect to mongo server!");
});
let wordSchema = new mongoose.Schema ({
    word:String,
    translation:String
}, {
    versionKey:false,
    strict:false
});

let words = mongoose.model("words",wordSchema);

const mongo = {
    add: (word, trans) => {
        console.log(word);
        console.log(trans);
        words.create({word: word, translation: trans}, (err, doc) => {
            if (err) {
                throw err;
            } else {
                //console.log(doc);
            }
        });
    },
    get:(word, next)=>{
        words.findOne({'word':word},'translation',{lean:true},(err, doc)=>{
            if (err) {
                throw err;
            } else {
               next(null,doc);
            }
        })
    },
    getAll: (next)=>{
        words.find({},null,{lean:true},(err,doc)=>{
            if (err){
                throw err;
            }else{
                let a = doc.map((one)=>{
                    return one.word+" "+one.translation+"\n"git;
                })
                next(null,a);
            }
        });

    }
}



module.exports = mongo;