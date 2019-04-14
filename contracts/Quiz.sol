pragma solidity ^0.5.0;

contract Quiz {
 mapping(address => uint) pay;
   // Structure of a Question
   // Each Question has four answer choices and only one correct anser choice
   struct Question {
      string question;
      string correctAns;
      string wrongAns1;
      string wrongAns2;
      string wrongAns3;
   }

   // Structure of a Quiz
   struct QuizEvent {
      uint id;
      string name;
      uint fee;
      uint pool;
      Question q1;
      mapping(address => bool) hasPaid;
      mapping(address => bool) attempts;


   }

   mapping(uint => QuizEvent) quizzes;

   uint public numQuizzes;

   event fetchquiz (uint indexed _quizId);   // get quiz questions
   event quiztaken (uint indexed _quizId);   // quiz answers submitted

   // Upon contract creation, initialize number of quizzes to 0 and create a new Quiz Event
   constructor () public {
      numQuizzes = 0;
      makeQuiz("Test Quiz 1", 1, 10, "2+2=", "4", "3", "5", "2");

   }

   // Increment number of quizzes
   // Create a new QuizEvent and add it to the list of quizzes
   function makeQuiz (string memory _name, uint _fee, uint _pool, string memory _question, string memory _ans1, string memory _ans2, string memory _ans3, string memory _ans4) public {
      numQuizzes ++;
      quizzes[numQuizzes] = QuizEvent(numQuizzes, _name, _fee, _pool, Question(_question, _ans1, _ans2, _ans3, _ans4));
      quizzes[numQuizzes].attempts[msg.sender] = true;
   }

   // Requires that the quiz event exists
   // Requires that the account trying to access the quiz information has not taken it before
   // Once the account receives the quiz, add the account to the list of accounts that have
   // attempted this quiz
   function getQuiz (uint _quizId) view public returns (string memory, string memory, string memory, string memory, string memory) {
      require(_quizId > 0 && _quizId <= numQuizzes);
      require(!quizzes[_quizId].attempts[msg.sender]);
     // quizzes[_quizId].attempts[msg.sender] = true;
      //emit fetchquiz(_quizId);
      Question memory q = quizzes[_quizId].q1;
      return (q.question, q.correctAns, q.wrongAns1, q.wrongAns2, q.wrongAns3);
   }

   // Requires that the quiz exists
   // Requires that the account has not attempted the quiz before
   // Allows users to send money
   // The contract's account balance will hold all of the ether for all QuizEvent pools
   // Add fee to the pool of _quizId
   //Require that amount paid is greater than equal to current amount in Pool
   //Fetch the quiz for the user to access.
   function payToPlay (uint _quizId) public payable {
      require(_quizId > 0 && _quizId <= numQuizzes);
      require(!quizzes[_quizId].attempts[msg.sender]);
      userPay();
      quizzes[_quizId].pool += msg.value;
      require(msg.value >= quizzes[_quizId].fee);
      emit fetchquiz(_quizId);
   }

   function getNum() public view returns (uint) {
       return numQuizzes;
   }

   // Requires that the quiz exists
   // Returns the current pool amount of the QuizEvent _quizId
   function getPoolAmount (uint _quizId) view public returns (uint) {
      require(_quizId > 0 && _quizId <= numQuizzes);
      return quizzes[_quizId].pool;
   }

   function getCorr(uint _quizId) view public returns (string memory) {
       return quizzes[_quizId].q1.correctAns;
   }

   // Requires that the quiz event exists
   // Requires that the account has paid the fee to attempt the quiz
   // Requires that the account has attempted the quiz
   // Hashes the question's correct answer and the answer submitted by the account and compares
   // the two Hashes
   // If the two hashes are equal, then return true, otherwise false
   function scoreAttempt (uint _quizId, string memory _ans) view public returns (bool) {
      require(_quizId > 0 && _quizId <= numQuizzes);
      require(quizzes[_quizId].hasPaid[msg.sender]);
      require(quizzes[_quizId].attempts[msg.sender]);

      return (keccak256(abi.encodePacked(_ans)) == keccak256(abi.encodePacked(quizzes[_quizId].q1.correctAns)));
   }

   // Requires that the account has paid the fee to attempt the quiz
   // Requires that the account has attempted the quiz
   // Transfer the amount of ether in the pool of _quizId to the winner
   // Set the _quizId pool amount to 0
   function awardLottery (uint _quizId, address payable _winner) private {
      require(quizzes[_quizId].hasPaid[msg.sender]);
      require(quizzes[_quizId].attempts[msg.sender]);
      _winner.transfer(quizzes[_quizId].pool);
      quizzes[_quizId].pool = 0;
   }

   function ifPlayed(uint _quizId)view private returns (string memory, string memory, string memory, string memory, string memory){
    require(!quizzes[_quizId].attempts[msg.sender]); //requires that this is the user's first attempt
    require(quizzes[_quizId].hasPaid[msg.sender]);
    getQuiz(_quizId);

   }
   //Allows user to send money to our account
   function userPay()payable public{
       pay[msg.sender] = msg.value;
   }
}
