import { Button } from "@mui/material"
import { useQuestionStore } from "./store/preguntas"


const LIMIT_QUESTIONS = 12

export  const Start = () =>{
    const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)
    const handleClick = () =>{
        fetchQuestions(LIMIT_QUESTIONS)
    }
    return(
        <Button onClick={handleClick} variant='contained'>Empezar    
        </Button>
    )

}