'use strict';

// const nextCodeQuery = (name) => {
//   return { query: { _id: name }, update: { $inc: { seq: 1 } },  new: true };
// }

module.exports.SequenceDAO = function(db){

  var sequences = db.collection('sequences');

  this.getUrlCodeNextId = function(callback){
    // var query = nextCodeQuery('urlCode');
    // console.log(query);
    sequences.findAndModify(
      {_id: 'urlCode'},
      [],
      { $inc: { seq: 1 } },
      {new: true},
      function(err, urlCodeSeq){
        console.log('sequenceDAO code ',urlCodeSeq);
        console.log('sequenceDAO err ',err);
        if (err) return callback(err, null);
        console.log('sequenceDAO after code ',urlCodeSeq);
        callback(null, urlCodeSeq.value.seq);
    });
  };
}
