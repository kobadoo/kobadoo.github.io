// Instructions:
// 1. Export Realtime Database data from Firebase Console
// 2. Run "node kobadooStats.js" from the same directory

'use strict';

const fs = require('fs');
let maxLevel = 0;
let maxScore = 0;
let timestamp;
let jsonData = require('./kobadoo-default-rtdb-export');
let gamesPlayed = 0;
let mode;
let TOTAL_LEVELS = 31;

let gamesByMode = [];
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Emojis
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Flags
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Numbers
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Arithmetic
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Shapes
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Cards
gamesByMode.push({gamesPlayed: 0, langEs: 0, langEn: 0, langNo: 0, maxLevel: 0, maxScore: 0, timestamp: null, gamesByLevel: new Array(TOTAL_LEVELS).fill(0), percentileByLevel: new Array(TOTAL_LEVELS).fill(0)}); // Kids
gamesByMode.push({gamesPlayed: 0, maxLevel: 0, maxScore: 0, timestamp: null}); // Crystal Ball

for (var key in jsonData.stats) {
    gamesPlayed++;
    if (jsonData.stats[key].hasOwnProperty('mode')) {
        mode = jsonData.stats[key].mode;
    }
    else {
        mode = 0; // All games before creating "mode" were Emojis (mode=0)
    }
    if (jsonData.stats[key].hasOwnProperty('score') && jsonData.stats[key].score > gamesByMode[mode].maxScore) {
        gamesByMode[mode].maxScore = jsonData.stats[key].score;
        gamesByMode[mode].maxLevel = jsonData.stats[key].level;
        gamesByMode[mode].timestamp = jsonData.stats[key].timestamp;
    }
    if (jsonData.stats[key].hasOwnProperty('level')) {
        gamesByMode[mode].gamesByLevel[(jsonData.stats[key].level)-1]++;
    }

    gamesByMode[mode].gamesPlayed++;
    if (mode === 6) { // Kids mode
        if (jsonData.stats[key].hasOwnProperty('language') && jsonData.stats[key].language === 'ES') {
            gamesByMode[mode].langEs++;
        }
        else if (jsonData.stats[key].hasOwnProperty('language') && jsonData.stats[key].language === 'NO') {
            gamesByMode[mode].langNo++;
        }
        else {
	    gamesByMode[mode].langEn++;
	}
    }
}

console.log('Total games played: ' + gamesPlayed);
console.log(' Emojis: ' + gamesByMode[0].gamesPlayed);
console.log(' Flags: ' + gamesByMode[1].gamesPlayed);
console.log(' Numbers: ' + gamesByMode[2].gamesPlayed);
console.log(' Arithmetic: ' + gamesByMode[3].gamesPlayed);
console.log(' Shapes: ' + gamesByMode[4].gamesPlayed);
console.log(' Cards: ' + gamesByMode[5].gamesPlayed);
console.log(' Kids: ' + gamesByMode[6].gamesPlayed + " (EN: " + gamesByMode[6].langEn + ' ES: ' + gamesByMode[6].langEs + ' NO: ' + gamesByMode[6].langNo + ')');
console.log(' Crystal Ball: ' + gamesByMode[7].gamesPlayed);

console.log('\n---RECORDS---');
console.log('Emojis: ' + 'level ' + gamesByMode[0].maxLevel + ' score ' + gamesByMode[0].maxScore + ' timestamp ' + gamesByMode[0].timestamp);
console.log('Flags: ' + 'level ' + gamesByMode[1].maxLevel + ' score ' + gamesByMode[1].maxScore + ' timestamp ' + gamesByMode[1].timestamp);
console.log('Numbers: ' + 'level ' + gamesByMode[2].maxLevel + ' score ' + gamesByMode[2].maxScore + ' timestamp ' + gamesByMode[2].timestamp);
console.log('Arithmetic: ' + 'level ' + gamesByMode[3].maxLevel + ' score ' + gamesByMode[3].maxScore + ' timestamp ' + gamesByMode[3].timestamp);
console.log('Shapes: ' + 'level ' + gamesByMode[4].maxLevel + ' score ' + gamesByMode[4].maxScore + ' timestamp ' + gamesByMode[4].timestamp);
console.log('Cards: ' + 'level ' + gamesByMode[5].maxLevel + ' score ' + gamesByMode[5].maxScore + ' timestamp ' + gamesByMode[5].timestamp);
console.log('Kids: ' + 'level ' + gamesByMode[6].maxLevel + ' score ' + gamesByMode[6].maxScore + ' timestamp ' + gamesByMode[6].timestamp);


for (var i=0; i < gamesByMode.length - 1; i++) {
    gamesPlayed = 0;
    for (var j=TOTAL_LEVELS-1; j >= 0; j--) {
        gamesPlayed += gamesByMode[i].gamesByLevel[j];
        gamesByMode[i].percentileByLevel[j] = (gamesPlayed * 100 / gamesByMode[i].gamesPlayed).toFixed(5);;
    }
}
 
let data = JSON.stringify(gamesByMode);
fs.writeFileSync('statsSummary.json', data);