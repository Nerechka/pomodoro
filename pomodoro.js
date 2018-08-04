import pluralize from './pluralize.js';

function pomodoro() {
    const notifier = require('node-notifier');
    const path = require('path');

    notifier.notify(
        {
            title: 'Work hard',
            message: 'начало 25 минут продуктивности',
            icon: path.join(__dirname, 'icons/work_icon.png'),
            sound: true,
            wait: true,
            urgency: void 0,
            time: void 0,
            category: void 0,
            hint: void 0
        },
        function (err, response) {
            let time = 1;
            let timer = setInterval(function () {
                console.log('Времени прошло: ' + time + ' ' + pluralize(time, ['минута', 'минуты', 'минут']));
                time += 1;
            }, 1000*60);

            setTimeout(function () {
                clearInterval(timer);
                takeBreak();

            }, 25000*60);
        }
    );

    function takeBreak() {
        notifier.notify(
            {
                title: 'Take a break',
                message: 'свобода на 5 минут',
                icon: path.join(__dirname, 'icons/break_icon.png'),
                sound: true,
                wait: false
            },
            function (err, response) {
                console.log('Время работы закончилось')

            })
    }

}


export default pomodoro;
