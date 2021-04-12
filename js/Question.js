class Question{
    constructor(){
        this.title = createElement('h2');
        this.input1 = createInput('Your name');
        this.input2 = createInput('Your Answer');
        this.button1 = createButton('Submit Name');
        this.button2 = createButton('Submit Answer');
        this.reset = createButton('Reset');
        this.question1 = createElement('h2');
        this.A = createElement('h3'); 
        this.B = createElement('h3');
        this.C = createElement('h3');
        this.wrong = createElement('h4');
        this.right = createElement('h4');

    }
    display(){
        this.title.html('This is a Quiz');
        this.title.position(displayWidth/2, 40);
        
        this.input1.position(displayWidth/2-140, displayHeight-100);
        this.input2.position(displayWidth/2 + 140, displayHeight-100);
        
        this.button1.position(displayWidth/2 - 140, displayHeight-70);
        this.button2.position(displayWidth/2 + 140, displayHeight-70);

        this.question1.html('What is the capital of New York State?');
        this.question1.position(displayWidth/2-100, displayHeight/2-300);

        this.reset.position(displayWidth/2 +200, 50);
         
        this.A.html('A: Poughkeepsie');
        this.B.html('B: Albany');
        this.C.html('C: New York City');
        this.A.position(displayWidth/2, displayHeight-400);
        this.B.position(displayWidth/2, displayHeight-350);
        this.C.position(displayWidth/2, displayHeight-300);

        this.button1.mousePressed(()=>{
            this.input1.hide();
            this.button1.hide();
           // this.button2.hide();
            contestant.name = this.input1.value();
            
            contestantCount++;
            contestant.index = contestantCount;
           // contestant.getCount();
            contestant.update();
            contestant.updateCount(contestantCount);
        });
        if(gameState === 1){
            this.button2.mousePressed(()=>{
                contestant.answer = this.input2.value();
                contestant.update();
                this.button2.hide();
                this.input2.hide();
                if(contestant.answer.toUpperCase() === "B"){
                    console.log('correct');
                    textSize(10);
                    this.right.position(displayWidth/2-200,200);
       
                } else{
                    console.log('wrong');
                    
                    this.wrong.position(displayWidth/2-200, 200);
                    
                }
            });
           
           }
           this.reset.mousePressed(()=>{
            quiz.update(0);
            contestant.updateCount(0);
            database.ref('contestants').remove();

        });
    }
}
