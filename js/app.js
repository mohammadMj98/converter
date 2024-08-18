const result = document.querySelector('.box span')
const boxTitle = document.querySelector('.box h1')
const input = document.querySelector('#input')
const rest = document.querySelector('#rest')
const convert = document.querySelector('#convert')
const change = document.querySelector('#change')



let toggleTitle = false;
function changefunction(){
    if(toggleTitle){
        boxTitle.innerHTML = 'Converter °F to °C'
        input.setAttribute('placeholder' ,'°F')
        document.title = 'Converter °F to °C'
        console.log(document.body.title);
        toggleTitle =false
        result.innerHTML = ''       
    }else { 
        boxTitle.innerHTML = 'Converter °C to °F'
        input.setAttribute('placeholder' ,'°C')
        document.title = 'Converter °C to °F'
        toggleTitle =true
        result.innerHTML = ''       
    }
}

function restfunction (){
    input.value = ''
    result.innerHTML = ''
}

function convertfunction(){
    let inputValue = input.value
    if(toggleTitle){
        let Celsius  =((inputValue * 1.8) + 32).toFixed(1)
        result.innerHTML = `${inputValue}°C ${Celsius} °F`;
        input.value = ''        
    }else{
        let Fahrenheit  =((inputValue - 32) / 1.8).toFixed(1)
        result.innerHTML = Fahrenheit
        result.innerHTML = `${inputValue}°F ${Fahrenheit} °C`;
        input.value = ''        
    }
}

change.addEventListener('click' , changefunction)
rest.addEventListener('click' , restfunction)
convert.addEventListener('click' , convertfunction)