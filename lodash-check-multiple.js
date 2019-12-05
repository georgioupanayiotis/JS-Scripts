var text = 'this is some sample text';
var values = ['sample', 'anything'];

console.log(_.some(values, (el) => _.includes(text, el)));
var values = ['no', 'nope'];
console.log(_.some(values, (el) => _.includes(text, el)));
