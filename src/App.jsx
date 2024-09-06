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


const App = () => {
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