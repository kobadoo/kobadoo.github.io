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
    {text: "Un oso panda", question: "¿Dónde está el oso panda?", hex: 0x1F43C, fileName: "panda", lang: "es"}
];

export const KidsAudio = (props) => (
    <audio src={audio('./' + KIDS_MAP[props.num].lang + "_" + KIDS_MAP[props.num].fileName + '.mp3')} autoPlay/>
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
    return new Audio(audio('./' + KIDS_MAP[itemNumber].lang + '_' + KIDS_MAP[itemNumber].fileName + '_q.mp3')).play();
}

export function playAudioByItemNumber(itemNumber) {
    return new Audio(audio('./' + KIDS_MAP[itemNumber].lang + '_' + KIDS_MAP[itemNumber].fileName + '.mp3')).play();
}