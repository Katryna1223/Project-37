var canvas, gameState=0, contestantCount, database, quiz, question, contestant;
var allContestants, answer;
function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  question = new Question();
  question.display();
}


function draw(){
  background("pink");
  
  question.display();
  
  console.log(gameState);
  
  if(contestantCount === 2){
    quiz.update(1);
  }
}
