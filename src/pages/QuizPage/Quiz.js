import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizList, nextQuiz } from "../../redux/slices.js/quizSlice";
import s from "./quiz.module.css";

export const Quiz = () => {
  const quiz = useSelector((state) => state.quiz.currentQuiz);
  const dispatch = useDispatch();

  const getQuiz = () => {
    dispatch(getQuizList());
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const [countQuiz, setCountQuiz] = useState(0);
  const getNextQuiz = () => {
    setCountQuiz(countQuiz + 1);
    dispatch(nextQuiz(countQuiz));
    setTimeout(() => setAnimation(false), 500);
  };

  const [isGuessed, setIsGuessed] = useState(false);
  const [animation, setAnimation] = useState(false);
  const checkAnswer = (answer) => {
    setIsGuessed(answer === quiz.answer);
    setAnimation(true);
    setTimeout(getNextQuiz, 1000);
  };

  const tick = () => {
    if(timer === 0) return
    setTimer(timer - 1)
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const [timer, setTimer] = useState(5);

  return (
    <>
      <div className={s.quizWrap}>
        <div className={s.quizTimer}>
          <span>{timer}</span>
        </div>
        <div className={s.quizStatus}>
          {isGuessed ? <p>win</p> : <p>failed</p>}
        </div>
        <div className={`${s.quizQuestion} ${animation && s.animation}`}>
          <p>{quiz.question}</p>
        </div>
        <div className={`${s.quizOptions} ${animation && s.animation}`}>
          {quiz.options &&
            quiz.options.map((value) => (
              <button className={s.quizBtn} onClick={() => checkAnswer(value)}>
                {value}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};
