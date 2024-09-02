import Option from "./Option";
import ProgressBar from "./ProgressBar";


const Question = ({currentQuestion, dispatcher, answer, index, numQuestions, points, maxPossiblePoints}) => {
  return (
    <>
    <ProgressBar index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
    <div>
      <h4>{currentQuestion.question}</h4>
      <Option currentQuestion={currentQuestion} dispatcher={dispatcher} answer={answer}/>
    </div>
    </>
  );
};

export default Question;