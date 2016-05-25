// url-shortener mongo scripts
db = db.getSiblingDB("url-shortener");

var urlSequence = db.sequences.findOne({_id:"urlCode"});
if(!urlSequence) {
  print('Adding urlCode sequence...');
  db.sequences.insert({'_id': 'urlCode', 'seq': 0});
  print('Sequence added: ', printjson(db.sequences.findOne({_id:"urlCode"})));
} else {
  print('urlCode sequence already exists: '+ urlSequence);
}

db.shorten.urls.createIndex( { code: 1 }, { unique: true } )
// db.getSiblingDB("url-shortener").system.js.save(
//    {
//      _id: "getNextSequence",
//      value : function(name) { var ret = db.counters.findAndModify({query: { _id: name }, update: { $inc: { seq: 1 } }, new: true }); return ret.seq; }
//    }
// );
