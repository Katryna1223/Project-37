class Quiz{
    getState(){
       var gameStateRef = database.ref('gamestate');
       gameStateRef.on("value", (data)=>{
           gameState = data.val();
       });
    }
    update(state){
        database.ref('/').update({
            gamestate: state
        });
    }
    async start(){
        if(gameState===0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
        }
       
    }
}