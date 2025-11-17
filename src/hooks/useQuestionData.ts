import { useQuestionStore } from '../store/preguntas'

export const useQuestionData = () => {
  const questions = useQuestionStore(state => state.preguntas)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(question => {
    const { usuarioRespuestaSelecionada: userSelectedAnswer, Ncorrecta: correctAnswer} = question
    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}