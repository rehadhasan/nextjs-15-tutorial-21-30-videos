import {StaticImageData} from "next/image";

import photo1 from "./photos/photo-1.jpg"
import photo2 from "./photos/photo-2.jpg"
import photo3 from "./photos/photo-3.jpg"
import photo4 from "./photos/photo-4.jpg"
import photo5 from "./photos/photo-5.jpg"
import photo6 from "./photos/photo-6.png"
import photo7 from "./photos/photo-7.jpg"
import photo8 from "./photos/photo-8.jpg"

export type WonderImage = {
    id: string,
    name: string,
    src: StaticImageData,
    photographer: string,
    location: string
}

const wondersImages : WonderImage[] = [
    {
        id: "1",
        name: "Great Wall of China",
        src: photo1,
        photographer: "Photo by Max van den Oetelaar on Unsplash",
        location: "China",
    },
    {
        id: "2",
        name: "Petra",
        src: photo2,
        photographer: "Photo by Reiseuhu on Unsplash",
        location: "Jordan",
    },
    {
        id: "3",
        name: "Christ the Redeemer",
        src: photo3,
        photographer: "Photo by Andrea Leopardi on Unsplash",
        location: "Brazil",
    },
    {
        id: "4",
        name: "Machu Picchu",
        src: photo4,
        photographer: "Photo by Jared Schwitzke on Unsplash",
        location: "Peru",
    },
    {
        id: "5",
        name: "Chichen Itza",
        src: photo5,
        photographer: "Photo by E Mens on Unsplash",
        location: "Mexico",
    },
    {
        id: "6",
        name: "Roman Colosseum",
        src: photo6,
        photographer: "Photo by Andrea Cipriano on Unsplash",
        location: "Italy",
    },
    {
        id: "7",
        name: "Taj Mahal",
        src: photo7,
        photographer: "Photo by Su San Lee on Unsplash",
        location: "India",
    },
    {
        id: "8",
        name: "Taj Mahal",
        src: photo8,
        photographer: "Photo by Su San Lee on Unsplash",
        location: "India",
    },
]

export default wondersImages;