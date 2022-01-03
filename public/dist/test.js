"use strict"; //Средство es6: блок "левых" обьявлений

var sentences = [{
  subject: "JavaScript",
  verb: "is",
  object: "great"
}, {
  subject: "Elephants",
  verb: "are",
  object: "large"
}]; //Средство es6: дуструктуризация обьекта

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  //Средство es6: строки шаблона 
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
} //Средство es6: for..or


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}