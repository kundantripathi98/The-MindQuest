import { useQuiz } from "../context/QuizContext";

const Result = () => {
    const {points, maxPossiblePoints, dispatcher, highscore} = useQuiz();
    const percentage = Math.round((points / maxPossiblePoints) * 100);
    let emoji;

    if(percentage === 100) emoji = "🥇";
    if(percentage >=80 && percentage < 100) emoji = "🥳";
    if(percentage >=50 && percentage < 80) emoji = "😁";
    if(percentage >= 0 && percentage < 50) emoji = "🤔";
    if(percentage == 0) emoji = "🤦";

  return (
    <>
      <p className="result"><span>{emoji}</span>You scored {points} out of {maxPossiblePoints} ({percentage}%)</p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button className="btn btn-ui" onClick={()=> dispatcher({type: "restart"})}>Restart quiz</button>
    </>
  );
};

export default Result;