function check() {

    let question1 = document.querySelector("#question1");
    let question2 = document.querySelector("input[name='question2']:checked");
    let question3 = document.querySelector("input[name='question3']:checked");
    let question4 = document.querySelector("input[name='question4']:checked");
    let question5 = document.querySelector("input[name='question5']:checked");
    let question6 = document.querySelector("input[name='question6']:checked");
    let question7 = document.querySelector("input[name='question7']:checked");
    let question8 = document.querySelector("input[name='question8']:checked");
    let question9 = document.querySelector("input[name='question9']:checked");
    let question10 = document.querySelector("input[name='question10']:checked");
    
    // function myFunction() {
    //     document.querySelector(".example").style.backgroundColor = "red";
    // }
  
    let correct = 0

    if (question1.value == "2") {
        correct++;
        question1.classList.add("correct");
    }
    else {
      question1.classList.add("wrong")

    
    }
    let q2_wrap = document.querySelector("#q2_wrap");
    console.log(question2.value)
    if (question2.value == "Link") {
        correct++;
        if (q2_wrap.classList.contains("wrong")){
            q2_wrap.classList.remove("wrong")
        }
        q2_wrap.classList.add("correct");
    }
    else {
        if (q2_wrap.classList.contains("correct")) {
            q2_wrap.classList.remove("correct")
        }
        q2_wrap.classList.add("wrong");
    }
    let q3_wrap = document.querySelector("#q3_wrap");
    console.log(question3.value)
    if (question3.value == "Who knows") {
        correct++;
        if (q3_wrap.classList.contains("wrong")){
            q3_wrap.classList.remove("wrong")
        }
        q3_wrap.classList.add("correct");
    }
    else {
        if (q3_wrap.classList.contains("correct")) {
            q3_wrap.classList.remove("correct")
        }
        q3_wrap.classList.add("wrong");
    }
    let q4_wrap = document.querySelector("#q4_wrap");
    console.log(question4.value)
    if (question4.value == "Himself") {
        correct++;
        if (q4_wrap.classList.contains("wrong")){
            q4_wrap.classList.remove("wrong")
        }
        q4_wrap.classList.add("correct");
    }
    else {
        if (q4_wrap.classList.contains("correct")) {
            q4_wrap.classList.remove("correct")
        }
        q4_wrap.classList.add("wrong");
    }
    let q5_wrap = document.querySelector("#q5_wrap");
    console.log(question5.value)
    if (question5.value == "Two") {
        correct++;
        if (q5_wrap.classList.contains("wrong")){
            q5_wrap.classList.remove("wrong")
        }
        q5_wrap.classList.add("correct");
    }
    else {
        if (q5_wrap.classList.contains("correct")) {
            q5_wrap.classList.remove("correct")
        }
        q5_wrap.classList.add("wrong");
    }
    let q6_wrap = document.querySelector("#q6_wrap");
    console.log(question6.value)
    if (question2.value == "42") {
        correct++;
        if (q6_wrap.classList.contains("wrong")){
            q6_wrap.classList.remove("wrong")
        }
        q6_wrap.classList.add("correct");
    }
    else {
        if (q6_wrap.classList.contains("correct")) {
            q6_wrap.classList.remove("correct")
        }
        q6_wrap.classList.add("wrong");
    }
    let q7_wrap = document.querySelector("#q7_wrap");
    console.log(question7.value)
    if (question7.value == "Yes") {
        correct++;
        if (q7_wrap.classList.contains("wrong")){
            q7_wrap.classList.remove("wrong")
        }
        q7_wrap.classList.add("correct");
    }
    else {
        if (q7_wrap.classList.contains("correct")) {
            q7_wrap.classList.remove("correct")
        }
        q7_wrap.classList.add("wrong");
    }
    let q8_wrap = document.querySelector("#q8_wrap");
    console.log(question8.value)
    if (question8.value == "Jump") {
        correct++;
        if (q8_wrap.classList.contains("wrong")){
            q8_wrap.classList.remove("wrong")
        }
        q8_wrap.classList.add("correct");
    }
    else {
        if (q8_wrap.classList.contains("correct")) {
            q8_wrap.classList.remove("correct")
        }
        q8_wrap.classList.add("wrong");
    }
    let q9_wrap = document.querySelector("#q9_wrap");
    console.log(question9.value)
    if (question9.value == "Nothing2") {
        correct++;
        if (q9_wrap.classList.contains("wrong")){
            q9_wrap.classList.remove("wrong")
        }
        q9_wrap.classList.add("correct");
    }
    else {
        if (q9_wrap.classList.contains("correct")) {
            q9_wrap.classList.remove("correct")
        }
        q9_wrap.classList.add("wrong");
    }
    let q10_wrap = document.querySelector("#q10_wrap");
    console.log(question10.value)
    if (question10.value == "Alphebet1") {
        correct++;
        if (q10_wrap.classList.contains("wrong")){
            q10_wrap.classList.remove("wrong")
        }
        q10_wrap.classList.add("correct");
    }
    else {
        if (q10_wrap.classList.contains("correct")) {
            q10_wrap.classList.remove("correct")
        }
        q10_wrap.classList.add("wrong");
    }
   
    
    }
   
   

