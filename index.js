/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
 let timeArray = timeString.split(":");
 let hour = parseInt(timeArray[0])
 if (hour < 12) {
   console.log(hour)
  return  'Good Morning'
 } else if (12 < hour && hour < 17) {
  console.log(hour)
   return 'Good Afternoon'
 } else if (hour > 17) {
  console.log(hour)
   return 'Good Evening'
 }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
 let node = document.getElementById('greeting')
 node.innerHTML = string
}
