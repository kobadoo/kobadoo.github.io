import React from 'react';

const images = require.context("../../images/poker", true);
const POKER_CARD_MAP = [
    {name: "2 of Clubs", file_name: "2_of_clubs"},
    {name: "2 of Diamonds", file_name: "2_of_diamonds"},
    {name: "2 of Hearts", file_name: "2_of_hearts"},
    {name: "2 of Spades", file_name: "2_of_spades"},
    {name: "3 of Clubs", file_name: "3_of_clubs"},
    {name: "3 of Diamonds", file_name: "3_of_diamonds"},
    {name: "3 of Hearts", file_name: "3_of_hearts"},
    {name: "3 of Spades", file_name: "3_of_spades"},
    {name: "4 of Clubs", file_name: "4_of_clubs"},
    {name: "4 of Diamonds", file_name: "4_of_diamonds"},
    {name: "4 of Hearts", file_name: "4_of_hearts"},
    {name: "4 of Spades", file_name: "4_of_spades"},
    {name: "5 of Clubs", file_name: "5_of_clubs"},
    {name: "5 of Diamonds", file_name: "5_of_diamonds"},
    {name: "5 of Hearts", file_name: "5_of_hearts"},
    {name: "5 of Spades", file_name: "5_of_spades"},
    {name: "6 of Clubs", file_name: "6_of_clubs"},
    {name: "6 of Diamonds", file_name: "6_of_diamonds"},
    {name: "6 of Hearts", file_name: "6_of_hearts"},
    {name: "6 of Spades", file_name: "6_of_spades"},
    {name: "7 of Clubs", file_name: "7_of_clubs"},
    {name: "7 of Diamonds", file_name: "7_of_diamonds"},
    {name: "7 of Hearts", file_name: "7_of_hearts"},
    {name: "7 of Spades", file_name: "7_of_spades"},
    {name: "8 of Clubs", file_name: "8_of_clubs"},
    {name: "8 of Diamonds", file_name: "8_of_diamonds"},
    {name: "8 of Hearts", file_name: "8_of_hearts"},
    {name: "8 of Spades", file_name: "8_of_spades"},
    {name: "9 of Clubs", file_name: "9_of_clubs"},
    {name: "9 of Diamonds", file_name: "9_of_diamonds"},
    {name: "9 of Hearts", file_name: "9_of_hearts"},
    {name: "9 of Spades", file_name: "9_of_spades"},
    {name: "10 of Clubs", file_name: "10_of_clubs"},
    {name: "10 of Diamonds", file_name: "10_of_diamonds"},
    {name: "10 of Hearts", file_name: "10_of_hearts"},
    {name: "10 of Spades", file_name: "10_of_spades"},
    {name: "Ace of Clubs", file_name: "ace_of_clubs"},
    {name: "Ace of Diamonds", file_name: "ace_of_diamonds"},
    {name: "Ace of Hearts", file_name: "ace_of_hearts"},
    {name: "Ace of Spades", file_name: "ace_of_spades"},
    {name: "Jack of Clubs", file_name: "jack_of_clubs"},
    {name: "Jack of Diamonds", file_name: "jack_of_diamonds"},
    {name: "Jack of Hearts", file_name: "jack_of_hearts"},
    {name: "Jack of Spades", file_name: "jack_of_spades"},
    {name: "King of Clubs", file_name: "king_of_clubs"},
    {name: "King of Diamonds", file_name: "king_of_diamonds"},
    {name: "King of Hearts", file_name: "king_of_hearts"},
    {name: "King of Spades", file_name: "king_of_spades"},
    {name: "Queen of Clubs", file_name: "queen_of_clubs"},
    {name: "Queen of Diamonds", file_name: "queen_of_diamonds"},
    {name: "Queen of Hearts", file_name: "queen_of_hearts"},
    {name: "Queen of Spades", file_name: "queen_of_spades"}
];

export const PokerCard = (props) => (
    <span role="img" onClick={props.clickHandler}>
        <img className={props.className}
            src={images('./' + POKER_CARD_MAP[props.num].file_name + '.png').default} />
    </span>
);

export const PokerCardLabel = (props) => (
    <span role="img" className={props.className} onClick={props.clickHandler}>
        {POKER_CARD_MAP[props.num].name}
    </span>
);