const robot = require('robotjs');
const sleep = require('util').promisify(setTimeout);


const play = async (recording) => {
    if (recording) {
        for (let i = 0; i < recording.length; i++){
            let event = recording[i];

            if (event.type === 'mouseclick') {
                await sleep(event.delay);
                robot.moveMouse(event.x, event.y);
                robot.mouseClick();
            }
        }

        process.exit(0);
    }
}

module.exports.play = play;