import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Result from './components/Result';
import Footer from './components/Footer';
import Timer from './components/Timer';
import NextButton from './components/NextButton';
import Main from './Main.jsx';
import {useQuiz } from './context/QuizContext.jsx';

// const initialState = {
//   questions: [],
//   //loading, error, ready, active, finished
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null
// }

// const SECS_PER_QUE = 30;

// function reducer(state, action){
//   switch(action.type){
//     case "dataReceived": {
//       return {...state, questions: action.payLoad, status: "ready"}
//     }
//     case "dataFailed": {
//       return {...state, status: "error"}
//     }
//     case "start": {
//       return {...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUE}
//     }
//     case "newAnswer": {
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payLoad,
//         points: action.payLoad === question.correctOption ? state.points + question.points : state.points
//       }
//     }
//     case "nextQuestion": {
//       return {
//         ...state,
//         index: state.index + 1,
//         answer: null
//       }
//     }
//     case "finished": {
//       return {
//         ...state,
//         status: "finished",
//         highscore: state.points > state.highscore ? state.points : state.highscore
//         }
//     }
//     case "restart": {
//       return {...state, status: "ready", index: 0, points: 0, secondsRemaining: 5, answer: null}
//     }
//     case "tick": {
//       return {...state, 
//         secondsRemaining: state.secondsRemaining - 1, 
//         status: state.secondsRemaining === 0 ? "finished" : state.status, 
//         highscore: state.secondsRemaining === 0 ? state.points > state.highscore ? state.points : state.highscore : state.highscore
//       }
//     }
//     default: {
//       throw new Error("Action Unknown");
//     }
//   }
// }


const App = () => {
  // const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatcher] = useReducer(reducer, initialState);
  // let numQuestions = questions.length;
  // const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  // console.log(index);
  
  
  // useEffect(()=>{
  //  async function fetchData(){
  //     try{
  //       let res = await fetch("http://localhost:8000/questions");
  //       let data = await res.json();

  //       dispatcher({type: "dataReceived", payLoad: data});
  //     }
  //     catch(err){
  //       console.log(err.message);
        
  //       dispatcher({type: "dataFailed"});
  //     }
  //   }

  //   fetchData();
  // }, []);

  // function handleClick(){
  //   dispatcher({type: "start"})
  // }
  const {status} = useQuiz();

  return (
  <div className="app">
      <Header/>
      <Main>
        {status === "loading" && <Loader/>}
        {status === "error" && <Error/>}
        {status === "ready" && <StartScreen/>}
        {status === "active" && <Question/>}
        {status === "finished" && <Result/>}

        {status === "active" && 
          <Footer>
            <Timer/>
            <NextButton/>
          </Footer>
        }
      </Main>
  </div>
  );
}

export default App;