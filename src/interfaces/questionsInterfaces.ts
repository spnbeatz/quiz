export interface Answer {
    answer: string,
    valid: string,
    index?: number
}

export interface Question {
    question: string,
    choice: number,
    choices: number[],
    typ: string,
    answers: Answer[],
    
}