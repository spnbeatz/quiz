import Ekonomia_Quiz_1 from "@/data/ekonomia/tematy/temat_1.json";
import Ekonomia_Cards_1 from "@/data/ekonomia/fiszki/temat_1.json";

import EkonomiaImage from "@/assets/ekonomia_image.jpg";
import InformatykaImage from "@/assets/informatyka_image.jpg";

export const ekonomiaSubject = {
    name: "Ekonomia",
    image: EkonomiaImage,
    icon: "stats-chart",
    topics: [
        {
            id: "1",
            quiz: Ekonomia_Quiz_1,
            flashcards: Ekonomia_Cards_1
        }
    ],


}

export const informatykaSubject = {
    name: "Informatyka",
    image: InformatykaImage,
    icon: "hardware-chip",
    topics: []
}

export type SubjectType  = typeof ekonomiaSubject;