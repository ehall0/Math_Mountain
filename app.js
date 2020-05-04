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
    /////////////////////////////
    //////START GAME FUNCTION/////
    const startGame = () => {
         score(user.checkpoint);
        
        
    }
    /////INTRO FUNCTION////////
    const intro = () => {
        $('.start').on('click', startGame);
    }
    intro();


})