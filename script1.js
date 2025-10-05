
function updateClockIST() {
  // Get current UTC time
  const now = new Date();

  // Convert to IST by adding 5 hours 30 minutes
  const istOffset = 5.5 * 60 * 60 * 1000; // milliseconds
  const istTime = new Date(now.getTime() + istOffset);

  let hours = istTime.getUTCHours();
  let minutes = istTime.getUTCMinutes();
  let seconds = istTime.getUTCSeconds();

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").innerText =
    `  Current Time (IST): ${hours}:${minutes}:${seconds}`;
}

// Update clock every 1 second
setInterval(updateClockIST, 1000);

// Check Age Category Project 1
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age < 0) {
    result = "Please enter a valid age.";
  } else if (age < 13) {
    result = "You are a child.";
  } else if (age < 60) {
    result = "You are an adult.";
  } else {
    result = "You are a senior citizen.";
  }

  document.getElementById("result").innerText = result;
}

// Find Day from Number Project 2
function findDay() {
  let DayNum = parseInt(document.getElementById("dayInput").value);
  let output = "";

  switch (DayNum) {
    case 1:
      output = "Sunday";
      break;
    case 2:
      output = "Monday";
      break;
    case 3:
      output = "Tuesday";
      break;
    case 4:
      output = "Wednesday";
      break;
    case 5:
      output = "Thrusday";
      break;
    case 6:
      output = "Friday";
      break;
    case 7:
      output = "Saturday";
      break;
    default:
      output = "Invalid number. Enter 1 to 7.";
  }
  document.getElementById("output").innerText = output;
}

// Project 3: Simple Login Simulatore

// Project 4: Traffic Light Guide
function trafficLight() {
  let trafficLgt = document
    .getElementById("trafficLight")
    .value.trim()
    .toLowerCase();
  let trafficOutput = "";

  switch (trafficLgt) {
    case "red":
      trafficOutput = "Stop";
      break;
    case "green":
      trafficOutput = "Go";
      break;
    case "yellow":
      trafficOutput = "Ready to Go";
      break;
    default:
      trafficOutput = "Invalid signal";
      break;
  }
  document.getElementById("trafficOutput").innerText = trafficOutput;
}

// <!--Project 5: Calculator (2 Numbers, 1 Operator) -->

function calculate() {
  let num1 = parseInt(document.getElementById("frtNum").value);
  let num2 = parseInt(document.getElementById("secNum").value);
  let operator = document.getElementById("Operator").value;
  let calc = "";
  switch (operator) {
    case "/":
      if (num2 === 0) {
        calc = "❌ Cannot divide by zero.";
      } else {
        calc = num1 / num2;
      }
      break;
    case "+":
      calc = num1 + num2;
      break;
    case "-":
      calc = num1 - num2;
      break;
    case "*":
      calc = num1 * num2;
      break;
    default:
      calc = "error";
  }
  document.getElementById("calc").innerText = calc;
}

// <!--Project 6: Movie Ticket Price Checker -->
function muvieTicket() {
  let aGe = parseInt(document.getElementById("Age").value);
  let ticketPrize = "";

  if (aGe <= 0) {
    ticketPrize = "Please enter a valid age.";
  } else if (aGe <= 5) {
    ticketPrize = "Your ticket is Free.";
  } else if (aGe <= 13) {
    ticketPrize = "Your ticket prize is 50 rupees";
  } else if (aGe <= 59) {
    ticketPrize = "Your ticket prize is 120 rupees";
  } else {
    ticketPrize = "Your ticket prize is 80 rupees";
  }
  document.getElementById("ticketPrize").innerText = ticketPrize;
}

//  <!--Project 7: Body Mass Index (BMI) Calculator -->

function bodyMassIndex() {
  let cmheight = parseInt(document.getElementById("cmInHeight").value);
  let kgWeight = parseInt(document.getElementById("kgInWeight").value);
  let meterInHeight = cmheight / 100;
  let bmi = kgWeight / (meterInHeight * meterInHeight);
  let bMi = "";

  if (bmi < 18.5) {
    bMi = "Underweight";
  } else if (bmi < 24.9) {
    bMi = "Healthy";
  } else if (bmi < 29.9) {
    bMi = "Overweight";
  } else {
    bMi = "Obese";
  }
  document.getElementById("bMI").innerText = bMi;
}

// <!--Project 8: Electricity Bill Generator -->
function calculateBill() {
  let units = parseFloat(document.getElementById("unitsInput").value);
  let rate = 0;

  if (units <= 100) {
    rate = 5;
  } else if (units <= 200) {
    rate = 7;
  } else {
    rate = 10;
  }

  let baseBill = units * rate;
  let gst = baseBill * 0.1;
  let totalBill = baseBill + gst;

  document.getElementById(
    "totalAmount"
  ).innerText = `Units: ${units}\nRate: ₹${rate}/unit\nBase Bill: ₹${baseBill.toFixed(
    2
  )}\nGST (10%): ₹${gst.toFixed(2)}\nTotal Bill: ₹${totalBill.toFixed(2)}`;
}

//  <!--Project 9: Simple Quiz App -->

// Correct answer is "b" → Delhi
const correctAnswer = "b";

function checkAnswer() {
  const options = document.getElementsByName("answer");
  let selected = null;

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selected = options[i].value;
    }
  }

  if (selected === correctAnswer) {
    document.getElementById("result2").innerText = "✅ Correct! 🎉";
  } else if (selected === null) {
    document.getElementById("result2").innerText =
      "⚠️ Please select an answer.";
  } else {
    document.getElementById("result2").innerText = "❌ Wrong! 😞";
  }
}

// <!--Project 10: Leap Year Checker -->

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Simple check (hardcoded for now)
  if (user === "avi_167" && pass === "1432") {
    alert("Login successful!");
    document.getElementById("leapSection").style.display = "block";
    document.getElementById("loginSection").style.display = "none";
  } else {
    alert("Invalid login. Try again.");
  }
}
// Leap Year Checker
function checkLeapYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        document.getElementById("result3").innerText =
          "This year is a Leap Year.";
      } else {
        document.getElementById("result3").innerText =
          "This year is not a Leap Year.";
      }
    } else {
      document.getElementById("result3").innerText =
        "This year is a Leap Year.";
    }
  } else {
    document.getElementById("result3").innerText =
      "This year is not a Leap Year.";
  }
}

//  <!--Project 11: Loan Eligibility Checker -->

function loanEligibility() {
  let salary = parseInt(document.getElementById("jobSalary").value);
  let agePerson = parseInt(document.getElementById("agePerSon").value);
  let userJobtype = document
    .getElementById("jobType")
    .value.trim()
    .toLowerCase();

  if (
    salary >= 15000 &&
    agePerson >= 21 &&
    agePerson <= 58 &&
    userJobtype === "paramanent"
  ) {
    document.getElementById("userOutput").innerText = "Person is eligible";
  } else {
    document.getElementById("userOutput").innerText = "Person is not eligible";
  }
}

//  <!--Project 12: Bill Splitter App -->
function billsplitter() {
  let totalBi = parseInt(document.getElementById("totalBill").value);
  let numPeople = parseInt(document.getElementById("numOfPeople").value);
  let userTip = parseInt(document.getElementById("uSertip").value);
  if (totalBi <= 0) {
    document.getElementById("billOutput").innerText =
      "Please enter a valid bill amount.";
  } else if (numPeople <= 0) {
    document.getElementById("billOutput").innerText =
      "Please enter a valid number of people.";
  } else if (totalBi >= 0 && numPeople >= 0 && userTip >= 0) {
    const tipAmount = (userTip / 100) * totalBi;
    const finalBill = totalBi + tipAmount;
    const perPerson = finalBill / numPeople;
    document.getElementById("billOutput").innerText = `Tip On Total Bill: ₹${(
      finalBill - totalBi
    ).toFixed(2)}\nTotal Bill (with tip): ₹${finalBill.toFixed(
      2
    )}\nEach person should pay: ₹${perPerson.toFixed(2)}`;
  } else {
    const perPerSon = totalBi / numPeople;
    document.getElementById(
      "billOutput"
    ).innerText = `Each person should pay: ₹${perPerSon.toFixed(2)}`;
  }
}

//  <!--Project 13: Guess the Number Game -->

let secretNumber = Math.floor(Math.random() * 100) + 1; // Random 1–100
let attempts = 0;

function checkGuess() {
  let guess = Number(document.getElementById("userInput").value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById(
      "reSult"
    ).innerText = `🎉 Correct! You guessed it in ${attempts} tries.`;
    showBalloons(); // 🎈✨ This triggers animation
  } else if (guess < secretNumber) {
    document.getElementById("hint").innerText = "📉 Too low!";
  } else if (guess > secretNumber) {
    document.getElementById("hint").innerText = "📈 Too high!";
  } else {
    document.getElementById("reSult").innerText = "❌ Invalid input!";
  }
}
function showBalloons() {
  const balloonArea = document.getElementById("balloonArea");
  balloonArea.innerHTML = ""; // clear previous

  for (let i = 0; i < 10; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerText = "🎈 🎉";
    balloon.style.left = Math.random() * 90 + "%"; // random horizontal position
    balloonArea.appendChild(balloon);
  }

  setTimeout(() => {
    balloonArea.innerHTML = ""; // remove after animation
  }, 4500);
}

//  <!--Project 14: Marks to Grade Converter -->
function checkGrade() {
  let studentMarks = parseInt(document.getElementById("userMarks").value);
  if (studentMarks >= 90) {
    document.getElementById("resUlt").innerText = "Your grade is A+.";
  } else if (studentMarks >= 80) {
    document.getElementById("resUlt").innerText = "Your grade is A.";
  } else if (studentMarks >= 70) {
    document.getElementById("resUlt").innerText = "Your grade is B.";
  } else if (studentMarks >= 60) {
    document.getElementById("resUlt").innerText = "Your grade is C.";
  } else if (studentMarks >= 50) {
    document.getElementById("resUlt").innerText = "Your grade is D.";
  } else {
    document.getElementById("resUlt").innerText = "Your are Fail.";
  }
}

//  <!--Project 15: Days in Month Finder -->
function dayFinder() {
  let month = parseInt(document.getElementById("monthNum").value);
  let yEar = parseInt(document.getElementById("yearNum").value);

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("resuLt").innerText = "31 days";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("resuLt").innerText = "30 days";
      break;
    case 2:
      if (yEar % 4 === 0) {
        if (yEar % 100 === 0) {
          if (yEar % 400 === 0) {
            document.getElementById("resuLt").innerText =
              "This year is a Leap Year and 29 days.";
          } else {
            document.getElementById("resuLt").innerText =
              "This year is not a Leap Year.";
          }
        } else {
          document.getElementById("resuLt").innerText =
            "This year is a Leap Year and 29 days.";
        }
      } else {
        document.getElementById("resuLt").innerText =
          "This year is not a Leap Year.";
      }
      break;
    default:
      document.getElementById("resuLt").innerText = "Invalid month number.";
      break;
  }
}
//  <!--Project 16: Character Type Checker -->
function charType() {
  let Char = document.getElementById("charInput").value;

  if (Char.length !== 1) {
    document.getElementById("charResult").innerText =
      "Please enter 1 character only.";
    return;
  }

  let code = Char.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    document.getElementById("charResult").innerText = 'It is Capital Letter (Alphabets)(A-Z)';
  } else if (code >= 97 && code <= 122) {
    document.getElementById("charResult").innerText = 'It is Small Letter (Alphabets)(a-z)';
  } else if (code >= 48 && code <= 57) {
    document.getElementById("charResult").innerText = 'It is Digits (0-9) Numeric Value';
  } else if (
    (code >= 33 && code <= 47) ||
    (code >= 58 && code <= 64) ||
    (code >= 91 && code <= 96) ||
    (code >= 123 && code <= 126)
  ) {
    document.getElementById("charResult").innerText = 'It is Special Symbol (@, #, $, ^, &, etc)';
  } else {
    document.getElementById("charResult").innerText = 'It is Invalid value';
  }
}
      // <!--Project 17: Currency Converter (INR to USD, EUR, JPY) -->
function convertCurrency() {
  let inr = parseFloat(document.getElementById("inrInput").value);
  let currency = document.getElementById("currencySelect").value;
  let converted = 0;
  let country = 0;

  if (isNaN(inr) || inr <= 0) {
    document.getElementById("ouTput").innerText = "Please enter a valid INR amount.";
    return;
  }

  switch (currency) {
    case "USD":
      converted = inr / 83;
      country = "United States Dollar (USD)";
      break;
    case "EUR":
      converted = inr / 89;
      country = "Euro (EUR)";
      break;
    case "JPY":
      converted = inr / 0.56;
      country = "Japanese Yen (JPY)";
      break;
    case "GBP":
      converted = inr / 105;
      country = "British Pound (GBP)";
      break;
    case "AUD":
      converted = inr / 56;
      country = "Australian Dollar (AUD)";
      break;
    case "CAD":
      converted = inr / 62;
      country = "Canadian Dollar (CAD)";
      break;
    default:
      document.getElementById("output").innerText = "Please select a currency.";
      return;
  }

  // Round to 2 decimal places
  converted = converted.toFixed(2);

  document.getElementById("ouTput").innerText = 
    `₹${inr} INR = ${converted} ${country}`;
}


// project 18

// let num = parseInt(prompt("Enter a number"));
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i<num);

