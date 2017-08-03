//Magic 8 Ball
$(document).ready(function(){
  var magic8Ball = {};

  magic8Ball.listofAnswers = ["It is certain", "It is decidedly so, Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

  magic8Ball.askQuestion = function(question)
  {
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

    $("#answer").fadeIn(4000);
    var randomNumberforAnswer = Math.random();
    var randomNumberArrayforAnswer = randomNumberforAnswer * magic8Ball.listofAnswers.length;
    var randomIndexforAnswer = Math.floor(randomNumberArrayforAnswer);
    var answer = this.listofAnswers[randomIndexforAnswer];

    $("#answer").text(answer);
    $("#8ball").effect("shake");

    console.log(question);
    console.log(answer);
  };

  $("#answer").hide();

  var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("ASK A YES/NO QUESTION!!")
           magic8Ball.askQuestion(question)

       }, 500);
};

  $("#questionButton").click(onClick);

});
