window.addEventListener('load', async () => {
   var Quiz;

   if (window.web3) {
      web3 = new Web3(web3.currentProvider);
      console.log("Web3:");
      console.log(window.web3);
      web3.eth.defaultGasPrice = 1;
      ethereum.enable();
      web3.eth.getAccounts((error, result) => {
         console.log("Accounts:");
         console.log(result);
         web3.eth.defaultAccount = result[0];
      });
   } else {
      console.log('MetaMask not detected');
   }

   var abi = [
     {
       "constant": true,
       "inputs": [],
       "name": "numQuizzes",
       "outputs": [
         {
           "name": "",
           "type": "uint256"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0x9a8fc0b8"
     },
     {
       "inputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "constructor",
       "signature": "constructor"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "fetchquiz",
       "type": "event",
       "signature": "0x74b91515a354f13aa884eed46cea33aa37533250f496f869b474fb7449099a2b"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "quiztaken",
       "type": "event",
       "signature": "0xe47940e15c49852a5ea2c5fbe9b1507d39b06a6504f4c2404f6e131ec222af0a"
     },
     {
       "constant": false,
       "inputs": [
         {
           "name": "_name",
           "type": "string"
         },
         {
           "name": "_fee",
           "type": "uint256"
         },
         {
           "name": "_pool",
           "type": "uint256"
         },
         {
           "name": "_question",
           "type": "string"
         },
         {
           "name": "_ans1",
           "type": "string"
         },
         {
           "name": "_ans2",
           "type": "string"
         },
         {
           "name": "_ans3",
           "type": "string"
         },
         {
           "name": "_ans4",
           "type": "string"
         }
       ],
       "name": "makeQuiz",
       "outputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function",
       "signature": "0x0276266e"
     },
     {
       "constant": true,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "getQuizDisp",
       "outputs": [
         {
           "name": "",
           "type": "uint256"
         },
         {
           "name": "",
           "type": "string"
         },
         {
           "name": "",
           "type": "uint256"
         },
         {
           "name": "",
           "type": "uint256"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0x60907be8"
     },
     {
       "constant": false,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "setAttempt",
       "outputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function",
       "signature": "0xa0558879"
     },
     {
       "constant": true,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "canSkip",
       "outputs": [
         {
           "name": "",
           "type": "bool"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0xe04d5a8d"
     },
     {
       "constant": true,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "getQuiz",
       "outputs": [
         {
           "name": "",
           "type": "string"
         },
         {
           "name": "",
           "type": "string"
         },
         {
           "name": "",
           "type": "string"
         },
         {
           "name": "",
           "type": "string"
         },
         {
           "name": "",
           "type": "string"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0xa3f7e096"
     },
     {
       "constant": false,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "payToPlay",
       "outputs": [],
       "payable": true,
       "stateMutability": "payable",
       "type": "function",
       "signature": "0x7b82578f"
     },
     {
       "constant": true,
       "inputs": [],
       "name": "getNum",
       "outputs": [
         {
           "name": "",
           "type": "uint256"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0x67e0badb"
     },
     {
       "constant": true,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         }
       ],
       "name": "getPoolAmount",
       "outputs": [
         {
           "name": "",
           "type": "uint256"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0x41af4858"
     },
     {
       "constant": true,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         },
         {
           "name": "_ans",
           "type": "string"
         }
       ],
       "name": "scoreAttempt",
       "outputs": [
         {
           "name": "",
           "type": "bool"
         }
       ],
       "payable": false,
       "stateMutability": "view",
       "type": "function",
       "signature": "0x888c9663"
     },
     {
       "constant": false,
       "inputs": [
         {
           "name": "_quizId",
           "type": "uint256"
         },
         {
           "name": "_winner",
           "type": "address"
         }
       ],
       "name": "awardLottery",
       "outputs": [],
       "payable": false,
       "stateMutability": "nonpayable",
       "type": "function",
       "signature": "0x4f3097e0"
     }
   ];

   Quiz = new web3.eth.Contract(abi,
   /*Add Contract address here in signle quotes*/);
   console.log("Contract:");
   console.log(Quiz);





   $("#addConn").click(function(){
      $("#appendPoint").html('<div class="modal"><div class="panel"><h3>Connect to Contract</h3><form><input type="text" id="conaddress" placeholder="Contract Address"></form><button type="button" name="button" class="sub" id="conn">Connect</button></div></div>');
   });

   $("#acc").click(function(){
      $("#appendPoint").html('<div class="modal"><div class="panel"><h3>Connect to Address</h3><p id="centeracc">Current: '+ web3.eth.defaultAccount +'</p><form><input type="text" id="accaddress" placeholder="Account Address"></form><button type="button" name="button" class="sub" id="connacc">Connect</button></div></div>');
   });

   $(".main").click(function(){$("#appendPoint").html("");});

   $(document).on("click", "#conn", function(){
      if($("#conaddress").val() != "") {
         Quiz = new web3.eth.Contract(abi,
         $("#conaddress").val());
         console.log(Quiz);
         $(".main").css("height", "auto");
         $("#appendPoint").html("");
      } else {
         $("#conaddress").css("background", "red");
      }
   });

   $(document).on("click", "#connacc", function(){
      if($("#accaddress").val() != "") {
         web3.eth.defaultAccount = $("#accaddress").val();
         console.log("Account changed to: "+web3.eth.defaultAccount);
         $("#appendPoint").html("");
      } else {
         $("#accaddress").css("background", "red");
      }
   });

   $("#makeQuiz").click(function(){
      Quiz.methods.makeQuiz($("#qName").val(),$("#qFee").val(),$("#qPool").val()* 1000000000000000000,$("#qQuestion").val(),$("#qCorrect").val(),$("#qWrong1").val(),$("#qWrong2").val(),$("#qWrong3").val()).send({from: web3.eth.defaultAccount, gas: 3000000});
      $("#mqfirst").css("margin-top", "-200vh");
      $("#mqsecond").css("margin-top", "-100vh");
   });

   $("#mq").click(function(){
      $("#mq").css("flex", "10");
      $("#tq").css("flex", "1");
      $("#mqrot").css("transform", "translate(-50%, -50%) rotate(0deg)");
      $("#tqrot").css("transform", "translate(-50%, -50%) rotate(90deg)");
      $("#tqrot").css("width", "100vh");
      $("#mqrot").css("width", "auto");
      $("#mqfirst").css("margin-top", "-100vh");
      $("#tqfirst").css("margin-top", "0vh");
      $("#tqsecond").css("margin-top", "100vh");
      $("#tqthird").css("margin-top", "200vh");
      $("#tqfourth").css("margin-top", "300vh");
      $("#mq").removeClass("unselect");
      $("#tq").addClass("unselect");
      $("#tq").removeClass("open");
   });

   $("#tq").click(function(){
      $("#tq").css("flex", "10");
      $("#mq").css("flex", "1");
      $("#tqrot").css("transform", "translate(-50%, -50%) rotate(0deg)");
      $("#mqrot").css("transform", "translate(-50%, -50%) rotate(-90deg)");
      $("#mqrot").css("width", "100vh");
      $("#tqrot").css("width", "auto");
      $("#tqfirst").css("margin-top", "-100vh");
      $("#tqsecond").css("margin-top", "0vh");
      $("#tqthird").css("margin-top", "100vh");
      $("#tqfourth").css("margin-top", "200vh");
      $("#mqfirst").css("margin-top", "0");
      $("#mqsecond").css("margin-top", "100vh");
      $("#mqthird").css("margin-top", "200vh");
      $("#tq").removeClass("unselect");
      $("#mq").addClass("unselect");
      var numQ = 0;
      if(!$("#tq").hasClass("open")) {
         var num = Quiz.methods.getNum().call({from: web3.eth.defaultAccount}, function(error, result){
            if(!error) {
               numQ = result;
               $("#numQ").html('<p>Number of Quizzes: '+numQ+'</p>');
               $("#quizLoad").html('<h2>Quizzes</h2><span id="numQ"></p></span>');
               var q;
               for(var i = 1; i <= numQ && i <= 3; i++) {
                  q = Quiz.methods.getQuizDisp(i).call({from: web3.eth.defaultAccount}, function(error, result) {
                     if(!error) {
                        $("#quizLoad").append('<div class="quizCard"><input type="hidden" value="'+result[0]+'" id="getqid"><input type="hidden" value="'+result[2]+'" id="getfee"><p>#'+result[0]+': '+result[1]+'</p><p>Fee: '+result[2]+'</p><p> Current Pool: '+(result[3] / 1000000000000000000)+'</p></div>');
                        console.log(result);
                     } else {
                        console.log(error);
                     }
                  });

               }
            } else {
               console.log(error);
            }
         });

      }
      $("#tq").addClass("open");
   });

   var qid;
   var fee;
   $(document).on("click", ".quizCard", function(){
      $("#tqfirst").css("margin-top", "-200vh");
      $("#tqsecond").css("margin-top", "-100vh");
      $("#tqthird").css("margin-top", "0vh");
      $("#tqfourth").css("margin-top", "100vh");
      qid = $(this).children("#getqid").val();

      fee = $(this).children("#getfee").val();
      $("#loadFee").html('<h3>Pay the Fee? ('+fee+' ETH)</h3><div class="yn"><button type="button" id="choiceyes">YES</button><button type="button" id="choiceno">NO</button></div>')
      Quiz.methods.canSkip(qid).call({from: web3.eth.defaultAccount}, function(error, result) {
         if(!error) {
            console.log(result);
            if(result) {
               $(".moveon").html('<ion-icon name="arrow-down" id="alreadyPaid"></ion-icon>');
            } else {
               $(".moveon").html("");
            }
         } else {
            console.log(error);
         }
      });

   });

   $(document).on("click", "#alreadyPaid", function(){
      var question = Quiz.methods.getQuiz(qid).call({from: web3.eth.defaultAccount}, function(error, result) {
         console.log(question);
         Quiz.methods.setAttempt(qid);
         $(".moveon").html("");
         $("#loadQ").html('<h4 id="quizques">'+question[0]+'</h4><div class="choices"><div class="anschoice" id="a1">'+question[1]+'</div><div class="anschoice" id="a2">'+question[2]+'</div><div class="anschoice" id="a3">'+question[3]+'</div><div class="anschoice" id="a4">'+question[4]+'</div></div><button type="button" id="subQuiz" disabled>Submit Quiz</button>');
         $("#tqfirst").css("margin-top", "-300vh");
         $("#tqsecond").css("margin-top", "-200vh");
         $("#tqthird").css("margin-top", "-100vh");
         $("#tqfourth").css("margin-top", "0vh");
      });
   });

   $(document).on("click", "#choiceyes", async function(){
      Quiz.methods.payToPlay(qid).send({from: web3.eth.defaultAccount, gas: 3000000, value: fee * 1000000000000000000}, function(error,result){
         if(!error) {
            console.log("Payment Successful");
         } else {
            console.log(error);
         }
      });

      var question;
      await Quiz.methods.getQuiz(qid).call({from: web3.eth.defaultAccount}, function(error, result) {
         if(!error) {
            question = result;
            console.log(result);
            Quiz.methods.setAttempt(qid);
            $("#loadQ").html('<h4 id="quizques">'+question[0]+'</h4><div class="choices"><div class="anschoice" id="a1">'+question[1]+'</div><div class="anschoice" id="a2">'+question[2]+'</div><div class="anschoice" id="a3">'+question[3]+'</div><div class="anschoice" id="a4">'+question[4]+'</div></div><button type="button" id="subQuiz" disabled>Submit Quiz</button>');
            $("#tqfirst").css("margin-top", "-300vh");
            $("#tqsecond").css("margin-top", "-200vh");
            $("#tqthird").css("margin-top", "-100vh");
            $("#tqfourth").css("margin-top", "0vh");
         } else {
            console.log(error);
         }
      });
   });

   $(document).on("click", "#choiceno", function(){
      $("#tqfirst").css("margin-top", "-100vh");
      $("#tqsecond").css("margin-top", "0vh");
      $("#tqthird").css("margin-top", "100vh");
      $("#tqfourth").css("margin-top", "200vh");
   });

   $(document).on("click", ".anschoice", function(){
      $(".anschoice").removeClass("picked");
      $(this).addClass("picked");
      $("#subQuiz").prop("disabled", false);
      $("#tqfirst").css("margin-top", "-300vh");
      $("#tqsecond").css("margin-top", "-200vh");
      $("#tqthird").css("margin-top", "-100vh");
      $("#tqfourth").css("margin-top", "0vh");
   });

   $(document).on("click", "#subQuiz", function(){
      var choice = $(".picked").text();
      var score;
      Quiz.methods.scoreAttempt(qid, choice).call({from: web3.eth.defaultAccount}, function(error, result) {
         if(!error){
            score = result;
            console.log(result);
         } else {
            score = "score error";
            console.log(error);
         }
      });
      console.log("Winner: "+score);
      if(score) {
         Quiz.methods.awardLottery(qid, web3.eth.defaultAccount);
      } else {

      }
      $("#tqfirst").css("margin-top", "-400vh");
      $("#tqsecond").css("margin-top", "-300vh");
      $("#tqthird").css("margin-top", "-200vh");
      $("#tqfourth").css("margin-top", "-100vh");
      $("#score").html(score);
   });

});
