//use moment.js
const age = moment().diff('2017-01-01', 'years')
const isLegal = (age >= 18)
console.log('DOB+++++++++', age, isLegal)
