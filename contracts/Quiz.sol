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
      uint pool;
      Question q1;
      mapping(address => bool) attempts;
   }

   mapping(uint => QuizEvent) quizzes;

   uint public numQuizzes;

   event fetchquiz (uint indexed _quizId);   // get quiz questions
   event quiztaken (uint indexed _quizId);   // quiz answers submitted

   constructor () public {
      makeQuiz("Test Quiz 1", 10, "2+2=", "4", "3", "5", "2");
   }

   function makeQuiz (string memory _name, uint _pool, string memory _question, string memory _ans1, string memory _ans2, string memory _ans3, string memory _ans4) private {
      numQuizzes ++;
      quizzes[numQuizzes] = QuizEvent(numQuizzes, _name, _pool, Question(_question, _ans1, _ans2, _ans3, _ans4));
   }

   function getQuiz (uint _quizId) public {
      require(!quizzes[_quizId].attempts[msg.sender]);
      require(_quizId > 0 && _quizId <= numQuizzes);
      quizzes[_quizId].attempts[msg.sender] = true;
      emit fetchquiz(_quizId);
   }

   function scoreAttempt (uint _quizId, string memory _ans) public returns (bool) {
      require(!quizzes[_quizId].attempts[msg.sender]);
      require(_quizId > 0 && _quizId <= numQuizzes);

      if(keccak256(abi.encodePacked(quizzes[_quizId].q1.correctAns)) == keccak256(abi.encodePacked(_ans))) {
         return true;
      } else {
         return false;
      }
   }
}
