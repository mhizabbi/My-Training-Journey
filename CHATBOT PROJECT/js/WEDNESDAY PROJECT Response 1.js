let dte = new Date();
let mnt = dte.getMonth();
let mint = dte.getMinutes();
let hr = dte.getHours();
let yrs = dte.getFullYear();
let sec = dte.getSeconds();

const response = [
    {
        response1: `This is ${yrs}`,
        response2: `We are currently in ${yrs}`,
        response3: `Current year is ${yrs}`,
        response4: `${yrs}`
    },
    {
        response1: `Current time is ${hr}`,
        response2: `The time is ${hr}:${mint}:${sec}`,
        response3: `${hr}:${mint}:${sec}`,
        response4: `${yrs}`
    },
    {
        response1: `My name is Ikede Abigail, What is yours?`,
        response2: `Friends call me, Mhiz Abbi`,
        response3: `${hr}:${mint}:${sec}`,
        response4: `${yrs}`
    }, 
];