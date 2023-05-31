<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>JavaScript Basics</h3>
    <br>
    <br>
    <h5>Problem 1:</h5>
    <p id= "number"></p>
<script>
    
    let numbers = new Array ("2","3", "4", "5", "6");
    console.log("2", "3", "4", "5", "6");

    document.getElementById("number").innerHTML = numbers;
</script>

    <h5>Problem 2 - max:</h5>
    <p id= "minmax"></p>
<script>
    
    
   // function findMinMax(){
          let a = Math.max(2,3,4,5,6);
          
   //}
     
     document.getElementById("minmax").innerHTML = a;
     </script>
<h5>Problem 2 - min:</h5>
<p id= "min"></p>
<script>
// function findMinMax(){
    let n = Math.min(2,3,4,5,6);
    document.getElementById("min").innerHTML = n;
     </script>

<h5>Problem 3 - even</h5>
<p id= "even"></p>
<script>
// function findMinMax(){
    let b = (2,3,4,5,6);
    let even = b / 2;
    document.getElementById("even").innerHTML = b;

    
     </script>

<h5>Problem 3 - odd</h5>
<p id= "odd"></p>
<script>

    let c = (2,3,4,5,6);
    let odd = c / 2;
    document.getElementById("odd").innerHTML = c / 2;

    </script>

<h5>Problem 4 - add</h5>
<p id= "add"></p>
<script>

    let x = 2;
    let y = 6;
    let tuts = 2 + 6;
    document.getElementById("add").innerHTML = tuts;
     </script>


<h5>Problem 5 - subtract</h5>
<p id= "sub"></p>
<script>

    let s = 2;
    let u = 6;
    let diff = 2 - 6;
    document.getElementById("sub").innerHTML = diff;
     </script>

<h5>Problem 6 - multiply</h5>
<p id= "multi"></p>


<script>

    //function multiply();

    let m = 2;
    let l = 6;
    let quot = 2 * 6;
    document.getElementById("multi").innerHTML = quot;

    //()
     </script>

<h5>Problem 7 - divide</h5>
<p id= "divide"></p>


<script>

    //function Divide();

    let mul = 2;
    let tye = 6;
    let div = 6 / 2;
    document.getElementById("divide").innerHTML = div ;

    //divide()
     </script>


    



</body>
</html>