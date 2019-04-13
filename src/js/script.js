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
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]);

$("#conn").click(function(){
   var Quiz = QuizContract.at($("#conaddress").val());
   console.log(Quiz);
});

$("#makeQuiz").click(function() {
   Quiz.makeQuiz($("#qName").val(),$("#qFee").val(),$("#qPool").val(),$("#qQuestion").val(),$("#qCorrect").val(),$("#qWrong1").val(),$("#qWrong2").val(),$("#qWrong3").val());

   Quiz.getQuiz(function(error, result){
      if(!error) {
         $("#result").html(result);
      } else {
         console.log(error);
      }
   });
});
