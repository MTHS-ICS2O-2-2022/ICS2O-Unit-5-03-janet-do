// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file checks the user's age to see what movies they can see

"use strict"

function calculate() {
// input
const age = prompt('Enter your age:')

// process and output
if (age >= 18) {
  console.log('You can see an R rated movie by yourself')
} else if (age >= 13) {
  console.log('You can see a PG movie by youself')
} else if (age >= 5) {
  console.log('You can see a G or PG movie by yourself' )
} else {
   console.log('You are too young for anything')
}

console.log('\nDone.') 