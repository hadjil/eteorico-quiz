import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import {  TrafficLightIcon } from './JavaScriptLogo'
import { Start } from './Start'
import { useQuestionStore } from './store/preguntas'
import { Game } from './Game'


function App() {
  const preguntas = useQuestionStore((state) => state.preguntas)

  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems={"center"} justifyContent="center">

    
          <TrafficLightIcon />
         <Typography variant="h2" component="h2">
           e-Teórico Quizz
         </Typography>
        </Stack>

      

        {preguntas.length === 0 && <Start />}
        {preguntas.length > 0 && <>
          <Game />
        
        </>}
      </Container>
    </main>
 
  )
}

export default App
