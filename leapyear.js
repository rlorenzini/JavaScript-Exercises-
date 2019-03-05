//a leap year happens every four years, but skips every fourth century
//1700, 1800, and 1900 are NOT leap years, but 2000 and 2400 are
//a leap year is also omitted 3 times every 400 years
//knowing this, a year MUST be %4==0 and %400==0, BUT...
//it cannot only be %4==0 and %100==0
//so you must make a function that is %4==0, !%100==0, and %400==0

function lY(y) {
  return !((y%4)||(!(y%100)&&y%400));
}
console.log(lY(2020));
console.log(lY(2019));
//least code required

function leapYear(year) {
  return ((year%4==0)||(year%100!=0)&&(year%400==0));
}
console.log(leapYear(2024)); //true
console.log(leapYear(2017)); //false
//a little more to see what's going on 
