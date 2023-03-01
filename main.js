function question1() {
  let q1_input = inputQ1.value;
  let q1_output;

  //write your code here, don't change any thing
  //make q1_output = your answer
  if(+q1_input==q1_input){
    q1_output="Digit" ;

  }
  else if(q1_input.toUpperCase()===q1_input){
    q1_output="Capital letter" ;
  }
  else{
    q1_output="Small letter"
  }

  outputQ1.innerHTML = q1_output;
}

function question2() {
  let q2_input = inputQ2.value;
  let q2_output;

  //write your code here, don't change any thing
  //make q2_output = your answer
  let newData ;
  let secondTerm ;
  if(q2_input.includes("-")){
     newData= q2_input.trim().split(q2_input.charAt(q2_input.indexOf("-")));
     secondTerm=newData[1].split("=") ;
    if(+newData[0]-secondTerm[0]==+secondTerm[1])
    q2_output="True"
    else 
    q2_output=+newData[0]-secondTerm[0] ;
      }
      else if(q2_input.includes("+")){
        newData= q2_input.trim().split(q2_input.charAt(q2_input.indexOf("+")));
     secondTerm=newData[1].split("=") ;
    if(+newData[0]+secondTerm[0]==+secondTerm[1])
    q2_output="True"
    else 
    q2_output=+newData[0]+(+secondTerm[0]) ;
      }
      else if(q2_input.includes("*")){
        newData= q2_input.trim().split(q2_input.charAt(q2_input.indexOf("*")));
     secondTerm=newData[1].split("=") ;
    if(+newData[0]*secondTerm[0]==+secondTerm[1])
    q2_output="True"
    else 
    q2_output=+newData[0]*secondTerm[0] ;
      }
      else if(q2_input.includes("/")){
        newData= q2_input.trim().split(q2_input.charAt(q2_input.indexOf("/")));
     secondTerm=newData[1].split("=") ;
    if(+newData[0]/secondTerm[0]==+secondTerm[1])
    q2_output="True"
    else 
    q2_output=+newData[0]/secondTerm[0] ;
      }
      else
      q2_output="operation error!" ;
  outputQ2.innerHTML = q2_output;
}

function question3() {
  let A = input1Q3.value;
  let B = input2Q3.value;
  let q3_output;

  //write your code here, don't change any thing
  //make q3_output = your answer
  if(A%B==0 || B%A==0){
    q3_output="Multiple" ;
  }
  else{
    q3_output="Not Multiple" ;
  }

  outputQ3.innerHTML = q3_output;
}

function question4() {
  let q4_input = inputQ4.value;
  let q4_output;

  //write your code here, don't change any thing
  //make q4_output = your answer
  let newQ4_input=q4_input.split(" ") ;
  let firstPoin=newQ4_input.slice(0,2) ;
  let secondPoint=newQ4_input.slice(2 , 4) ;
  console.log(firstPoin , secondPoint,newQ4_input);
  q4_output=Math.sqrt(Math.pow(+firstPoin[0]-secondPoint[0],2)+Math.pow(+firstPoin[1]-secondPoint[1],2)) ;

  outputQ4.innerHTML = q4_output;
}

function question5() {
  let q5_input = inputQ5.value;
  let q5_output;

  //write your code here, don't change any thing
  //make q5_output = your answer
  let firstChar=q5_input[0] ;
  console.log(firstChar);
  let lasChar=q5_input[q5_input.length-1] ;
  console.log(lasChar);
  let NumberBetween=q5_input.slice(1,q5_input.length-1).length ;
  console.log(NumberBetween);
  q5_output=`${firstChar} ${NumberBetween} ${lasChar}` ;

  outputQ5.innerHTML = q5_output;
}
