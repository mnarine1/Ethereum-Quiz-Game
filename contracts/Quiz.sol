pragma solidity ^0.5.0;

contract Quiz {

   struct Question {
      string question;
      string correctAns;
      string wrongAns1;
      string wrongAns2;
      string wrongAns3;
   }

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
   function makeQuiz (string memory _name, uint _fee, uint _pool, string memory _question, string memory _ans1, string memory _ans2, string memory _ans3, string memory _ans4) private {
      numQuizzes ++;
      quizzes[numQuizzes] = QuizEvent(numQuizzes, _name, _fee, _pool, Question(_question, _ans1, _ans2, _ans3, _ans4));
   }

   // Requires that the account trying to access the quiz information has not taken it before
   // Requires that the quiz event exists
   // Once the account receives the quiz, add the account to the list of accounts that have
   // attempted this quiz
   function getQuiz (uint _quizId) public {
      require(!quizzes[_quizId].attempts[msg.sender]);
      require(_quizId > 0 && _quizId <= numQuizzes);
      quizzes[_quizId].attempts[msg.sender] = true;
      emit fetchquiz(_quizId);
   }

   // Requires that the account has not attempted the quiz before
   // Requires that the quiz exists
   function payToPlay(uint _quizId) {
      require(!quizzes[_quizId].attempts[msg.sender]);
      require(_quizId > 0 && _quizId <= numQuizzes);
   }

   // Requires that the quiz exists
   // Returns the current amount of the pool of QuizEvent _quizId
   function getPoolAmount(uint _quizId) public returns (uint) {
      require(_quizId > 0 && _quizId <= numQuizzes);
      return quizzes[_quizId].pool;
   }

   // Requires that the account has attempted the quiz
   // Requires that the quiz event exists
   // Hashes the question's correct answer and the answer submitted by the account and compares
   // the two Hashes
   // If the two hashes are equal, then return true, otherwise false
   function scoreAttempt (uint _quizId, string memory _ans) public returns (bool) {
      require(quizzes[_quizId].attempts[msg.sender]);
      require(_quizId > 0 && _quizId <= numQuizzes);

      if(keccak256(abi.encodePacked(quizzes[_quizId].q1.correctAns)) == keccak256(abi.encodePacked(_ans))) {
         return true;
      } else {
         return false;
      }
   }

   // Requires that the account has attempted the quiz
   function awardLottery(uint _quizId, address _winner) private {
      require(quizzes[_quizId].attempts[msg.sender]);
      _winner.transfer(quizzes[_quizId].pool);
   }
}
