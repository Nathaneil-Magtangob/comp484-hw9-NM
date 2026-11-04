```markdown
https://nathaneil-magtangob.github.io/comp484-hw9-NM/
# comp484-hw9-NM
JavaScript Built-In Objects

Objects and methods used
Date objects: `new Date()`, `getMonth()`, `getDate()`, `getFullYear()`
Number methods: `Number()`, `Number.isNaN()`, `Number.isInteger()`, `toFixed()`
DOM Manipulation: `document.getElementById()`, `textContent`, `innerHTML`

Reflection
The easiest part of the assignment was setting up the HTML template then linking the external CSS stylesheet and setting up the general structure for the script file. The hardest part was making sure the conditional logic correctly evaluated the converted string values and its status updates to DOM without overwriting the previous existing content. I learned that when it comes to date in javascript the months are zero-indexed where the number 0 corresponds to January while the number 11 corresponds to December, essentially you always need to add 1 to the corresponding javascript value to get the standard calendar number. I learned when using the Number object that it parses primitive values and when there is an invalid number string it yield NaN. I learned how to implement structure content into HTML elements through the use of textContent for plain strings and innerHTL for formatted element blocks.

Screenshot
https://github.com/Nathaneil-Magtangob/comp484-hw9-NM/blob/main/Comp484%20Javascript%20MiniDemo.jpg
