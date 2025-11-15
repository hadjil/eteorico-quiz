import { create } from "zustand";
import { type Pregunta } from '../types'

interface State{
    preguntas: Pregunta[]
    preguntaActual: number
    fetchQuestions:(limit:number)=> Promise<void>
    
}

export const useQuestionStore = create<State>((set, get)=>({
    preguntas: [],
    preguntaActual: 0,
    fetchQuestions: async (limit: number) => {  
        set({
            preguntas:[
                {
                    id: 1,
                    pregunta: '¿Cuál de los siguientes tiene como principal objetivo el prevenir accidentes de tránsito?',
                    respuestas: [
                        'Las señales informativas de tránsito.',
                        'La seguridad vial.',
                        'La accidentología vial.'
                    ],
                    respuestaCorrecta: 2
                }
            ]
        })
    }

}))