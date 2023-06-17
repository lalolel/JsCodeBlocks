// The forecast today is 293 Kelvin.
const kelvin = 293;
// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;
// math.floor method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
// Use console.log and string interpolation to log the temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
// Convert to Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
/* rezultats 
The temperature is 68 degrees Fahrenheit.
The temperature is 20 degrees Celsius.
The temperature is 6 degrees Newton.
*/
