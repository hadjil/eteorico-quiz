
export interface Pregunta {
    // Identificador único de la pregunta.
    id: number; 

    // Texto de la pregunta.
    pregunta: string; 

    // Arreglo que contiene las opciones de respuesta como strings.
    respuestas: string[]; 

    // El número que indica la posición de la respuesta correcta 
    // (normalmente 1, 2, 3, etc., dependiendo de cómo se indexen las respuestas).
    respuestaCorrecta: number; 

    usuarioRespuestaSelecionada?: number; 
    isCorrectRespuestaSeleccionada?: boolean; 


}