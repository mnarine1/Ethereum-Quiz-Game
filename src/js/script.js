if(typeof web3 !== 'undefined') {
   web3 = new Web3(web3.currentProvider);
} else {
   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var QuizContract = web3.eth.contract([
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
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
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
    "type": "event"
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
    "type": "event"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
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
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_quizId",
        "type": "uint256"
      }
    ],
    "name": "getCorr",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
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
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "userPay",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
]);

var Quiz;
Quiz = QuizContract.at('0x735fd25631f55e7061D53cCb5CB3361FD7A2588f');
console.log(Quiz);

$("#addConn").click(function(){
   $("#appendPoint").html('<div class="modal"><div class="panel"><h3>Connect to Contract</h3><form><input type="text" id="conaddress" placeholder="Contract Address"></form><button type="button" name="button" class="sub" id="conn">Connect</button></div></div>');
});

$(".main").click(function(){$("#appendPoint").html("");});

$(document).on("click", "#conn", function(){
   if($("#conaddress").val() != "") {
      Quiz = QuizContract.at($("#conaddress").val());
      console.log(Quiz);
      $(".main").css("height", "auto");
      $("#appendPoint").html("");
   } else {
      $("#conaddress").css("background", "red");
   }
});

$("#makeQuiz").click(function(){
   Quiz.methods.makeQuiz($("#qName").val(),$("#qFee").val(),$("#qPool").val(),$("#qQuestion").val(),$("#qCorrect").val(),$("#qWrong1").val(),$("#qWrong2").val(),$("#qWrong3").val()).send({from: web3.eth.defaultAccount, gas: 3000000});

   Quiz.getQuiz(function(error, result){
      if(!error) {
         $("#result").html(result);
      } else {
         console.log(error);
      }
   });
});

$("#mq").click(function(){
   $("#mq").css("flex", "10");
   $("#tq").css("flex", "1");
   $("#mqrot").css("transform", "translate(-50%, -50%) rotate(0deg)");
   $("#tqrot").css("transform", "translate(-50%, -50%) rotate(90deg)");
   $("#tqrot").css("width", "100vh");
   $("#mqrot").css("width", "auto");
   $("#mqfirst").css("margin-top", "-100vh");
   $("#tqfirst").css("margin-top", "0");
   $("#mq").removeClass("unselect");
   $("#tq").addClass("unselect");
});

$("#tq").click(function(){
   $("#tq").css("flex", "10");
   $("#mq").css("flex", "1");
   $("#tqrot").css("transform", "translate(-50%, -50%) rotate(0deg)");
   $("#mqrot").css("transform", "translate(-50%, -50%) rotate(-90deg)");
   $("#mqrot").css("width", "100vh");
   $("#tqrot").css("width", "auto");
   $("#tqfirst").css("margin-top", "-100vh");
   $("#mqfirst").css("margin-top", "0");
   $("#tq").removeClass("unselect");
   $("#mq").addClass("unselect");
   var num = Quiz.getNum();
   console.log(num);
   $("#numQ").html('<p>Number of Quizzes: '+num.c[0]+'</p>');
   var q = Quiz.getQuiz(1);
   console.log(q);
});
