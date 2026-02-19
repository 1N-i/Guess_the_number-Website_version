# 🎮 Guess the Number - Web Game

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

Simple game where the challenge is to discover a secret number between 0 and 50

## 📋 Summary
- [Technologies](#-technologies)
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [What I learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)

---

## 🛠 Technologies
- **HTML5**: Semantic structuring of the interface.
- **CSS3**: Custom styling.
- **JavaScript (ES6+)**: Game logic.

## ✨ Features
- **Limited tries:** The playr has a limit of 5 tries to find the secret number.
- **Dynamic Hints:** The system informs you if the secret number is greater or less than the current guess.
- **Input Validation:** Protection against numbers outside the range (0-50).
- **Layout Resilience:** Use of `white-space: pre-wrap` to display formatted messages with line breaks.

## 📂 Project Architecture
The project is organized in a modular way to separate responsibilities:
* `index.html`: Contains the interface structure and input fields.
* `style.css`: Defines the visual identity, colors, and layout behavior.
* `script.js`: The game's engine. Manages random number generation and win/loss logic.

## 📚 What I Learned
* **DOM Manipulation:** How to capture input values ​​and dynamically change text using `innerHTML`.
* **Variable Scope:** The importance of using `const` for DOM elements and `let` for mutable states such as trials.
* **Control Flow:** Implementing complex conditionals to validate the game's business rules.

## 🔮 Future Improvements
- [ ] Sound effects for hits and misses.
- [ ] Transition animations when winning or losing.
- [ ] Difficulty selector (increase the number range).
