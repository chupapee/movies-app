import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuizList } from "../../redux/slices.js/quizSlice"
export const Quiz = () => {
  
  // const [quizList, setQuizList] = useState([])
  const quizList = useSelector((state) => state.quiz.quizList)
  const dispatch = useDispatch()

  const getQuiz = () => {
    dispatch(getQuizList())
  }

  function handleClik(){
    getQuiz()
  }
  console.log(quizList);

  return (
    <>
    <div style={{height: '100vh'}}>
      <button onClick={handleClik}>click</button>
    </div>
    </>
  )
}