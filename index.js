'use strict';

const player = require('./player');
const robot = require('robotjs');
const iohook = require('iohook');
const logger = require('./logger');
const print = require('print-message');
const readline = require('readline');
const recorder = require('./recorder');
const stdin = process.openStdin(); 
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let recording = [];


print([
    "Robo-Mouse v0.1 beta",
    "- R -> record",
    "- S -> stop and save",
    "- C -> cancel",
    "- P -> play",
    "- L -> list all recordings"
]);

stdin.on('keypress', function (chunk, key) {

    if (key && key.ctrl && key.name == 'c') process.exit();

    if (key.name === "R" || key.name === "r"){
        logger.record('Recording your mouse....');
        recorder.start((event) => {
            recording.push(event);
        });

    }else if (key.name === "S" || key.name === "s"){
        fs.writeFileSync('./sessions/recording.json', JSON.stringify(recording));
        recorder.stop()
        logger.save('session ready to play.');
    }else if (key.name === "C" || key.name == "c") {
        recorder.stop();
        logger.cancel('Recording cancelled');
        recording = [];
    }else if (key.name === "P" || key.name === "p") {
        
        if (recording && recording.length > 0){
            recorder.stop();
            logger.play('Playing session.. '+recording.length+' steps');
            player.play(recording);
        }
    };

});



//process.kill(process.pid);



