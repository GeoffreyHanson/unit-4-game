$(document).ready(function() {
    // VARIABLES
    var goalScore = 0;
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    var crystalPoints = [];
    var pointHolder = 0;

    // FUNCTIONS
    // Randomizes goalScore (the score to win) bewteen 19-120
    function randGoal() {
        goalScore = Math.floor(Math.random() * (120 - 19)) + 19;
        console.log("Score to win: " + goalScore);
        $("#goal").html("Score to win: " + goalScore);
    }


    // Randomizes the score of each crystal between 1-12
    function randCrystal () {
        // Loops through crystalPoints, adding 4 random integers
        for (var i = 0; i < 4; i++) {
            pointHolder = Math.floor(Math.random() * (12 - 1)) + 1;
            crystalPoints.push(pointHolder);
            console.log(crystalPoints);  
            // lends numerical data to each image
            $("#crystal"+[i]).attr("data-crystalvalue", crystalPoints[i]);
        }
        crystalPoints = [];
    }

    

    // Calling functions
    randGoal();
    randCrystal();

    

    // Scoring
    $(".crystal").on("click", function() {
        console.log("clicked");
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        currentScore += crystalValue;
        console.log(currentScore);
        $("#score").html("Your current score: " + currentScore);

        // Outcomes
        if (currentScore === goalScore) {
            wins += 1;
            console.log("You won!");
            $("#wins").html("Wins: " + wins);
            currentScore = 0;
            $("#score").html("Your current score: 0");
            randGoal();
            randCrystal();
        }

        else if (currentScore >= goalScore) {
            losses += 1;
            console.log("You lost!");
            $("#losses").html("Losses: " + losses);
            currentScore = 0;
            $("#score").html("Your current score: 0");
            randGoal();
            randCrystal();
        }
    });
     
});