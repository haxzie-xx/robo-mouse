const iohook = require('iohook');
const logger = require('./logger');

const startRecord = (addEvent) => {

    saveSession = addEvent;
    let start = Date.now();

    iohook.on('mouseclick', event => {
        let delay = Date.now() - start;
        start = Date.now();
        logger.watch(`Event: ${event.type} XY( ${event.x}, ${event.y}) Delay: ${delay}`);
        event.delay = delay;
        addEvent(event);
    });

    iohook.start();
}

const stop = () => {
    iohook.stop();
}

module.exports.start = startRecord;
module.exports.stop = stop;