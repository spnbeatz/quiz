import DefaultLayout from "@/layouts/default";
import { useParams } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import subjects from "@/data/subjects.json";
import { CardImage } from "@/components/atoms/cardImages";
import { CardHeader } from "@/components/molecules/CardHeader";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { TopicListItem } from "@/components/molecules/TopicListItem";
import { Icon } from "@/components/atoms/getIcon";
import {Divider} from "@nextui-org/divider";

interface SubjectType {
    id: string; name: string; image: string; icon: string; topics: string[];
}

const topics = [
    "Wprowadzenie do ekonomii",
    "Gospodarka rynkowa",
    "Elastyczność popytu i przychodu przedsiębiorstw",
    "Popyt konsumenta",
    "Podstawy decyzji ekonomicznych producenta",
    "Koszty produkcji",
    "Modele struktury rynku",
    "Maksymalizacja zysku w konkurencji doskonałej i monopolu"
]

const Title = ({title}: {title:string}) => {
    return (
        <p className="text-sm text-white absolute left-4 -top-2">{title}</p>
    )
}

export const SubjectPage = () => {

    const { subject } = useParams();

    const [ data, setData ] = useState<SubjectType | null>();
    const [ topicData, setTopicData ] = useState<string | null>();

    useEffect(() => {
        const foundData = subjects.find((item) => item.id === subject);
        if(foundData) setData(foundData);
    },[]);

    return (
        <DefaultLayout>
            <div className="w-full flex gap-2 mb-2 items-center">
                <p className="big-header">{data? data.name : ""} </p>
                <Icon name={data ? data.icon : ""} size="lg" color="black" />
                
            </div>
            <div className="flex justify-between items-center w-full h-full gap-4">
                <div 
                    className="w-1/4 h-full bg-black relative overflow-hidden rounded-lg animate-appearance-in flex flex-col justify-between items-center"
                    style={{
                        animationDuration: "200ms"
                    }}
                >
                    <CardHeader name="podsumowanie" icon={"info"} />
                    <CardImage name={data?.image} className="h-full absolute blur-lg -z-10"/>
                    <div className="bg-black/60 w-11/12 p-4 rounded-md flex relative">
                        <Title title="Opis"/>
                        <p className="text-xs text-white/80">{data ? data.description.substring(0, 100) + "..." : ""}<p className="text-blue-300">Więcej informacji.</p></p>
                        
                    </div>
                    <div className="bg-black/60 w-11/12 p-4 rounded-md relative">
                        <Title title="Ostatni temat"/>
                        <p className="text-xs text-white/80">
                            {topics[3]}
                        </p>
                    </div>
                    <div className="w-full p-4">
                        <ProgressBar label="Twój postęp" value={35} />
                    </div>
                </div>
                <div className="h-full w-2/4 overflow-y-scroll bg-white rounded-md shadow-medium scrollbar-hide flex flex-col justify-between items-center">
                    <CardHeader name="Tematy" icon="list" withBackground={false} color="black"/>
                    <div className="w-full flex text-black justify-between items-center px-9 text-xs font-semibold">
                        <p className="w-1/3">Nazwa tematu</p>
                        <p className="w-1/12">Ilość pytań</p>
                        <p className="w-1/12 ">Ilość fiszek</p>
                        <p className="w-2/5 ">Progres</p>
                    </div>
                    <div className="w-full h-full p-5 overflow-y-scroll">
                        {topics.map((item: string, index: number) => {
                            return (
                                <div>
                                    <TopicListItem title={item} key={item} index={index}/>
                                    <Divider />
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-md shadow-medium">

                </div>
            </div>

        </DefaultLayout>
    )
}