import { Button } from "@mui/material"
import { useQuestionStore } from "./store/preguntas"
export  const Start = () =>{
    const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)
    const handleClick = () =>{
        fetchQuestions(5)
    }
    return(
        <Button onClick={handleClick} variant='contained'>Empezar    
        </Button>
    )

}