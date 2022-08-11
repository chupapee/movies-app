import axios from "axios"

export const quizApi = {
  list: [],
  count: 0,
  fetchQuizList() {
    return axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
      .then(response => {
        response.data.results.forEach(questionInfo => {
          // let obj = {}
          // obj[this.count] = questionInfo.question
          // this.count++
          // this.list.push(obj)
          this.list = [...this.list, ({[this.count]: questionInfo.question})]
          this.count++
        })
      })
      .then(() => this.list)
  }
}