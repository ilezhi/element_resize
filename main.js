var $a = document.querySelector('.a')
var $b = document.querySelector('.b')
var $scroll = document.querySelector('.scroll')

document.getElementById('add')
  .addEventListener('click', function() {
    var h = $a.clientHeight + 10
    $a.style.height = h + 'px'
  }, false)

document.getElementById('minus')
  .addEventListener('click', function() {
    var h = $a.clientHeight - 10
    $a.style.height = h + 'px'
  }, false)

$scroll.scrollTop = 1000

$scroll.addEventListener('scroll', function() {
  console.log('change')
}, false)