import pluralize from './pluralize.js';
import notifier from 'node-notifier';
import path from 'path';
let date = new Date();

function pomodoro() {
    notifier.notify(
        {
            title: 'Work hard',
            message: 'начало 25 минут продуктивности',
            icon: path.join(__dirname, 'icons/work_icon.png'),
            sound: true,
            wait: true
        },
        function () {
            console.log('🔻 Работа началась в ' + date.getHours() + ':' + date.getMinutes())
            let time = 1;
            let timer = setInterval(function () {
                console.log('Времени прошло: ' + time + ' ' + pluralize(time, ['минута', 'минуты', 'минут']));
                time += 1;
            }, 1000*60);

            setTimeout(function () {
                clearInterval(timer);
                takeBreak();

            }, 25*1000*60);
        }
    );
}

    function takeBreak() {
        notifier.notify(
            {
                title: 'Take a break',
                message: 'свобода на 5 минут',
                icon: path.join(__dirname, 'icons/break_icon.png'),
                sound: true,
                wait: false
            },
            function () {
                console.log('🔺 Время работы закончилось');
                console.log('Сейчас ' + date.getHours() + ':' + date.getMinutes())

            })
    }


export default pomodoro;
