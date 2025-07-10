// Quiz data organized by categories
const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris",
            explanation: "Paris has been the capital of France since the 10th century."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
            explanation: "Mars appears red due to iron oxide (rust) on its surface."
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: "Leonardo da Vinci",
            explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1506."
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            explanation: "The Pacific Ocean covers about 63 million square miles."
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            answer: "Oxygen",
            explanation: "Oxygen is essential for respiration and has atomic number 8."
        }
    ],
    science: [
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            answer: "H2O",
            explanation: "Water consists of two hydrogen atoms bonded to one oxygen atom."
        },
        {
            question: "Which scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            answer: "Albert Einstein",
            explanation: "Einstein published his theory of relativity in 1905 and 1915."
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
            answer: "Mitochondria",
            explanation: "Mitochondria generate most of the cell's supply of ATP."
        },
        {
            question: "Which gas do plants absorb during photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: "Carbon dioxide",
            explanation: "Plants use CO2, water, and sunlight to produce glucose and oxygen."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Quartz"],
            answer: "Diamond",
            explanation: "Diamond scores 10 on the Mohs scale of mineral hardness."
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            answer: "1945",
            explanation: "WWII ended with the surrender of Japan on September 2, 1945."
        },
        {
            question: "Who was the first president of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
            answer: "George Washington",
            explanation: "Washington served from 1789 to 1797 as the first U.S. president."
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: ["Greeks", "Romans", "Egyptians", "Mayans"],
            answer: "Egyptians",
            explanation: "The Great Pyramid of Giza was built around 2560 BCE."
        },
        {
            question: "When was the Declaration of Independence signed?",
            options: ["1774", "1776", "1781", "1787"],
            answer: "1776",
            explanation: "The Declaration was adopted on July 4, 1776."
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek", "Roman", "Persian", "Ottoman"],
            answer: "Roman",
            explanation: "Julius Caesar was a Roman general and statesman in the 1st century BCE."
        }
    ],
    programming: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language",
            explanation: "HTML is the standard markup language for creating web pages."
        },
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript",
            explanation: "JavaScript is the programming language of the Web."
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets",
            explanation: "CSS describes how HTML elements are to be displayed."
        },
        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: ["//", "/*", "#", "--"],
            answer: "//",
            explanation: "// is used for single-line comments, while /* */ is for multi-line."
        },
        {
            question: "What is the correct way to write an array in JavaScript?",
            options: [
                "const colors = (1:'red', 2:'blue', 3:'green')",
                "const colors = ['red', 'blue', 'green']",
                "const colors = 'red', 'blue', 'green'",
                "const colors = {1:'red', 2:'blue', 3:'green'}"
            ],
            answer: "const colors = ['red', 'blue', 'green']",
            explanation: "Square brackets [] are used to create array literals in JavaScript."
        }
    ]
};