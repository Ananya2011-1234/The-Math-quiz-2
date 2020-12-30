function addUser() {
player1_name = document.getElementById("player1_name").value;
player2_name = document.getElementById("player2_name").value;
  
 localStorage.setItem("player1_name", player1_name);
 localStorage.setItem("player2_name", player2_name);
  
 window.location = "index.html";
 }
  function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2)
  }

  function check(){
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box>'>";
    check_button="<br><br>button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
  }