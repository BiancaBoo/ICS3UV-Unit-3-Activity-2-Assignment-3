/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-14
 * @fileoverview This program will round numbers.
 */

// Input cents
const InputCents = 163; 

let cents = InputCents;

// Calculate coins
const toonies = Math.floor(cents / 200);
cents = cents % 200;

const dollars = Math.floor(cents / 100);
cents = cents % 100;

const quarters = Math.floor(cents / 25);
cents = cents % 25;

const dimes = Math.floor(cents / 10);
cents = cents % 10;

const nickels = Math.floor(cents / 5);
cents = cents % 5;

const pennies = cents;

// Display result
console.log(`Your change is: ${toonies} toonies, ${dollars} dollar, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} cents.`);
