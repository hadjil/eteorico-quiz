import { create } from "zustand";
import { type Pregunta } from '../types'


interface State{
    preguntas: Pregunta[]
    preguntaActual: number
  
    fetchQuestions:(limit:number)=> Promise<void>
    selectAnswer: (questionId: number, answerIndex: number) => void
    
    goNextQuestion: () => void
    goPreviousQuestion: () => void
    reset: () => void
    
    
    
}




export const useQuestionStore = create<State>((set, get)=>({
    
    preguntas: [],
    preguntaActual: 0,
    fetchQuestions: async (limit: number) => { 
        const res=await fetch('/data.json')
        const json=await res.json()
     

        const PreguntasDesordenadas= json.sort(()=>Math.random()-0.5).slice(0,limit)
        set({preguntas:PreguntasDesordenadas})
    
      
    },
    //Utilizando Structured clone para Clonar objetos
    selectAnswer: (questionId:number, answerIndex:number)=>{
        const {preguntas}=get()
        const newPreguntas=structuredClone(preguntas)
        const QuestionIndex= newPreguntas.findIndex(q => q.id=== questionId)
        const questionInfo= newPreguntas[QuestionIndex]
        const isCorrectUserAnswer= questionInfo.Ncorrecta === answerIndex
        newPreguntas[QuestionIndex]={
            ...questionInfo,
            isCorrectRespuestaSeleccionada:isCorrectUserAnswer,
            usuarioRespuestaSelecionada: answerIndex
        }
        set({preguntas:newPreguntas})
    },

    goNextQuestion:()=>{
        const {preguntaActual,preguntas}=get()
        const nextQuestion=preguntaActual+1
        if(nextQuestion<preguntas.length){
            set({preguntaActual:nextQuestion})
        }
        
        },
        
    reset:()=>{
            set({preguntaActual:0,preguntas:[]})
        },


        goPreviousQuestion:()=>{
        const {preguntaActual}=get()
        const previousQuestion=preguntaActual-1

        if(previousQuestion>=0){
            set({preguntaActual:previousQuestion})
        }
        

        
    }}))