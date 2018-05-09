$(document).ready(() => {

var randomNum = $('.num'),
  timer = 30,
  it,
  data = 0,
  index,
  change,
  letters = ['d', 'e', 's', 'i', 'g', 'n','_', 'p', 'k'];

randomNum.each(()=> {
change = Math.round(Math.random()*100);
$(this).attr('data-change', change);

});

let random =() => {
  return Math.round(Math.random()*9);
};
let select = () => {
  return Math.round(Math.random()*randomNum.length+1);
  console.log('lol');
};
let value = () => {
  $('.num:nth-child('+select()+')').html(''+random()+'');
  $('.num:nth-child('+select()+')').attr('data-number', data);
  data++;
  randomNum.each(function() {
    if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change')) ) {
      index = $('.ltr').index(this);
      $(this).html(letters[index]);
      $(this).removeClass('num');

    }
  });
}
it = setInterval(value, timer)
});
