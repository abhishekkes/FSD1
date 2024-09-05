function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}


const celsius = 25;  
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);


function checkLeapYear(year) {

  
  if ((year % 4==0) && (year % 100!=0) || ( year % 400==0)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}


const year = 2024;

checkLeapYear(year);

