import { useEffect, useState } from "react";

const Timer = ({dispatcher, secondsRemaining}) => {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `0${minutes} : ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };


    useEffect(()=>{
        let id = setInterval(()=>{
            dispatcher({type: "tick"})
        },1000);

        return ()=>{
            
            clearInterval(id);
        };
    }, [dispatcher]);

  return (
    <div className="timer">
        {formatTime(secondsRemaining)}
    </div>
  );
};

export default Timer;