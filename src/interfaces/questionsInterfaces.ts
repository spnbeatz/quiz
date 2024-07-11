export interface Answer {
    answer: string,
    valid?: string,
    index: number
}

export interface Question {
    id: string,
    question: string | string[],
    choices: number[],
    typ: string,
    answers: Answer[],

    
}