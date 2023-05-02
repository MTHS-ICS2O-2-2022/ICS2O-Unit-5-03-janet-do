// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This program determines age restrictions
package main

import (
	"fmt"
	"strconv"
)

func main() {
	var ageInput string
	fmt.Print("Enter your age: ")
	fmt.Scanln(&ageInput)

	age, err := strconv.ParseFloat(ageInput, 64)
	if err != nil {
		fmt.Println("Invalid input, please enter a number.")
	} else if age >= 17 {
		fmt.Println("You can see an R rated movie alone.")
	} else if age >= 13 {
		fmt.Println("You can see a PG-13 movie alone.")
	} else if age >= 6 {
		fmt.Println("You can see a G or PG movie alone.")
	} else {
		fmt.Println("You're too young to see anything.")
	}
}
