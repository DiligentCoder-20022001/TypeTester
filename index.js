
var texts;
var randNum;
var startTime;
var endTime;
function start() {
    //step1 Generate the texts 
    texts = ["All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.", "Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for. It wasn't often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.", "She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun."];

    //step2 randomly generate a number for 1 to 2 
    randNum = Math.floor((Math.random() * 3));

    //display the random text in the box
    document.querySelector(".outerTest").innerHTML = "<h3>" + texts[randNum] + "</h3>";
    startTime = new Date();
};

function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
    //fetching the value inside the text box
    var written = document.querySelector("textarea").value;

    //we need to comapre the written along with the assigned text 
    var numCorrect = 0;
    var numInCorrect = 0;
    //if we are doung split for "How are you doing today?" and use split(' ') it becomes {How,are,you,doing,today?} like this
    //this is hence useful for word by word comparision of strings
    var s1 = written.split(' ');
    var s2 = texts[randNum].split(' ');
    for (var i = 0; i < s1.length && i < s2.length; i++) {
        if (s1[i] === s2[i]) {
            numCorrect++;
        }
    }
    //calculating the speed 
    var speed = Math.floor(numCorrect / seconds);
    if (speed != 0) {
        speed = speed * 60;
    }
    else {
        speed = Math.floor((numCorrect * 60) / seconds);
    }
    //displaying the results 
    document.querySelector(".results").classList.add(".results1");
    document.querySelector(".results").innerHTML = "<h2>Typing speed : " + speed + " WPM</h2><br>" + "<h2>Number of correctly typed words : " + numCorrect + "</h2><br><h2>Time elapsed : " + seconds + " seconds</h2>";
}