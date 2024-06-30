import { Answer, Question } from "@/interfaces/questionsInterfaces";

export function shuffleAnswers(array: Answer[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getRandomElements(array: Question[], numElements: number) {
    let copyArray = array.slice();
    let randomElements = [];

    while (randomElements.length < numElements && copyArray.length > 0) {
        let randomIndex = Math.floor(Math.random() * copyArray.length);
        randomElements.push(copyArray[randomIndex]);

        copyArray.splice(randomIndex, 1);
    }
    console.log(randomElements, 'randomelements');
    return randomElements;
}