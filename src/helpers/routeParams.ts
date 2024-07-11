import Ekonomia_Temat_1 from '@/data/ekonomia/tematy/temat_1.json';
import topics from "@/data/topics.json";
import questions from "@/data/questions.json";
import { Question } from '@/interfaces/questionsInterfaces';


export const chooseData = (topicId: string | undefined): Question[] => {
    const topic = topics.find((item) => item.id === topicId);
    const data: Question[] = []; // Wyraźnie typujemy, że data jest tablicą typu Question

    if (topic) {     
        for (let i = 0; i < topic.questions.length; i++) {
            const question = questions.find((que) => que.id === topic.questions[i]);
            if (question) { // Sprawdzamy, czy question nie jest undefined
                data.push(question);
            }
        }
    }
    console.log(data, 'route data');
    return data;
}


