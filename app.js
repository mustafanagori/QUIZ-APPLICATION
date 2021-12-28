questionArray =  [
    {
        question: "Why so JavaScript and Java have similar name?",
        answer: "JavaScript's syntax is loosely based on Java's",
        option: [
            "JavaScript is a stripped-down version of Java",
            "JavaScript's syntax is loosely based on Java's",
            "They both originated on the island of Java",
            "None of the above",
        ]
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: "The User's machine running a Web browser",
        option: [
            "The User's machine running a Web browser",
            "The Web server",
            "A central machine deep within Netscape's corporate offices",
            "None of the above",
        ]
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        answer: "Navigator",
        option: [
            "Microsoft",
            "Navigator",
            "LiveWire",
            "Native",
        ]
    },
    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        answer: "LiveWire",
        option: [
            "Microsoft",
            "Navigator",
            "LiveWire",
            "Native",
        ]
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answer: "Storing numbers, dates, or other values",
        option: [
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "None of the above",
        ]
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answer: "Client-side",
        option: [
            "Client-side",
            "Server-side",
            "Local",
            "Native",
        ]
    },

]
function showQues(e) {
    var ques = document.getElementById("ques");
    ques.innerHTML = "Q" + (e +1) + ")" +" "+ questionArray[e].question;

    var options = document.getElementsByClassName("option");
    for(var i=0 ; i < options.length ; i++)
    {
        options[i].innerHTML = questionArray[e].option[i];
    }
}
var count = 0;
var score =0;
function calc() 
{
    var radios = document.getElementsByClassName("radioBtn");
    var options = document.getElementsByClassName("option");
    for( var i = 0 ; i < radios.length; i++)
    {
        if(radios[i].checked == true)
        {
            if(options[i].innerHTML == questionArray[count].answer)
            {
                score++;
            }
        }
    }
}
function nextQues() {

    var radios = document.getElementsByClassName("radioBtn");
    calc()
    if(count < questionArray.length - 1)
    { 
        
        for(var i = 0; i < radios.length; i++)
        {
            if(radios[i].checked == true)
            {
                count++;
                showQues(count)
                radios[i].checked = false;
            }
        }
       
    }
    else
        {
            
            alert("your score is " + score);
            // var main = document.getElementById("main");
            // main[0].innerHTML = "";
        }
}



