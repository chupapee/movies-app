import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizList, nextQuiz } from "../../redux/slices.js/quizSlice";
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
  const handleQuiz = () => {
    setCountQuiz(countQuiz + 1);
    dispatch(nextQuiz(countQuiz));
  };
  
  return (
    <>
      <div style={{ height: "100vh" }}>
        <button onClick={handleQuiz}>click</button>
        <p>{quiz.question}</p>
          {quiz.options && quiz.options.map(value => {
            return <button>{value}</button>
          })}
      </div>
    </>
  );
};
