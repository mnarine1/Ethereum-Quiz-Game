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
]);

var Quiz;
Quiz = QuizContract.at('0x8633417873C328A00F303083F4E6100110D5D2bA');
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
         $("#quizLoad").append('<div class="quizCard"><input type="hidden" value="'+q[0]+'" id="getqid"><input type="hidden" value="'+q[2]+'" id="getfee"><p>#'+q[0]+': '+q[1]+'</p><p>Fee: '+q[2]+'</p><p> Current Pool: '+q[3]+'</p></div>');
         console.log(q);
      }
   }
   $("#tq").addClass("open");
});

var qid;
var fee;
$(document).on("click", ".quizCard", function(){
   $("#tqfirst").css("margin-top", "-200vh");
   $("#tqsecond").css("margin-top", "-100vh");
   qid = $(this).children("#getqid").val();
   console.log(qid);

   fee = $(this).children("#getfee").val();
   $("#loadFee").html('<h3>Pay the Fee? ('+fee+' ETH)</h3><div class="yn"><button type="button" id="choiceyes">YES</button><button type="button" id="choiceno">NO</button></div>')
   var alreadyPaid = Quiz.canSkip(qid);
   console.log(alreadyPaid);
   if(alreadyPaid) {
      $(".moveon").html('<ion-icon name="arrow-down" id="alreadyPaid"></ion-icon>');
   } else {
      $(".moveon").html("");
   }
});

$(document).on("click", "#alreadyPaid", function(){
   var question = Quiz.getQuiz(qid);
   console.log(question);
   Quiz.setAttempt(qid);
   $(".moveon").html("");
   $("#loadQ").html('<h4 id="quizques">'+question[0]+'</h4><div class="choices"><div class="anschoice" id="a1">'+question[1]+'</div><div class="anschoice" id="a2">'+question[2]+'</div><div class="anschoice" id="a3">'+question[3]+'</div><div class="anschoice" id="a4">'+question[4]+'</div></div><button type="button" id="subQuiz" disabled>Submit Quiz</button>');
   $("#tqfirst").css("margin-top", "-300vh");
   $("#tqsecond").css("margin-top", "-200vh");
   $("#tqthird").css("margin-top", "-100vh");
});

$(document).on("click", "#choiceyes", function(){
   //var feewei = fee * 1000000000000000000;
   Quiz.payToPlay(qid).send({from: web3.eth.defaultAccount, gas: 3000000, value: web3.utils.towei(fee, 'ether')}, function(error,result){
      if(!error) {
         console.log("Success");
      } else {
         console.log(error);
      }
   });

   var question = Quiz.getQuiz(qid);
   console.log(question);
   Quiz.setAttempt(qid);
   $("#loadQ").html('<h4 id="quizques">'+question[0]+'</h4><div class="choices"><div class="anschoice" id="a1">'+question[1]+'</div><div class="anschoice" id="a2">'+question[2]+'</div><div class="anschoice" id="a3">'+question[3]+'</div><div class="anschoice" id="a4">'+question[4]+'</div></div><button type="button" id="subQuiz" disabled>Submit Quiz</button>');
   $("#tqfirst").css("margin-top", "-300vh");
   $("#tqsecond").css("margin-top", "-200vh");
   $("#tqthird").css("margin-top", "-100vh");
});

$(document).on("click", "#choiceno", function(){
   $("#tqfirst").css("margin-top", "-100vh");
   $("#tqsecond").css("margin-top", "0vh");
});

$(document).on("click", ".anschoice", function(){
   $(".anschoice").removeClass("picked");
   $(this).addClass("picked");
   $("#subQuiz").prop("disabled", false);
});

$(document).on("click", "#subQuiz", function(){
   var choice = $(".picked").text();
   var score = Quiz.scoreAttempt(qid, choice);
   console.log("Winner: "+score);
   if(score) {
      Quiz.awardLottery(qid, web3.eth.defaultAccount);
   } else {

   }
   $("#tqfirst").css("margin-top", "-400vh");
   $("#tqsecond").css("margin-top", "-300vh");
   $("#tqthird").css("margin-top", "-200vh");
   $("#tqfourth").css("margin-top", "-100vh");
   $("#score").html(score);
});
