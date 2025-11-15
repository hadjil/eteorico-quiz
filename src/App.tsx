import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start'
import { useQuestionStore } from './store/preguntas'

function App() {
  const preguntas = useQuestionStore((state) => state.preguntas)
  console.log(preguntas)
  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems={"center"} justifyContent="center">

          <JavaScriptLogo /> 
         <Typography variant="h2" component="h1">
           e-Teorico Quizzz
         </Typography>
        </Stack>

        {preguntas.length > 0 &&<h1>Cargando preguntas...</h1>}
        <Start />
      </Container>
    </main>
 
  )
}

export default App
