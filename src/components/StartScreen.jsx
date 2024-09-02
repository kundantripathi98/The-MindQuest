const StartScreen = ({numQuestions, onClick}) => {
  return (
    <div className="start">
      <h2>Welcome to The Mind Quest</h2>
      <h3>Here are {numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={onClick}>Let&apos;s start</button>
    </div>
  );
};

export default StartScreen;