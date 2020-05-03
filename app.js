// console.log($)
// console.log('it works')



$(()=> {
    /////USER/////
    class User{
        constructor(name, answered, checkpoint){
            this.name = name;
            this.answered = answered;
            this.checkpoint = checkpoint;
        };
        
    };
    ////COMPUTER///////
    class Computer{
        constructor(name, answered, checkpoint){
            this.name = name;
            this.answered = answered;
            this.checkpoint = checkpoint;
        
        };
        
    };

    ////PLAYERS/////

    const user = new User('Player 1');
    const opponent = new Computer('Player 2');

    console.log(user);
    console.log(opponent);

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


    ///////CHECKPOINT FUNCTION///////
    const updateCheckpoint = (player) => {
        if(player.answered >= 0 && player.answered < 3){
            player.checkpoint === 0;
        };
        if(player.answered >= 3 && player.answered < 6){
            player.checkpoint === 1;
        };
        if(player.answered >= 6 && player.answered < 9){
            player.checkpoint === 2;
        };
        if(player.answered >= 9){
            player.checkpoint === 3;
        };
    };

    /////UPDATE ANSWERED VALUE////////
    const updateAnswered = (player) => {
        player.answered += 1;
    }
    //////START GAME FUNCTION/////
    const startGame = () => {
        alert('started game');
    }
    /////INTRO FUNCTION////////
    const intro = () => {
        $('.start').on('click', startGame);
    }
    intro();


})