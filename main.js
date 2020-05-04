setInterval(setClock,1000)
const hour=document.querySelector('[data-hour]')
const minute=document.querySelector('[data-minute]')
const second=document.querySelector('[data-second]')
function setClock()
{
    const currentDate=new Date()  
    const secondsRatio=currentDate.getSeconds()/60  
    const minutesRatio=(secondsRatio+ currentDate.getMinutes())/60 
    const hoursRatio=(minutesRatio+currentDate.getHours())/12
    setRotation(hour,hoursRatio);
    setRotation(minute,minutesRatio);
    setRotation(second,secondsRatio);
}
function setRotation(element,rotationRatio)
{
 element.style.setProperty('--rotation',rotationRatio*360)
}
setClock()