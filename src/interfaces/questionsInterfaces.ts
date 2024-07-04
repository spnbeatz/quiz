export interface Answer {
    answer: string,
    valid?: string,
    index: number
}

export interface Question {
    question: string | string[],
    choices: number[],
    typ: string,
    answers: Answer[],

    
}