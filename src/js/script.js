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
    "type": "function",
    "signature": "0x99eb6950"
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
    "inputs": [],
    "name": "userPay",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x75f3349d"
  }
]);

var Quiz;
Quiz = QuizContract.at('0x10c194A3708d8e6227FB9039A97DFAe630B080C5');
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
      Quiz = QuizContract.at($("#conaddress").val());
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
   Quiz.makeQuiz($("#qName").val(),$("#qFee").val(),$("#qPool").val(),$("#qQuestion").val(),$("#qCorrect").val(),$("#qWrong1").val(),$("#qWrong2").val(),$("#qWrong3").val());

   Quiz.getQuizDsp(function(error, result){
      if(!error) {
         $("#result").html(result);
      } else {
         console.log(error);
      }
   }, 1);
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
   $("#mqfirst").css("margin-top", "0");
   $("#tq").removeClass("unselect");
   $("#mq").addClass("unselect");
   if(!$("#tq").hasClass("open")) {
      var num = Quiz.getNum();
      console.log(num);
      $("#quizLoad").html('<h2>Quizzes</h2><span id="numQ"></p></span>');
      $("#numQ").html('<p>Number of Quizzes: '+num.c[0]+'</p>');
      var q;
      for(var i = 1; i <= num.c[0] && i <= 3; i++) {
         q = Quiz.getQuizDisp(i);
         $("#quizLoad").append('<div class="quizCard"><input type="hidden" value="'+q[0]+'"><p>#'+q[0]+': '+q[1]+'</p><p>Fee: '+q[2]+'</p><p> Current Pool: '+q[3]+'</p></div>');
         console.log(q);
      }
   }
   $("#tq").addClass("open");
});

var qid;
$(document).on("click", ".quizCard", function(){
   $("#tqfirst").css("margin-top", "-200vh");
   $("#tqsecond").css("margin-top", "-100vh");
   qid = $(this).children("input").val();
   console.log(qid);

   var question = Quiz.getQuiz(qid);
   console.log(question);
   $("#loadQ").html('<h4 id="quizques">'+question[0]+'</h4><div class="choices"><div class="anschoice" id="a1">'+question[1]+'</div><div class="anschoice" id="a2">'+question[2]+'</div><div class="anschoice" id="a3">'+question[3]+'</div><div class="anschoice" id="a4">'+question[4]+'</div></div><button type="button" id="subQuiz" disabled>Submit Quiz</button>');
});

$(document).on("click", ".anschoice", function(){
   $(".anschoice").removeClass("picked");
   $(this).addClass("picked");
   $("#subQuiz").prop("disabled", false);
});

$(document).on("click", "#subQuiz", function(){
   var choice = $(".picked").text();
   var score = Quiz.scoreAttempt(qid, choice);
   $("#tqfirst").css("margin-top", "-300vh");
   $("#tqsecond").css("margin-top", "-200vh");
   $("#tqthird").css("margin-top", "-100vh");
   $("#score").html(score);
});
