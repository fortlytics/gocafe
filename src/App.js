import { useState, useEffect, useRef } from "react";

// ─── TASKS DATA ───────────────────────────────────────────────────────────────
// ─── ALL EXERCISES: TWO APPROACHES EACH (from official JSON + alternate) ─────
const TASKS = [
  {
    name: "only1", pct: 5,
    logic: "The program needs to display exactly one character, which is the digit '1', followed by a newline (like pressing Enter). We can do this by using a system function that writes data to the screen.",
    approaches: [
      {
        title: "⚙️ Approach 1 — The z01 Library Way (Official)",
        code: `package main

import "github.com/01-edu/z01"

func main() {
\t// Print the character '1'
\tz01.PrintRune('1')
\t// Print a newline to move to the next line
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — The fmt Way (Alternative)",
        code: `package main

import "fmt"

func main() {
\t// fmt.Println prints a value and automatically adds a newline
\t// Both approaches give the same output
\tfmt.Println("1")
}`
      }
    ]
  },
  {
    name: "onlya", pct: 5,
    logic: "This is just like the previous challenge, but instead of the number 1, we want to print the lowercase letter 'a' followed by a newline.",
    approaches: [
      {
        title: "⚙️ Approach 1 — The z01 Library Way (Official)",
        code: `package main

import "github.com/01-edu/z01"

func main() {
\t// Print the character 'a'
\tz01.PrintRune('a')
\t// Print a newline character
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — The fmt Way (Alternative)",
        code: `package main

import "fmt"

func main() {
\t// fmt.Println prints the string with a newline at the end
\t// Single quotes = rune/char, double quotes = string
\tfmt.Println("a")
}`
      }
    ]
  },
  {
    name: "onlyb", pct: 5,
    logic: "We need to print the lowercase letter 'b' to the screen, followed by a newline character.",
    approaches: [
      {
        title: "⚙️ Approach 1 — The z01 Library Way (Official)",
        code: `package main

import "github.com/01-edu/z01"

func main() {
\t// Print the character 'b'
\tz01.PrintRune('b')
\t// Print a newline character
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — The fmt Way (Alternative)",
        code: `package main

import "fmt"

func main() {
\t// A string "b" works just as well here
\t// Remember: always import packages you use
\tfmt.Println("b")
}`
      }
    ]
  },
  {
    name: "onlyf", pct: 5,
    logic: "We need to print the lowercase letter 'f' to the screen, followed by a newline character.",
    approaches: [
      {
        title: "⚙️ Approach 1 — The z01 Library Way (Official)",
        code: `package main

import "github.com/01-edu/z01"

func main() {
\t// Print the character 'f'
\tz01.PrintRune('f')
\t// Print a newline character
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — The fmt Way (Alternative)",
        code: `package main

import "fmt"

func main() {
\t// Printf with %c prints a character (rune)
\t// \\n is the newline escape sequence
\tfmt.Printf("%c\\n", 'f')
}`
      }
    ]
  },
  {
    name: "onlyz", pct: 5,
    logic: "We need to print the lowercase letter 'z' to the screen, followed by a newline character.",
    approaches: [
      {
        title: "⚙️ Approach 1 — The z01 Library Way (Official)",
        code: `package main

import "github.com/01-edu/z01"

func main() {
\t// Print the character 'z'
\tz01.PrintRune('z')
\t// Print a newline character
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — The fmt Way (Alternative)",
        code: `package main

import "fmt"

func main() {
\t// os.Stdout.WriteString is another option — fmt.Println is simpler
\t// Both are valid — use whichever fits the exercise
\tfmt.Println("z")
}`
      }
    ]
  },
  {
    name: "checknumber", pct: 10,
    logic: "We look at a piece of text (a string). We want to check if there are any numbers hidden inside it. We look at every letter one by one. If we find any character between '0' and '9', we immediately say 'Yes!' by printing 'Your string contains a number'. If we check everything and find no numbers, we print 'Your string does not contain a number'.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Loop and Flag (Official)",
        code: `package main

import "github.com/01-edu/z01"

func CheckNumber(s string) {
\thasNumber := false

\t// Look at every character in the text
\tfor _, char := range s {
\t\t// Check if the character is a digit between 0 and 9
\t\tif char >= '0' && char <= '9' {
\t\t\thasNumber = true
\t\t\tbreak // We found one, so we can stop looking!
\t\t}
\t}

\t// If we found a number, print the success message
\tif hasNumber {
\t\tmessage := "Your string contains a number\\n"
\t\tfor _, r := range message {
\t\t\tz01.PrintRune(r)
\t\t}
\t} else {
\t\tmessage := "Your string does not contain a number\\n"
\t\tfor _, r := range message {
\t\t\tz01.PrintRune(r)
\t\t}
\t}
}`
      },
      {
        title: "🔁 Approach 2 — Using strings.ContainsAny (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func CheckNumber(s string) {
\t// strings.ContainsAny checks if ANY character from the second
\t// string appears in the first string — clean one-liner!
\tif strings.ContainsAny(s, "0123456789") {
\t\tfmt.Println("Your string contains a number")
\t} else {
\t\tfmt.Println("Your string does not contain a number")
\t}
}`
      }
    ]
  },
  {
    name: "countalpha", pct: 10,
    logic: "Imagine you have a basket of letters and symbols. We want to count only the actual English alphabet letters (both big 'A-Z' and small 'a-z'). We start a counter at 0, look at each item, and if it's a letter, add 1 to our counter. At the end, we return the total count.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Range Loop with Range Check (Official)",
        code: `package main

func CountAlpha(s string) int {
\tcount := 0
\t// Loop through each character in the string
\tfor _, char := range s {
\t\t// Check if it's a lowercase letter OR an uppercase letter
\t\tif (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') {
\t\t\tcount++ // Add 1 to our total count
\t\t}
\t}
\treturn count
}`
      },
      {
        title: "🔁 Approach 2 — Using unicode.IsLetter (Alternative)",
        code: `package main

import "unicode"

func CountAlpha(s string) int {
\tcount := 0
\t// unicode.IsLetter handles ALL letters, not just English
\t// But for this exercise English only is fine
\tfor _, char := range s {
\t\tif unicode.IsLetter(char) {
\t\t\tcount++
\t\t}
\t}
\treturn count
}`
      }
    ]
  },
  {
    name: "countcharacter", pct: 10,
    logic: "We are given a sentence and a specific single letter to look for. We want to count how many times that exact letter shows up in the sentence. We start counting from 0, check every character, and add 1 every time we find a match.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Manual Loop and Compare (Official)",
        code: `package main

func CountCharacter(s string, c rune) int {
\tcount := 0
\t// Look at each character in the sentence
\tfor _, char := range s {
\t\t// If it matches the letter we are looking for
\t\tif char == c {
\t\t\tcount++ // Increment our counter
\t\t}
\t}
\treturn count
}`
      },
      {
        title: "🔁 Approach 2 — Using strings.Count (Alternative)",
        code: `package main

import "strings"

func CountCharacter(s string, c rune) int {
\t// strings.Count counts non-overlapping instances of a substring
\t// We convert our rune 'c' to a string first using string()
\treturn strings.Count(s, string(c))
}`
      }
    ]
  },
  {
    name: "printif", pct: 10,
    logic: "We take a piece of text. If the text has 3 or more letters in it, we print it out exactly as it is, followed by a newline. If it has fewer than 3 letters, we do nothing at all.",
    approaches: [
      {
        title: "⚙️ Approach 1 — len() Check with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func PrintIf(s string) {
\t// Check if the length of the string is 3 or more
\tif len(s) >= 3 {
\t\t// Print each character one by one
\t\tfor _, char := range s {
\t\t\tz01.PrintRune(char)
\t\t}
\t\t// Finish with a newline
\t\tz01.PrintRune('\\n')
\t}
}`
      },
      {
        title: "🔁 Approach 2 — Using fmt.Println (Alternative)",
        code: `package main

import "fmt"

func PrintIf(s string) {
\t// len(s) gives the number of bytes (usually same as characters for English)
\t// If 3 or more, we print; otherwise we do nothing (no else needed!)
\tif len(s) >= 3 {
\t\tfmt.Println(s)
\t}
}`
      }
    ]
  },
  {
    name: "printifnot", pct: 10,
    logic: "This is the opposite of the last task. If the text is short (fewer than 3 characters long), we want to print it out followed by a newline. If it's 3 characters or longer, we ignore it.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Less-than Check with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func PrintIfNot(s string) {
\t// Check if the length of the string is less than 3
\tif len(s) < 3 {
\t\t// Print each character
\t\tfor _, char := range s {
\t\t\tz01.PrintRune(char)
\t\t}
\t\t// Print a newline
\t\tz01.PrintRune('\\n')
\t}
}`
      },
      {
        title: "🔁 Approach 2 — fmt.Println Version (Alternative)",
        code: `package main

import "fmt"

func PrintIfNot(s string) {
\t// The NOT version — print only if length is below 3
\t// This is the exact inverse condition of PrintIf
\tif len(s) < 3 {
\t\tfmt.Println(s)
\t}
}`
      }
    ]
  },
  {
    name: "rectperimeter", pct: 10,
    logic: "Imagine walking all the way around a rectangular playground. The playground has a length and a width. To find the total distance around it (the perimeter), we add the length and width together, then multiply by 2. If either dimension is negative, that's impossible in the real world, so we return -1.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Guard Clause + Formula (Official)",
        code: `package main

func RectPerimeter(w, h int) int {
\t// A rectangle cannot have negative dimensions
\tif w < 0 || h < 0 {
\t\treturn -1
\t}
\t// Formula for perimeter: 2 * (width + height)
\treturn 2 * (w + h)
}`
      },
      {
        title: "🔁 Approach 2 — With Explicit Comments (Alternative)",
        code: `package main

func RectPerimeter(w, h int) int {
\t// Validate: shapes can't have negative sides in real life
\tif w < 0 || h < 0 {
\t\treturn -1 // Signal for invalid input
\t}
\t// A rectangle has 2 widths and 2 heights around its border
\ttwoWidths := 2 * w
\ttwoHeights := 2 * h
\treturn twoWidths + twoHeights
}`
      }
    ]
  },
  {
    name: "retainfirsthalf", pct: 10,
    logic: "Imagine you have a chocolate bar made of square pieces. You want to cut it exactly in half and keep only the first part. If it has an odd number of pieces, like 5, we divide 5 by 2 which gives 2, so we keep the first 2 pieces. If it's empty, we return an empty text.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Integer Division Slice (Official)",
        code: `package main

func RetainFirstHalf(s string) string {
\t// If the string is empty, return it right away
\tif len(s) == 0 {
\t\treturn ""
\t}
\t// Find the middle point by dividing the length by 2
\thalfLen := len(s) / 2
\t// Return the text from the beginning up to that middle point
\treturn s[:halfLen]
}`
      },
      {
        title: "🔁 Approach 2 — Using a Loop to Build the Half (Alternative)",
        code: `package main

func RetainFirstHalf(s string) string {
\tresult := ""
\t// Only loop through the first half of indices
\t// Integer division automatically floors (5/2 = 2, not 2.5)
\tfor i := 0; i < len(s)/2; i++ {
\t\tresult += string(s[i])
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "cameltosnakecase", pct: 20,
    logic: "CamelCase looks like 'camelCase' (words smashed together with capital letters). snake_case looks like 'hello_world' (lowercase, separated by underscores). We read letter by letter. If we see a capital letter, we put an underscore before it and make it lowercase. We skip the underscore if it's the very first letter.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Index Loop with Lookahead (Official)",
        code: `package main

func CamelToSnakeCase(s string) string {
\tif len(s) == 0 {
\t\treturn ""
\t}

\tresult := ""
\tfor i := 0; i < len(s); i++ {
\t\t// If the current letter is uppercase (A to Z)
\t\tif s[i] >= 'A' && s[i] <= 'Z' {
\t\t\t// Don't add underscore at the very start
\t\t\t// Don't add underscore if previous was also uppercase
\t\t\tif i > 0 && !(s[i-1] >= 'A' && s[i-1] <= 'Z') {
\t\t\t\tresult += "_"
\t\t\t}
\t\t\t// Convert uppercase to lowercase by adding 32
\t\t\tresult += string(s[i] + 32)
\t\t} else {
\t\t\tresult += string(s[i])
\t\t}
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Using unicode and strings.Builder (Alternative)",
        code: `package main

import (
\t"strings"
\t"unicode"
)

func CamelToSnakeCase(s string) string {
\tvar sb strings.Builder
\tfor i, r := range s {
\t\t// unicode.IsUpper is more reliable than manual range checks
\t\tif unicode.IsUpper(r) && i > 0 {
\t\t\tsb.WriteRune('_')
\t\t}
\t\t// unicode.ToLower converts uppercase to lowercase safely
\t\tsb.WriteRune(unicode.ToLower(r))
\t}
\treturn sb.String()
}`
      }
    ]
  },
  {
    name: "digitlen", pct: 20,
    logic: "We want to count how many single digits make up a number. For example, 153 has 3 digits. A negative sign like in -42 doesn't count as a digit, so we flip negatives to positive first. We can repeatedly divide the number by 10 to strip away digits one by one until nothing is left.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Divide by 10 Loop (Official)",
        code: `package main

func DigitLen(n int) int {
\t// If the number is negative, flip it to positive
\tif n < 0 {
\t\tn = -n
\t}

\tcount := 0
\t// Keep dividing by 10 until the number becomes 0
\tfor n > 0 {
\t\tcount++
\t\tn = n / 10
\t}

\t// Special case: if the number started as 0, it has 1 digit
\tif count == 0 {
\t\treturn 1
\t}
\treturn count
}`
      },
      {
        title: "🔁 Approach 2 — Convert to String and Count (Alternative)",
        code: `package main

import (
\t"strconv"
)

func DigitLen(n int) int {
\t// Negative numbers: remove the minus sign before counting
\tif n < 0 {
\t\tn = -n
\t}
\t// strconv.Itoa converts int to string, then we count its length!
\t// "123" has len 3, "0" has len 1 — handles zero correctly
\treturn len(strconv.Itoa(n))
}`
      }
    ]
  },
  {
    name: "firstword", pct: 20,
    logic: "We want to extract just the very first word from a sentence. Words are separated by spaces. We skip any empty spaces at the beginning until we find a letter. Then we print letters until we hit another space or the end of the sentence.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Index Walk with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func FirstWord(s string) {
\ti := 0
\t// Skip all spaces at the start
\tfor i < len(s) && s[i] == ' ' {
\t\ti++
\t}
\t// Print letters until we hit a space or the end of the string
\tfor i < len(s) && s[i] != ' ' {
\t\tz01.PrintRune(rune(s[i]))
\t\ti++
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Split by Space (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func FirstWord(s string) {
\t// strings.Fields splits by any whitespace AND removes empty parts
\twords := strings.Fields(s)
\tif len(words) > 0 {
\t\t// The first element is always the first word
\t\tfmt.Println(words[0])
\t}
}`
      }
    ]
  },
  {
    name: "fishandchips", pct: 20,
    logic: "This is a fun game. We test a number. If it can be divided perfectly by both 2 and 3, we say 'fish and chips'. If only by 2, we say 'fish'. If only by 3, we say 'chips'. If it can't be divided by either, we say 'error'.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Modulo Checks in Order (Official)",
        code: `package main

func FishAndChips(n int) string {
\t// If the number is negative, it's invalid for this game
\tif n < 0 {
\t\treturn "error"
\t}
\t// Check BOTH first — otherwise you'd trigger a single check too early!
\tif n%2 == 0 && n%3 == 0 {
\t\treturn "fish and chips"
\t} else if n%2 == 0 {
\t\treturn "fish"
\t} else if n%3 == 0 {
\t\treturn "chips"
\t}
\treturn "error"
}`
      },
      {
        title: "🔁 Approach 2 — Build the Answer String (Alternative)",
        code: `package main

func FishAndChips(n int) string {
\tresult := ""
\t// Build the answer piece by piece
\tif n%2 == 0 {
\t\tresult += "fish"
\t}
\tif n%3 == 0 {
\t\tif result != "" {
\t\t\tresult += " and "
\t\t}
\t\tresult += "chips"
\t}
\tif result == "" {
\t\treturn "error"
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "gcd", pct: 20,
    logic: "The Greatest Common Divisor (GCD) is the biggest number that can divide two different numbers perfectly without a remainder. We use Euclid's trick: while the second number isn't zero, replace the second with the remainder of dividing the first by the second, and swap.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Euclid's Algorithm (Official)",
        code: `package main

func Gcd(a, b uint) uint {
\t// Loop until b becomes 0
\tfor b != 0 {
\t\t// Keep the remainder of a divided by b
\t\ttemp := a % b
\t\ta = b
\t\tb = temp
\t}
\treturn a
}`
      },
      {
        title: "🔁 Approach 2 — Recursive Version (Alternative)",
        code: `package main

func Gcd(a, b uint) uint {
\t// Base case: when b reaches 0, 'a' IS our GCD answer
\tif b == 0 {
\t\treturn a
\t}
\t// Recursive case: call Gcd again with smaller numbers
\t// This is the same logic as the loop, just written differently
\treturn Gcd(b, a%b)
}`
      }
    ]
  },
  {
    name: "hashcode", pct: 20,
    logic: "We can turn any secret text into a unique code number. For every letter, we take its internal computer ID number, add the length of the secret text to it, multiply it by 33, and then keep only the remainder when divided by 256 so the code numbers stay small and tidy.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Formula per Character (Official)",
        code: `package main

func HashCode(decodetostring string) string {
\tresult := ""
\tL := len(decodetostring)

\tfor i := 0; i < L; i++ {
\t\t// Apply the secret formula to each character code:
\t\t// (char value + string length) * 33, then mod 256
\t\tcode := (int(decodetostring[i]) + L) * 33 % 256
\t\tresult += string(rune(code))
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Using range and byte (Alternative)",
        code: `package main

func HashCode(s string) string {
\tresult := []byte{}
\tL := len(s)
\t// range gives us the index and the rune value
\tfor _, char := range s {
\t\t// Same formula, written with a named variable for clarity
\t\thashed := (int(char) + L) * 33 % 256
\t\tresult = append(result, byte(hashed))
\t}
\treturn string(result)
}`
      }
    ]
  },
  {
    name: "lastword", pct: 20,
    logic: "We want to find and print only the very last word of a sentence. We start from the very end of the text and move backwards, skipping any spaces until we find the end of a word. Then we keep moving backwards to find where that word started, and print it out.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Walk Backwards with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func LastWord(s string) {
\ti := len(s) - 1
\t// Skip spaces at the very end
\tfor i >= 0 && s[i] == ' ' {
\t\ti--
\t}
\tend := i
\t// Find the start of the last word
\tfor i >= 0 && s[i] != ' ' {
\t\ti--
\t}
\tstart := i + 1

\t// Print the word from start to end
\tfor j := start; j <= end; j++ {
\t\tz01.PrintRune(rune(s[j]))
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Split and Take Last (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func LastWord(s string) {
\t// strings.Fields splits on any whitespace, removes empty entries
\twords := strings.Fields(s)
\tif len(words) > 0 {
\t\t// The last element is at index len-1
\t\tfmt.Println(words[len(words)-1])
\t}
}`
      }
    ]
  },
  {
    name: "repeatalpha", pct: 20,
    logic: "We want to repeat letters based on their alphabetical position. 'a' or 'A' is the 1st letter, so it is printed 1 time. 'b' or 'B' is the 2nd letter, so it is printed 2 times. 'z' is printed 26 times! Other characters like spaces are just printed 1 time.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Position from ASCII Value (Official)",
        code: `package main

func RepeatAlpha(s string) string {
\tresult := ""
\tfor _, char := range s {
\t\trepeats := 1
\t\t// Determine position for lowercase: 'a' - 'a' = 0, +1 = 1
\t\tif char >= 'a' && char <= 'z' {
\t\t\trepeats = int(char - 'a' + 1)
\t\t// Determine position for uppercase: 'A' - 'A' = 0, +1 = 1
\t\t} else if char >= 'A' && char <= 'Z' {
\t\t\trepeats = int(char - 'A' + 1)
\t\t}
\t\t// Add the character 'repeats' times to our result
\t\tfor i := 0; i < repeats; i++ {
\t\t\tresult += string(char)
\t\t}
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Using strings.Repeat (Alternative)",
        code: `package main

import (
\t"strings"
\t"unicode"
)

func RepeatAlpha(s string) string {
\tresult := ""
\tfor _, char := range s {
\t\trepeats := 1
\t\tif unicode.IsLetter(char) {
\t\t\t// ToLower gives us the lowercase version, then subtract 'a'
\t\t\trepeats = int(unicode.ToLower(char)-'a') + 1
\t\t}
\t\t// strings.Repeat repeats a string N times — very clean!
\t\tresult += strings.Repeat(string(char), repeats)
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "findprevprime", pct: 35,
    logic: "A prime number is a special number greater than 1 that can only be divided by 1 and itself (like 2, 3, 5, 7, 11). Given a number, we want to find the closest prime number that is smaller than or equal to it. We test the number to see if it's prime. If it isn't, we subtract 1 and test again.",
    approaches: [
      {
        title: "⚙️ Approach 1 — isPrime Helper + Count Down (Official)",
        code: `package main

// Helper function to check if a number is prime
func isPrime(n int) bool {
\tif n <= 1 {
\t\treturn false
\t}
\t// Test dividing from 2 up to the square root of n
\t// If any divide evenly, it's NOT prime
\tfor i := 2; i*i <= n; i++ {
\t\tif n%i == 0 {
\t\t\treturn false
\t\t}
\t}
\treturn true
}

func FindPrevPrime(n int) int {
\t// Keep counting backwards until we hit a prime number
\tfor !isPrime(n) {
\t\tn--
\t}
\treturn n
}`
      },
      {
        title: "🔁 Approach 2 — Inline Prime Check (Alternative)",
        code: `package main

func FindPrevPrime(n int) int {
\t// Keep going down until we find our prime
\tfor n > 1 {
\t\tprime := true
\t\t// Check every potential divisor up to sqrt(n)
\t\tfor i := 2; i*i <= n; i++ {
\t\t\tif n%i == 0 {
\t\t\t\tprime = false
\t\t\t\tbreak // No need to keep checking
\t\t\t}
\t\t}
\t\tif prime {
\t\t\treturn n // Found it!
\t\t}
\t\tn-- // Try the next smaller number
\t}
\treturn 2 // Fallback: 2 is always prime
}`
      }
    ]
  },
  {
    name: "fromto", pct: 35,
    logic: "We want to print all numbers starting from one number to another. If the first number is smaller, we count up. If it's bigger, we count down. Each number should look like two digits (like 05 instead of 5), separated by a comma and a space.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Digit-by-Digit with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func FromTo(from int, to int) {
\t// Check if the input is within valid ranges (00 to 99)
\tif from < 0 || from > 99 || to < 0 || to > 99 {
\t\treturn
\t}

\tfor {
\t\t// Print the tens digit and units digit separately
\t\tz01.PrintRune(rune('0' + from/10))
\t\tz01.PrintRune(rune('0' + from%10))

\t\tif from == to {
\t\t\tbreak // We've reached the destination!
\t\t}
\t\tz01.PrintRune(',')
\t\tz01.PrintRune(' ')

\t\tif from < to {
\t\t\tfrom++
\t\t} else {
\t\t\tfrom--
\t\t}
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — fmt.Printf with %02d (Alternative)",
        code: `package main

import "fmt"

func FromTo(from, to int) {
\tif from < 0 || from > 99 || to < 0 || to > 99 {
\t\treturn
\t}
\t// Determine which direction to step (+1 or -1)
\tstep := 1
\tif from > to {
\t\tstep = -1
\t}
\tfor i := from; i != to; i += step {
\t\t// %02d means: always print at least 2 digits, pad with 0
\t\tfmt.Printf("%02d, ", i)
\t}
\tfmt.Printf("%02d\\n", to)
}`
      }
    ]
  },
  {
    name: "iscapitalized", pct: 35,
    logic: "We want to check if a sentence follows a specific rule: every single word must start with an uppercase letter. If the sentence is empty, we return false. Otherwise, we check each letter. If a letter is at the start of a word, it must be capitalized.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Check First-of-Word (Official)",
        code: `package main

func IsCapitalized(s string) bool {
\tif len(s) == 0 {
\t\treturn false
\t}

\tfor i := 0; i < len(s); i++ {
\t\t// It's the start of a word if it's first, or previous char was a space
\t\tif i == 0 || s[i-1] == ' ' {
\t\t\t// If the first letter of any word is lowercase, fail!
\t\t\tif s[i] >= 'a' && s[i] <= 'z' {
\t\t\t\treturn false
\t\t\t}
\t\t}
\t}
\treturn true
}`
      },
      {
        title: "🔁 Approach 2 — Split Words and Check Each (Alternative)",
        code: `package main

import (
\t"strings"
\t"unicode"
)

func IsCapitalized(s string) bool {
\tif len(s) == 0 {
\t\treturn false
\t}
\t// Split the sentence into individual words
\twords := strings.Fields(s)
\tfor _, word := range words {
\t\tif len(word) == 0 {
\t\t\tcontinue
\t\t}
\t\t// Check if the first rune of each word is uppercase
\t\tfirstChar := []rune(word)[0]
\t\tif !unicode.IsUpper(firstChar) {
\t\t\treturn false // One failure = the whole sentence fails
\t\t}
\t}
\treturn true
}`
      }
    ]
  },
  {
    name: "itoa", pct: 35,
    logic: "Itoa stands for 'Integer to ASCII'. It means taking a real math number like 123 and turning it into written text characters '123'. We peel off digits from the back of the number using modulo 10, turn them into characters, and glue them together backwards.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Build String with Modulo (Official)",
        code: `package main

func Itoa(n int) string {
\tif n == 0 {
\t\treturn "0"
\t}

\tisNegative := false
\tif n < 0 {
\t\tisNegative = true
\t\tn = -n
\t}

\tresult := ""
\t// Peel off last digit using modulo, prepend it to result
\tfor n > 0 {
\t\tdigit := n % 10
\t\tresult = string(rune('0'+digit)) + result
\t\tn = n / 10
\t}

\tif isNegative {
\t\tresult = "-" + result
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Using strconv.Itoa (Alternative)",
        code: `package main

import "strconv"

func Itoa(n int) string {
\t// The standard library has this function built in!
\t// But writing it yourself (Approach 1) teaches you HOW it works
\t// Both are valid — know when to use the tools Go gives you
\treturn strconv.Itoa(n)
}`
      }
    ]
  },
  {
    name: "printmemory", pct: 35,
    logic: "Computers store data in boxes called bytes. Each byte can be shown as a special code of numbers and letters called Hexadecimal (Base 16). We take an array of bytes, read each byte, and print out its hexadecimal appearance in neat blocks.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Hex Lookup Table with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func PrintMemory(arr [10]byte) {
\thexChars := "0123456789abcdef"
\tfor i, b := range arr {
\t\t// High nibble: top 4 bits >> 4 shifts them right
\t\tz01.PrintRune(rune(hexChars[b>>4]))
\t\t// Low nibble: bottom 4 bits with bitmask 0x0f
\t\tz01.PrintRune(rune(hexChars[b&0x0f]))

\t\t// Every 4 bytes: newline. Otherwise: space
\t\tif (i+1)%4 == 0 || i == len(arr)-1 {
\t\t\tz01.PrintRune('\\n')
\t\t} else {
\t\t\tz01.PrintRune(' ')
\t\t}
\t}
}`
      },
      {
        title: "🔁 Approach 2 — Using fmt.Sprintf with %02x (Alternative)",
        code: `package main

import "fmt"

func PrintMemory(arr [10]byte) {
\tfor i, b := range arr {
\t\t// %02x prints as lowercase hex, padded to 2 digits
\t\tfmt.Printf("%02x", b)

\t\tif (i+1)%4 == 0 || i == len(arr)-1 {
\t\t\tfmt.Println() // Newline after every 4 bytes
\t\t} else {
\t\t\tfmt.Print(" ") // Space between bytes in same group
\t\t}
\t}
}`
      }
    ]
  },
  {
    name: "printrevcomb", pct: 35,
    logic: "We want to print all possible unique combinations of three different digits, but backwards! We start from the largest possible unique combination (987) and go down to the smallest (210). Every digit must be smaller than the one before it.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Triple Nested Loop with z01 (Official)",
        code: `package main

import "github.com/01-edu/z01"

func PrintRevComb() {
\tfirst := true
\t// Outer loop: largest digit, counting down from 9
\tfor i := '9'; i >= '0'; i-- {
\t\t// Middle loop: must be smaller than i
\t\tfor j := i - 1; j >= '0'; j-- {
\t\t\t// Inner loop: must be smaller than j
\t\t\tfor k := j - 1; k >= '0'; k-- {
\t\t\t\tif !first {
\t\t\t\t\tz01.PrintRune(',')
\t\t\t\t\tz01.PrintRune(' ')
\t\t\t\t}
\t\t\t\tfirst = false
\t\t\t\tz01.PrintRune(i)
\t\t\t\tz01.PrintRune(j)
\t\t\t\tz01.PrintRune(k)
\t\t\t}
\t\t}
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Using fmt.Printf (Alternative)",
        code: `package main

import "fmt"

func PrintRevComb() {
\tsep := ""
\t// Same three nested loops, using integer digit values
\tfor i := 9; i >= 0; i-- {
\t\tfor j := i - 1; j >= 0; j-- {
\t\t\tfor k := j - 1; k >= 0; k-- {
\t\t\t\t// Print separator only between items, not before first
\t\t\t\tfmt.Printf("%s%d%d%d", sep, i, j, k)
\t\t\t\tsep = ", " // After first print, always use separator
\t\t\t}
\t\t}
\t}
\tfmt.Println()
}`
      }
    ]
  },
  {
    name: "thirdtimeisacharm", pct: 35,
    logic: "Imagine jumping across a row of stepping stones, but you only shout when you land on every third stone (3rd, 6th, 9th, etc.). We take a string, collect every 3rd character (at index 2, 5, 8...), and ignore the rest.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Step Loop from Index 2 (Official)",
        code: `package main

func ThirdTimeIsACharm(s string) string {
\tif len(s) < 3 {
\t\treturn "\\n"
\t}
\tresult := ""
\t// Start at index 2 (the 3rd item), step by 3 each time
\tfor i := 2; i < len(s); i += 3 {
\t\tresult += string(s[i])
\t}
\treturn result + "\\n"
}`
      },
      {
        title: "🔁 Approach 2 — Using Modulo on Index (Alternative)",
        code: `package main

func ThirdTimeIsACharm(s string) string {
\tresult := ""
\t// i+1 gives us the 1-based position; keep only multiples of 3
\tfor i, char := range s {
\t\tif (i+1)%3 == 0 {
\t\t\tresult += string(char)
\t\t}
\t}
\tif result == "" {
\t\treturn "\\n"
\t}
\treturn result + "\\n"
}`
      }
    ]
  },
  {
    name: "weareunique", pct: 35,
    logic: "We compare two strings to see which letters belong to only one string, but not both. It's like comparing your toy box with your friend's box and finding all toys that are completely unique to one collection. We count how many such unique letters exist.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Two Maps for Set Difference (Official)",
        code: `package main

func WeAreUnique(s1, s2 string) int {
\tif s1 == "" && s2 == "" {
\t\treturn -1
\t}

\tcount := 0
\tm1 := make(map[rune]bool)
\tm2 := make(map[rune]bool)

\tfor _, r := range s1 { m1[r] = true }
\tfor _, r := range s2 { m2[r] = true }

\t// Count chars that are in s1 but NOT in s2
\tfor r := range m1 {
\t\tif !m2[r] {
\t\t\tcount++
\t\t}
\t}
\t// Count chars that are in s2 but NOT in s1
\tfor r := range m2 {
\t\tif !m1[r] {
\t\t\tcount++
\t\t}
\t}
\treturn count
}`
      },
      {
        title: "🔁 Approach 2 — Single Combined Map (Alternative)",
        code: `package main

func WeAreUnique(s1, s2 string) int {
\tif s1 == "" && s2 == "" {
\t\treturn -1
\t}
\t// Use a map to count which strings each char appears in
\t// 1 = only in s1, 2 = only in s2, 3 = in both
\tseen := make(map[rune]int)
\tfor _, r := range s1 { seen[r] |= 1 }
\tfor _, r := range s2 { seen[r] |= 2 }

\tcount := 0
\tfor _, flags := range seen {
\t\tif flags != 3 { // Not in BOTH strings = unique
\t\t\tcount++
\t\t}
\t}
\treturn count
}`
      }
    ]
  },
  {
    name: "zipstring", pct: 35,
    logic: "We compress a string by counting consecutive identical characters. For example, 'aaabb' becomes '3a2b'. We look at each character, count how many times it repeats in a row, write the count, write the character, and move to the next new character.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Compare with Previous (Official)",
        code: `package main

import "strconv"

func ZipString(s string) string {
\tif len(s) == 0 {
\t\treturn ""
\t}
\tresult := ""
\tcount := 1

\tfor i := 1; i < len(s); i++ {
\t\tif s[i] == s[i-1] {
\t\t\tcount++ // Same as previous — keep counting
\t\t} else {
\t\t\t// Different character — flush the current run
\t\t\tresult += strconv.Itoa(count) + string(s[i-1])
\t\t\tcount = 1 // Reset counter for new character
\t\t}
\t}
\t// Don't forget the very last run!
\tresult += strconv.Itoa(count) + string(s[len(s)-1])
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Inner Loop for Each Run (Alternative)",
        code: `package main

import "fmt"

func ZipString(s string) string {
\tresult := ""
\ti := 0
\tfor i < len(s) {
\t\tj := i
\t\t// Inner loop: advance j while same character continues
\t\tfor j < len(s) && s[j] == s[i] {
\t\t\tj++
\t\t}
\t\t// Now j - i = how many times s[i] repeated
\t\tresult += fmt.Sprintf("%d%c", j-i, s[i])
\t\ti = j // Jump past this entire run
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "addprimesum", pct: 50,
    logic: "We take a target number, find every prime number that exists between 2 and that number, and add them all together into one grand total.",
    approaches: [
      {
        title: "⚙️ Approach 1 — isPrime Helper + Sum Loop (Official)",
        code: `package main

func isPrimeNum(n int) bool {
\tif n <= 1 { return false }
\tfor i := 2; i*i <= n; i++ {
\t\tif n%i == 0 { return false }
\t}
\treturn true
}

func AddPrimeSum(n int) int {
\tif n <= 0 { return 0 }
\tsum := 0
\t// Check every number from 2 to n
\tfor i := 2; i <= n; i++ {
\t\tif isPrimeNum(i) {
\t\t\tsum += i // Add it if it's prime
\t\t}
\t}
\treturn sum
}`
      },
      {
        title: "🔁 Approach 2 — Sieve of Eratosthenes (Alternative)",
        code: `package main

func AddPrimeSum(n int) int {
\tif n < 2 { return 0 }
\t// Make a boolean slice — true means "is prime"
\tsieve := make([]bool, n+1)
\tfor i := 2; i <= n; i++ { sieve[i] = true }

\t// Cross out multiples of each prime
\tfor i := 2; i*i <= n; i++ {
\t\tif sieve[i] {
\t\t\tfor j := i * i; j <= n; j += i {
\t\t\t\tsieve[j] = false
\t\t\t}
\t\t}
\t}
\tsum := 0
\tfor i, isPrime := range sieve {
\t\tif isPrime { sum += i }
\t}
\treturn sum
}`
      }
    ]
  },
  {
    name: "canjump", pct: 50,
    logic: "Imagine a video game where you stand on a stepping stone, and each stone has a number telling you the maximum distance you can jump forward. We want to find out if it's possible to reach the final stone without getting stuck on a stone with value 0.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Track Max Reach (Official)",
        code: `package main

func CanJump(arr []uint) bool {
\tif len(arr) == 0 { return false }
\tmaxReach := 0
\tfor i := 0; i < len(arr); i++ {
\t\t// If we can't even get to this tile, we're stuck
\t\tif i > maxReach { return false }
\t\t// Update the furthest index we can reach from here
\t\tif i+int(arr[i]) > maxReach {
\t\t\tmaxReach = i + int(arr[i])
\t\t}
\t}
\treturn maxReach >= len(arr)-1
}`
      },
      {
        title: "🔁 Approach 2 — Work Backwards from Goal (Alternative)",
        code: `package main

func CanJump(arr []uint) bool {
\tif len(arr) == 0 { return false }
\t// Start by assuming the last index is our goal
\tgoalIdx := len(arr) - 1
\t// Walk backwards: can position i reach the current goal?
\tfor i := len(arr) - 2; i >= 0; i-- {
\t\tif int(arr[i]) >= goalIdx-i {
\t\t\tgoalIdx = i // This position can reach the goal, make it the new goal
\t\t}
\t}
\t// If goal moved all the way back to 0, we can reach the end
\treturn goalIdx == 0
}`
      }
    ]
  },
  {
    name: "chunk", pct: 50,
    logic: "Imagine you have a long list of items and you want to pack them into smaller boxes, where each box can only hold a certain amount of items. We slice the big list into chunks of that smaller size.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Step Loop with End Guard (Official)",
        code: `package main

func Chunk(slice []int, size int) [][]int {
\tif size <= 0 { return [][]int{} }
\tvar chunks [][]int

\tfor i := 0; i < len(slice); i += size {
\t\tend := i + size
\t\t// Don't go past the end of the slice!
\t\tif end > len(slice) {
\t\t\tend = len(slice)
\t\t}
\t\tchunks = append(chunks, slice[i:end])
\t}
\treturn chunks
}`
      },
      {
        title: "🔁 Approach 2 — Using append with min() logic (Alternative)",
        code: `package main

func Chunk(slice []int, size int) [][]int {
\tif size <= 0 || len(slice) == 0 {
\t\treturn [][]int{}
\t}
\tresult := [][]int{}
\tfor len(slice) > 0 {
\t\tif size > len(slice) {
\t\t\tsize = len(slice) // Last chunk may be smaller
\t\t}
\t\t// Take the first 'size' elements, add to result
\t\tresult = append(result, slice[:size])
\t\t// Trim the slice from the front
\t\tslice = slice[size:]
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "concatalternate", pct: 50,
    logic: "We take two lists and zip them together like a zipper, taking one item from the first list, then one from the second list, alternating back and forth until we use them all up.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Two Pointer Alternation (Official)",
        code: `package main

func ConcatAlternate(slice1, slice2 []int) []int {
\tresult := []int{}
\ti, j := 0, 0
\tfor i < len(slice1) || j < len(slice2) {
\t\tif i < len(slice1) {
\t\t\tresult = append(result, slice1[i])
\t\t\ti++
\t\t}
\t\tif j < len(slice2) {
\t\t\tresult = append(result, slice2[j])
\t\t\tj++
\t\t}
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Single Index with Bounds Check (Alternative)",
        code: `package main

func ConcatAlternate(s1, s2 []int) []int {
\tresult := []int{}
\t// Find the length of the longer slice
\tmax := len(s1)
\tif len(s2) > max { max = len(s2) }

\tfor i := 0; i < max; i++ {
\t\t// Only add if this index exists in each slice
\t\tif i < len(s1) { result = append(result, s1[i]) }
\t\tif i < len(s2) { result = append(result, s2[i]) }
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "concatslice", pct: 50,
    logic: "This takes two separate lists of numbers and joins them end-to-end to create one long single list.",
    approaches: [
      {
        title: "⚙️ Approach 1 — append with spread operator (Official)",
        code: `package main

func ConcatSlice(slice1, slice2 []int) []int {
\t// Create a copy of slice1 to avoid overwriting original data
\tresult := append([]int{}, slice1...)
\t// Glue all items from slice2 onto the end
\t// The '...' spreads slice2 as individual arguments
\treturn append(result, slice2...)
}`
      },
      {
        title: "🔁 Approach 2 — Manual Loop Copy (Alternative)",
        code: `package main

func ConcatSlice(slice1, slice2 []int) []int {
\t// Allocate result with exact capacity we need
\tresult := make([]int, 0, len(slice1)+len(slice2))
\tfor _, v := range slice1 {
\t\tresult = append(result, v)
\t}
\tfor _, v := range slice2 {
\t\tresult = append(result, v)
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "fprime", pct: 50,
    logic: "Every number is built out of prime number building blocks multiplied together. For example, 15 is 3 * 5. We find these prime factors by dividing our number by the smallest possible numbers, starting from 2, and printing them out.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Divide and Print Loop (Official)",
        code: `package main

import "fmt"

func FPrime(n int) {
\tif n <= 1 { return }
\tdiv := 2
\tfirst := true
\tfor n > 1 {
\t\t// If div divides n evenly, it's a prime factor
\t\tif n%div == 0 {
\t\t\tif !first { fmt.Print("*") }
\t\t\tfmt.Print(div)
\t\t\tfirst = false
\t\t\tn = n / div // Divide it out and try again
\t\t} else {
\t\t\tdiv++ // Next potential divisor
\t\t}
\t}
\tfmt.Println()
}`
      },
      {
        title: "🔁 Approach 2 — Collect Factors Then Print (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func FPrime(n int) {
\tif n <= 1 { return }
\tfactors := []string{}
\tfor div := 2; n > 1; {
\t\tif n%div == 0 {
\t\t\tfactors = append(factors, fmt.Sprint(div))
\t\t\tn /= div
\t\t} else {
\t\t\tdiv++
\t\t}
\t}
\t// Join all factors with " * " separator
\tfmt.Println(strings.Join(factors, "*"))
}`
      }
    ]
  },
  {
    name: "hiddenp", pct: 50,
    logic: "We want to check if a small secret keyword is hidden inside a longer text string. The trick is that the letters of the keyword must appear inside the longer text in the exact same order, even if there are other random characters mixed in between them.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Two Pointer Subsequence Check (Official)",
        code: `package main

func HiddenP(s1, s2 string) int {
\tif s1 == "" { return 1 }
\ti := 0 // Tracks how many letters of s1 we've matched
\tfor j := 0; j < len(s2); j++ {
\t\tif s2[j] == s1[i] {
\t\t\ti++
\t\t}
\t\t// If we matched all letters of s1, success!
\t\tif i == len(s1) {
\t\t\treturn 1
\t\t}
\t}
\treturn 0
}`
      },
      {
        title: "🔁 Approach 2 — Named Variables for Clarity (Alternative)",
        code: `package main

func HiddenP(pattern, text string) int {
\tif pattern == "" { return 1 }
\tpatternIdx := 0
\t// Walk through the text looking for each pattern letter in order
\tfor _, char := range text {
\t\tif patternIdx < len(pattern) && char == rune(pattern[patternIdx]) {
\t\t\tpatternIdx++
\t\t}
\t}
\t// Did we find all letters of the pattern?
\tif patternIdx == len(pattern) {
\t\treturn 1
\t}
\treturn 0
}`
      }
    ]
  },
  {
    name: "inter", pct: 50,
    logic: "We compare two strings to find which letters appear in both of them. We print these common letters in the order they first appeared in the first string, making sure we don't print any duplicates.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Two Maps (seen + inS2) (Official)",
        code: `package main

import "github.com/01-edu/z01"

func Inter(s1, s2 string) {
\tseen := make(map[rune]bool)
\tinS2 := make(map[rune]bool)

\t// First, record everything that's in s2
\tfor _, char := range s2 { inS2[char] = true }

\tfor _, char := range s1 {
\t\t// Print only if it's in s2 AND we haven't printed it yet
\t\tif inS2[char] && !seen[char] {
\t\t\tz01.PrintRune(char)
\t\t\tseen[char] = true
\t\t}
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Using strings.ContainsRune (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func Inter(s1, s2 string) {
\tresult := ""
\tseen := make(map[rune]bool)
\tfor _, char := range s1 {
\t\t// ContainsRune checks if a specific rune exists in a string
\t\tif strings.ContainsRune(s2, char) && !seen[char] {
\t\t\tresult += string(char)
\t\t\tseen[char] = true
\t\t}
\t}
\tfmt.Println(result)
}`
      }
    ]
  },
  {
    name: "reversestrcap", pct: 50,
    logic: "We want to modify a sentence so that only the very last letter of each word is capitalized, while all the other letters in the word are made lowercase.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Byte Manipulation (Official)",
        code: `package main

func ReverseStrCap(s string) string {
\tbytes := []byte(s)
\tfor i := 0; i < len(bytes); i++ {
\t\t// Convert to lowercase first
\t\tif bytes[i] >= 'A' && bytes[i] <= 'Z' {
\t\t\tbytes[i] += 32 // +32 shifts A->a, B->b, etc.
\t\t}
\t\t// If it's the last letter of a word (next is space or end)
\t\tif i == len(bytes)-1 || bytes[i+1] == ' ' {
\t\t\tif bytes[i] >= 'a' && bytes[i] <= 'z' {
\t\t\t\tbytes[i] -= 32 // -32 shifts a->A, b->B, etc.
\t\t\t}
\t\t}
\t}
\treturn string(bytes)
}`
      },
      {
        title: "🔁 Approach 2 — Word by Word with strings (Alternative)",
        code: `package main

import (
\t"strings"
\t"unicode"
)

func ReverseStrCap(s string) string {
\twords := strings.Fields(s)
\tfor i, word := range words {
\t\tlower := strings.ToLower(word)
\t\trunes := []rune(lower)
\t\t// Capitalize only the LAST character of each word
\t\tlastIdx := len(runes) - 1
\t\trunes[lastIdx] = unicode.ToUpper(runes[lastIdx])
\t\twords[i] = string(runes)
\t}
\treturn strings.Join(words, " ")
}`
      }
    ]
  },
  {
    name: "saveandmiss", pct: 50,
    logic: "Imagine walking through a string of text. You keep a group of letters, then skip the next group of letters, then keep the next group, alternating based on a step size.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Toggle Keep/Skip Flag (Official)",
        code: `package main

func SaveAndMiss(s string, n int) string {
\tif n <= 0 { return s }
\tresult := ""
\tkeep := true

\tfor i := 0; i < len(s); i += n {
\t\tend := i + n
\t\tif end > len(s) { end = len(s) }
\t\tif keep {
\t\t\tresult += s[i:end]
\t\t}
\t\tkeep = !keep // Flip: keep->skip or skip->keep
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Check Block Number with Modulo (Alternative)",
        code: `package main

func SaveAndMiss(s string, n int) string {
\tif n <= 0 { return s }
\tresult := ""
\tfor i, char := range s {
\t\t// Which block does this character belong to? (0, 1, 2, 3...)
\t\tblock := i / n
\t\t// Even blocks (0, 2, 4...) are KEEP blocks
\t\tif block%2 == 0 {
\t\t\tresult += string(char)
\t\t}
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "union", pct: 50,
    logic: "We want to merge two strings together into one combined string, but we filter out any duplicate letters so each character appears only once.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Concatenate then Deduplicate (Official)",
        code: `package main

import "github.com/01-edu/z01"

func Union(s1, s2 string) {
\tseen := make(map[rune]bool)
\tcombined := s1 + s2

\tfor _, char := range combined {
\t\tif !seen[char] {
\t\t\tz01.PrintRune(char)
\t\t\tseen[char] = true
\t\t}
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Build Result String (Alternative)",
        code: `package main

import "fmt"

func Union(s1, s2 string) {
\tseen := make(map[rune]bool)
\tresult := ""
\t// Process s1 first, then s2 — order matters for Union
\tfor _, char := range s1 + s2 {
\t\tif !seen[char] {
\t\t\tresult += string(char)
\t\t\tseen[char] = true
\t\t}
\t}
\tfmt.Println(result)
}`
      }
    ]
  },
  {
    name: "wdmatch", pct: 50,
    logic: "We check if a word can be found hidden in a second string in the correct letter order. If it can, we print out the complete word. If it cannot, we print nothing.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Two Pointer Match + Print (Official)",
        code: `package main

import "github.com/01-edu/z01"

func WdMatch(s1, s2 string) {
\ti := 0
\tfor j := 0; j < len(s2) && i < len(s1); j++ {
\t\tif s2[j] == s1[i] {
\t\t\ti++
\t\t}
\t}
\t// Only print if we matched ALL of s1's characters
\tif i == len(s1) {
\t\tfor _, char := range s1 {
\t\t\tz01.PrintRune(char)
\t\t}
\t\tz01.PrintRune('\\n')
\t}
}`
      },
      {
        title: "🔁 Approach 2 — Using HiddenP Logic with fmt (Alternative)",
        code: `package main

import "fmt"

func WdMatch(s1, s2 string) {
\t// Same subsequence logic as HiddenP, but we print the word directly
\tmatched := 0
\tfor _, char := range s2 {
\t\tif matched < len(s1) && char == rune(s1[matched]) {
\t\t\tmatched++
\t\t}
\t}
\tif matched == len(s1) {
\t\tfmt.Println(s1)
\t}
}`
      }
    ]
  },
  {
    name: "fifthandskip", pct: 65,
    logic: "We take a string, remove all spaces, and then group the letters into sets of 5. We separate these 5-letter blocks with a single space. We skip the 6th character after every group.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Strip, Count, Skip (Official)",
        code: `package main

func FifthAndSkip(s string) string {
\tclean := ""
\tfor _, c := range s {
\t\tif c != ' ' { clean += string(c) }
\t}
\tif len(clean) == 0 { return "\\n" }

\tresult := ""
\tcount := 0
\tfor i := 0; i < len(clean); i++ {
\t\tresult += string(clean[i])
\t\tcount++
\t\tif count == 5 {
\t\t\tresult += " "
\t\t\tcount = 0
\t\t\ti++ // Skip the 6th character
\t\t}
\t}
\tif len(result) > 0 && result[len(result)-1] == ' ' {
\t\tresult = result[:len(result)-1]
\t}
\treturn result + "\\n"
}`
      },
      {
        title: "🔁 Approach 2 — Group by Position Modulo 6 (Alternative)",
        code: `package main

import "strings"

func FifthAndSkip(s string) string {
\t// Remove spaces first
\tclean := strings.ReplaceAll(s, " ", "")
\tresult := ""
\tfor i, char := range clean {
\t\tpos := i % 6 // Position within each group of 6
\t\tif pos == 5 { continue } // Skip every 6th character
\t\tresult += string(char)
\t\tif pos == 4 && i < len(clean)-1 {
\t\t\tresult += " " // Add space after every 5th
\t\t}
\t}
\treturn strings.TrimRight(result, " ") + "\\n"
}`
      }
    ]
  },
  {
    name: "notdecimal", pct: 65,
    logic: "We take a decimal number written as text (like '12.34') and want to turn it into a regular whole integer by removing the decimal point entirely (making it 1234). If the text is invalid or not a proper decimal, we return it unchanged.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Scan and Skip Dot (Official)",
        code: `package main

func NotDecimal(s string) string {
\tresult := ""
\thasDot := false
\tfor _, c := range s {
\t\tif c == '.' {
\t\t\thasDot = true
\t\t\tcontinue // Skip the dot but remember we saw one
\t\t}
\t\tif c < '0' || c > '9' {
\t\t\treturn s // Invalid character found, return unchanged
\t\t}
\t\tresult += string(c)
\t}
\tif !hasDot { return s }
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Split on Dot and Rejoin (Alternative)",
        code: `package main

import "strings"

func NotDecimal(s string) string {
\t// Split on the decimal point
\tparts := strings.Split(s, ".")
\tif len(parts) != 2 {
\t\treturn s // Must have exactly one dot
\t}
\t// Validate both parts are all digits
\tfor _, part := range parts {
\t\tfor _, c := range part {
\t\t\tif c < '0' || c > '9' { return s }
\t\t}
\t}
\t// Join them without the dot
\treturn parts[0] + parts[1]
}`
      }
    ]
  },
  {
    name: "revconcatalternate", pct: 65,
    logic: "This takes two arrays, reads them backwards from end to start, and alternates taking elements from each to create a new single combined array.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Reverse Two Pointers (Official)",
        code: `package main

func RevConcatAlternate(slice1, slice2 []int) []int {
\tresult := []int{}
\ti := len(slice1) - 1
\tj := len(slice2) - 1

\tfor i >= 0 || j >= 0 {
\t\tif i >= 0 {
\t\t\tresult = append(result, slice1[i])
\t\t\ti--
\t\t}
\t\tif j >= 0 {
\t\t\tresult = append(result, slice2[j])
\t\t\tj--
\t\t}
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Reverse First, Then Alternate (Alternative)",
        code: `package main

func RevConcatAlternate(s1, s2 []int) []int {
\t// Helper: reverse a slice in-place
\treverse := func(s []int) []int {
\t\tcopy := append([]int{}, s...)
\t\tfor i, j := 0, len(copy)-1; i < j; i, j = i+1, j-1 {
\t\t\tcopy[i], copy[j] = copy[j], copy[i]
\t\t}
\t\treturn copy
\t}
\tr1, r2 := reverse(s1), reverse(s2)
\tresult := []int{}
\tmax := len(r1)
\tif len(r2) > max { max = len(r2) }
\tfor i := 0; i < max; i++ {
\t\tif i < len(r1) { result = append(result, r1[i]) }
\t\tif i < len(r2) { result = append(result, r2[i]) }
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "slice", pct: 65,
    logic: "We extract a portion of a list between a starting index and an ending index. If indices are negative, it means we count backwards from the end of the array.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Negative Index Handling + Slice (Official)",
        code: `package main

func Slice(slice []string, start int, end int) []string {
\tL := len(slice)
\t// Negative indices count from the end
\tif start < 0 { start = L + start }
\tif end < 0   { end   = L + end   }

\t// Clamp to valid range
\tif start < 0 { start = 0 }
\tif end > L   { end = L   }
\tif start >= end || start >= L { return nil }

\treturn slice[start:end]
}`
      },
      {
        title: "🔁 Approach 2 — Manual Copy Loop (Alternative)",
        code: `package main

func Slice(slice []string, start, end int) []string {
\tL := len(slice)
\tif start < 0 { start += L }
\tif end < 0   { end   += L }
\tif start < 0 { start = 0 }
\tif end > L   { end = L   }
\tif start >= end { return nil }

\t// Build the result manually instead of using built-in slice syntax
\tresult := []string{}
\tfor i := start; i < end; i++ {
\t\tresult = append(result, slice[i])
\t}
\treturn result
}`
      }
    ]
  },
  {
    name: "findpairs", pct: 75,
    logic: "We search an array of numbers to find all pairs of numbers that add up exactly to a specific target number. We look at every unique combination and log their index locations.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Brute Force Double Loop (Official)",
        code: `package main

import "fmt"

func FindPairs(arr []int, target int) {
\t// Check every unique pair (i, j) where i < j
\tfor i := 0; i < len(arr); i++ {
\t\tfor j := i + 1; j < len(arr); j++ {
\t\t\tif arr[i]+arr[j] == target {
\t\t\t\tfmt.Printf("Pair found at indices (%d, %d)\\n", i, j)
\t\t\t}
\t\t}
\t}
}`
      },
      {
        title: "🔁 Approach 2 — Hash Map for O(n) Speed (Alternative)",
        code: `package main

import "fmt"

func FindPairs(arr []int, target int) {
\t// Store each value's index as we go
\tseen := make(map[int]int)
\tfor i, v := range arr {
\t\t// What number do we need to pair with v?
\t\tcomplement := target - v
\t\tif j, ok := seen[complement]; ok {
\t\t\tfmt.Printf("Pair found at indices (%d, %d)\\n", j, i)
\t\t}
\t\tseen[v] = i
\t}
}`
      }
    ]
  },
  {
    name: "revwstr", pct: 75,
    logic: "We take a complete sentence and reverse the order of the words. For example, 'the cat sat' becomes 'sat cat the'. Spaces between words remain.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Collect Words + Print Backwards (Official)",
        code: `package main

import "github.com/01-edu/z01"

func RevWstr(s string) {
\twords := []string{}
\tcurrent := ""
\tfor _, c := range s {
\t\tif c == ' ' {
\t\t\tif current != "" { words = append(words, current) }
\t\t\tcurrent = ""
\t\t} else {
\t\t\tcurrent += string(c)
\t\t}
\t}
\tif current != "" { words = append(words, current) }

\t// Print words in reverse order
\tfor i := len(words) - 1; i >= 0; i-- {
\t\tfor _, c := range words[i] { z01.PrintRune(c) }
\t\tif i > 0 { z01.PrintRune(' ') }
\t}
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Split, Reverse Slice, Join (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func RevWstr(s string) {
\twords := strings.Fields(s)
\t// Reverse the words slice in-place
\tfor i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
\t\twords[i], words[j] = words[j], words[i]
\t}
\t// Rejoin with spaces
\tfmt.Println(strings.Join(words, " "))
}`
      }
    ]
  },
  {
    name: "rostring", pct: 75,
    logic: "Imagine a line of children holding hands. We take the very first child from the front of the line, move them all the way to the very back of the line, and slide everyone else forward.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Collect Words, Rearrange (Official)",
        code: `package main

import "github.com/01-edu/z01"

func RoString(s string) {
\twords := []string{}
\tcurrent := ""
\tfor _, c := range s {
\t\tif c == ' ' || c == '\\t' {
\t\t\tif current != "" { words = append(words, current) }
\t\t\tcurrent = ""
\t\t} else {
\t\t\tcurrent += string(c)
\t\t}
\t}
\tif current != "" { words = append(words, current) }
\tif len(words) == 0 { z01.PrintRune('\\n'); return }

\t// Print words 1..N first, then word 0 last
\tfor i := 1; i < len(words); i++ {
\t\tfor _, c := range words[i] { z01.PrintRune(c) }
\t\tz01.PrintRune(' ')
\t}
\tfor _, c := range words[0] { z01.PrintRune(c) }
\tz01.PrintRune('\\n')
}`
      },
      {
        title: "🔁 Approach 2 — Slice Rotation with strings (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strings"
)

func RoString(s string) {
\twords := strings.Fields(s)
\tif len(words) == 0 { fmt.Println(); return }
\t// Move first word to the end: words[1:] + words[0]
\trotated := append(words[1:], words[0])
\tfmt.Println(strings.Join(rotated, " "))
}`
      }
    ]
  },
  {
    name: "wordflip", pct: 75,
    logic: "We break a sentence down into individual words, reverse the order of those words completely, and assemble them back into a clean sentence separated by exactly one space.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Build Word List + Reverse (Official)",
        code: `package main

func WordFlip(s string) string {
\twords := []string{}
\tcurr := ""
\tfor _, c := range s {
\t\tif c == ' ' {
\t\t\tif curr != "" { words = append(words, curr) }
\t\t\tcurr = ""
\t\t} else {
\t\t\tcurr += string(c)
\t\t}
\t}
\tif curr != "" { words = append(words, curr) }
\tif len(words) == 0 { return "\\n" }

\tresult := ""
\t// Build result by reading words from back to front
\tfor i := len(words) - 1; i >= 0; i-- {
\t\tresult += words[i]
\t\tif i > 0 { result += " " }
\t}
\treturn result + "\\n"
}`
      },
      {
        title: "🔁 Approach 2 — strings.Fields + In-place Reverse (Alternative)",
        code: `package main

import "strings"

func WordFlip(s string) string {
\twords := strings.Fields(s)
\tif len(words) == 0 { return "\\n" }
\t// Reverse the slice in-place using two pointers
\tfor left, right := 0, len(words)-1; left < right; left, right = left+1, right-1 {
\t\twords[left], words[right] = words[right], words[left]
\t}
\treturn strings.Join(words, " ") + "\\n"
}`
      }
    ]
  },
  {
    name: "itoabase", pct: 85,
    logic: "Imagine you are used to counting up to 10 before resetting (Base 10). But what if you lived on an alien planet where they only have 2 fingers? They would count in Base 2 (Binary)! This program takes a normal number and translates it into any alien counting system (Base 2 up to Base 16) using a special list of symbols. We find the alien digits by dividing our number by their base size over and over again, keeping the remainders.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Divide and Keep Remainders (Official)",
        code: `package main

func ItoaBase(value int, base int) string {
\t// If the counting system is too small or too big, it's invalid!
\tif base < 2 || base > 16 {
\t\treturn ""
\t}

\t// These are the characters used for counting (Base 16 uses A to F for 10 to 15)
\tchars := "0123456789ABCDEF"

\t// If the number is 0, its translation is just "0"
\tif value == 0 {
\t\treturn "0"
\t}

\tisNegative := false
\t// We only handle negative signs if we are working with our normal base 10 system
\tif value < 0 && base == 10 {
\t\tisNegative = true
\t\tvalue = -value
\t}

\tresult := ""
\t// Keep dividing the number to peel off the new digits from back to front
\tfor value > 0 {
\t\tremainder := value % base
\t\tresult = string(chars[remainder]) + result
\t\tvalue = value / base
\t}

\t// Put the negative sign back on if it was a negative Base 10 number
\tif isNegative {
\t\tresult = "-" + result
\t}
\treturn result
}`
      },
      {
        title: "🔁 Approach 2 — Collect into Byte Slice (Alternative)",
        code: `package main

func ItoaBase(value, base int) string {
\tif base < 2 || base > 16 { return "" }
\tif value == 0 { return "0" }

\tchars := []byte("0123456789ABCDEF")
\tneg := value < 0 && base == 10
\tif neg { value = -value }

\tdigits := []byte{}
\tfor value > 0 {
\t\t// Collect digits in reverse order
\t\tdigits = append([]byte{chars[value%base]}, digits...)
\t\tvalue /= base
\t}
\tif neg { digits = append([]byte{'-'}, digits...) }
\treturn string(digits)
}`
      }
    ]
  },
  {
    name: "options", pct: 85,
    logic: "Imagine a control panel with 32 small light switches in a row, representing the letters 'a' through 'z' (starting from the right side). When someone passes a command flag like '-abc', we look at each letter and flip its corresponding light switch to 'ON' (which means changing its binary bit to 1). If someone types a character that isn't a lowercase letter, we print 'Invalid Option'. At the very end, we display the state of all 32 switches as blocks of 1s and 0s.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Bitfield with uint32 (Official)",
        code: `package main

import "fmt"

func Options(args []string) {
\t// This variable holds 32 bits, like 32 light switches all starting at 0 (OFF)
\tvar flags uint32 = 0

\t// Look at each argument passed into the program
\tfor _, arg := range args {
\t\t// Check if it's a flag option (starts with a '-' and has letters after it)
\t\tif len(arg) > 1 && arg[0] == '-' {
\t\t\tfor i := 1; i < len(arg); i++ {
\t\t\t\tch := arg[i]
\t\t\t\t// Make sure it's a valid lowercase letter
\t\t\t\tif ch >= 'a' && ch <= 'z' {
\t\t\t\t\tpos := ch - 'a' // Find its position (a=0, b=1, c=2...)
\t\t\t\t\tflags |= (1 << pos) // Flip that specific switch to ON (1)
\t\t\t\t} else {
\t\t\t\t\tfmt.Println("Invalid Option")
\t\t\t\t\treturn
\t\t\t\t}
\t\t\t}
\t\t}
\t}

\t// Print out the 32 bits in 4 neat groups of 8 switches, just like the platform expects
\tfmt.Printf("%08b %08b %08b %08b\\n", byte(flags>>24), byte(flags>>16), byte(flags>>8), byte(flags))
}`
      },
      {
        title: "🔁 Approach 2 — Map-Based Flag Tracker (Alternative)",
        code: `package main

import "fmt"

func Options(args []string) {
\t// A map to track which letters are ON
\tenabled := make(map[byte]bool)
\tfor _, arg := range args {
\t\tif len(arg) > 1 && arg[0] == '-' {
\t\t\tfor i := 1; i < len(arg); i++ {
\t\t\t\tif arg[i] < 'a' || arg[i] > 'z' {
\t\t\t\t\tfmt.Println("Invalid Option")
\t\t\t\t\treturn
\t\t\t\t}
\t\t\t\tenabled[arg[i]] = true
\t\t\t}
\t\t}
\t}
\t// Convert map to uint32 for correct output format
\tvar flags uint32
\tfor ch := byte('a'); ch <= 'z'; ch++ {
\t\tif enabled[ch] { flags |= 1 << (ch - 'a') }
\t}
\tfmt.Printf("%08b %08b %08b %08b\\n",
\t\tbyte(flags>>24), byte(flags>>16), byte(flags>>8), byte(flags))
}`
      }
    ]
  },
  {
    name: "piglatin", pct: 85,
    logic: "Pig Latin is a secret language. If a word starts with a vowel (a, e, i, o, u), you add 'ay' to the end. If it starts with consonants, you chop all consonants off the front, move them to the end, and then add 'ay'.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Find First Vowel Index (Official)",
        code: `package main

func PigLatin(s string) string {
\tisVowel := func(r byte) bool {
\t\treturn r == 'a' || r == 'e' || r == 'i' || r == 'o' || r == 'u' ||
\t\t\tr == 'A' || r == 'E' || r == 'I' || r == 'O' || r == 'U'
\t}

\tfor i := 0; i < len(s); i++ {
\t\tif isVowel(s[i]) {
\t\t\t// Move consonants before vowel to the end, add "ay"
\t\t\treturn s[i:] + s[:i] + "ay"
\t\t}
\t}
\treturn "No vowel"
}`
      },
      {
        title: "🔁 Approach 2 — Using strings.IndexAny (Alternative)",
        code: `package main

import "strings"

func PigLatin(s string) string {
\t// Find the position of the first vowel
\tvowels := "aeiouAEIOU"
\ti := strings.IndexAny(s, vowels)
\tif i == -1 {
\t\treturn "No vowel" // No vowels at all
\t}
\tif i == 0 {
\t\treturn s + "ay" // Starts with vowel: just add "ay"
\t}
\t// Move leading consonants to the end and add "ay"
\treturn s[i:] + s[:i] + "ay"
}`
      }
    ]
  },
  {
    name: "romannumbers", pct: 85,
    logic: "We turn normal Arabic digits into Roman numerals (I, V, X, L, C, D, M) by breaking down the values into thousands, hundreds, tens, and ones place columns.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Value + Symbol Arrays (Official)",
        code: `package main

import "fmt"

func RomanNumbers(n int) {
\tif n <= 0 || n >= 4000 { return }
\tvals := []int{1000,900,500,400,100,90,50,40,10,9,5,4,1}
\tsyms := []string{"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"}

\tresult := ""
\tfor i := 0; i < len(vals); i++ {
\t\t// Keep subtracting this value while it fits
\t\tfor n >= vals[i] {
\t\t\tresult += syms[i]
\t\t\tn -= vals[i]
\t\t}
\t}
\tfmt.Println(result)
}`
      },
      {
        title: "🔁 Approach 2 — Per-Digit Lookup Table (Alternative)",
        code: `package main

import "fmt"

func RomanNumbers(n int) {
\tif n <= 0 || n >= 4000 { return }
\t// Each row: ones, fives, tens for that column
\tthousands := []string{"", "M", "MM", "MMM"}
\thundreds  := []string{"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"}
\ttens      := []string{"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"}
\tones      := []string{"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"}

\tfmt.Println(
\t\tthousands[n/1000] +
\t\thundreds[(n%1000)/100] +
\t\ttens[(n%100)/10] +
\t\tones[n%10],
\t)
}`
      }
    ]
  },
  {
    name: "brackets", pct: 95,
    logic: "We check that all brackets (), [], {} match correctly. When we see an opening bracket, we push it onto a stack. When we see a closing bracket, it must match the item on top of our stack perfectly.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Stack with Map Matching (Official)",
        code: `package main

import "fmt"

func Brackets(s string) bool {
\tstack := []rune{}
\tmatches := map[rune]rune{')': '(', ']': '[', '}': '{'}

\tfor _, c := range s {
\t\tif c == '(' || c == '[' || c == '{' {
\t\t\t// Push opening bracket onto our stack
\t\t\tstack = append(stack, c)
\t\t} else if c == ')' || c == ']' || c == '}' {
\t\t\t// Stack must not be empty AND top must match
\t\t\tif len(stack) == 0 || stack[len(stack)-1] != matches[c] {
\t\t\t\treturn false
\t\t\t}
\t\t\tstack = stack[:len(stack)-1] // Pop from stack
\t\t}
\t}
\t// If stack is empty, all brackets matched!
\treturn len(stack) == 0
}`
      },
      {
        title: "🔁 Approach 2 — Switch Statement Version (Alternative)",
        code: `package main

func Brackets(s string) bool {
\tstack := []rune{}
\tfor _, c := range s {
\t\tswitch c {
\t\tcase '(', '[', '{':
\t\t\tstack = append(stack, c)
\t\tcase ')':
\t\t\tif len(stack) == 0 || stack[len(stack)-1] != '(' { return false }
\t\t\tstack = stack[:len(stack)-1]
\t\tcase ']':
\t\t\tif len(stack) == 0 || stack[len(stack)-1] != '[' { return false }
\t\t\tstack = stack[:len(stack)-1]
\t\tcase '}':
\t\t\tif len(stack) == 0 || stack[len(stack)-1] != '{' { return false }
\t\t\tstack = stack[:len(stack)-1]
\t\t}
\t}
\treturn len(stack) == 0
}`
      }
    ]
  },
  {
    name: "rpncalc", pct: 95,
    logic: "Reverse Polish Notation calculation. Instead of '1 + 2', it reads '1 2 +'. We save numbers on a stack, and when we see an operator (+, -, *, /), we take the top two numbers, apply the math, and save the answer back.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Stack + strconv.Atoi (Official)",
        code: `package main

import (
\t"fmt"
\t"strconv"
\t"strings"
)

func RPNCalc(s string) {
\ttokens := strings.Fields(s)
\tstack := []int{}

\tfor _, t := range tokens {
\t\tnum, err := strconv.Atoi(t)
\t\tif err == nil {
\t\t\tstack = append(stack, num) // It's a number, push it
\t\t} else {
\t\t\tif len(stack) < 2 { fmt.Println("Error"); return }
\t\t\tb := stack[len(stack)-1]
\t\t\ta := stack[len(stack)-2]
\t\t\tstack = stack[:len(stack)-2]
\t\t\tswitch t {
\t\t\tcase "+": stack = append(stack, a+b)
\t\t\tcase "-": stack = append(stack, a-b)
\t\t\tcase "*": stack = append(stack, a*b)
\t\t\tcase "/":
\t\t\t\tif b == 0 { fmt.Println("Error"); return }
\t\t\t\tstack = append(stack, a/b)
\t\t\tdefault: fmt.Println("Error"); return
\t\t\t}
\t\t}
\t}
\tif len(stack) != 1 { fmt.Println("Error"); return }
\tfmt.Println(stack[0])
}`
      },
      {
        title: "🔁 Approach 2 — Helper Functions for Clarity (Alternative)",
        code: `package main

import (
\t"fmt"
\t"strconv"
\t"strings"
)

func applyOp(a, b int, op string) (int, bool) {
\tswitch op {
\tcase "+": return a + b, true
\tcase "-": return a - b, true
\tcase "*": return a * b, true
\tcase "/":
\t\tif b == 0 { return 0, false }
\t\treturn a / b, true
\t}
\treturn 0, false
}

func RPNCalc(s string) {
\tstack := []int{}
\tfor _, token := range strings.Fields(s) {
\t\tif n, err := strconv.Atoi(token); err == nil {
\t\t\tstack = append(stack, n)
\t\t} else {
\t\t\tif len(stack) < 2 { fmt.Println("Error"); return }
\t\t\tn := len(stack)
\t\t\tresult, ok := applyOp(stack[n-2], stack[n-1], token)
\t\t\tif !ok { fmt.Println("Error"); return }
\t\t\tstack = append(stack[:n-2], result)
\t\t}
\t}
\tif len(stack) == 1 { fmt.Println(stack[0]) } else { fmt.Println("Error") }
}`
      }
    ]
  },
  {
    name: "brainfuck", pct: 100,
    logic: "An esoteric programming interpreter! Brainfuck has only 8 commands: '+' increments a memory cell, '-' decrements it, '>' moves right, '<' moves left, '.' prints the character, ',' reads input, '[' starts a loop, ']' ends a loop. Memory is a tape of byte cells.",
    approaches: [
      {
        title: "⚙️ Approach 1 — Switch Statement Interpreter (Official)",
        code: `package main

import "os"
import "github.com/01-edu/z01"

func main() {
\tif len(os.Args) != 2 { return }
\tcode := os.Args[1]
\tmemory := make([]byte, 2048)
\tptr := 0 // Data pointer (which memory cell we're on)

\tfor i := 0; i < len(code); i++ {
\t\tswitch code[i] {
\t\tcase '>': ptr++
\t\tcase '<': ptr--
\t\tcase '+': memory[ptr]++
\t\tcase '-': memory[ptr]--
\t\tcase '.': z01.PrintRune(rune(memory[ptr]))
\t\tcase '[':
\t\t\tif memory[ptr] == 0 { // Skip the loop
\t\t\t\tcount := 1
\t\t\t\tfor count > 0 {
\t\t\t\t\ti++
\t\t\t\t\tif code[i] == '[' { count++ }
\t\t\t\t\tif code[i] == ']' { count-- }
\t\t\t\t}
\t\t\t}
\t\tcase ']':
\t\t\tif memory[ptr] != 0 { // Jump back in loop
\t\t\t\tcount := 1
\t\t\t\tfor count > 0 {
\t\t\t\t\ti--
\t\t\t\t\tif code[i] == ']' { count++ }
\t\t\t\t\tif code[i] == '[' { count-- }
\t\t\t\t}
\t\t\t}
\t\t}
\t}
}`
      },
      {
        title: "🔁 Approach 2 — Pre-Compute Bracket Jumps (Alternative)",
        code: `package main

import (
\t"fmt"
\t"os"
)

func main() {
\tif len(os.Args) != 2 { return }
\tcode := os.Args[1]
\tmemory := make([]byte, 2048)

\t// Pre-compute where each bracket jumps to (faster!)
\tjumps := make(map[int]int)
\tstack := []int{}
\tfor i, c := range code {
\t\tif c == '[' { stack = append(stack, i) }
\t\tif c == ']' && len(stack) > 0 {
\t\t\tj := stack[len(stack)-1]
\t\t\tstack = stack[:len(stack)-1]
\t\t\tjumps[j] = i
\t\t\tjumps[i] = j
\t\t}
\t}

\tptr, ip := 0, 0
\tfor ip < len(code) {
\t\tswitch code[ip] {
\t\tcase '>': ptr++
\t\tcase '<': ptr--
\t\tcase '+': memory[ptr]++
\t\tcase '-': memory[ptr]--
\t\tcase '.': fmt.Printf("%c", memory[ptr])
\t\tcase '[':
\t\t\tif memory[ptr] == 0 { ip = jumps[ip] }
\t\tcase ']':
\t\t\tif memory[ptr] != 0 { ip = jumps[ip] }
\t\t}
\t\tip++
\t}
}`
      }
    ]
  },
  {
    name: "grouping", pct: 100,
    logic: "Regex capture groups parser. We process complex text strings evaluating character matching syntax segments contained within parentheses to isolate exact substring matches dynamically.",
    approaches: [
      {
        title: "⚙️ Approach 1 — regexp.FindAllStringSubmatch (Official)",
        code: `package main

import (
\t"fmt"
\t"os"
\t"regexp"
)

func main() {
\tif len(os.Args) != 3 { return }
\tpattern := os.Args[1]
\ttext := os.Args[2]

\t// Compile the regex pattern (catches syntax errors)
\tre, err := regexp.Compile(pattern)
\tif err != nil { return }

\t// FindAllStringSubmatch returns ALL matches with capture groups
\tmatches := re.FindAllStringSubmatch(text, -1)
\tfor _, match := range matches {
\t\tfmt.Println(match[0]) // match[0] is the full match
\t}
}`
      },
      {
        title: "🔁 Approach 2 — MustCompile with Group Extraction (Alternative)",
        code: `package main

import (
\t"fmt"
\t"os"
\t"regexp"
)

func main() {
\tif len(os.Args) != 3 { return }

\t// MustCompile panics on bad regex (simpler but less safe)
\tre, err := regexp.Compile(os.Args[1])
\tif err != nil {
\t\tfmt.Println("Invalid pattern")
\t\treturn
\t}

\t// FindAllString finds all matches (no capture group detail)
\t// Use this when you only need the full match, not sub-groups
\tresults := re.FindAllString(os.Args[2], -1)
\tfor _, r := range results {
\t\tfmt.Println(r)
\t}
}`
      }
    ]
  },
];

// ─── GO BASICS DATA ───────────────────────────────────────────────────────────
const GO_BASICS = [
  { icon: "📦", title: "Package & Main", body: 'Every Go file starts with `package main`. Your program entry point is always `func main() {}`.' },
  { icon: "🖨️", title: "Printing", body: '`fmt.Println("hi")` prints with a newline. `fmt.Printf("%d", n)` formats output. Always import `"fmt"`.' },
  { icon: "📝", title: "Variables", body: '`var x int = 5` is the full form. Inside functions use: `x := 5`. Go figures out the type for you.' },
  { icon: "🔁", title: "Loops", body: 'Go only has `for`. Classic: `for i := 0; i < 10; i++`. Range: `for i, v := range slice {}`. While-style: `for x > 0 {}`.' },
  { icon: "🔀", title: "If / Else", body: '`if x > 0 { } else { }` — NO parentheses around the condition! That is Go style.' },
  { icon: "📚", title: "Slices", body: '`s := []int{1,2,3}`. Add items: `s = append(s, 4)`. Access: `s[0]`. Slice a slice: `s[1:3]`. Length: `len(s)`.' },
  { icon: "🗺️", title: "Maps", body: '`m := make(map[string]int)`. Set: `m["key"] = 1`. Get: `v := m["key"]`. Check exists: `v, ok := m["key"]`.' },
  { icon: "🧩", title: "Functions", body: '`func add(a, b int) int { return a + b }`. Go supports multiple return values: `func f() (int, error)`.' },
  { icon: "📌", title: "Naming Rules", body: 'camelCase for variables (`myName`). PascalCase for exported (`MyFunc`). Short names in loops (`i`, `v`, `c`) are encouraged.' },
  { icon: "🚀", title: "z01 Library", body: '`z01.PrintRune(r)` prints one rune/character. Import with `"github.com/01-edu/z01"`. Use it when fmt is not allowed.' },
  { icon: "🚫", title: "Don\'ts", body: "Don't declare a variable and not use it — Go won't compile. Don't forget imports. No semicolons at line ends." },
  { icon: "✅", title: "Do\'s", body: "Use `gofmt` to auto-format. Keep functions small and focused. Read error messages carefully — Go's are very helpful!" },
];

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function getPctColor(pct) {
  if (pct <= 5)  return "#52b788";
  if (pct <= 10) return "#40916c";
  if (pct <= 20) return "#56cfe1";
  if (pct <= 35) return "#4cc9f0";
  if (pct <= 50) return "#f4a261";
  if (pct <= 65) return "#e76f51";
  if (pct <= 75) return "#e63946";
  if (pct <= 85) return "#c77dff";
  if (pct <= 95) return "#9d4edd";
  return "#ffd60a";
}


// ─── SHARED UI ────────────────────────────────────────────────────────────────
function SteamSVG() {
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" style={{display:"inline-block",verticalAlign:"middle",marginBottom:2}}>
      {[10,24,38].map((x,i)=>(
        <path key={i} d={`M${x} 30 Q${x+5} 20 ${x} 12 Q${x-5} 4 ${x} 0`}
          stroke="#c8860a" strokeWidth="2.5" fill="none" strokeLinecap="round"
          style={{animation:`steam ${1.3+i*0.25}s ease-in-out infinite`,opacity:0.65}}/>
      ))}
    </svg>
  );
}

function Pill({ label, color, small }) {
  return (
    <span style={{
      display:"inline-block", padding: small?"2px 7px":"3px 10px",
      borderRadius:99, background:`${color}22`, border:`1px solid ${color}66`,
      color, fontSize: small?10:11, fontWeight:700, letterSpacing:0.5,
    }}>{label}</span>
  );
}

// ─── SPLASH SCREEN ────────────────────────────────────────────────────────────
function SplashScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("Loading algorithm data...");
  const [liquidH, setLiquidH] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const steps = [
    { at:0,   text:"Loading algorithm data..."    },
    { at:20,  text:"Mapping 54 Go programs..."    },
    { at:42,  text:"Building step-by-step visualizers..."  },
    { at:65,  text:"Compiling code examples..."     },
    { at:82,  text:"Preparing two approaches each..."     },
    { at:95,  text:"Initialising the visualizer..." },
    { at:100, text:"Ready. Let's learn Go. 🚀"     },
  ];

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += 1;
      setProgress(p);
      setLiquidH(p);
      const s = [...steps].reverse().find(s => p >= s.at);
      if (s) setLabel(s.text);
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => setFadeOut(true), 600);
        setTimeout(onDone, 1200);
      }
    }, 28);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{
      position:"fixed",inset:0,zIndex:9999,
      background:"linear-gradient(160deg,#060200,#1a0900,#060200)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      opacity:fadeOut?0:1, transition:fadeOut?"opacity 0.6s ease":"none",
    }}>
      <svg width="120" height="140" viewBox="0 0 120 140" style={{marginBottom:24,filter:"drop-shadow(0 8px 24px rgba(200,134,10,0.35))"}}>
        <defs>
          <clipPath id="cupClip"><polygon points="22,30 98,30 88,115 32,115"/></clipPath>
          <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8660a"/><stop offset="100%" stopColor="#6b2f00"/>
          </linearGradient>
        </defs>
        {liquidH>10&&[28,50,72].map((x,i)=>(
          <path key={i} d={`M${x} 26 Q${x+6} 16 ${x} 8 Q${x-6} 0 ${x} -6`}
            stroke="#c8860a" strokeWidth="2" fill="none" strokeLinecap="round"
            style={{animation:`steam ${1.2+i*0.3}s ease-in-out infinite`,opacity:Math.min(1,liquidH/40)}}/>
        ))}
        <ellipse cx="60" cy="120" rx="48" ry="7" fill="#3a1800" opacity="0.9"/>
        <ellipse cx="60" cy="118" rx="42" ry="5" fill="#4a2200"/>
        <polygon points="22,30 98,30 88,115 32,115" fill="url(#cupGrad2)" stroke="#6a3a10" strokeWidth="1.5"/>
        <g clipPath="url(#cupClip)">
          <rect x="20" y={115-(85*liquidH/100)} width="80" height={85*liquidH/100+5} fill="url(#liquidGrad)" style={{transition:"y 0.1s linear,height 0.1s linear"}}/>
          {liquidH>5&&<ellipse cx="60" cy={115-(85*liquidH/100)} rx="36" ry="5" fill="#d4780a" opacity="0.7"/>}
        </g>
        <ellipse cx="60" cy="30" rx="38" ry="6" fill="#4a2200" stroke="#6a3a10" strokeWidth="1"/>
        <path d="M88,55 Q115,55 115,80 Q115,105 88,105" fill="none" stroke="#5a2800" strokeWidth="8" strokeLinecap="round"/>
        <path d="M88,55 Q108,55 108,80 Q108,105 88,105" fill="none" stroke="#7a3a10" strokeWidth="4" strokeLinecap="round"/>
        <defs>
          <linearGradient id="cupGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a1800"/><stop offset="50%" stopColor="#5a2800"/><stop offset="100%" stopColor="#3a1800"/>
          </linearGradient>
        </defs>
      </svg>
      <div style={{fontSize:34,fontWeight:900,color:"#c8860a",letterSpacing:3,marginBottom:4,textShadow:"0 0 30px rgba(200,134,10,0.4)"}}>Go Visualizer</div>
      <div style={{fontSize:11,color:"#7a5030",letterSpacing:4,textTransform:"uppercase",marginBottom:32}}>Go Algorithm Visualizer</div>
      <div style={{fontSize:14,color:"#d4a060",marginBottom:12,height:20,letterSpacing:0.3}}>{label}</div>
      <div style={{width:260,height:8,background:"rgba(255,255,255,0.06)",borderRadius:99,overflow:"hidden",border:"1px solid rgba(200,134,10,0.18)"}}>
        <div style={{height:"100%",width:`${progress}%`,background:"linear-gradient(90deg,#6b2f00,#c8860a,#ffd060)",borderRadius:99,transition:"width 0.06s linear",boxShadow:"0 0 10px rgba(200,134,10,0.6)"}}/>
      </div>
      <div style={{marginTop:10,fontSize:12,color:"#7a5030",fontFamily:"'Courier New',monospace",letterSpacing:1}}>{progress}%</div>
    </div>
  );
}

// ─── WELCOME SCREEN ───────────────────────────────────────────────────────────
function WelcomeScreen({ onStart }) {
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  const go = () => {
    if (!name.trim()) { setErr(true); setTimeout(()=>setErr(false),600); return; }
    onStart(name.trim());
  };
  return (
    <div style={S.page}>
      <div style={S.card}>
        <div style={{textAlign:"center",marginBottom:6}}>
          <div style={{fontSize:52,lineHeight:1.1}}>☕</div>
          <SteamSVG/>
          <div style={{fontSize:32,fontWeight:900,color:"#c8860a",letterSpacing:2,marginTop:2}}>Go Visualizer</div>
          <div style={{fontSize:11,color:"#7a5c30",letterSpacing:3,textTransform:"uppercase",marginBottom:18}}>Go Algorithm Visualizer</div>
        </div>
        <p style={{fontSize:14,color:"#dfc090",lineHeight:1.8,marginBottom:22,textAlign:"center"}}>
          Understand Go algorithms step by step — before you write a single line.<br/>
          <span style={{color:"#7a5030",fontSize:12}}>54 programs · interactive step-through · 2 code approaches each</span>
        </p>
        <label style={{fontSize:12,color:"#a07040",display:"block",marginBottom:6,letterSpacing:1}}>✍️ Enter your name to track your session</label>
        <div style={{position:"relative",marginBottom:14}}>
          <input
            style={{...S.input, borderColor:err?"#e63946":"rgba(200,134,10,0.35)", animation:err?"shake 0.45s":"none"}}
            placeholder="Your nickname..."
            value={name}
            onChange={e=>setName(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&go()}
            maxLength={22}
          />
          <span style={{position:"absolute",right:13,top:"50%",transform:"translateY(-50%)",fontSize:20,pointerEvents:"none"}}>☕</span>
        </div>
        <button style={S.btnPrimary} onClick={go}>Start Learning Go →</button>
        <p style={{textAlign:"center",fontSize:11,color:"#4a2e10",marginTop:10}}>No sign-up · No data stored · 100% free · Works on mobile</p>
      </div>
    </div>
  );
}

// ─── BASICS SCREEN ────────────────────────────────────────────────────────────
function BasicsScreen({ name, onDone }) {
  return (
    <div style={S.page}>
      <div style={{...S.card,maxWidth:500}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:18}}>
          <span style={{fontSize:28}}>📋</span>
          <div>
            <div style={{fontSize:19,fontWeight:800,color:"#c8860a"}}>Go Reference, {name}</div>
            <div style={{fontSize:11,color:"#7a5c30"}}>Key Go concepts — read this before diving into the exercises</div>
          </div>
        </div>
        <div style={{display:"grid",gap:8,marginBottom:20}}>
          {GO_BASICS.map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",background:"rgba(200,134,10,0.07)",border:"1px solid rgba(200,134,10,0.13)",borderRadius:10,padding:"10px 12px"}}>
              <span style={{fontSize:18,flexShrink:0,marginTop:1}}>{item.icon}</span>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:"#e0b060",marginBottom:2}}>{item.title}</div>
                <div style={{fontSize:12,color:"#c0a060",lineHeight:1.65,fontFamily:"'Courier New',monospace"}}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hitesh Choudhary resource */}
        <div style={{background:"rgba(255,0,0,0.06)",border:"1px solid rgba(255,80,80,0.2)",borderRadius:12,padding:"13px",marginBottom:16}}>
          <div style={{fontSize:11,fontWeight:800,color:"#ff6b6b",letterSpacing:1,marginBottom:8}}>📺 STILL STRUGGLING WITH GO? LEARN FROM AN EXPERT</div>
          <div style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}}>
            <span style={{fontSize:22,flexShrink:0}}>🎓</span>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:"#f0d090",marginBottom:3}}>Hitesh Choudhary — Go Language Playlist</div>
              <div style={{fontSize:12,color:"#c0a070",lineHeight:1.7}}>A free beginner-friendly Go video series by <strong style={{color:"#ffd060"}}>Hitesh Choudhary</strong> — one of the most trusted coding educators on YouTube. These videos belong entirely to him and his channel. Go Visualizer simply points you there.</div>
            </div>
          </div>
          <div style={{background:"rgba(255,80,80,0.08)",border:"1px solid rgba(255,80,80,0.15)",borderRadius:8,padding:"7px 10px",marginBottom:10,fontSize:11,color:"#e07070",lineHeight:1.6}}>
            ⚠️ You are about to leave Go Visualizer and open <strong>YouTube</strong>. Content belongs to <strong>Hitesh Choudhary</strong> — not affiliated with Go Visualizer.
          </div>
          <a href="https://www.youtube.com/playlist?list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N"
            target="_blank" rel="noopener noreferrer"
            style={{display:"block",width:"100%",padding:"10px 0",borderRadius:10,background:"linear-gradient(135deg,#c00,#e63946)",color:"#fff",fontSize:13,fontWeight:800,cursor:"pointer",fontFamily:"Georgia,serif",textAlign:"center",textDecoration:"none",boxShadow:"0 4px 16px rgba(200,0,0,0.3)"}}>
            ▶ Watch on YouTube — Hitesh Choudhary
          </a>
        </div>

        <button style={S.btnPrimary} onClick={onDone}>Open the Exercise Board →</button>
      </div>
    </div>
  );
}

// ─── SKILL BOARD (replaces ordered task progression) ─────────────────────────
const TIER_LABELS = {5:"Beginner",10:"Beginner",20:"Elementary",35:"Intermediate",50:"Intermediate",65:"Upper-Mid",75:"Advanced",85:"Advanced",95:"Expert",100:"Expert"};

function SkillBoard({ name, onSelect }) {
  const [filter, setFilter] = useState("all");
  const tiers = [...new Set(TASKS.map(t=>t.pct))].sort((a,b)=>a-b);
  const filtered = filter === "all" ? TASKS : TASKS.filter(t=>t.pct===Number(filter));

  return (
    <div style={S.page}>
      {/* Header */}
      <div style={{width:"100%",maxWidth:500,padding:"16px 4px 8px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}>
          <div>
            <div style={{fontSize:20,fontWeight:900,color:"#c8860a"}}>Go Algorithm Visualizer</div>
            <div style={{fontSize:11,color:"#7a5030"}}>Pick any of the 54 Go programs to visualize and study.</div>
          </div>
          <div style={{fontSize:28}}>🔍</div>
        </div>
      </div>

      {/* Tier filter pills */}
      <div style={{width:"100%",maxWidth:500,display:"flex",gap:6,flexWrap:"wrap",padding:"0 4px",marginBottom:12}}>
        <button onClick={()=>setFilter("all")}
          style={{padding:"5px 12px",borderRadius:99,border:`1px solid ${filter==="all"?"#c8860a":"rgba(200,134,10,0.25)"}`,background:filter==="all"?"rgba(200,134,10,0.18)":"rgba(255,255,255,0.03)",color:filter==="all"?"#ffd060":"#a07040",fontSize:11,fontWeight:filter==="all"?800:400,cursor:"pointer",fontFamily:"inherit"}}>
          All ({TASKS.length})
        </button>
        {tiers.map(t=>(
          <button key={t} onClick={()=>setFilter(String(t))}
            style={{padding:"5px 10px",borderRadius:99,border:`1px solid ${filter===String(t)?getPctColor(t):"rgba(200,134,10,0.2)"}`,background:filter===String(t)?`${getPctColor(t)}22`:"rgba(255,255,255,0.03)",color:filter===String(t)?getPctColor(t):"#7a5030",fontSize:11,fontWeight:filter===String(t)?800:400,cursor:"pointer",fontFamily:"inherit"}}>
            {t}%
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <div style={{width:"100%",maxWidth:500,display:"grid",gap:8,padding:"0 4px 48px"}}>
        {filtered.map((task,i)=>{
          const color = getPctColor(task.pct);
          return (
            <button key={task.name} onClick={()=>onSelect(task)}
              style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,border:`1px solid ${color}33`,background:"rgba(255,255,255,0.03)",cursor:"pointer",textAlign:"left",fontFamily:"inherit",transition:"all 0.15s",width:"100%"}}>
              <div style={{width:38,height:38,borderRadius:10,background:`${color}18`,border:`1px solid ${color}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{fontSize:11,fontWeight:900,color}}>{task.pct}%</span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:14,fontWeight:700,color:"#f0d090",fontFamily:"'Courier New',monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{task.name}</div>
                <div style={{fontSize:11,color:"#7a5030",marginTop:1}}>{TIER_LABELS[task.pct]||""} · {task.logic.slice(0,52)}...</div>
              </div>
              <span style={{fontSize:16,color:color,flexShrink:0}}>→</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── SINCERITY MODAL ──────────────────────────────────────────────────────────
function SincerityModal({ onYes, onNo, color }) {
  return (
    <div style={{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(4px)"}}>
      <div style={{background:"#1a0900",border:`1px solid ${color}55`,borderRadius:18,padding:"28px 22px",maxWidth:340,width:"100%",textAlign:"center",boxShadow:"0 16px 60px rgba(0,0,0,0.8)"}}>
        <div style={{fontSize:36,marginBottom:12}}>🧠</div>
        <div style={{fontSize:18,fontWeight:800,color:"#f0d090",marginBottom:10,lineHeight:1.4}}>
          Have you attempted this program yet?
        </div>
        <div style={{fontSize:13,color:"#a07040",lineHeight:1.7,marginBottom:24}}>
          Writing the algorithm yourself first — even imperfectly — is how the logic actually sticks. Study the visualizer above, then try it in your editor before revealing the solution.
        </div>
        <div style={{display:"flex",gap:10}}>
          <button onClick={onNo}
            style={{flex:1,padding:"12px",borderRadius:10,border:"1px solid rgba(200,134,10,0.3)",background:"rgba(255,255,255,0.04)",color:"#a07040",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
            Not yet — let me study the visualizer
          </button>
          <button onClick={onYes}
            style={{flex:1,padding:"12px",borderRadius:10,border:"none",background:`linear-gradient(135deg,${color},${color}bb)`,color:"#080300",fontSize:14,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>
            Yes, I attempted it ✅
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── EXERCISE SCREEN ──────────────────────────────────────────────────────────
function ExerciseScreen({ task, name, onBack }) {
  const [phase, setPhase] = useState("viz");   // viz | sincerity | solution
  const [showModal, setShowModal] = useState(false);
  const [activeApproach, setActiveApproach] = useState(0);
  const color = getPctColor(task.pct);

  const handleRevealClick = () => setShowModal(true);
  const handleYes = () => { setShowModal(false); setPhase("solution"); };
  const handleNo  = () => { setShowModal(false); setPhase("viz"); };

  return (
    <div style={S.page}>
      {showModal && <SincerityModal onYes={handleYes} onNo={handleNo} color={color}/>}

      {/* Top nav */}
      <div style={{width:"100%",maxWidth:500,display:"flex",alignItems:"center",gap:10,padding:"14px 4px 8px"}}>
        <button onClick={onBack}
          style={{padding:"7px 12px",borderRadius:9,border:"1px solid rgba(200,134,10,0.25)",background:"rgba(255,255,255,0.04)",color:"#a07040",fontSize:13,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>
          ← Board
        </button>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:15,fontWeight:800,color:"#f0d090",fontFamily:"'Courier New',monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{task.name}</div>
          <div style={{display:"flex",gap:6,alignItems:"center",marginTop:2}}>
            <Pill label={`${task.pct}%`} color={color} small/>
            <span style={{fontSize:10,color:"#5a3a18"}}>{TIER_LABELS[task.pct]||""}</span>
          </div>
        </div>
        <div style={{width:36,height:36,borderRadius:"50%",background:"rgba(200,134,10,0.12)",border:"1px solid rgba(200,134,10,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>
          {name[0]?.toUpperCase()}
        </div>
      </div>

      <div style={{...S.card,maxWidth:500,marginTop:4}}>

        {/* Logic */}
        <div style={{background:"rgba(200,134,10,0.08)",border:"1px solid rgba(200,134,10,0.18)",borderRadius:12,padding:"12px 13px",marginBottom:13}}>
          <div style={{fontSize:11,fontWeight:800,color:"#c8860a",letterSpacing:1.2,marginBottom:6}}>📐 ALGORITHM LOGIC</div>
          <div style={{fontSize:13,color:"#e8d5b0",lineHeight:1.8}}>{task.logic}</div>
        </div>

        {/* Visualizer always shown */}
        <VisualizerPanel name={task.name} color={color}/>

        {/* Phase: viz — show reveal button */}
        {phase === "viz" && (
          <button
            style={{...S.btnPrimary, background:`linear-gradient(135deg,${color},${color}bb)`, marginTop:4}}
            onClick={handleRevealClick}
          >
            View Solution & Code →
          </button>
        )}

        {/* Phase: solution — show approaches */}
        {phase === "solution" && (
          <div style={{marginTop:8}}>
            {/* Disclaimer */}
            <div style={{background:"rgba(255,214,10,0.06)",border:"1px solid rgba(255,214,10,0.2)",borderRadius:10,padding:"10px 13px",marginBottom:12,display:"flex",gap:9,alignItems:"flex-start"}}>
              <span style={{fontSize:16,flexShrink:0}}>💡</span>
              <div style={{fontSize:12,color:"#d4b060",lineHeight:1.7}}>
                <strong style={{color:"#ffd60a"}}>Note:</strong> Two valid Go implementations are shown below — they are not the only correct solutions. Any code that compiles and produces the correct output is a valid approach.
              </div>
            </div>

            {/* Approach tabs */}
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              {task.approaches.map((a,i)=>(
                <button key={i} onClick={()=>setActiveApproach(i)}
                  style={{flex:1,padding:"8px 6px",borderRadius:8,border:`1px solid ${activeApproach===i?color:"rgba(200,134,10,0.2)"}`,background:activeApproach===i?`rgba(200,134,10,0.12)`:"rgba(255,255,255,0.03)",color:activeApproach===i?color:"#7a5c30",fontSize:11,cursor:"pointer",fontFamily:"inherit",fontWeight:activeApproach===i?700:400,lineHeight:1.4,transition:"all 0.15s"}}>
                  {a.title}
                </button>
              ))}
            </div>

            {/* Code block */}
            {task.approaches.map((a,i)=>(
              activeApproach===i && (
                <div key={i} style={{borderRadius:10,overflow:"hidden",border:`1px solid ${color}44`}}>
                  <div style={{background:"#1a0800",padding:"6px 12px",display:"flex",alignItems:"center",gap:6,borderBottom:`1px solid ${color}33`}}>
                    <span style={{width:10,height:10,borderRadius:"50%",background:"#ff5f56",display:"inline-block"}}/>
                    <span style={{width:10,height:10,borderRadius:"50%",background:"#ffbd2e",display:"inline-block"}}/>
                    <span style={{width:10,height:10,borderRadius:"50%",background:"#27c93f",display:"inline-block"}}/>
                    <span style={{fontSize:10,color:color,marginLeft:6,fontFamily:"'Courier New',monospace",fontWeight:700}}>{a.title}</span>
                  </div>
                  <pre style={{margin:0,padding:"13px",background:"#060200",color:"#e8d5a0",fontFamily:"'Courier New',monospace",fontSize:12,lineHeight:1.65,overflowX:"auto",whiteSpace:"pre"}}>
                    {a.code}
                  </pre>
                </div>
              )
            ))}

            {/* Back to viz */}
            <button
              style={{...S.btnPrimary,marginTop:12,background:"rgba(255,255,255,0.04)",color:"#c8860a",border:"1px solid rgba(200,134,10,0.3)",boxShadow:"none"}}
              onClick={()=>setPhase("viz")}
            >
              ← Back to Algorithm Visualizer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── VISUALIZER SYSTEM ────────────────────────────────────────────────────────
// ─── VISUALIZER SYSTEM ────────────────────────────────────────────────────────

// Shared styled step-through shell
function VizShell({ title, color, step, total, onPrev, onNext, onReset, children, caption }) {
  return (
    <div style={{background:"rgba(0,0,0,0.25)",border:`1px solid ${color}44`,borderRadius:12,padding:"12px 13px",marginBottom:13}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <div style={{fontSize:11,fontWeight:800,color,letterSpacing:1}}>▶ ALGORITHM VISUALISER</div>
        <div style={{fontSize:11,color:"#7a5030"}}>Step {step+1} / {total}</div>
      </div>
      <div style={{fontSize:12,fontWeight:700,color:"#e0b870",marginBottom:8}}>{title}</div>
      <div style={{minHeight:110,display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:6,marginBottom:10}}>
        {children}
      </div>
      <div style={{fontSize:12,color:"#d4a060",background:"rgba(200,134,10,0.07)",borderRadius:8,padding:"7px 10px",minHeight:36,lineHeight:1.6,marginBottom:10,textAlign:"center"}}>
        {caption}
      </div>
      <div style={{display:"flex",gap:6}}>
        <button onClick={onReset} style={VB("#444")}>↺</button>
        <button onClick={onPrev}  style={VB("#555")} disabled={step===0}>◀</button>
        <button onClick={onNext}  style={{...VB(color),flex:1,color:"#080300"}} disabled={step===total-1}>Next Step ▶</button>
      </div>
    </div>
  );
}
function VB(bg){return{padding:"7px 12px",borderRadius:8,border:"none",background:bg,color:"#f0d090",fontSize:13,cursor:"pointer",fontFamily:"Georgia,serif",fontWeight:700};}

function Box({label,highlight,color,small}){
  return <div style={{minWidth:small?28:38,padding:"5px 7px",borderRadius:7,background:highlight?`${color}33`:"rgba(255,255,255,0.05)",border:`2px solid ${highlight?color:"rgba(255,255,255,0.1)"}`,color:highlight?"#ffd060":"#c0a060",fontSize:small?11:13,fontWeight:700,textAlign:"center",transition:"all 0.25s",boxShadow:highlight?`0 0 10px ${color}66`:"none"}}>{label}</div>;
}
function Arrow({label}){return <div style={{fontSize:16,color:"#c8860a",alignSelf:"center"}}>{label||"→"}</div>;}
function StackBox({items,color,label}){
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
      <div style={{fontSize:10,color:"#7a5030",marginBottom:2}}>{label||"STACK"}</div>
      {items.length===0&&<div style={{fontSize:11,color:"#5a3010",padding:"4px 10px",border:"1px dashed #5a3010",borderRadius:6}}>empty</div>}
      {[...items].reverse().map((v,i)=>(
        <div key={i} style={{padding:"4px 18px",background:i===0?`${color}33`:"rgba(255,255,255,0.05)",border:`1px solid ${i===0?color:"rgba(255,255,255,0.1)"}`,borderRadius:6,fontSize:12,fontWeight:700,color:i===0?"#ffd060":"#c0a060",transition:"all 0.25s"}}>{v}</div>
      ))}
    </div>
  );
}

// ── Individual visualizers ────────────────────────────────────────────────────

function VizOnly({ color }) {
  const steps=[{char:"?",label:"Start: what character should we print?"},{char:"1",label:"We pick the rune '1' and call PrintRune('1')"},{char:"1",nl:true,label:"Then we call PrintRune('\\n') — cursor moves to next line ✓"}];
  const [s,setS]=useState(0);
  return <VizShell title="Print a single character + newline" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].label}>
    <Box label={steps[s].char} highlight color={color}/>
    {steps[s].nl&&<Box label="↵" highlight color="#56cfe1"/>}
  </VizShell>;
}

function VizCheckNumber({ color }) {
  const str="hel3o";
  const steps=str.split("").map((c,i)=>({i,c,isDigit:c>='0'&&c<='9'}));
  steps.push({done:true,found:steps.some(s=>s.isDigit)});
  const [s,setS]=useState(0);
  const cur=steps[s];
  return <VizShell title={`Scan "${str}" for any digit`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.done?(cur.found?"✅ Found a digit! Print: Your string contains a number":"❌ No digit found. Print: does not contain a number"):`Checking index ${cur.i}: is '${cur.c}' between '0' and '9'? → ${cur.isDigit?"YES 🎉 stop here":"No, keep going"}`}>
    {str.split("").map((c,i)=><Box key={i} label={c} highlight={!cur.done&&i===cur.i} color={cur.isDigit&&i===cur.i?"#52b788":color}/>)}
  </VizShell>;
}

function VizCountAlpha({ color }) {
  const str="hI3 Go!";
  const chars=str.split("");
  const steps=chars.map((c,i)=>{const alpha=(c>='a'&&c<='z')||(c>='A'&&c<='Z');return{i,c,alpha};});
  steps.push({done:true,total:steps.filter(s=>s.alpha).length});
  const [s,setS]=useState(0);
  const counts=steps.slice(0,s).filter(x=>x.alpha).length;
  const cur=steps[s];
  return <VizShell title={`Count letters in "${str}"`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.done?`✅ Total alpha chars = ${cur.total}`:`'${cur.c}' is ${cur.alpha?"a letter → count+1 = "+(counts+1):"NOT a letter → count stays "+counts}`}>
    <div style={{display:"flex",gap:5,flexWrap:"wrap",justifyContent:"center"}}>
      {chars.map((c,i)=><Box key={i} label={c} highlight={!cur.done&&i===cur.i} color={(()=>{const a=(c>='a'&&c<='z')||(c>='A'&&c<='Z');return a?"#52b788":"#e63946";})()}/>)}
    </div>
    <div style={{width:"100%",textAlign:"center",marginTop:4,fontSize:13,color:"#e0b870",fontWeight:700}}>count = {cur.done?cur.total:counts+(cur.alpha?1:0)}</div>
  </VizShell>;
}

function VizCountCharacter({ color }) {
  const str="banana"; const target="a";
  const steps=str.split("").map((c,i)=>({i,c,match:c===target}));
  steps.push({done:true,total:steps.filter(s=>s.match).length});
  const [s,setS]=useState(0);
  const cur=steps[s];
  const count=steps.slice(0,s).filter(x=>x.match).length+(cur.match&&!cur.done?1:0);
  return <VizShell title={`Count '${target}' in "${str}"`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.done?`✅ '${target}' appears ${cur.total} times`:`Index ${cur.i}: '${cur.c}' ${cur.match?"== '"+target+"' → count++":"!= '"+target+"' → skip"}`}>
    {str.split("").map((c,i)=><Box key={i} label={c} highlight={!cur.done&&i===cur.i} color={c===target?"#52b788":color}/>)}
    <div style={{width:"100%",textAlign:"center",fontSize:13,color:"#e0b870",fontWeight:700,marginTop:4}}>count = {cur.done?cur.total:count}</div>
  </VizShell>;
}

function VizPrintIf({ color }) {
  const tests=["hi","hey","hello"];
  const steps=tests.flatMap(s=>[{s,check:true},{s,check:false,print:s.length>=3}]);
  steps.push({done:true});
  const [i,setI]=useState(0);
  const cur=steps[Math.min(i,steps.length-1)];
  return <VizShell title='Print if len(s) >= 3' color={color} step={i} total={steps.length} onPrev={()=>setI(i-1)} onNext={()=>setI(i+1)} onReset={()=>setI(0)} caption={cur.done?"✅ Done!":`"${cur.s}" has length ${cur.s?.length} → ${cur.s?.length>=3?"≥ 3 → PRINT it ✅":"< 3 → skip ❌"}`}>
    {!cur.done&&<><Box label={`"${cur.s}"`} highlight color={color}/><Arrow/><Box label={`len=${cur.s?.length}`} highlight={!cur.check} color={cur.s?.length>=3?"#52b788":"#e63946"}/>{!cur.check&&<Box label={cur.s?.length>=3?"PRINT":"SKIP"} highlight color={cur.s?.length>=3?"#52b788":"#e63946"}/>}</>}
  </VizShell>;
}

function VizPrintIfNot({ color }) {
  const tests=["hi","hey","hello"];
  const [i,setI]=useState(0);
  const s=tests[Math.min(Math.floor(i/2),tests.length-1)];
  const done=i>=tests.length*2;
  return <VizShell title='Print if len(s) < 3 (the NOT version)' color={color} step={i} total={tests.length*2+1} onPrev={()=>setI(i-1)} onNext={()=>setI(i+1)} onReset={()=>setI(0)} caption={done?"✅ Done! Opposite condition from PrintIf":`"${s}" len=${s?.length} → ${s?.length<3?"< 3 → PRINT ✅":"≥ 3 → SKIP ❌"}`}>
    {!done&&<><Box label={`"${s}"`} highlight color={color}/><Arrow/><Box label={s?.length<3?"PRINT":"SKIP"} highlight color={s?.length<3?"#52b788":"#e63946"}/></>}
  </VizShell>;
}

function VizRectPerimeter({ color }) {
  const steps=[{w:5,h:3,phase:"input"},{w:5,h:3,phase:"check"},{w:5,h:3,phase:"calc"}];
  const [s,setS]=useState(0);
  const {w,h,phase}=steps[s];
  const captions=["Input: width=5, height=3. First check: are both positive?","✅ Both positive — valid rectangle! Formula: 2 × (w + h)","2 × (5 + 3) = 2 × 8 = 16. Perimeter = 16 ✅"];
  return <VizShell title="Rectangle Perimeter = 2×(w+h)" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={captions[s]}>
    <svg width="160" height="80" viewBox="0 0 160 80">
      <rect x="20" y="10" width={120*w/8} height={60*h/5} fill="none" stroke={phase==="calc"?"#52b788":color} strokeWidth="3" strokeDasharray={phase==="input"?"6,4":"none"}/>
      <text x="80" y={10+60*h/5+14} textAnchor="middle" fill="#c0a060" fontSize="11">w={w}</text>
      <text x="8" y="42" textAnchor="middle" fill="#c0a060" fontSize="11">h={h}</text>
      {phase==="calc"&&<text x="80" y="48" textAnchor="middle" fill="#ffd060" fontSize="13" fontWeight="bold">= 16</text>}
    </svg>
  </VizShell>;
}

function VizRetainFirstHalf({ color }) {
  const str="GOLANG";
  const half=Math.floor(str.length/2);
  const steps=[{phase:"full"},{phase:"mid",mid:half},{phase:"slice"}];
  const captions=[`Input: "${str}" has ${str.length} characters`,`Midpoint = ${str.length} ÷ 2 = ${half} (integer division, no decimals)`,`Return s[:${half}] = "${str.slice(0,half)}" ✅`];
  const [s,setS]=useState(0);
  return <VizShell title={`Keep first half of "${str}"`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={captions[s]}>
    {str.split("").map((c,i)=><Box key={i} label={c} highlight={steps[s].phase==="slice"?i<half:steps[s].phase==="mid"&&i===half-1} color={i<half?"#52b788":"#e63946"}/>)}
    {steps[s].phase==="mid"&&<div style={{width:"100%",textAlign:"center",marginTop:4,fontSize:12,color:"#c8860a"}}>↑ cut here (index {half})</div>}
  </VizShell>;
}

function VizCamelToSnake({ color }) {
  const str="helloWorld";
  const steps=[{i:-1,result:""},{i:0,result:"h"},{i:1,result:"he"},{i:2,result:"hel"},{i:3,result:"hell"},{i:4,result:"hello"},{i:5,result:"hello_",addedUnderscore:true},{i:5,result:"hello_w"},{i:6,result:"hello_wo"},{i:7,result:"hello_wor"},{i:8,result:"hello_worl"},{i:9,result:"hello_world",done:true}];
  const [s,setS]=useState(0);
  const cur=steps[s];
  const captions=["Input: helloWorld — uppercase W signals new word","Add 'h'","Add 'e'","Add 'l'","Add 'l'","Add 'o'","'W' is uppercase & not first char → insert '_' first!","Now add lowercase 'w'","Add 'o'","Add 'r'","Add 'l'","Add 'd' → Result: hello_world ✅"];
  return <VizShell title="camelCase → snake_case" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={captions[s]}>
    <div style={{display:"flex",gap:4,flexWrap:"wrap",justifyContent:"center"}}>
      {str.split("").map((c,i)=><Box key={i} label={c} highlight={cur.i===i} color={c>='A'&&c<='Z'?"#c8860a":color} small/>)}
    </div>
    <div style={{width:"100%",textAlign:"center",marginTop:8,fontSize:14,fontFamily:"'Courier New',monospace",color:"#ffd060",fontWeight:700}}>{cur.result||"…"}</div>
  </VizShell>;
}

function VizDigitLen({ color }) {
  const [s,setS]=useState(0);
  const steps=[{n:153,count:0,note:"Start: n=153, count=0"},{n:15,count:1,note:"153 ÷ 10 = 15 remainder 3 → count=1"},{n:1,count:2,note:"15 ÷ 10 = 1 remainder 5 → count=2"},{n:0,count:3,note:"1 ÷ 10 = 0 remainder 1 → count=3"},{n:0,count:3,done:true,note:"n=0 → stop. 153 has 3 digits ✅"}];
  const cur=steps[s];
  return <VizShell title="Count digits by dividing by 10" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`n = ${cur.n}`} highlight color={color}/>
    <Arrow/>
    <Box label={`count = ${cur.count}`} highlight={cur.count>0} color="#52b788"/>
    {cur.done&&<Box label="✅" highlight color="#52b788"/>}
  </VizShell>;
}

function VizFirstWord({ color }) {
  const str="  hello world";
  const [s,setS]=useState(0);
  const steps=[{phase:"start",i:0,note:"Begin at index 0"},{phase:"skip",i:1,note:"s[0]=' ' → skip space"},{phase:"skip",i:2,note:"s[1]=' ' → skip space"},{phase:"collect",i:3,word:"h",note:"s[2]='h' → not space, start collecting!"},{phase:"collect",i:4,word:"he",note:"s[3]='e' → collect"},{phase:"collect",i:5,word:"hel",note:"s[4]='l' → collect"},{phase:"collect",i:6,word:"hell",note:"s[5]='l' → collect"},{phase:"collect",i:7,word:"hello",note:"s[6]='o' → collect"},{phase:"done",word:"hello",note:"s[7]=' ' → space found! Print 'hello' ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`First word of "${str}"`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:3,flexWrap:"wrap",justifyContent:"center"}}>
      {str.split("").map((c,i)=><Box key={i} label={c===" "?"·":c} small highlight={cur.i===i} color={cur.phase==="skip"&&i<cur.i?"#e63946":cur.phase==="collect"&&i<cur.i?"#52b788":color}/>)}
    </div>
    {cur.word&&<div style={{marginTop:8,fontSize:14,color:"#ffd060",fontWeight:700,fontFamily:"monospace"}}>"{cur.word}"</div>}
  </VizShell>;
}

function VizFishAndChips({ color }) {
  const nums=[6,4,9,7];
  const [s,setS]=useState(0);
  const n=nums[Math.min(Math.floor(s/3),nums.length-1)];
  const phase=s%3;
  const by2=n%2===0; const by3=n%3===0;
  const result=by2&&by3?"fish and chips":by2?"fish":by3?"chips":"error";
  const captions=[`Testing n=${n}: Check divisible by BOTH 2 and 3 first`,`n=${n}: ÷2? ${by2?"✅":"❌"}  ÷3? ${by3?"✅":"❌"}`,`Result: "${result}"`];
  return <VizShell title="FishAndChips — order of checks matters!" color={color} step={s} total={nums.length*3} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={captions[phase]}>
    <Box label={`n=${n}`} highlight color={color}/>
    {phase>=1&&<><Arrow label="÷2"/><Box label={by2?"✅":"❌"} highlight color={by2?"#52b788":"#e63946"}/><Arrow label="÷3"/><Box label={by3?"✅":"❌"} highlight color={by3?"#52b788":"#e63946"}/></>}
    {phase>=2&&<><Arrow/><Box label={result} highlight color={result==="error"?"#e63946":"#52b788"}/></>}
  </VizShell>;
}

function VizGcd({ color }) {
  const [s,setS]=useState(0);
  const steps=[{a:48,b:18,note:"Start: gcd(48, 18)"},{a:18,b:12,note:"48 % 18 = 12 → gcd(18, 12)"},{a:12,b:6,note:"18 % 12 = 6 → gcd(12, 6)"},{a:6,b:0,note:"12 % 6 = 0 → gcd(6, 0)"},{a:6,b:0,done:true,note:"b=0 → answer is a = 6 ✅"}];
  const cur=steps[s];
  return <VizShell title="GCD via Euclid: gcd(a,b) = gcd(b, a%b)" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`a=${cur.a}`} highlight color={color}/><Arrow/><Box label={`b=${cur.b}`} highlight={cur.b>0} color={cur.b===0?"#52b788":"#56cfe1"}/>
    {cur.done&&<><Arrow/><Box label={`GCD=${cur.a}`} highlight color="#52b788"/></>}
  </VizShell>;
}

function VizHashCode({ color }) {
  const str="abc";
  const steps=str.split("").map((c,i)=>{const code=(c.charCodeAt(0)+str.length)*33%256;return{i,c,ascii:c.charCodeAt(0),L:str.length,code};});
  steps.push({done:true,result:steps.map(s=>String.fromCharCode(s.code)).join("")});
  const [s,setS]=useState(0);
  const cur=steps[s];
  return <VizShell title="HashCode: (ascii + len) × 33 % 256" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.done?`Result string (encoded chars) built ✅`:`'${cur.c}' ascii=${cur.ascii}, L=${cur.L} → (${cur.ascii}+${cur.L})×33 % 256 = ${cur.code}`}>
    {!cur.done&&<><Box label={`'${cur.c}'`} highlight color={color}/><Arrow label="formula"/><Box label={cur.code} highlight color="#52b788"/></>}
    {cur.done&&<Box label="Hash ✅" highlight color="#52b788"/>}
  </VizShell>;
}

function VizLastWord({ color }) {
  const str="hello world  ";
  const [s,setS]=useState(0);
  const steps=[{i:str.length-1,phase:"skipEnd",note:"Start from the end, skip trailing spaces"},{i:str.length-3,phase:"skipEnd",note:"Still a space → keep skipping left"},{i:str.length-3,phase:"foundEnd",note:"Found non-space → this is the end of last word (index 10)"},{i:6,phase:"findStart",note:"Walk left until we hit a space → start of word at index 6"},{i:6,phase:"print",word:"world",note:"Print s[6..10] → 'world' ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Last word of "${str.trim()}"`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:3,flexWrap:"wrap",justifyContent:"center"}}>
      {str.split("").map((c,i)=><Box key={i} label={c===" "?"·":c} small highlight={cur.i===i} color={"world".includes(c)&&c!==" "?"#52b788":color}/>)}
    </div>
    {cur.word&&<div style={{marginTop:8,fontSize:14,color:"#ffd060",fontWeight:700,fontFamily:"monospace"}}>"{cur.word}"</div>}
  </VizShell>;
}

function VizRepeatAlpha({ color }) {
  const str="abc";
  const [s,setS]=useState(0);
  const steps=[{note:"Each letter repeats by its alphabet position"},
    {c:"a",pos:1,out:"a",note:"'a' is position 1 → print 1 time: 'a'"},
    {c:"b",pos:2,out:"bb",note:"'b' is position 2 → print 2 times: 'bb'"},
    {c:"c",pos:3,out:"ccc",note:"'c' is position 3 → print 3 times: 'ccc'"},
    {done:true,result:"abbccc",note:"Final result: 'abbccc' ✅"}];
  const cur=steps[s];
  return <VizShell title="RepeatAlpha: position = char - 'a' + 1" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {cur.c&&<Box label={`'${cur.c}'`} highlight color={color}/>}
    {cur.c&&<Arrow label={`×${cur.pos}`}/>}
    {cur.out&&cur.out.split("").map((c,i)=><Box key={i} label={c} highlight color="#52b788" small/>)}
    {cur.done&&<Box label={cur.result} highlight color="#52b788"/>}
  </VizShell>;
}

function VizFindPrevPrime({ color }) {
  const [s,setS]=useState(0);
  const steps=[{n:10,note:"Start at 10 — is it prime?"},{n:10,check:true,divisor:2,note:"10 ÷ 2 = 5 → divisible! Not prime."},{n:9,note:"Try 9 — is it prime?"},{n:9,check:true,divisor:3,note:"9 ÷ 3 = 3 → divisible! Not prime."},{n:8,note:"Try 8 — is it prime?"},{n:8,check:true,divisor:2,note:"8 ÷ 2 = 4 → divisible! Not prime."},{n:7,note:"Try 7 — is it prime?"},{n:7,check:true,note:"7 ÷ 2? No. 7 ÷ 3? No. √7 ≈ 2.6, done checking!"},{n:7,done:true,note:"7 is prime! ✅ Answer = 7"}];
  const cur=steps[s];
  return <VizShell title="Count down until we hit a prime" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`n=${cur.n}`} highlight color={cur.done?"#52b788":color}/>
    {cur.check&&<><Arrow label={`÷${cur.divisor||"…"}`}/><Box label={cur.done?"prime ✅":"NOT prime ❌"} highlight color={cur.done?"#52b788":"#e63946"}/></>}
  </VizShell>;
}

function VizFromTo({ color }) {
  const [s,setS]=useState(0);
  const from=3;const to=7;
  const nums=[];for(let i=from;i<=to;i++)nums.push(i);
  const steps=[{note:`Count from ${from} to ${to}: start at ${from}`},...nums.map((n,i)=>({cur:n,idx:i,note:`Print "${String(n).padStart(2,"0")}"${i<nums.length-1?`, then print ", "`:" — last number, stop!"}`})),{done:true,note:"Output: 03, 04, 05, 06, 07 ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Count from A to B with 2-digit format" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {nums.map((n,i)=><Box key={i} label={String(n).padStart(2,"0")} highlight={cur.cur===n} color={cur.idx>=i&&!cur.done?"#52b788":color}/>)}
  </VizShell>;
}

function VizIsCapitalized({ color }) {
  const str="Hello World";
  const [s,setS]=useState(0);
  const checks=[{i:0,c:"H",startOfWord:true,ok:true},{i:5,c:" ",note:"space — skip"},{i:6,c:"W",startOfWord:true,ok:true},{done:true}];
  const cur=checks[Math.min(s,checks.length-1)];
  return <VizShell title='Every word must start with uppercase' color={color} step={s} total={checks.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.done?"✅ All words capitalized → return true":cur.note||`Index ${cur.i}: '${cur.c}' ${cur.startOfWord?"is first of word →":"is"} ${cur.ok?"Uppercase ✅":"lowercase ❌ → return false"}`}>
    <div style={{display:"flex",gap:3,flexWrap:"wrap",justifyContent:"center"}}>
      {str.split("").map((c,i)=><Box key={i} label={c===" "?"·":c} small highlight={cur.i===i} color={c>='A'&&c<='Z'?"#52b788":c===" "?"#7a5030":color}/>)}
    </div>
  </VizShell>;
}

function VizItoa({ color }) {
  const [s,setS]=useState(0);
  const steps=[{n:153,result:"",note:"Start: n=153, result=''"},{n:15,result:"3",note:"153 % 10 = 3 → prepend '3', n = 153/10 = 15"},{n:1,result:"53",note:"15 % 10 = 5 → prepend '5', n = 15/10 = 1"},{n:0,result:"153",note:"1 % 10 = 1 → prepend '1', n = 1/10 = 0"},{n:0,result:"153",done:true,note:"n=0 → done! String = '153' ✅"}];
  const cur=steps[s];
  return <VizShell title='Peel digits right-to-left with % 10' color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`n=${cur.n}`} highlight color={color}/>
    <Arrow/>
    <Box label={`"${cur.result}"`} highlight={cur.result.length>0} color="#52b788"/>
  </VizShell>;
}

function VizPrintMemory({ color }) {
  const bytes=[0xCA,0xFE,0x01,0x23];
  const [s,setS]=useState(0);
  const steps=[{note:"We have 4 bytes. Each byte = 2 hex digits"},...bytes.map((b,i)=>({b,i,hi:(b>>4).toString(16),lo:(b&0xf).toString(16),note:`Byte ${i}: 0x${b.toString(16).padStart(2,"0")} → high nibble=${b>>4} → '${(b>>4).toString(16)}', low nibble=${b&0xf} → '${(b&0xf).toString(16)}'`})),{done:true,note:"Output: ca fe 01 23 ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Hex dump: each byte → 2 hex chars" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {bytes.map((b,i)=><Box key={i} label={`0x${b.toString(16).padStart(2,"0")}`} highlight={cur.i===i} color={color}/>)}
    {cur.b!==undefined&&<><Arrow/><Box label={cur.hi} highlight color="#52b788" small/><Box label={cur.lo} highlight color="#56cfe1" small/></>}
  </VizShell>;
}

function VizPrintRevComb({ color }) {
  const [s,setS]=useState(0);
  const samples=[[9,8,7],[9,8,6],[9,8,5],[3,2,1],[2,1,0]];
  const cur=samples[Math.min(s,samples.length-1)];
  const captions=["First combo: 9,8,7 — largest possible","Next: 9,8,6 — inner loop counts down","Continue: 9,8,5 — k keeps going down","...many combos later: 3,2,1","Last combo: 2,1,0 ✅ — smallest possible"];
  return <VizShell title="Triple nested loop counting DOWN" color={color} step={s} total={samples.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={captions[s]}>
    {cur.map((d,i)=><Box key={i} label={d} highlight color={color}/>)}
    <div style={{width:"100%",textAlign:"center",fontSize:11,color:"#7a5030",marginTop:4}}>i &gt; j &gt; k always (each must be smaller)</div>
  </VizShell>;
}

function VizThirdTime({ color }) {
  const str="abcdefghi";
  const [s,setS]=useState(0);
  const keepers=str.split("").map((c,i)=>({c,i,keep:(i+1)%3===0}));
  const steps=[{note:"Take every 3rd character (index 2, 5, 8...)"}, ...keepers.map(k=>({...k,note:`Index ${k.i}: '${k.c}' ${k.keep?"→ 3rd! KEEP it ✅":"→ skip"}`})),{done:true,note:`Result: "${keepers.filter(k=>k.keep).map(k=>k.c).join("")}" ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Collect every 3rd character" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {str.split("").map((c,i)=><Box key={i} label={c} highlight={cur.i===i} color={(i+1)%3===0?"#52b788":"#e63946"} small/>)}
  </VizShell>;
}

function VizWeAreUnique({ color }) {
  const s1="abc"; const s2="bcd";
  const [s,setS]=useState(0);
  const inS1=new Set(s1); const inS2=new Set(s2);
  const onlyS1=[...inS1].filter(c=>!inS2.has(c));
  const onlyS2=[...inS2].filter(c=>!inS1.has(c));
  const steps=[{note:"Build Set for each string"},
    {note:`s1="${s1}" has chars: {${[...inS1].join(",")}}`},
    {note:`s2="${s2}" has chars: {${[...inS2].join(",")}}`},
    {note:`In s1 but NOT s2: {${onlyS1.join(",")}} → ${onlyS1.length} unique`},
    {note:`In s2 but NOT s1: {${onlyS2.join(",")}} → ${onlyS2.length} unique`},
    {done:true,note:`Total unique = ${onlyS1.length+onlyS2.length} ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Symmetric difference via 2 maps" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:12}}>
      <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#7a5030",marginBottom:3}}>s1</div>{s1.split("").map((c,i)=><Box key={i} label={c} highlight={!inS2.has(c)} color={color}/>)}</div>
      <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#7a5030",marginBottom:3}}>s2</div>{s2.split("").map((c,i)=><Box key={i} label={c} highlight={!inS1.has(c)} color="#56cfe1"/>)}</div>
    </div>
  </VizShell>;
}

function VizZipString({ color }) {
  const str="aaabb";
  const [s,setS]=useState(0);
  const steps=[{i:0,count:1,result:"",note:"Start: count=1, look at 'a'"},
    {i:1,count:2,result:"",note:"s[1]='a' same as previous → count=2"},
    {i:2,count:3,result:"",note:"s[2]='a' same → count=3"},
    {i:3,count:1,result:"3a",note:"s[3]='b' different → flush '3a', reset count=1"},
    {i:4,count:2,result:"3a",note:"s[4]='b' same → count=2"},
    {done:true,result:"3a2b",note:"End of string → flush '2b'. Result: '3a2b' ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Run-length encoding: count consecutive chars" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {str.split("").map((c,i)=><Box key={i} label={c} highlight={cur.i===i} color={c==="a"?color:"#56cfe1"}/>)}
    <div style={{width:"100%",textAlign:"center",marginTop:6,fontSize:14,color:"#ffd060",fontWeight:700,fontFamily:"monospace"}}>{cur.result||"…"}{!cur.done&&` count=${cur.count}`}</div>
  </VizShell>;
}

function VizAddPrimeSum({ color }) {
  const primes=[2,3,5,7,11];const n=12;
  const [s,setS]=useState(0);
  const steps=[{note:`Find all primes ≤ ${n} and sum them`},...primes.map((p,i)=>{const sum=primes.slice(0,i+1).reduce((a,b)=>a+b,0);return{p,sum,note:`${p} is prime → sum = ${sum}`};}),{done:true,sum:28,note:"Sum of primes ≤ 12: 2+3+5+7+11 = 28 ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Sum all primes up to ${n}`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:4,flexWrap:"wrap",justifyContent:"center"}}>
      {[2,3,4,5,6,7,8,9,10,11,12].map(n=><Box key={n} label={n} highlight={primes.includes(n)&&cur.p>=n} color={primes.includes(n)?"#52b788":"#e63946"} small/>)}
    </div>
    {cur.sum!==undefined&&<div style={{width:"100%",textAlign:"center",marginTop:6,fontSize:14,color:"#ffd060",fontWeight:700}}>sum = {cur.sum}</div>}
  </VizShell>;
}

function VizCanJump({ color }) {
  const arr=[2,3,1,1,4];
  const [s,setS]=useState(0);
  const steps=[{maxReach:0,i:0,note:"Start at index 0, maxReach=0"},
    {maxReach:2,i:0,note:"arr[0]=2 → can reach index 0+2=2. maxReach=2"},
    {maxReach:4,i:1,note:"arr[1]=3 → can reach index 1+3=4. maxReach=4"},
    {maxReach:4,i:2,note:"arr[2]=1 → 2+1=3 < 4. maxReach stays 4"},
    {maxReach:4,i:3,note:"arr[3]=1 → 3+1=4 = 4. maxReach stays 4"},
    {maxReach:8,i:4,note:"arr[4]=4 → 4+4=8 > 4. maxReach=8"},
    {done:true,note:"maxReach(8) ≥ last index(4) → return TRUE ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Track max reachable index" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {arr.map((v,i)=><Box key={i} label={`[${i}]\n${v}`} highlight={cur.i===i} color={i<=cur.maxReach?"#52b788":color}/>)}
    {!cur.done&&<div style={{width:"100%",textAlign:"center",marginTop:4,fontSize:12,color:"#c8860a"}}>maxReach = {cur.maxReach}</div>}
  </VizShell>;
}

function VizChunk({ color }) {
  const arr=[1,2,3,4,5,6,7];const size=3;
  const [s,setS]=useState(0);
  const chunks=[];for(let i=0;i<arr.length;i+=size)chunks.push(arr.slice(i,i+size));
  const steps=[{note:`Split [${arr}] into chunks of ${size}`},...chunks.map((c,i)=>({chunk:c,i,note:`Chunk ${i}: [${c}] — indices ${i*size} to ${Math.min(i*size+size-1,arr.length-1)}`})),{done:true,note:"All chunks created ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Chunk array into groups of ${size}`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {arr.map((v,i)=><Box key={i} label={v} highlight={cur.chunk&&Math.floor(i/size)===cur.i} color={cur.chunk&&Math.floor(i/size)===cur.i?"#52b788":color} small/>)}
  </VizShell>;
}

function VizConcatAlternate({ color }) {
  const a=[1,3,5];const b=[2,4,6];
  const [s,setS]=useState(0);
  const steps=[{note:"Alternate: take from A then B, repeat"},
    {i:0,result:[1,2],note:"A[0]=1, B[0]=2 → result=[1,2]"},
    {i:1,result:[1,2,3,4],note:"A[1]=3, B[1]=4 → result=[1,2,3,4]"},
    {i:2,result:[1,2,3,4,5,6],note:"A[2]=5, B[2]=6 → result=[1,2,3,4,5,6]"},
    {done:true,note:"[1,2,3,4,5,6] ✅ — zipped like a zipper"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Zip two arrays alternating A, B, A, B..." color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
      <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#7a5030",marginBottom:3}}>A</div><div style={{display:"flex",gap:3}}>{a.map((v,i)=><Box key={i} label={v} highlight={cur.i===i} color={color} small/>)}</div></div>
      <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#7a5030",marginBottom:3}}>B</div><div style={{display:"flex",gap:3}}>{b.map((v,i)=><Box key={i} label={v} highlight={cur.i===i} color="#56cfe1" small/>)}</div></div>
    </div>
    {cur.result&&<div style={{width:"100%",textAlign:"center",marginTop:6,fontSize:13,color:"#ffd060",fontWeight:700}}>[{cur.result.join(",")}]</div>}
  </VizShell>;
}

function VizConcatSlice({ color }) {
  const [s,setS]=useState(0);
  const a=[1,2,3];const b=[4,5,6];
  const steps=[{note:`Concatenate [${a}] + [${b}]`},{note:"Copy slice1 into result to avoid mutating original"},{result:[...a,...b],note:`append(result, slice2...) → [${[...a,...b]}] ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Append slice2 onto a copy of slice1" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:4,flexWrap:"wrap",justifyContent:"center"}}>
      {a.map((v,i)=><Box key={i} label={v} highlight={s>=1} color={color} small/>)}
      {s>=2&&b.map((v,i)=><Box key={i} label={v} highlight color="#52b788" small/>)}
    </div>
  </VizShell>;
}

function VizFPrime({ color }) {
  const [s,setS]=useState(0);
  const steps=[{n:60,div:2,factors:[],note:"Start: n=60, try div=2"},
    {n:30,div:2,factors:[2],note:"60÷2=30 → factor! factors=[2], n=30"},
    {n:15,div:2,factors:[2,2],note:"30÷2=15 → factor! factors=[2,2], n=15"},
    {n:15,div:3,factors:[2,2],note:"15÷2? No remainder. Try div=3"},
    {n:5,div:3,factors:[2,2,3],note:"15÷3=5 → factor! factors=[2,2,3], n=5"},
    {n:5,div:4,factors:[2,2,3],note:"5÷4? No. Try div=5"},
    {n:1,div:5,factors:[2,2,3,5],note:"5÷5=1 → factor! factors=[2,2,3,5], n=1"},
    {done:true,factors:[2,2,3,5],note:"n=1 → done. Print: 2*2*3*5 ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Prime factorisation by trial division" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`n=${cur.n}`} highlight color={color}/>
    {!cur.done&&<><Arrow label={`÷${cur.div}`}/><Box label={cur.n%cur.div===0?"factor!":"no"} highlight color={cur.n%cur.div===0?"#52b788":"#e63946"}/></>}
    <div style={{width:"100%",textAlign:"center",marginTop:6,fontSize:13,color:"#ffd060",fontWeight:700}}>{cur.factors.join(" × ")||"…"}</div>
  </VizShell>;
}

function VizHiddenP({ color }) {
  const s1="ace"; const s2="abcdef";
  const matches=[];let pi=0;
  for(let si=0;si<s2.length;si++){if(pi<s1.length&&s2[si]===s1[pi]){matches.push({si,pi});pi++;}}
  const [s,setS]=useState(0);
  const steps=[{note:`Is "${s1}" hidden in "${s2}"? Two pointer scan`},...s2.split("").map((c,si)=>{const mi=matches.findIndex(m=>m.si===si);const match=mi>=0;return{si,c,match,pi:match?matches[mi].pi:-1,note:match?`s2[${si}]='${c}' matches s1[${matches[mi].pi}]='${s1[matches[mi].pi]}' ✅ advance pattern pointer`:`s2[${si}]='${c}' ≠ '${s1[Math.min(matches.filter(m=>m.si<si).length,s1.length-1)]}' — skip`};}),{done:true,note:`All ${s1.length} chars matched in order → return 1 ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Is "${s1}" hidden in "${s2}"?`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:3}}>{s2.split("").map((c,i)=><Box key={i} label={c} highlight={cur.si===i} color={matches.find(m=>m.si===i)?"#52b788":color} small/>)}</div>
    <div style={{display:"flex",gap:3,marginTop:4}}>{s1.split("").map((c,i)=><Box key={i} label={c} highlight={matches.filter(m=>m.si<=(cur.si||0)).map(m=>m.pi).includes(i)} color="#ffd060" small/>)}</div>
  </VizShell>;
}

function VizInter({ color }) {
  const s1="abcde"; const s2="bdf";
  const inS2=new Set(s2);
  const [s,setS]=useState(0);
  const steps=[{note:`Intersection of "${s1}" and "${s2}"`},...s1.split("").map((c,i)=>({i,c,inS2:inS2.has(c),note:`'${c}' ${inS2.has(c)?"is in s2 → PRINT ✅":"not in s2 → skip"}`})),{done:true,note:`Result: "bd" ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Print chars appearing in BOTH strings" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:3}}>{s1.split("").map((c,i)=><Box key={i} label={c} highlight={cur.i===i} color={inS2.has(c)?"#52b788":"#e63946"} small/>)}</div>
    <Arrow label="∩"/><div style={{display:"flex",gap:3}}>{s2.split("").map((c,i)=><Box key={i} label={c} highlight={false} color="#56cfe1" small/>)}</div>
  </VizShell>;
}

function VizReverseStrCap({ color }) {
  const word="hello";
  const [s,setS]=useState(0);
  const steps=[{note:`Input word: "${word}"`},{note:"Lowercase all: 'hello'"},{note:"Last char 'o' → uppercase"},{result:"hellO",done:true,note:"Result: 'hellO' ✅ — only last char capitalised"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Lowercase all, uppercase last letter only" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {word.split("").map((c,i)=>{const last=i===word.length-1;return <Box key={i} label={s>=2&&last?c.toUpperCase():c.toLowerCase()} highlight={s>=2&&last} color={s>=2&&last?"#ffd060":color}/>;})}
  </VizShell>;
}

function VizSaveAndMiss({ color }) {
  const str="abcdefgh";const n=3;
  const [s,setS]=useState(0);
  const blocks=[];for(let i=0;i<str.length;i+=n)blocks.push({start:i,end:Math.min(i+n,str.length),keep:blocks.length%2===0,chars:str.slice(i,Math.min(i+n,str.length))});
  const steps=[{note:`Keep ${n} chars, skip ${n} chars, keep ${n}...`},...blocks.map((b,i)=>({b,i,note:`Block ${i}: "${b.chars}" → ${b.keep?"KEEP ✅":"SKIP ❌"}`})),{done:true,note:`Result: "${blocks.filter(b=>b.keep).map(b=>b.chars).join("")}" ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Keep ${n} / skip ${n} alternating`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {str.split("").map((c,i)=>{const blockIdx=Math.floor(i/n);const keep=blockIdx%2===0;return <Box key={i} label={c} highlight={cur.b&&Math.floor(i/n)===cur.i} color={keep?"#52b788":"#e63946"} small/>;})}
  </VizShell>;
}

function VizUnion({ color }) {
  const s1="abc"; const s2="bcd";
  const [s,setS]=useState(0);
  const combined=(s1+s2).split("");
  const seen=new Set();const result=[];combined.forEach(c=>{if(!seen.has(c)){seen.add(c);result.push(c);}});
  const steps=[{note:`Union of "${s1}" and "${s2}" — no duplicates`},...combined.map((c,i)=>({i,c,dup:combined.slice(0,i).includes(c),note:`'${c}' ${combined.slice(0,i).includes(c)?"already seen → skip":"new! → add to result"}`})),{done:true,note:`Result: "${result.join("")}" ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Merge both strings, skip duplicates" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {combined.map((c,i)=><Box key={i} label={c} highlight={cur.i===i} color={combined.slice(0,i).includes(c)?"#e63946":"#52b788"} small/>)}
  </VizShell>;
}

function VizWdMatch({ color }) {
  const s1="ace"; const s2="abcdef";
  const [s,setS]=useState(0);
  const steps=[{note:`Can we find all chars of "${s1}" in order in "${s2}"?`},{si:0,pi:0,note:"s2[0]='a' matches s1[0]='a' ✅"},{si:2,pi:1,note:"s2[2]='c' matches s1[1]='c' ✅"},{si:4,pi:2,note:"s2[4]='e' matches s1[2]='e' ✅"},{done:true,note:`All matched → print "${s1}" ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Two-pointer: find pattern chars in order" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:3}}>{s2.split("").map((c,i)=><Box key={i} label={c} highlight={cur.si===i} color={[0,2,4].includes(i)?"#52b788":color} small/>)}</div>
    <div style={{display:"flex",gap:3,marginTop:4}}>{s1.split("").map((c,i)=><Box key={i} label={c} highlight={cur.pi===i} color="#ffd060" small/>)}</div>
  </VizShell>;
}

function VizFifthAndSkip({ color }) {
  const str="ABCDEFGHIJK";
  const [s,setS]=useState(0);
  const steps=[{note:"Remove spaces, then keep 5 chars, skip 1, keep 5, skip 1..."},
    {note:"Chars: A B C D E F G H I J K"},
    {note:"Keep indices 0-4: ABCDE"},
    {note:"Skip index 5: F → discarded"},
    {note:"Keep indices 6-10: GHIJK"},
    {done:true,note:"Output: 'ABCDE GHIJK' ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Keep 5, skip 1, keep 5, skip 1..." color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {str.split("").map((c,i)=>{const pos=i%6;const skip=pos===5;return <Box key={i} label={c} highlight={s>=2} color={skip?"#e63946":"#52b788"} small/>;})}
    {s>=2&&<div style={{width:"100%",textAlign:"center",marginTop:4,fontSize:12,color:"#e63946"}}>↑ index 5: skipped</div>}
  </VizShell>;
}

function VizNotDecimal({ color }) {
  const [s,setS]=useState(0);
  const steps=[{note:'Input: "12.34" — a decimal string'},{note:"Scan chars: '1','2' → digits, keep them"},{note:"'.' → set hasDot=true, skip the dot"},{note:"'3','4' → digits, keep them"},{done:true,note:"hasDot was true → return '1234' ✅ (dot removed)"}];
  return <VizShell title='Remove decimal point from "12.34"' color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    {"12.34".split("").map((c,i)=><Box key={i} label={c} highlight={s>=1} color={c==="."?"#e63946":"#52b788"}/>)}
    {s>=4&&<div style={{width:"100%",textAlign:"center",marginTop:6,fontSize:14,color:"#ffd060",fontWeight:700}}>"1234"</div>}
  </VizShell>;
}

function VizRevConcatAlternate({ color }) {
  const a=[1,2,3]; const b=[4,5,6];
  const [s,setS]=useState(0);
  const steps=[{note:"Read both slices BACKWARDS, alternating"},
    {aIdx:2,bIdx:2,result:[3,6],note:"a[2]=3, b[2]=6 → [3,6]"},
    {aIdx:1,bIdx:1,result:[3,6,2,5],note:"a[1]=2, b[1]=5 → [3,6,2,5]"},
    {aIdx:0,bIdx:0,result:[3,6,2,5,1,4],note:"a[0]=1, b[0]=4 → [3,6,2,5,1,4]"},
    {done:true,note:"Result: [3,6,2,5,1,4] ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Walk both slices backwards, alternate" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
      <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#7a5030",marginBottom:3}}>A (backwards)</div><div style={{display:"flex",gap:3}}>{[...a].reverse().map((v,i)=><Box key={i} label={v} highlight={cur.aIdx!==undefined&&2-i===cur.aIdx} color={color} small/>)}</div></div>
      <div style={{textAlign:"center"}}><div style={{fontSize:10,color:"#7a5030",marginBottom:3}}>B (backwards)</div><div style={{display:"flex",gap:3}}>{[...b].reverse().map((v,i)=><Box key={i} label={v} highlight={cur.bIdx!==undefined&&2-i===cur.bIdx} color="#56cfe1" small/>)}</div></div>
    </div>
    {cur.result&&<div style={{width:"100%",textAlign:"center",marginTop:6,fontSize:13,color:"#ffd060",fontWeight:700}}>[{cur.result.join(",")}]</div>}
  </VizShell>;
}

function VizSlice({ color }) {
  const arr=["a","b","c","d","e"];
  const [s,setS]=useState(0);
  const start=1;const end=4;
  const steps=[{note:`Slice arr from index ${start} to ${end} (exclusive)`},{note:`Negative index example: -1 means last element`},{note:`start=${start}, end=${end} → arr[1:4]`},{result:arr.slice(start,end),done:true,note:`Result: ["${arr.slice(start,end).join('","')}"] ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Extract arr[${start}:${end}]`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {arr.map((v,i)=><Box key={i} label={`[${i}]${v}`} highlight={i>=start&&i<end} color={i>=start&&i<end?"#52b788":"#e63946"} small/>)}
  </VizShell>;
}

function VizFindPairs({ color }) {
  const arr=[2,7,4,1,3];const target=9;
  const pairs=[];for(let i=0;i<arr.length;i++)for(let j=i+1;j<arr.length;j++)if(arr[i]+arr[j]===target)pairs.push([i,j]);
  const [s,setS]=useState(0);
  const steps=[{note:`Find pairs in [${arr}] that sum to ${target}`},...arr.flatMap((v,i)=>arr.slice(i+1).map((w,jj)=>{const j=i+1+jj;const sum=v+w;return{i,j,sum,match:sum===target,note:`arr[${i}](${v}) + arr[${j}](${w}) = ${sum} ${sum===target?"= "+target+" ✅":"≠ "+target}`};})),{done:true,note:`Pairs found: ${pairs.map(p=>`(${p[0]},${p[1]})`).join(", ")} ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`Find all pairs summing to ${target}`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {arr.map((v,i)=><Box key={i} label={`[${i}]${v}`} highlight={cur.i===i||cur.j===i} color={cur.match&&(cur.i===i||cur.j===i)?"#52b788":color} small/>)}
  </VizShell>;
}

function VizRevWstr({ color }) {
  const words=["the","cat","sat"];
  const [s,setS]=useState(0);
  const steps=[{note:`Input: "${words.join(" ")}"`},{note:"Split into words: [the, cat, sat]"},{note:"Reverse order: [sat, cat, the]"},{done:true,note:`Output: "${[...words].reverse().join(" ")}" ✅`}];
  const cur=steps[Math.min(s,steps.length-1)];
  const display=s>=2?[...words].reverse():words;
  return <VizShell title="Reverse word ORDER (not letters)" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    {display.map((w,i)=><Box key={i} label={w} highlight={s>=2} color={color}/>)}
  </VizShell>;
}

function VizRoString({ color }) {
  const words=["apple","banana","cherry"];
  const [s,setS]=useState(0);
  const steps=[{note:`Input: "${words.join(" ")}"`},{note:"Take first word 'apple' off the front"},{note:"Slide remaining words forward"},{done:true,note:`Output: "banana cherry apple" ✅`}];
  const display=s>=3?[...words.slice(1),"apple"]:words;
  return <VizShell title="Move first word to the end" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    {display.map((w,i)=><Box key={i} label={w} highlight={s>=3&&i===display.length-1} color={color}/>)}
  </VizShell>;
}

function VizWordFlip({ color }) {
  const words=["Go","is","fun"];
  const [s,setS]=useState(0);
  const rev=[...words].reverse();
  const steps=[{note:`"${words.join(" ")}" → reverse word order`},{note:"Collect words into slice"},{note:"Swap from outside in: fun ↔ Go"},{done:true,note:`"${rev.join(" ")}" ✅`}];
  const display=s>=2?rev:words;
  return <VizShell title="Reverse word order in sentence" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    {display.map((w,i)=><Box key={i} label={w} highlight={s>=2} color={color}/>)}
  </VizShell>;
}

function VizItoaBase({ color }) {
  const value=13;const base=2;
  const [s,setS]=useState(0);
  const steps=[{v:13,r:"",note:`Convert ${value} to base ${base} (binary)`},{v:6,r:"1",note:"13 ÷ 2 = 6 remainder 1 → prepend '1'"},{v:3,r:"01",note:"6 ÷ 2 = 3 remainder 0 → prepend '0'"},{v:1,r:"101",note:"3 ÷ 2 = 1 remainder 1 → prepend '1'"},{v:0,r:"1101",note:"1 ÷ 2 = 0 remainder 1 → prepend '1'"},{done:true,note:"13 in base 2 = '1101' ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title={`${value} in base ${base} by repeated division`} color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`n=${cur.v}`} highlight color={color}/><Arrow label={`÷${base}`}/>
    <Box label={`"${cur.r}"`} highlight={cur.r.length>0} color="#52b788"/>
  </VizShell>;
}

function VizOptions({ color }) {
  const flags="-ab";
  const [s,setS]=useState(0);
  const steps=[{note:`Parse "${flags}" — each letter flips a bit`},{note:"'a' is position 0 → bit 0 = 1"},{note:"'b' is position 1 → bit 1 = 1"},{done:true,note:"flags binary: ...00000011 → output: 00000000 00000000 00000000 00000011 ✅"}];
  const bits=Array(8).fill(0);if(s>=2)bits[7]=1;if(s>=3){bits[7]=1;bits[6]=1;}
  return <VizShell title="Each letter flips one bit in uint32" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    <div style={{display:"flex",gap:3}}>{bits.map((b,i)=><Box key={i} label={b} highlight={b===1} color={b===1?"#52b788":"#555"} small/>)}</div>
    <div style={{width:"100%",textAlign:"center",fontSize:10,color:"#7a5030",marginTop:2}}>bit 7 ··· bit 0</div>
  </VizShell>;
}

function VizPigLatin({ color }) {
  const word="string";
  const [s,setS]=useState(0);
  const vowelIdx=word.split("").findIndex(c=>"aeiouAEIOU".includes(c));
  const result=word.slice(vowelIdx)+word.slice(0,vowelIdx)+"ay";
  const steps=[{note:`Input: "${word}"`},{note:`Find first vowel: '${word[vowelIdx]}' at index ${vowelIdx}`},{note:`Consonants before it: "${word.slice(0,vowelIdx)}"`},{note:`Move consonants to end: "${word.slice(vowelIdx)+word.slice(0,vowelIdx)}"`},{done:true,note:`Add "ay" → "${result}" ✅`}];
  return <VizShell title="Pig Latin: move consonants to end + 'ay'" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    <div style={{display:"flex",gap:3}}>
      {word.split("").map((c,i)=><Box key={i} label={c} highlight={i===vowelIdx} color={i<vowelIdx?"#e63946":"#52b788"} small/>)}
    </div>
    {s>=4&&<div style={{marginTop:8,fontSize:14,color:"#ffd060",fontWeight:700,fontFamily:"monospace"}}>"{result}"</div>}
  </VizShell>;
}

function VizRomanNumbers({ color }) {
  const [s,setS]=useState(0);
  const steps=[{n:1994,result:"",note:"Convert 1994 to Roman"},{n:994,result:"M",note:"1994 ≥ 1000 → 'M', n=994"},{n:94,result:"MCM",note:"994 ≥ 900 → 'CM', n=94"},{n:4,result:"MCMXC",note:"94 ≥ 90 → 'XC', n=4"},{n:0,result:"MCMXCIV",note:"4 ≥ 4 → 'IV', n=0"},{done:true,note:"1994 = 'MCMXCIV' ✅"}];
  const cur=steps[Math.min(s,steps.length-1)];
  return <VizShell title="Greedy subtraction: largest symbol first" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <Box label={`n=${cur.n}`} highlight color={color}/>
    <Arrow/>
    <Box label={cur.result||"…"} highlight={cur.result.length>0} color="#52b788"/>
  </VizShell>;
}

function VizBrackets({ color }) {
  const str="({[]})";
  const [s,setS]=useState(0);
  const openers=new Set(["(","[","{"]);
  const matches={")":"(", "]":"[", "}":"{"};
  const stepData=[];let stack=[];
  str.split("").forEach((c,i)=>{
    if(openers.has(c)){stack=[...stack,c];stepData.push({i,c,stack:[...stack],note:`'${c}' is opener → push onto stack`});}
    else{const top=stack[stack.length-1];const match=matches[c]===top;if(match)stack=stack.slice(0,-1);stepData.push({i,c,stack:[...stack],match,note:match?`'${c}' closes '${matches[c]}' → pop ✅`:`'${c}' doesn't match '${top}' → FAIL ❌`});}
  });
  stepData.push({done:true,note:"Stack is empty → all balanced ✅"});
  const cur=stepData[Math.min(s,stepData.length-1)];
  return <VizShell title="Stack matching for balanced brackets" color={color} step={s} total={stepData.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <div style={{display:"flex",gap:3,marginBottom:8}}>{str.split("").map((c,i)=><Box key={i} label={c} highlight={cur.i===i} color={openers.has(c)?color:"#56cfe1"} small/>)}</div>
    <StackBox items={cur.stack||[]} color={color} label="STACK"/>
  </VizShell>;
}

function VizRPNCalc({ color }) {
  const expr="3 4 + 2 *";
  const tokens=expr.split(" ");
  const [s,setS]=useState(0);
  const stepData=[];let stack=[];
  tokens.forEach(t=>{
    if(!isNaN(t)){stack=[...stack,Number(t)];stepData.push({token:t,stack:[...stack],note:`'${t}' is a number → push onto stack`});}
    else{const b=stack[stack.length-1];const a=stack[stack.length-2];let res;if(t==="+"&&res===undefined)res=a+b;if(t==="-"&&res===undefined)res=a-b;if(t==="*"&&res===undefined)res=a*b;if(t==="/"&&res===undefined)res=Math.floor(a/b);stack=[...stack.slice(0,-2),res];stepData.push({token:t,a,b,res,stack:[...stack],note:`'${t}': pop ${b} and ${a}, compute ${a}${t}${b}=${res}, push ${res}`});}
  });
  stepData.push({done:true,note:`Result = ${stack[0]} ✅`});
  const cur=stepData[Math.min(s,stepData.length-1)];
  return <VizShell title={`RPN: "${expr}"`} color={color} step={s} total={stepData.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={cur.note}>
    <StackBox items={cur.stack||[]} color={color}/>
    {cur.token&&<Box label={`"${cur.token}"`} highlight color={color}/>}
  </VizShell>;
}

function VizBrainFuck({ color }) {
  const [s,setS]=useState(0);
  const steps=[{note:"Memory = array of byte cells, all start at 0"},
    {note:"'>' moves data pointer right →"},
    {note:"'+' increments current cell by 1"},
    {note:"'.' prints the character for current cell value"},
    {note:"'[' starts a loop — runs while current cell ≠ 0"},
    {note:"']' jumps back to matching '[' if current cell ≠ 0"},
    {done:true,note:"Put it together: '+'.'+'+'. prints  chr(1), chr(2), chr(3) etc ✅"}];
  const mem=[0,0,0,0,0];const ptr=Math.min(s,4);
  return <VizShell title="Brainfuck: 8 commands on a memory tape" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    {mem.map((v,i)=><Box key={i} label={`[${i}]\n${i<s-1?s-1:0}`} highlight={ptr===i} color={ptr===i?"#52b788":color} small/>)}
    <div style={{width:"100%",textAlign:"center",marginTop:4,fontSize:11,color:"#c8860a"}}>↑ ptr={ptr}</div>
  </VizShell>;
}

function VizGrouping({ color }) {
  const [s,setS]=useState(0);
  const steps=[{note:'Input: pattern="(go)+" text="gogo"'},{note:"Regex engine tries to match 'go' at position 0"},{note:"'go' found at index 0-1"},{note:"'+' means one or more → try matching again from index 2"},{note:"'go' found again at index 2-3"},{done:true,note:'All matches: ["go","go"] — each captured group printed ✅'}];
  return <VizShell title="Regex: find all pattern matches with groups" color={color} step={s} total={steps.length} onPrev={()=>setS(s-1)} onNext={()=>setS(s+1)} onReset={()=>setS(0)} caption={steps[s].note}>
    {"gogo".split("").map((c,i)=><Box key={i} label={c} highlight={s>=2} color={s>=2?"#52b788":color}/>)}
    {s>=3&&<div style={{width:"100%",textAlign:"center",marginTop:4,fontSize:12,color:"#ffd060",fontWeight:700}}>match: "go" × 2</div>}
  </VizShell>;
}

// ── Router: maps exercise name → visualizer component ──────────────────────
const VIZMAP = {
  only1:VizOnly,onlya:VizOnly,onlyb:VizOnly,onlyf:VizOnly,onlyz:VizOnly,
  checknumber:VizCheckNumber,countalpha:VizCountAlpha,countcharacter:VizCountCharacter,
  printif:VizPrintIf,printifnot:VizPrintIfNot,rectperimeter:VizRectPerimeter,
  retainfirsthalf:VizRetainFirstHalf,cameltosnakecase:VizCamelToSnake,
  digitlen:VizDigitLen,firstword:VizFirstWord,fishandchips:VizFishAndChips,
  gcd:VizGcd,hashcode:VizHashCode,lastword:VizLastWord,repeatalpha:VizRepeatAlpha,
  findprevprime:VizFindPrevPrime,fromto:VizFromTo,iscapitalized:VizIsCapitalized,
  itoa:VizItoa,printmemory:VizPrintMemory,printrevcomb:VizPrintRevComb,
  thirdtimeisacharm:VizThirdTime,weareunique:VizWeAreUnique,zipstring:VizZipString,
  addprimesum:VizAddPrimeSum,canjump:VizCanJump,chunk:VizChunk,
  concatalternate:VizConcatAlternate,concatslice:VizConcatSlice,fprime:VizFPrime,
  hiddenp:VizHiddenP,inter:VizInter,reversestrcap:VizReverseStrCap,
  saveandmiss:VizSaveAndMiss,union:VizUnion,wdmatch:VizWdMatch,
  fifthandskip:VizFifthAndSkip,notdecimal:VizNotDecimal,
  revconcatalternate:VizRevConcatAlternate,slice:VizSlice,
  findpairs:VizFindPairs,revwstr:VizRevWstr,rostring:VizRoString,wordflip:VizWordFlip,
  itoabase:VizItoaBase,options:VizOptions,piglatin:VizPigLatin,
  romannumbers:VizRomanNumbers,brackets:VizBrackets,rpncalc:VizRPNCalc,
  brainfuck:VizBrainFuck,grouping:VizGrouping,
};

function VisualizerPanel({ name, color }) {
  const Viz = VIZMAP[name];
  if (!Viz) return null;
  return <Viz color={color} />;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [splash,  setSplash]  = useState(true);
  const [screen,  setScreen]  = useState("welcome"); // welcome|basics|board|exercise
  const [name,    setName]    = useState("");
  const [task,    setTask]    = useState(null);

  const handleStart   = (n) => { setName(n); setScreen("basics"); };
  const handleBasics  = ()  => setScreen("board");
  const handleSelect  = (t) => { setTask(t); setScreen("exercise"); };
  const handleBack    = ()  => setScreen("board");

  return (
    <div style={{minHeight:"100vh",fontFamily:"Georgia,'Times New Roman',serif",background:"#080300",color:"#f5e6c8"}}>
      <style>{CSS}</style>
      {splash && <SplashScreen onDone={()=>setSplash(false)}/>}
      {!splash && screen==="welcome"  && <WelcomeScreen onStart={handleStart}/>}
      {!splash && screen==="basics"   && <BasicsScreen name={name} onDone={handleBasics}/>}
      {!splash && screen==="board"    && <SkillBoard name={name} onSelect={handleSelect}/>}
      {!splash && screen==="exercise" && task && <ExerciseScreen task={task} name={name} onBack={handleBack}/>}
    </div>
  );
}

const S = {
  page: {
    minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",
    justifyContent:"flex-start",padding:"14px 10px 48px",
    background:"linear-gradient(160deg,#080300 0%,#180a00 45%,#080300 100%)",
  },
  card: {
    background:"rgba(255,255,255,0.032)",border:"1px solid rgba(200,134,10,0.2)",
    borderRadius:18,padding:"20px 16px",width:"100%",maxWidth:440,marginTop:16,
    backdropFilter:"blur(6px)",boxShadow:"0 8px 40px rgba(0,0,0,0.6)",
  },
  input: {
    width:"100%",padding:"13px 44px 13px 14px",borderRadius:10,
    border:"2px solid rgba(200,134,10,0.35)",background:"rgba(0,0,0,0.4)",
    color:"#f5e6c8",fontSize:15,fontFamily:"Georgia,serif",
    outline:"none",boxSizing:"border-box",transition:"border-color 0.2s",
  },
  btnPrimary: {
    width:"100%",padding:"13px 0",borderRadius:11,border:"none",
    background:"linear-gradient(135deg,#c8860a,#e6a020)",
    color:"#080300",fontSize:15,fontWeight:800,cursor:"pointer",
    fontFamily:"Georgia,serif",letterSpacing:0.3,
    boxShadow:"0 4px 18px rgba(200,134,10,0.3)",
    transition:"transform 0.15s,box-shadow 0.15s",
  },
};

const CSS = `
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#080300;-webkit-tap-highlight-color:transparent}
  textarea::placeholder{color:#3a1e08}
  input::placeholder{color:#3a1e08}
  button:active{transform:scale(0.98)!important}
  @keyframes steam{0%,100%{transform:translateY(0) scaleX(1);opacity:0.65}50%{transform:translateY(-5px) scaleX(1.1);opacity:0.25}}
  @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
  @keyframes toastUp{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
  @keyframes pulse{0%,100%{opacity:1;text-shadow:0 0 40px rgba(255,214,10,0.5)}50%{opacity:0.8;text-shadow:0 0 80px rgba(255,214,10,0.9)}}
  @keyframes foamRipple{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.04)}}
  input:focus{border-color:rgba(200,134,10,0.8)!important}
  textarea:focus{outline:1px solid rgba(200,134,10,0.35)}
  ::-webkit-scrollbar{width:4px;background:#080300}
  ::-webkit-scrollbar-thumb{background:rgba(200,134,10,0.25);border-radius:99px}
  pre{word-break:break-all}
`;
