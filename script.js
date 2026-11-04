// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date
const currentDate = new Date();

// Extract month, day, and year 
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

// Add leading zeros if month or day is a single digit
const formattedMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
const formattedDay = currentDay < 10 ? "0" + currentDay : currentDay;

// Create string in format: MM/DD/YYYY
const dateString = `Today is ${formattedMonth}/${formattedDay}/${currentYear}`;

// Display the result in the DOM element
document.getElementById("dateOutput").textContent = dateString;


// ==========================
// Part 2: Number Conversion & Validation
// ==========================

// Define descriptive variables for each test case
const negativeNumberString = "-50";       // Numeric string 1
const currencyDecimalString = "125.50";   // Decimal string 
const alphabeticString = "javascript";    // Non-numeric string 
const paddedNumberString = "500";         // Numeric string 2

// Convert and validate the negative number string
const convertedNegative = Number(negativeNumberString);
const isNegativeNaN = Number.isNaN(convertedNegative);
const isNegativeInteger = Number.isInteger(convertedNegative);

// Convert and validate the currency decimal string
const convertedCurrency = Number(currencyDecimalString);
const isCurrencyNaN = Number.isNaN(convertedCurrency);
const isCurrencyInteger = Number.isInteger(convertedCurrency);

// Convert and validate the alphabetic text string
const convertedText = Number(alphabeticString);
const isTextNaN = Number.isNaN(convertedText);
const isTextInteger = Number.isInteger(convertedText);

// Convert and validate the padded number string
const convertedPadded = Number(paddedNumberString);
const isPaddedNaN = Number.isNaN(convertedPadded);
const isPaddedInteger = Number.isInteger(convertedPadded);

// Combine all Part 2 conversion results into a single HTML string
const conversionResults = `
  <p><strong>Original:</strong> "${negativeNumberString}" &rarr; <strong>Converted:</strong> ${convertedNegative} &rarr; <strong>isNaN:</strong> ${isNegativeNaN} &rarr; <strong>isInteger:</strong> ${isNegativeInteger}</p>
  <p><strong>Original:</strong> "${currencyDecimalString}" &rarr; <strong>Converted:</strong> ${convertedCurrency} &rarr; <strong>isNaN:</strong> ${isCurrencyNaN} &rarr; <strong>isInteger:</strong> ${isCurrencyInteger}</p>
  <p><strong>Original:</strong> "${alphabeticString}" &rarr; <strong>Converted:</strong> ${convertedText} &rarr; <strong>isNaN:</strong> ${isTextNaN} &rarr; <strong>isInteger:</strong> ${isTextInteger}</p>
  <p><strong>Original:</strong> "${paddedNumberString}" &rarr; <strong>Converted:</strong> ${convertedPadded} &rarr; <strong>isNaN:</strong> ${isPaddedNaN} &rarr; <strong>isInteger:</strong> ${isPaddedInteger}</p>
`;

// Display the conversion results inside the DOM element
document.getElementById("numberConversionOutput").innerHTML = conversionResults;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Define numeric variables for the price calculator scenario
const itemPrice = 54.99;
const taxRate = 0.085;
const shippingCost = 6.00;

// Perform calculations (add and multi)
const subtotal = itemPrice + shippingCost;
const taxAmount = itemPrice * taxRate;
const totalCost = subtotal + taxAmount;

// Format result using toFixed(2)
const formattedTotal = totalCost.toFixed(2);

// Build output string for Part 3
const mathResults = `
  <p><strong>Item Price:</strong> $${itemPrice.toFixed(2)}</p>
  <p><strong>Shipping Cost:</strong> $${shippingCost.toFixed(2)}</p>
  <p><strong>Subtotal (Addition):</strong> $${subtotal.toFixed(2)}</p>
  <p><strong>Tax Amount (Multiplication):</strong> $${taxAmount.toFixed(2)}</p>
  <p><strong>Total Cost (Formatted with toFixed):</strong> <strong>$${formattedTotal}</strong></p>
`;

// Display results inside the DOM element
document.getElementById("mathOutput").innerHTML = mathResults;


// ==========================
// Part 4: Conditionals
// ==========================

let invalidTextNotice = "";
let highTotalNotice = "";

// Condition 1: Check if non-numeric string results in NaN
if (isTextNaN) {
  invalidTextNotice = "Validation Status: 'javascript' cannot be converted into a number (NaN).";
} else {
  invalidTextNotice = "Validation Status: 'javascript' converted successfully.";
}

// Condition 2: Check if the calculated total order cost exceeds $50.00
if (totalCost > 50.0) {
  highTotalNotice = "Order Notice: Your total exceeds $50.00 (qualifies for free premium support).";
} else {
  highTotalNotice = "Order Notice: Standard order tier.";
}

// Build conditional messages string and append to the math output card
const conditionalResults = `
  <hr>
  <p><em>${invalidTextNotice}</em></p>
  <p><em>${highTotalNotice}</em></p>
`;

// Append conditional results dynamically into the math output section
document.getElementById("mathOutput").innerHTML += conditionalResults;