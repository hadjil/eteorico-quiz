//import{IconButton ,Stack} from '@mui/material'
import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material"
import { useQuestionStore } from "./store/preguntas"
import{ type Pregunta as QuestionType} from './types'
import confetti from 'canvas-confetti'
import {  ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { Footer } from "./Footer"
const Question =({info}:{info:QuestionType})=>{

   
   
    const selectAnswer = useQuestionStore((state) => state.selectAnswer)
    
     const createHandleClick = (answerIndex:number) => () => {

         selectAnswer(info.id,answerIndex)

    }
 

   const getBackgroundColor = (info: QuestionType, index: number) => {
    const { usuarioRespuestaSelecionada: userSelectedAnswer, Ncorrecta: correctAnswer } = info

    if (userSelectedAnswer == null) return 'transparent'

    if (index === userSelectedAnswer) {
     
        console.log("Index "+index)
         console.log("Pregunta "+info.pregunta)
          console.log(" Referencia al Manual "+info.referencia)
          console.log("Respuesta"+ info.respuestas[index])
           console.log("Respuesta Buena "+ info.Ncorrecta)
            console.log("Selecciono algo "+ info.usuarioRespuestaSelecionada)
           return userSelectedAnswer === correctAnswer ? 'green' : 'red'
     
    }

    if (index === correctAnswer) {
       
      return 'green'
    }

    if(correctAnswer==userSelectedAnswer){
        confetti()
    }

    return 'transparent'
  }

  const isButtonDisabled = info.usuarioRespuestaSelecionada != null;


    return(
        <Card variant="outlined">
            <Typography variant="h5" >
                {info.pregunta}
            </Typography>

            <List sx ={{bgColor:'#fff'}}>
            {info.respuestas.map((respuesta,index)=>(
                <ListItem key={index} disablePadding divider>
                    <ListItemButton
                    disabled={isButtonDisabled}
                    onClick={createHandleClick(index)}
                        sx={{
                            bgcolor: getBackgroundColor(info,index)
                        }}>
                        <ListItemText primary={respuesta} />
                    </ListItemButton>
                </ListItem>
               
            ))}
                
            </List>


         
        </Card>

    )
}

export const Game=()=>{
    const preguntas = useQuestionStore((state) => state.preguntas)
    const currentQuestion = useQuestionStore((state) => state.preguntaActual)

    const questionInfo= preguntas[currentQuestion]
    const referencia=preguntas[currentQuestion].referencia
    const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
    const goPreviousQuestion = useQuestionStore((state) => state.goPreviousQuestion)


    return(
         <>
         <Stack direction='row' gap={2} alignItems={'center'} justifyContent='center'>
            <IconButton onClick={goPreviousQuestion} disabled={currentQuestion===0}>
                <ArrowBackIosNew/>
            </IconButton>

            {currentQuestion+1}/{preguntas.length}

             <IconButton onClick={goNextQuestion} disabled={currentQuestion >= preguntas.length - 1}>
                <ArrowForwardIos/>
            </IconButton>
         </Stack>
            <Question info= {questionInfo}/>
            <Footer />
              {referencia}
          
         </>

    )


}