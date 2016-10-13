var displayCards = function(cards) {
    for(var i = 0; i < cards.length; i++) {
      var num = i+1;
      var leftStep = 60;
      var div = document.createElement('div');

      $(div).addClass('card')
            .attr('id', 'item-'+ i)
            .html('<div class="numb-border"><h2>'+ num +'</h2></div>');

      if((i == cards.length-1) && (cards[i].type == "wide")){
        $(div).addClass('cardWide');
      }else{
        $(div).removeClass('cardWide');
      }

      $('#container').append(div);
    };

    if(i == cards.length && i > 1){
      $(div).addClass('leftStep');
    }
};

var deletCard = function(cards){
    cards.pop();
    $('#container').html('');
    displayCards(cards);
}

var addNarrow = function(cards){
    var narrow_card = {type: 'narrow'}
    cards.push(narrow_card);
    $('#container').html('');
    displayCards(cards);
}

var addWide = function(cards){
    var wide_card = {type: 'wide'}
    cards.push(wide_card);
    $('#container').html('');
    displayCards(cards);
}

$(document).ready(function(){
  displayCards(cards);
});

$(document).on('click', '.card', function(){
  if((event.altKey) && (event.ctrlKey)){
    addWide(cards);
    return;
  }if(event.altKey){
    addNarrow(cards);
    return;
  }else{
    deletCard(cards);
  }
});
