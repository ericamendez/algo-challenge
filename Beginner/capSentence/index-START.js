/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   let arr = text.split(' ')

   arr.forEach((el, i) => {
     arr[i] = el[0].toUpperCase() + el.substring(1).toLowerCase()
   })

   return arr.join(' ')

}

console.log(capSentence('hello world'))

module.exports = capSentence