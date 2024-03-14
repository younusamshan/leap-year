


function cheakLeap(){

    year = prompt('Enter Your Year I Am Cheak Leap Year') 
    
    if (year % 4 === 0) {
        alert('its leap year')
    } else if (year % 100 === 0) {
        
        alert('its not leap year')
    } else if (year % 400 === 0) {
        alert('its leap year')
        
    } else {
        alert('its not leap year')
    }
}