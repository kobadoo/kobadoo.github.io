import React from 'react';

const audio = require.context("../../audio", true);

const KIDS_MAP = [
    {text: "Un ratón", question: "¿Dónde está el ratón?", hex: 0x1F401, fileName: "mouse", lang: "es"},
    {text: "Una vaca", question: "¿Dónde está la vaca?", hex: 0x1F404, fileName: "cow", lang: "es"},
    {text: "Un conejo", question: "¿Dónde está el conejo?", hex: 0x1F407, fileName: "rabbit", lang: "es"},
    {text: "Un gato", question: "¿Dónde está el gato?", hex: 0x1F408, fileName: "cat", lang: "es"},
    {text: "Un cocodrilo", question: "¿Dónde está el cocodrilo?", hex: 0x1F40A, fileName: "cocodrile", lang: "es"},
    {text: "Una ballena", question: "¿Dónde está la ballena?", hex: 0X1F40B, fileName: "whale", lang: "es"},
    {text: "Un caracol", question: "¿Dónde está el caracol?", hex: 0x1F40C, fileName: "snell", lang: "es"},
    {text: "Un elefante", question: "¿Dónde está el elefante?", hex: 0x1F418, fileName: "elephant", lang: "es"},
    {text: "Un pez", question: "¿Dónde está el pez?", hex: 0x1F41F, fileName: "fish", lang: "es"},
    {text: "Un koala", question: "¿Dónde está el koala", hex: 0x1F428, fileName: "koala", lang: "es"},
    {text: "Un caballo", question: "¿Dónde está el caballo?", hex: 0x1F434, fileName: "horse", lang: "es"},
    {text: "Un mono", question: "¿Dónde está el mono?", hex: 0x1F435, fileName: "monkey", lang: "es"},    
    {text: "Un perro", question: "¿Dónde está un perro?", hex: 0x1F436, fileName: "dog", lang: "es"},
    {text: "Un cerdo", question: "¿Dónde está el cerdo?", hex: 0x1F437, fileName: "pig", lang: "es"}, 
    {text: "Una rana", question: "¿Dónde está la rana?", hex: 0x1F438, fileName: "frog", lang: "es"},
    {text: "Un oso panda", question: "¿Dónde está el oso panda?", hex: 0x1F43C, fileName: "panda", lang: "es"},
    {text: "Un balón", question: "¿Dónde está el balón?", hex: 0x26BD, fileName: "ball", lang: "es"},
    {text: "Una montaña", question: "¿Dónde está la montaña?", hex: 0x26F0, fileName: "mountain", lang: "es"},
    {text: "Una fuente", question: "¿Dónde está la fuente?", hex: 0x26F2, fileName: "fountain", lang: "es"},
    {text: "Un arco iris", question: "¿Dónde está el arco iris?", hex: 0x1F308, fileName: "rainbow", lang: "es"},
    {text: "Un árbol", question: "¿Dónde está el árbol?", hex: 0x1F332, fileName: "tree", lang: "es"},
    {text: "Una flor", question: "¿Dónde está la flor?", hex: 0x1F338, fileName: "flower", lang: "es"},
    {text: "Un tomate", question: "¿Dónde está el tomate?", hex: 0x1F345, fileName: "tomato", lang: "es"},
    {text: "Una berenjena", question: "¿Dónde está la berenjena?", hex: 0x1F346, fileName: "aubergine", lang: "es"},
    {text: "Unas uvas", question: "¿Dónde están las uvas?", hex: 0x1F347, fileName: "grapes", lang: "es"},
    {text: "Una sandía", question: "¿Dónde está la sandía?", hex: 0x1F349, fileName: "watermelon", lang: "es"},
    {text: "Una naranja", question: "¿Dónde está la naranja?", hex: 0x1F34A, fileName: "orange", lang: "es"},
    {text: "Un limón", question: "¿Dónde está el limón?", hex: 0x1F34B, fileName: "lemon", lang: "es"},
    {text: "Un plátano", question: "¿Dónde está el plátano?", hex: 0x1F34C, fileName: "banana", lang: "es"},
    {text: "Una manzana", question: "¿Dónde está la manzana?", hex: 0x1F34F, fileName: "apple", lang: "es"},
    {text: "Una pera", question: "¿Dónde está la pera?", hex: 0x1F350, fileName: "pear", lang: "es"},
    {text: "Unas cerezas", question: "¿Dónde están las cerezas?", hex: 0x1F352, fileName: "cherries", lang: "es"},
    {text: "Una fresa", question: "¿Dónde está la fresa?", hex: 0x1F353, fileName: "strawberry", lang: "es"},
    {text: "Una pizza", question: "¿Dónde está la pizza?", hex: 0x1F355, fileName: "pizza", lang: "es"},
    {text: "Un helado", question: "¿Dónde está el helado?", hex: 0x1F366, fileName: "icecream", lang: "es"},
    {text: "Un regalo", question: "¿Dónde está el regalo?", hex: 0x1F381, fileName: "present", lang: "es"},
    {text: "Una tarta", question: "¿Dónde está la tarta?", hex: 0x1F382, fileName: "cake", lang: "es"},
    {text: "Una calabaza", question: "¿Dónde está la calabaza?", hex: 0x1F383, fileName: "pumpkin", lang: "es"},
    {text: "Papá Noél", question: "¿Dónde está Papá Noél?", hex: 0x1F385, fileName: "santa", lang: "es"},
    {text: "Un globo", question: "¿Dónde está el globo?", hex: 0x1F388, fileName: "balloon", lang: "es"},
    {text: "Un circo", question: "¿Dónde está el circo?", hex: 0x1F3AA, fileName: "circus", lang: "es"},
    {text: "Un piano", question: "¿Dónde está el piano?", hex: 0x1F3B9, fileName: "piano", lang: "es"},
    {text: "Un violín", question: "¿Dónde está el violín?", hex: 0x1F3BB, fileName: "violin", lang: "es"},
    {text: "Una playa", question: "¿Dónde está la playa?", hex: 0x1F3DD, fileName: "beach", lang: "es"},
    {text: "Una casa", question: "¿Dónde está la casa?", hex: 0x1F3E0, fileName: "house", lang: "es"},
    {text: "Una serpiente", question: "¿Dónde está la serpiente?", hex: 0x1F40D, fileName: "snake", lang: "es"},
    {text: "Una oveja", question: "¿Dónde está la oveja?", hex: 0x1F411, fileName: "sheep", lang: "es"},
    {text: "Una gallina", question: "¿Dónde está la gallina?", hex: 0x1F413, fileName: "hun", lang: "es"},
    {text: "Un pulpo", question: "¿Dónde está el pulpo?", hex: 0x1F419, fileName: "octopus", lang: "es"},
    {text: "Una hormiga", question: "¿Dónde está la hormiga?", hex: 0x1F41C, fileName: "ant", lang: "es"},
    {text: "Una abeja", question: "¿Dónde está la abeja?", hex: 0x1F41D, fileName: "bee", lang: "es"},
    {text: "Una tortuga", question: "¿Dónde está la tortuga?", hex: 0x1F422, fileName: "turtle", lang: "es"},
    {text: "Un pollito", question: "¿Dónde está el pollito?", hex: 0x1F425, fileName: "chick", lang: "es"},
    {text: "Un camello", question: "¿Dónde está el camello?", hex: 0x1F42A, fileName: "camel", lang: "es"},
    {text: "Un delfín", question: "¿Dónde está el delfín?", hex: 0x1F42C, fileName: "dolphin", lang: "es"},
    {text: "Un tigre", question: "¿Dónde está el tigre?", hex: 0x1F42F, fileName: "tiger", lang: "es"},
    {text: "Un oso", question: "¿Dónde está el oso?", hex: 0x1F43B, fileName: "bear", lang: "es"},
    {text: "Una ardilla", question: "¿Dónde está la ardilla?", hex: 0x1F43F, fileName: "squirrel", lang: "es"},
    {text: "Un ojo", question: "¿Dónde está el ojo?", hex: 0x1F441, fileName: "eye", lang: "es"},
    {text: "Una oreja", question: "¿Dónde está la oreja?", hex: 0x1F442, fileName: "ear", lang: "es"},
    {text: "Una nariz", question: "¿Dónde está la nariz?", hex: 0x1F443, fileName: "nose", lang: "es"},
    {text: "Una boca", question: "¿Dónde está la boca?", hex: 0x1F444, fileName: "mouth", lang: "es"},
    {text: "Una mano", question: "¿Dónde está la mano?", hex: 0x1F44B, fileName: "hand", lang: "es"},
    {text: "Unas gafas", question: "¿Dónde están las gafas?", hex: 0x1F453, fileName: "glasses", lang: "es"},
    {text: "Una camiseta", question: "¿Dónde está la camiseta?", hex: 0x1F455, fileName: "tshirt", lang: "es"},
    {text: "Unos pantalones", question: "¿Dónde están los pantalones?", hex: 0x1F456, fileName: "trousers", lang: "es"},
    {text: "Un vestido", question: "¿Dónde está el vestido?", hex: 0x1F457, fileName: "dress", lang: "es"},
    {text: "Un zapato", question: "¿Dónde está el zapato?", hex: 0x1F45E, fileName: "shoe", lang: "es"},
    {text: "Un niño", question: "¿Dónde está el niño?", hex: 0x1F466, fileName: "boy", lang: "es"},
    {text: "Una niña", question: "¿Dónde está la niña?", hex: 0x1F467, fileName: "girl", lang: "es"},
    {text: "Un libro", question: "¿Dónde está el libro?", hex: 0x1F4D7, fileName: "book", lang: "es"},
    {text: "Un teléfono", question: "¿Dónde está el teléfono?", hex: 0x1F4F1, fileName: "phone", lang: "es"},
    {text: "El fuego", question: "¿Dónde está el fuego?", hex: 0x1F525, fileName: "fire", lang: "es"},
    {text: "Un cuchillo", question: "¿Dónde está el cuchillo?", hex: 0x1F52A, fileName: "knive", lang: "es"},
    {text: "Una araña", question: "¿Dónde está la araña?", hex: 0x1F577, fileName: "spider", lang: "es"},
    {text: "Una televisión", question: "¿Dónde está la televisión?", hex: 0x1F5A5, fileName: "tv", lang: "es"},
    {text: "Un helicóptero", question: "¿Dónde está el helicóptero?", hex: 0x1F681, fileName: "helicopter", lang: "es"},
    {text: "Un tren", question: "¿Dónde está el tren?", hex: 0x1F686, fileName: "train", lang: "es"},
    {text: "Un autobús", question: "¿Dónde está el autobús?", hex: 0x1F68C, fileName: "bus", lang: "es"},
    {text: "Una ambulancia", question: "¿Dónde está la ambulancia?", hex: 0x1F691, fileName: "ambulance", lang: "es"},
    {text: "Un taxi", question: "¿Dónde está el taxi?", hex: 0x1F695, fileName: "taxi", lang: "es"},
    {text: "Un coche", question: "¿Dónde está el coche?", hex: 0x1F697, fileName: "car", lang: "es"},
    {text: "Un camión", question: "¿Dónde está el camión?", hex: 0x1F69B, fileName: "truck", lang: "es"},
    {text: "Un tractor", question: "¿Dónde está el tractor?", hex: 0x1F69C, fileName: "tractor", lang: "es"},
    {text: "Una ensalada", question: "¿Dónde está la ensalada?", hex: 0x1F957, fileName: "salad", lang: "es"},
    {text: "Un huevo", question: "¿Dónde está el huevo?", hex: 0x1F95A, fileName: "egg", lang: "es"},
    {text: "Un kiwi", question: "¿Dónde está el kiwi?", hex: 0x1F95D, fileName: "kiwi", lang: "es"},
    {text: "Un brócoli", question: "¿Dónde está el brócoli?", hex: 0x1F966, fileName: "brocoli", lang: "es"},
    {text: "Un cangrejo", question: "¿Dónde está el cangrejo?", hex: 0x1F980, fileName: "crab", lang: "es"},
    {text: "Un león", question: "¿Dónde está el león?", hex: 0x1F981, fileName: "lion", lang: "es"},
    {text: "Un pato", question: "¿Dónde está el pato?", hex: 0x1F986, fileName: "duck", lang: "es"},
    {text: "Un murciélago", question: "¿Dónde está el murciélago?", hex: 0x1F987, fileName: "bat", lang: "es"},
    {text: "Un tiburón", question: "¿Dónde está el tiburón?", hex: 0x1F988, fileName: "shark", lang: "es"},
    {text: "Un barco", question: "¿Dónde está el barco?", hex: 0x1F6A2, fileName: "boat", lang: "es"},
    {text: "Una bicicleta", question: "¿Dónde está la bicicleta?", hex: 0x1F6B2, fileName: "bike", lang: "es"},
    {text: "Una cama", question: "¿Dónde está la cama?", hex: 0x1F6CC, fileName: "bed", lang: "es"},
    {text: "Un avión", question: "¿Dónde está el avión?", hex: 0x1F6E9, fileName: "plane", lang: "es"},
    {text: "Una moto", question: "¿Dónde está la moto?", hex: 0x1F6F5, fileName: "motorbike", lang: "es"},
    {text: "Un tambor", question: "¿Dónde está el tambor?", hex: 0x1F941, fileName: "drums", lang: "es"},
    {text: "Un aguacate", question: "¿Dónde está el aguacate?", hex: 0x1F951, fileName: "avocado", lang: "es"},
    {text: "Un pepino", question: "¿Dónde está el pepino?", hex: 0x1F952, fileName: "cucumber", lang: "es"},
    {text: "Una zanahoria", question: "¿Dónde está la zanahoria?", hex: 0x1F955, fileName: "carrot", lang: "es"},
    {text: "Un corazón", question: "¿Dónde está el corazón?", hex: 0x1F9E1, fileName: "heart", lang: "es"},
    {text: "Un búho", question: "¿Dónde está el búho?", hex: 0x1F989, fileName: "owl", lang: "es"},
    {text: "Una mariposa", question: "¿Dónde está la mariposa?", hex: 0x1F98B, fileName: "butterfly", lang: "es"},
    {text: "Un gorila", question: "¿Dónde está el gorila?", hex: 0x1F98D, fileName: "gorilla", lang: "es"},
    {text: "Una jirafa", question: "¿Dónde está la jirafa?", hex: 0x1F992, fileName: "giraffe", lang: "es"},
    {text: "Una cebra", question: "¿Dónde está la cebra?", hex: 0x1F993, fileName: "zebra", lang: "es"},
    {text: "Un dinosaurio", question: "¿Dónde está el dinosaurio?", hex: 0x1F996, fileName: "dinosaur", lang: "es"},
    {text: "El sol", question: "¿Dónde está el sol?", hex: 0x1F31E, fileName: "sun", lang: "es"},
    {text: "La luna", question: "¿Dónde está la luna?", hex: 0x1F31B, fileName: "moon", lang: "es"},
    {text: "Una estrella", question: "¿Dónde está la estrella?", hex: 0x1F31F, fileName: "star", lang: "es"},
    {text: "La lluvia", question: "¿Dónde está la lluvia?", hex: 0x1F327, fileName: "rain", lang: "es"}
];

export const KidsAudio = (props) => (
    <audio src={audio('./' + KIDS_MAP[props.num].lang + "/" + KIDS_MAP[props.num].fileName + '.mp3')} autoPlay/>
);

export const KidsEmoji = (props) => (
    <span role="img" className={props.className} onClick={props.clickHandler}>
        <span>{String.fromCodePoint(KIDS_MAP[props.num].hex)}</span>
    </span>
);

export const KidsLabel = (props) => (
    <span className={props.className}>
        {KIDS_MAP[props.num].text}
    </span>
);

export const KidsQuestion = (props) => (
    <span className={props.className}>
        {KIDS_MAP[props.num].question}
    </span>
);

export function playQuestionAudioByItemNumber(itemNumber) {
    return new Audio(audio('./' + KIDS_MAP[itemNumber].lang + '/' + KIDS_MAP[itemNumber].fileName + '_q.mp3')).play();
}

export function playAudioByItemNumber(itemNumber) {
    return new Audio(audio('./' + KIDS_MAP[itemNumber].lang + '/' + KIDS_MAP[itemNumber].fileName + '.mp3')).play();
}