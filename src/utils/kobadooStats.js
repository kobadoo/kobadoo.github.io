# Instructions:
# 1. Export Realtime Database data from Firebase Console
# 2. Run "node kobadooStats.js" from the same directory

'use strict';

let jsonData = require('./kobadoo-default-rtdb-export');

let maxLevel = 0;
let maxScore = 0;
let timestamp;

for (var key in jsonData.stats) {
    if (jsonData.stats.hasOwnProperty(key)) {
        if(jsonData.stats[key].score > maxScore) {
          maxScore = jsonData.stats[key].score;
          maxLevel = jsonData.stats[key].level;
          timestamp = jsonData.stats[key].timestamp;
        }
    }
}

console.log('Max level: ' + maxLevel);
console.log('Max score: ' + maxScore);
console.log('Timestamp: ' + timestamp);
