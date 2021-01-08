class Form{

    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(450,100);
        var input = createInput("Name");
        input.position(475,200);
        var button = createButton('Play');
        button.position(525,300);

        button.mousePressed(function(){
          input.hide();
          button.hide();
          
          var name = input.value();

          playerCount +=1
          player.update(name)
          player.updateCount(playerCount)
          var greeting = createElement('h3');
          greeting.html("Hello "+ name)
          greeting.position(500,300);

        })
    }
}