# Project_1_Emma_Hall

--Math Mountain Game Link--

https://ehall0.github.io/Project_1_Emma_Hall/

<img url(Screenshot_2020-05-06_14-58-52.png)>

Technologies Used:

In order to have the players (user and opponent) information stored I created a class of Users with a constructor containing 'name', 'answered' (for number of questions answered correctly) as well as 'checkpoint'(for current checkpoint 0-3). I've also included an updateScores function inside the class, so that when it is called the players answered and checkpoint values will update accordingly.

I have also created several functions including a win function, restart function, score function(for appending the current scores to the score div). For the questions I have also created seperate functions for each question. 

For each move that the players make, I used jquery and with css selectors was able to translate each player to the next location if their user input for the question was read as correct.

--------------------

Approach taken:

Starting off after getting my game idea approved I went straight to wireframing the layout for the main page as well as as well as deciding on some basic css styling that I wanted to achieve.

Following wireframing I made the html and css documents and then jumped right into the javascript logic. The first thing I decided to do was to create my players as well as starting a rough draft at my basic funcitons like intro, restart, winner, scores. I then worked on the locations for where the players were to be moved throughout the game. After completing the majority of the user portion of the game I then added in the logic for the oppenent.

After having the overal concept of the game working I then went back and tried to clean up my code as well as fix some minor issues with the displa of the opponents scores.

---------------------

Unsolved problems:

Although I enventually understood out how to make the players icons responsive , I did not find the time to go back and fix this issue, so although the game still runs properly, the characters may be slightly displaced on a different window size.