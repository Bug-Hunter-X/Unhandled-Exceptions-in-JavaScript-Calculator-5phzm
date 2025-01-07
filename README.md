# Unhandled Exceptions in JavaScript Calculator

This repository demonstrates a common JavaScript error: unhandled exceptions. The `calculate` function throws exceptions for invalid operations (division by zero and unknown operators) without providing mechanisms for graceful error handling.  This can lead to application crashes or unexpected behavior.

The `bug.js` file contains the code with the error.  The `bugSolution.js` file provides a corrected version with improved error handling using try...catch blocks.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in your preferred JavaScript environment.
3. Run the code. Observe the unhandled exceptions when dividing by zero or using an invalid operator.
4. Open `bugSolution.js`.  This file demonstrates how to use try...catch blocks to handle these exceptions and provide more informative error messages.

## Lesson Learned

Always handle potential exceptions using try...catch blocks to prevent application crashes and provide a better user experience.  Consider adding more specific error types and messages to make debugging easier.