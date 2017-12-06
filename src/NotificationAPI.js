export function enableNotificationAPI() {
    Notification.requestPermission()
    .then( function(result) {
        console.log(result);
    }).catch( function (error) {
        console.error(error);
    });

}

export function notify(title, message) {
    const icon = require('./assets/shopy.png');
    const beep = require('./assets/beep.mp3');
    const options = {
        body: message,
        icon: icon,
        requireInteraction: true,
        lang: 'es-ES',
        sound: beep
    };
    let n = new Notification(title, options);
    //setTimeout(n.close.bind(n), 4000);
    n.onclick = function (r) {
        console.log('I should go to orders page but I do not how');
        n.close()
    };
    let sound = new Audio(beep);
    sound.play();
    return n;
}

