
# Intro
As we are coding our software, we may inadvertently write some code that isn't correct. 
Text editors try to help us by notifying us of issues but they can't catch everything.
When we try to run this code, node.js will tell us that something is wrong.
It is very important that we understand the messages that node gives us to indicate what the problem is. 
These messages are consistent in the javascript world. They will be the same for node.js and the browser. 


## Reference Errors
These errors occurs when you type a word in your code that isn't a valid javascript word. You should be aware those words that are built in javascript reserve words and are always valid. You should also know how to make your own custom words valid javascript such as variable names, function names and class names. If a reference error occurs, the processing of code will stop and your app will crash.

## Cannot read property 
These errors occur when you expect there to be an object or an array in a variable and you try to access one of its properties. If the variable contains null or undefined you are not allowed to try to access a property on it. The most common way to handle this situation is to check for null or undefined in the variable before trying to access a property.