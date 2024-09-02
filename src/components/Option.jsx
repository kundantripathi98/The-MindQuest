const Option = ({ currentQuestion, dispatcher, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {currentQuestion.options.map((option, index) => (
        <button
          className ={`btn btn-option ${ index === answer ? "answer" : ""} ${hasAnswered ? currentQuestion.correctOption === index ? "correct" : "wrong" : ""}`}
          disabled={hasAnswered}
          onClick={(e) => {
            dispatcher({ type: "newAnswer", payLoad: index });
          }}
          key={index} 
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
