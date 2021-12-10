//         A General Knowledge Quiz Game


var readline=require("readline-sync")
score=0

//  Welcome Code

var userName=readline.question("Enter your name ")
console.log("hello ",userName,"\nPlease play this game and improve your knowledge:")

// Use Function & if else

function play(question,answer){
    var Answer=readline.question(question);
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('Right')
        console.log("----------")
        score+=1
    }else{
        console.log('Wrong')
        console.log("----------")
    }
};

var highScore={
  'Bipin':5,
}

// Array of Objects

var questi = [{
  question: "Who is Mahendra Singh Dhoni. \n1. Cricketer  \n2. Rider \n3. Reporter \n4. pilet  \n",
  answer: '1'
}, {
  question: "Which IPL team does Dhoni play for. \n1. MI  \n2. CSK  \n3. KXIP  \n4. RR\n",
  answer: '2'
}, {
  question: "2020 IPL trophy CSK team win or not. \n1. win \n2. Lose  \n3. Tie  \n4.I don't know \n",
  answer: '1'
}, {
  question: "Is Dhoni still the part of team India. \n1. No \n2. I don't know \n3. Yes \n4.I don't know who is Dhoni \n ",
  answer: "1"
},{
  question: "On which post was Dhoni in Indian cricket? \n1. Wicket Keeper \n2. Bowler  \n3. Bastman  \n4.I don't know \n",
  answer: '1'
}
];

// Use Loop for call function

for (var i=0;i<questi.length;i++){
    var queslist=questi[i]
    play(queslist.question,queslist.answer)
};

// For Print Output

console.log(userName,"Your final Score is ",score)

console.log("High Score -:",highScore["Bipin"])
