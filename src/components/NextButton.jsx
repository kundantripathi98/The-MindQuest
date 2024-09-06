import { useQuiz } from "../context/QuizContext";

const NextButton = () => {
    const {answer, dispatcher, index, numQuestions} = useQuiz();
    if(answer === null) return;
    
    if(index < numQuestions-1){
        return <button className="btn btn-ui" onClick={()=> dispatcher({type: "nextQuestion"})}>Next</button>
    }
    
    return <button className="btn btn-ui" onClick={()=> dispatcher({type: "finished"})}>Finish</button>
};

export default NextButton;
