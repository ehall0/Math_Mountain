// console.log($)
// console.log('it works')



$(()=> {

    
    
    
    /////USER/////
    class User{
        constructor(name, answered, checkpoint){
            this.name = name;
            this.answered = 0;
            this.checkpoint = 0;
        };
        updateScores(){
            this.answered += 1;
            if( this.answered === 3 || this.answered === 6 || this.answered ===9){
                this.checkpoint += 1;
            }else{ 
            };
        };
    };
    
    
    ////PLAYERS/////

    const user = new User('Player 1');
    const opponent = new User('Player 2');

    // console.log(user);
    // console.log(opponent);

    ////WIN FUNCTION/////
    const winner = () => {
        if(opponent.checkpoint < 3 && user.checkpoint === 3){
        alert(`${user.name} has reached the top of the mountain first! ${user.name} wins! `);
        }else{
        alert(`${user.name} was too slow! ${opponent.name} wins.`)
        };
    };

    /////RESTART FUNCTION////
    const restart = () => {
        if(user.checkpoint > 0 && user.checkpoint < 3){
        alert(`You have reached checkpoint: ${user.checkpoint}, you can restart by refreshing the page, or click 'OK' to continue playing.`)
        };
    };

    /////display score function/////
    const score = (value) => {
        $('#number').empty();
        const $score = $(`<div id = "current-checkpoint">${value}</div>`);
        $('#number').append($score);
    }
   
    //////CHECKPOINT ANIMATION CSS/////////////
    //answer 1 location
    const loc1 = () => {
        $('#player-one').css({
            "-webkit-transform":"translate(350%,1300%)",
            "-ms-transform":"translate(350%,1300%)",
            "transform":"translate(350%,1300%)"
          });
    }
    //answer 2 location
    const loc2 = () => {
        $('#player-one').css({
            "-webkit-transform":"translate(400%,1250%)",
            "-ms-transform":"translate(400%,1250%)",
            "transform":"translate(400%,1250%)"
          });
    }
    //answer 3 and checkpoint 1 location
    const loc3 = () => {
        $('#player-one').css({
            "-webkit-transform":"translate(450%,1200%)",
            "-ms-transform":"translate(450%,1200%)",
            "transform":"translate(450%,1200%)"
          });
    }
    //answer 4 location
     const loc4 = () =>{
        $('#player-one').css({
            "-webkit-transform":"translate(500%,1150%)",
            "-ms-transform":"translate(500%,1150%)",
            "transform":"translate(500%,1150%)"
          });
     } 
     
     //answer 5 location
     const loc5 = () => {
        $('#player-one').css({
            "-webkit-transform":"translate(500%,1120%)",
            "-ms-transform":"translate(500%,1120%)",
            "transform":"translate(500%,1120%)"
          });
     }
     //answer 6 and checkpoint 2 location
     const loc6 = () => {
        $('#player-one').css({
            "-webkit-transform":"translate(500%,1100%)",
            "-ms-transform":"translate(500%,1100%)",
            "transform":"translate(500%,1100%)"
          });
     }
     //answer 7 location
     const loc7 =() => {
        $('#player-one').css({
            "-webkit-transform":"translate(490%,1070%)",
            "-ms-transform":"translate(490%,1070%)",
            "transform":"translate(490%,1070%)"
          });
     }
     //answer 8 location
     const loc8 = () => {
        $('#player-one').css({
            "-webkit-transform":"translate(485%,1025%)",
            "-ms-transform":"translate(485%,1025%)",
            "transform":"translate(485%,1025%)"
          });
     }
     //answer 9 and checkpoint 3/finish location
     const loc9 = ()=> {
        $('#player-one').css({
            "-webkit-transform":"translate(500%,900%)",
            "-ms-transform":"translate(500%,900%)",
            "transform":"translate(500%,900%)"
          });
     }
    ////////////////////////////
    //questions/////
    const question1 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 9 * 9');
        if(userInput1 === '81'){
            user.updateScores;
            loc1();
            score(0);
        }else{
            question1();
        }
    }
    const question2 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 20 - 7');
        if(userInput1 === '13'){
            user.updateScores;
            loc2();
            score(0);
        }else{
            question2();
        }
    }
    const question3 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 35 / 7');
        if(userInput1 === '5'){
            user.updateScores;
            loc3();
            score(1);
        }else{
            question3();
        }
    }
    const question4 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 99 / 3');
        if(userInput1 === '33'){
            user.updateScores;
            loc4();
            score(1);
        }else{
            question4();
        }
    }
    const question5 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 20 * 6');
        if(userInput1 === '120'){
            user.updateScores;
            loc5();
            score(1);
        }else{
            question5();
        }
    }
    const question6 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 30 + 28');
        if(userInput1 === '58'){
            user.updateScores;
            loc6();
            score(2);
        }else{
            question6();
        }
    }
    const question7 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 40 - 25');
        if(userInput1 === '15'){
            user.updateScores;
            loc7();
            score(2);
        }else{
            question7();
        }
    }
    const question8 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 90 * 2');
        if(userInput1 === '180'){
            user.updateScores;
            loc8();
            score(2);
        }else{
            question8();
        }
    }
    const question9 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 72 / 8');
        if(userInput1 === '9'){
            user.updateScores;
            loc9();
            score(3);
            alert(`${user.name} reached the top of the mountain first!`);
        }else{
            question9();
        }
    }
    /////////////////////////////
    //////START GAME FUNCTION/////
    const startGame = () => {
         
        question1();
        
        question2();
        
        question3();
        
        question4();
        
        question5();
        
        question6();
        
        question7();
        
        question8();
        
        question9();
        
    }
    /////INTRO FUNCTION////////
    const intro = () => {
        $('.start').on('click', startGame);
    }
    intro();


})