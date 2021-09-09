let Alice = {
health : 75,
balance : 23,
tea_cups : 0,
magic_hat:0,
sword: 0,
mushrooms: 0,
};


let WhiteRabbit ={
    health : 15,
    balance : 5,
    tea_cups : 0,
    magic_hat : 1,
    
};


let Mad_SHlyapnik ={
    health : 35,
    balance : 12,
    tea_cups : 2, 
    magic_hat: 0,
    sword:0,
}


let Cheshyr_Cat ={
    health : 25,
    balance : 2,
    tea_cups : 0, 
}

function show(){
    alert(
        'Your balance is : ' +
        Alice.balance +
        '   Your health is : '+
        Alice.health +
        '    You made so many cups of tea :' +
        Alice.tea_cups+
        "    you have magic hat :"+
        Alice.magic_hat +
        "    You have mushrooms : "+
        Alice.mushrooms +
        "   Your sword : " +
        Alice.sword);
    
}
 let take;
function store () {
  take = prompt( "Choose what you will do : 1. Make a tea if u do it for someone you can change it fo something  2. Take a mushroom,to increase heals  3. ");

switch (take) {
    case '1':
        if (Alice.balance<12){
            alert ('You do not have enought money!');
        }
        else {
            Alice.balance-=12;
            Alice.tea_cups= Alice.tea_cups+2;
          alert("Congtatulations! You just make some tea! Maybe try to treat it to someone?")
        }
        break;

        case '2':
        if (Alice.balance<20){
            alert ('You do not have enought money!');
        }
        else {
            Alice.balance-=20;
            Alice.health= Alice.health*2;
            alert(" oh! You just find a mushroom, eat it and your health be "+ Alice.health);
        }
        break;
        case '3':

        if (Alice.balance<20){
            alert ('You do not have enought money!');
        }
        else {
            Alice.balance-=20;
            Alice.tea_cups= Alice.tea_cups*2;
          alert(" oh! You just find a mushrooms, eat it and your can slip into the castle ");
        }
        break;
    } }
        function meet(WhiteRabbit) {
            dialogue= prompt("Hello , dear Alice! Didnt u see my clock? If u have it maybe we can change,and i will give u a magic hat? Press 1 to change or 2 for exit");
            switch (dialogue) {
                case '1':
                    if (Alice.clock<WhiteRabbit.clock){
                        alert ('Sorry, but u do not have my clock... ');
                    }
                    else {
                        Alice.clock-=1;
                        Alice.clock= WhiteRabbit.clock+1;
                        Alice.magic_hat+=1;
                      alert("Yay! Thnx, take this magic hat");
                    }
                    break;
                    case '2':
            
                    if (Alice.tea_cups<WhiteRabbit.tea_cups){
                        alert ('You have no tea!');
                    }
                    else {
                        Alice.tea_cups-=1;
                        Alice.balance= WhiteRabbit.balance-5;
                        alert("Dear, Thanks for so tasty tea! i will give u a little bit of my health!");
                    }
                    break;
                    
                }}
         function mat(Mad_SHlyapnik) {
          exchange= prompt ("You meet Mad Shlyapnik, you can change His magic hat for something what u need for battle with Red Queen! Press 1 to change hat, 2 to make some tea ");
          switch (exchange) {
            case '1':
                if (Alice.magic_hat>Mad_SHlyapnik.magic_hat){
                    Alice.magic_hat-=1;
                    Alice.magic_hat= Mad_SHlyapnik.magic_hat+1;
                    Alice.sword+=1;
                    Mad_SHlyapnik.sword-=1;
                    alert ('Im so confused..where is my hat?... Oh dear! You have it!   ');
                }
                else {

                  alert("I lost my hat... ");
                }
                break;

                case '2':

                if (Alice.tea_cups<1){
                    alert ('You do not have enought money!');
                }
                else {
                    Alice.tea_cups-=1;
                    Alice.balance= Mad_SHlyapnik.balance-5;
                    alert("Dear, Thanks for so tasty tea! i will give u a little bit of my health!");
                   
                } break;
               }}
        

        function palace(){
            enter= prompt ('Congratulations! Alice, you have reached the castle! For enter press 1 or 2 for take a fight with guard')    
            switch (enter) {
                case '1':
                    if (Alice.mushrooms>=5){
                        Alice.mushrooms-=5;
                        alert ('you did it! U are in the castle, go find the Red Queen!  ');
                    }
                    else {
                       Alice.health= 0;
                       Alice.balance= 0;
                      alert("Guardian just saw you! U fail!");
                    }
                    break;
    
                    case '2':
    
                    if (Alice.sword=0){
                        Alice.health= 0;
                        Alice.balance= 0;
                        alert ('U loose!');
                    }
                    else {
                        alert("You defeated the guards!");
                    }
                    break;
                }
        }
        function battle() {
           let x = Math.floor(Math.random()*10);
       
             if (x>5){
                 alert('You defeat the Red Queen, and u can come back home!');} 
        
            else {
                Alice.health=0;
                Alice.balance=0;
                Alice.tea_cups=0;
                Alice.magic_hat=0;
                Alice.sword=0;
                Alice.mushrooms=0; 
            alert("You loose, your friends are in danger, please try again!")
         console.log(x)
       }}