import _ from 'lodash';

function PracticingWebpack(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['hello','world!','sleepybears!'],' ');

    return element;
}

document.body.appendChild(PracticingWebpack());