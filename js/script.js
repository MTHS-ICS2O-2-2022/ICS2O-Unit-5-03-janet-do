// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file checks the user's age to see what movies they can see

"use strict"

function calculate() {
  const ageInput = document.getElementById("age").value
  const age = parseFloat(ageInput)

  if (isNaN(age)) {
  } else if (age >= 17) {
    document.getElementById("age-restriction").innerHTML =
      "<p>You can see an R rated movie alone.</p>"
  } else if (age >= 13) {
    document.getElementById("age-restriction").innerHTML =
      "<p>You can see a PG-13 movie alone.</p>"
  } else if (age >= 6) {
    document.getElementById("age-restriction").innerHTML =
      "<p>You can see a G or PG movie alone.</p>"
  } else {
    document.getElementById("age-restriction").innerHTML =
      "<p>You're too young to see anything.</p>"
  }
}
