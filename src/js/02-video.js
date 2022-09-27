import Player from '@vimeo/player';

import trottle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const getcurrentTimeValue = localStorage.getItem(LOCAL_STORAGE_KEY);

returnCurrentTimeValue(getcurrentTimeValue);
player.on('timeupdate', trottle(onPlaySetTimeValue, 1000));


function returnCurrentTimeValue(value) {
    if(value) {
    player.setCurrentTime(value);
}
}

function onPlaySetTimeValue(data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds); 
}

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});