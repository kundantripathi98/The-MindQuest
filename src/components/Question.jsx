import { useQuiz } from "../context/QuizContext";
import Option from "./Option";
import ProgressBar from "./ProgressBar";


const Question = () => {
  const {currentQuestion} = useQuiz();
  
  return (
    <>
    <ProgressBar/>
    <div>
      <h4>{currentQuestion.question}</h4>
      <Option/>
    </div>
    </>
  );
};

export default Question;