import Ekonomia_Temat_1 from '@/data/ekonomia/tematy/temat_1.json';

export const chooseData = (param: string | undefined) => {
    switch (param){
        case "ekonomia_temat_1":
            return Ekonomia_Temat_1
        default: return null;
    }
}