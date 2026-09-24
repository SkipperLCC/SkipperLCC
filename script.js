const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");
    }

});


/* =========================
   REMEMBER THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    const icon = themeButton.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   CHATBOT
========================= */

function askQuestion(question) {

    const chatMessages = document.getElementById("chatMessages");

    // Display user's question
    const userMessage = document.createElement("div");

    userMessage.classList.add("user-message");

    userMessage.textContent = question;

    chatMessages.appendChild(userMessage);


    // Generate answer
    const answer = getAnswer(question);


    // Delay bot response slightly
    setTimeout(function () {

        const botMessage = document.createElement("div");

        botMessage.classList.add("bot-message");

        botMessage.textContent = answer;

        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 400);

}


/* =========================
   CHATBOT ANSWERS
========================= */

function getAnswer(question) {

    const lowerQuestion = question.toLowerCase();


    if (
        lowerQuestion.includes("who are you") ||
        lowerQuestion.includes("about you") ||
        lowerQuestion.includes("your name")
    ) {

        return "My name is Skipper Euen Solis. I am a Computer Science student who enjoys learning programming, coding, and technology.";

    }


    if (
        lowerQuestion.includes("skill") ||
        lowerQuestion.includes("technology") ||
        lowerQuestion.includes("technologies")
    ) {

        return "My current skills include HTML, CSS, JavaScript, PHP, and MySQL.";

    }


    if (
        lowerQuestion.includes("study") ||
        lowerQuestion.includes("school") ||
        lowerQuestion.includes("education") ||
        lowerQuestion.includes("course")
    ) {

        return "I am studying Bachelor of Science in Computer Science at Lipa City Colleges. I am currently in BSCS 2A.";

    }


    if (
        lowerQuestion.includes("project") ||
        lowerQuestion.includes("projects")
    ) {

        return "Some of my sample projects include a Student Information System and an Admin Payroll System.";

    }


    if (
        lowerQuestion.includes("computer science") ||
        lowerQuestion.includes("programming") ||
        lowerQuestion.includes("coding")
    ) {

        return "I am interested in programming and coding. I want to continue learning and improve my skills in different areas of Computer Science.";

    }


    if (
        lowerQuestion.includes("contact") ||
        lowerQuestion.includes("email")
    ) {

        return "You can contact me through the Contact Me section of this portfolio.";

    }


    return "I'm not sure about that yet. Try asking about my name, skills, education, projects, or programming interests.";

}


/* =========================
   SEND CHAT MESSAGE
========================= */

function sendMessage() {

    const input = document.getElementById("userInput");

    const question = input.value.trim();


    if (question === "") {
        return;
    }


    askQuestion(question);

    input.value = "";

}


/* =========================
   ENTER KEY
========================= */

function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});