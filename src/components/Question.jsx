import { useQuiz } from "../context/QuizContext";
import Option from "./Option";
import ProgressBar from "./ProgressBar";


const Question = ({currentQuestion, dispatcher, answer, index, numQuestions, points, maxPossiblePoints}) => {
  const {currentQuestion} = useQuiz();

  return (
    <>
    <ProgressBar/>
    <div>
      <h4>{currentQuestion.question}</h4>
      <Option currentQuestion={currentQuestion} dispatcher={dispatcher} answer={answer}/>
    </div>
    </>
  );
};

export default Question;