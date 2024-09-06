import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
    questions: [],
    //loading, error, ready, active, finished
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null
}
  
const SECS_PER_QUE = 30;

function reducer(state, action){
    switch(action.type){
      case "dataReceived": {
        return {...state, questions: action.payLoad, status: "ready"}
      }
      case "dataFailed": {
        return {...state, status: "error"}
      }
      case "start": {
        return {...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUE}
      }
      case "newAnswer": {
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payLoad,
          points: action.payLoad === question.correctOption ? state.points + question.points : state.points
        }
      }
      case "nextQuestion": {
        return {
          ...state,
          index: state.index + 1,
          answer: null
        }
      }
      case "finished": {
        return {
          ...state,
          status: "finished",
          highscore: state.points > state.highscore ? state.points : state.highscore
          }
      }
      case "restart": {
        return {...state, status: "ready", index: 0, points: 0, secondsRemaining: 5, answer: null}
      }
      case "tick": {
        return {...state, 
          secondsRemaining: state.secondsRemaining - 1, 
          status: state.secondsRemaining === 0 ? "finished" : state.status, 
          highscore: state.secondsRemaining === 0 ? state.points > state.highscore ? state.points : state.highscore : state.highscore
        }
      }
      default: {
        throw new Error("Action Unknown");
      }
    }
}

const QuizProvider = ({children}) => {
    const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatcher] = useReducer(reducer, initialState);
    let numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
    const currentQuestion = questions[index];
     
    function handleClick(){
        dispatcher({type: "start"});
        console.log("hello");
        
    }

    return (
        <QuizContext.Provider value={{
            questions, 
            currentQuestion,
            status, 
            index, 
            answer, 
            points, 
            highscore, 
            secondsRemaining,
            numQuestions,
            maxPossiblePoints,
            dispatcher,
            handleClick
        }}>
        {children}
        </QuizContext.Provider>
    );
};

function useQuiz(){
    const context = useContext(QuizContext);

    if(context === undefined){
        throw new Error("QuizContext is used outside of QuizProvider");
    };

    return context;
}

export {QuizProvider, useQuiz};