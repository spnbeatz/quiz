export interface Answer {
    answer: string,
    valid: string
}

export interface Question {
    question: string,
    answers: Answer[]
}