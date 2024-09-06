import { useQuiz } from "../context/QuizContext";
import Option from "./Option";
import ProgressBar from "./ProgressBar";


const Question = () => {
  const {questions, index} = useQuiz();

  return (
    <>
    <ProgressBar/>
    <div>
      <h4>{questions[index].question}</h4>
      <Option/>
    </div>
    </>
  );
};

export default Question;