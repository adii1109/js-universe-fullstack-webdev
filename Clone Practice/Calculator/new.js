const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello adii');
   res.end(`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Calulator-made by hacker_adii</title>
       <!-- <link rel="stylesheet" href="style.css"> -->
      <!-- <script src="script.js"></script> -->
      <style>
   
   *{
       padding:0px;
       margin:0px;
       box-sizing: border-box;
   }
   .Team{
       text-align: center;
       font-size: 20px;
       margin-top: 10px;
   }
   
   
   .button{
       font-family: Arial,sans-serif;
       font-size: 20px;
       font-weight: 500;
       border: 2px solid black;
       height:35px;
       width: 65px;
       margin-top: 10px;
       margin-bottom: 10px;
       border-radius: 10px;
       cursor: pointer;
   }
   .button:hover{
       border:2px solid lightskyblue;
   }
   
   .container{
    
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
   #green{
       background-color: green;
       color: white;
   
   }
   #red{
       background-color: rgb(236, 42, 42);
       color:white;
   }
   .in{
       display: flex;
       margin:0px;
       align-items: center;
       justify-content: center;
       margin-top:14px;
   }
   .input{
       border: 2px solid lightgray;
       height: 50px;
       width: 345px;
       margin-bottom: 0;
       font-size: 20px;
       padding-left: 15px;
   }
   
      </style>
   </head>
   <body>
   
       
       <div class="container">
         <div>
            <h1 class="Team">Calulator Made by hacker_Adii Team </h1>
         </div>
   
           <!-- <div class="box"></div> -->
           <div class="in">
            <input class="input"   type="text"/>
           </div>
           <div class="row">
              <button class="button" id="red">C</button>
              <button class="button"> (</button>
              <button class="button">)</button>
              <button class="button">mod</button>
              <button class="button">π</button>
           </div>
           <div class="row">
              <button class="button">7</button>
              <button class="button">8</button>
              <button class="button">9</button>
              <button class="button">/</button>
              <button class="button">√</button>
           </div>
           <div class="row">
              <button class="button">4</button>
              <button class="button">5</button>
              <button class="button">6</button>
              <button class="button">*</button>
              <button class="button">²</button>
           </div>
           <div class="row-2">
           <div class="row">
              <button class="button">1</button>
              <button class="button">2</button>
              <button class="button">3</button>
              <button class="button"> -</button>
           </div>
           <div class="row">
              <button class="button">0</button>
              <button class="button">.</button>
              <button class="button">%</button>
              <button class="button"> +</button>
              <button class="button" id="green"> =</button>  
       </div>
           </div>
       </div>
       </div>
       </div>
   </body>
   <script>
   let string="";
let buttons=document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML == ' ='){
         string=eval(string);
         document.querySelector('input').value=string;
      }
    else if(e.target.innerHTML == 'C'){
         string='';
         document.querySelector('input').value=string;
      }
      else{

          console.log(e.target)
          string=string+e.target.innerHTML;
          document.querySelector('input').value=string;
      }
    })
   })
   </script>
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});