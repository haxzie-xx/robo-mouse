const {Signale} = require('signale');

const options = {
  stream: process.stdout,
  types: {
    record: {
      badge: '⚫',
      color: 'red',
      label: 'record'
    },
    save: {
      badge: '🖫',
      color: 'blue',
      label: 'save'
    },
    play: {
        badge: '►',
        color: 'green',
        label: 'play'
    },
    cancel: {
        badge: '⨯',
        color: 'red',
        label: 'cancel'
    },
    watch: {
        badge: '👁',
        color: 'yellow',
        label: 'watch'
    }
  }
};

module.exports = new Signale(options);