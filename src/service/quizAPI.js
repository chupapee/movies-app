import axios from "axios"

function shuffleArray(list) {
  let array = [...list]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

export const quizApi = {
  list: [],
  fetchQuizList() {
    return axios.get('https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple&encode=base64')
      .then(response => {
        response.data.results.forEach(questionInfo => {
          let preoptions = questionInfo.incorrect_answers.map(el => atob(el))
          preoptions.push(atob(questionInfo.correct_answer))
          let options = shuffleArray(preoptions)
          this.list = [...this.list, ({
            ['question']: atob(questionInfo.question),
            ['answer']: atob(questionInfo['correct_answer']),
            ['options']: options,
          })]
        })
      })
      .then(() => this.list)
  }
}
