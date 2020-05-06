
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

    ////WIN FUNCTION/////

    const winner = () => {
        if(user.checkpoint > opponent.checkpoint){
            alert(`${user.name} Reahed the top first! You win!`);
        }else{
            alert(`${opponent.name} wins. You lose.`)
        }
    }

    /////RESTART FUNCTION////
    const restart = (value) => {
        alert(`You have reached the end of round ${value}.\nCurrent Checkpoint: ${value}\nYou can restart by refreshing the page, or click 'OK' to continue playing.`)
    
    };

    /////display score function/////
    const score = () => {
        $('#number').empty();
        const $score = $(`<div id = "current-checkpoint">ANSWERED: ${user.answered}\n CHECKPOINT: ${user.checkpoint} <br> <br> Opponent Scores: <br> Answered: ${opponent.answered} Checkpoint: ${opponent.checkpoint}</div>`);
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
            user.updateScores();
            loc1();
            // score();
        }else{
            alert('Wrong answer try again');
            //question1();
        }
    }
    const question2 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 20 - 7');
        if(userInput1 === '13'){
            user.updateScores();
            loc2();
            // score();
        }else{
            alert('Wrong answer try again');
            // question2();
        }
    }
    const question3 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 35 / 7');
        if(userInput1 === '5'){
            user.updateScores();
            loc3();
            // score();
            restart(1);
        }else{
            alert('Wrong answer try again');
            // question3();
        }
    }
    const question4 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 99 / 3');
        if(userInput1 === '33'){
            user.updateScores();
            loc4();
            // score();
        }else{
            alert('Wrong answer try again');
            // question4();
        }
    }
    const question5 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 20 * 6');
        if(userInput1 === '120'){
            user.updateScores();
            loc5();
            // score();
        }else{
            alert('Wrong answer try again');
            // question5();
        }
    }
    const question6 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 30 + 28');
        if(userInput1 === '58'){
            user.updateScores();
            loc6();
            // score();
            restart(2);
        }else{
            alert('Wrong answer try again');
            // question6();
        }
    }
    const question7 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 40 - 25');
        if(userInput1 === '15'){
            user.updateScores();
            loc7();
            // score();
        }else{
            alert('Wrong answer try again');
            // question7();
        }
    }
    const question8 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 90 * 2');
        if(userInput1 === '180'){
            user.updateScores();
            loc8();
            // score();
        }else{
            alert('Wrong answer try again');
            // question8();
        }
    }
    const question9 =() => {
        const userInput1 = prompt('Answer the following problem below: \n 72 / 8');
        if(userInput1 === '9'){
            user.updateScores();
            loc9();
            // score();
            // winner();
            
        }else{
            alert('Wrong answer try again');
            // question9();
        }
    }
    //////Opponent moves/////
    
    
    const opponentMove1 = () => {
    const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            
            $('#player-two').css({
                "-webkit-transform":"translate(350%,1300%)",
                "-ms-transform":"translate(350%,1300%)",
                "transform":"translate(350%,1300%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove2 = () => {
    const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(400%,1250%)",
                "-ms-transform":"translate(400%,1250%)",
                "transform":"translate(400%,1250%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove3 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(450%,1200%)",
                "-ms-transform":"translate(450%,1200%)",
                "transform":"translate(450%,1200%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove4 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(500%,1150%)",
                "-ms-transform":"translate(500%,1150%)",
                "transform":"translate(500%,1150%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove5 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(500%,1120%)",
                "-ms-transform":"translate(500%,1120%)",
                "transform":"translate(500%,1120%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove6 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(500%,1100%)",
                "-ms-transform":"translate(500%,1100%)",
                "transform":"translate(500%,1100%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove7 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(490%,1070%)",
                "-ms-transform":"translate(490%,1070%)",
                "transform":"translate(490%,1070%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove8 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(485%,1025%)",
                "-ms-transform":"translate(485%,1025%)",
                "transform":"translate(485%,1025%)"
              });
              opponent.updateScores();
        }
       
    }
    const opponentMove9 = () => {
        const answerArr = ['correct','wrong','correct','correct'];
    const randomAnswer = answerArr[Math.floor(Math.random()*answerArr.length)];
        console.log(randomAnswer)
        if(randomAnswer === 'correct'){
            $('#player-two').css({
                "-webkit-transform":"translate(500%,900%)",
                "-ms-transform":"translate(500%,900%)",
                "transform":"translate(500%,900%)"
              });
              opponent.updateScores();
        }
       
    }
    ///rounds////
    const play1 = () => {
        question1();
        opponentMove1();
        score();
        console.log(user);
        console.log(opponent);
    }
    const play2 = () => {
        question2();
        opponentMove2();
        score();
    }
    const play3 = () => {
        question3();
        opponentMove3();
        score();
        console.log(user);
        console.log(opponent);
    }
    const play4 = () => {
        question4();
        opponentMove4();
        score();
    }
    const play5 = () => {
        question5();
        opponentMove5();
        score();
    }
    const play6 = () => {
        question6();
        opponentMove6();
        score();
        console.log(user);
        console.log(opponent);
    }
    const play7 = () => {
        question7();
        opponentMove7();
        score();
    }
    const play8 = () => {
        question8();
        opponentMove8();
        score();
    }
    const play9 = () => {
        question9();
        opponentMove9();
        score();
        winner();
        console.log(user);
        console.log(opponent);
    }
    /////////////////////////////
    //////START GAME FUNCTION/////
    const startGame = () => {
    alert('Answer the questions 1-9 in order')
    
    $('#q1').on('click',play1);
    $('#q2').on('click',play2);
    $('#q3').on('click',play3);
    $('#q4').on('click',play4);
    $('#q5').on('click',play5);
    $('#q6').on('click',play6);
    $('#q7').on('click',play7);
    $('#q8').on('click',play8);
    $('#q9').on('click',play9);
    
    };
    /////INTRO FUNCTION////////
    const intro = () => {
        alert('Press start to begin');
        $('.start').on('click', startGame);
    }
    intro();


})