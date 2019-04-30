// function takeANumber(line, name){
  // line.push(name)
  // return "Welcome, " + name + ". You are number " + line.length + " in line."
// }

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently: ";
    
    for (var i = 0; i < line.length; i++){
      string = string + `${i+1}. ${line[i]}, `      
    }
    
    return string.slice(0,-2)
  }
}

//customerNumber represents how many customers have visited the Deli. Initialized at 0 for the first customer. Global scope.
var customerNumber = 0

//takeANumber receives an array containing the current customerNumbers still in line. It outputs a string welcoming a new customer to the store and tells them their customer number.
function takeANumber(currentLine){
  //Adds 1 to customerNumber to account for new customer and updates the currentLine.
  customerNumber += 1
  currentLine.push(customerNumber)
  
  //Checks if array is empty
  if (currentLine.length === 1) {
    //Returns customer ticket number and unique message for only customer in line.
    return `Welcome! You are ticket number ${customerNumber} and you are currently the only customer in line! `
  }
  //If line is not empty. Returns customer ticket number and customer place in line.
  return `Welcome! You are ticket number ${customerNumber} and you are number ${curcurrentLine.length} in line!`
}


