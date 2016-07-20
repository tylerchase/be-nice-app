var niceArray = ['tsareh', 'You are killing it', 'winning', 'you suck', 'everything is awesome', 'just keep swimming', 'damn Daniel'];

function generate(){
  return Math.floor(Math.random() * niceArray.length);
}

$('#result h1')
console.log(generate())

$('button').on('click', function(){
$('#result h1').html(niceArray[generate()])
})
