import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizList, nextQuiz } from "../../redux/slices.js/quizSlice";
import "./quiz.css";

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
    setTimeout(() => setAnimation(false), 500)
  };

  const [isGuessed, setIsGuessed] = useState(false);
  const [animation, setAnimation] = useState(false)
  const checkAnswer = (answer) => {
    setIsGuessed(answer === quiz.answer);
    setAnimation(true)
    setTimeout(getNextQuiz, 1000)
  };

  return (
    <>
      <div className="quizWrap">
        <div className="quizStatus">
          {isGuessed ? <p>win</p> : <p>failed</p>}
        </div>
        <div className={`quizQuestion ${animation && 'animation'}`}>
          <p>{quiz.question}</p>
        </div>
        <div className={`quizOptions ${animation && 'animation'}`}>
          {quiz.options &&
            quiz.options.map((value) => (
              <button className="quizBtn" onClick={() => checkAnswer(value)}>{value}</button>
            ))}
        </div>
      </div>
    </>
  );
};
