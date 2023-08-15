let words = document.querySelectorAll(".word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";

    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80)
    })
    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80)
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText();
setInterval(changeText, 3000);


/* Professional Skills */

const circle = document.querySelectorAll('.circle');

circle.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
})

/* Technical Skill Counters */
const htmlSkill         = document.getElementById('html-percent');
const cssSkill          = document.getElementById('css-percent');
const javascriptSkill   = document.getElementById('javascript-percent');
const csharpSkill       = document.getElementById('csharp-percent');
const sqlSkill          = document.getElementById('sql-percent');
const designSkill       = document.getElementById('design-percent');

const PercentCounter = async (percent, duration, skill) => {
    const interval = 40;
    const steps = duration / interval;
    const increment = (percent - parseInt(skill.innerText)) / steps;

    const timer = setInterval(async () => {
        const currentPercent = parseInt(skill.innerText);
        if (currentPercent < percent) {
            const newPercent = currentPercent + increment;
            skill.innerText = "" + Math.round(newPercent) + "%";
        } else {
            clearInterval(timer);
        }
    }, interval);
}

PercentCounter(95, 2000, htmlSkill);
PercentCounter(92, 2000, cssSkill);
PercentCounter(76, 2000, javascriptSkill);
PercentCounter(80, 2000, csharpSkill);
PercentCounter(64, 2000, sqlSkill);
PercentCounter(82, 2000, designSkill);

/* Professional Skill Counters */
const skill1Percent = document.getElementById('skill1-percent');
const skill2Percent = document.getElementById('skill2-percent');
const skill3Percent = document.getElementById('skill3-percent');
const skill4Percent = document.getElementById('skill4-percent');
const skill5Percent = document.getElementById('skill5-percent');
const skill6Percent = document.getElementById('skill6-percent');

const PercentCounter2 = async (percent, skill) => {
    const interval = 40;
    const duration = (percent / interval) * 1000;
    const steps = duration / interval;
    const increment = (percent - parseInt(skill.innerText)) / steps;

    const timer = setInterval(async () => {
        const currentPercent = parseInt(skill.innerText);
        if (currentPercent < percent) {
            const newPercent = currentPercent + increment;
            skill.innerText = "" + Math.round(newPercent) + "%";
        } else {
            clearInterval(timer);
        }
    }, interval);
}

PercentCounter2(90, skill1Percent);
PercentCounter2(87, skill2Percent);
PercentCounter2(88, skill3Percent);
PercentCounter2(95, skill4Percent);
PercentCounter2(91, skill5Percent);
PercentCounter2(98, skill6Percent);