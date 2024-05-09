const ruleModal = document.querySelector('.rules-modal');
const startTestButton = document.querySelector('.start-test-button');

const soal = document.querySelector(".soal-quiz");
const timer = document.querySelector("header .timer");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const wrapper2 = document.querySelector(".form-wrapper2 ");

// Window onload

window.onload = function() {
    ruleModal.style.display = 'block';
    soal.style.display = 'none';
};

// Memulai tes setelah tombol "Mulai Tes" ditekan
startTestButton.addEventListener('click', function() {
  ruleModal.style.display = 'none';
  soal.style.display = 'block';
  timer.style.top = '0';
  wrapper2.style.padding = '0';
  startTest();
});

// Start Test

function startTest() {
    soal.style.display = 'block';
    timer.style.display = 'flex';
    const container = document.querySelector('.number');
    for (let i = 0; i < ques.length; i++) {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p class="form-label">${i + 1}. ${ques[i].question}</p>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt1}">
                ${ques[i].opt1}<span class="formbold-radio-checkmark"></span></label></div>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt2}">
                ${ques[i].opt2}<span class="formbold-radio-checkmark"></span></label></div>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt3}">
                ${ques[i].opt3}<span class="formbold-radio-checkmark"></span></label></div>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt4}">
                ${ques[i].opt4}<span class="formbold-radio-checkmark"></span></label></div>
                <br>
        `;
        container.appendChild(questionElement);
    }
    const isians = document.querySelector('.isian');
    for (let i = 0; i < is.length; i++) {
        const isianElement = document.createElement('div');
        isianElement.innerHTML = `
            <p class="form-label">${i + 1}. ${is[i].question}</p>
            <div class="formbold-radio-group">
            <input
              type="text"
              placeholder="Jawaban"
              class="input-isian"
              name="isian${i}" 
            />
            </div>
                <br>
        `;
        isians.appendChild(isianElement);
    }
    startTimer(300);
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let correctAnswers = 0;

    for (let i = 0; i < ques.length; i++) {
        const radios = document.getElementsByName(`question${i}`);
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                if (radios[j].value === ques[i].ans) {
                    correctAnswers++;
                }
                break;
            }
        }
    }

    //skor isian
    for (let i = 0; i < is.length; i++) {
        const userAnswer = document.querySelector(`input[name="isian${i}"]`).value.trim().toLowerCase();
        const correctAnswer = is[i].answer.toLowerCase();
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
    }

    let soal_byk = ques.length + is.length;
    let result_box = document.querySelector('.result_box');
    soal.style.display = 'none';
    timer.style.display = 'none';
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    const downloadButton = document.querySelector('.download');
    const quitButton = document.querySelector('.keluar');
    const replayButton = document.querySelector('.replay');

    quitButton.addEventListener('click', function() {
        const imageUrl = '../test.html';
        const link = document.createElement('a');
        link.href = imageUrl;
        link.click();
    });

    replayButton.addEventListener('click', function() {
        // const imageUrl = 'test1.html';
        // const link = document.createElement('a');
        // link.href = imageUrl;
        // link.click();
        window.location.reload();
    });

    if (correctAnswers >= (soal_byk) - 2) {
        downloadButton.addEventListener('click', function() {
            const imageUrl = 'badges/goldMedal.jpeg';
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'goldMedal';
            link.click();
        });
    }
    else if (correctAnswers >= (soal_byk) - 5) {
        downloadButton.addEventListener('click', function() {
            const imageUrl = 'badges/silverMedal.jpeg';
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'silverMedal';
            link.click();
        });
    }
    else if (correctAnswers >= (soal_byk) - 10) {
        downloadButton.addEventListener('click', function() {
            const imageUrl = 'badges/bronzeMedal.jpeg';
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'bronzeMedal';
            link.click();
        });
    }
    else {
        downloadButton.style.display = 'none';
        replayButton.style.display = 'inline-block';
    }
    let scoreTag = '<span>Kamu mendapat <p>' + correctAnswers + '</p> dari <p>' + soal_byk + ' soal</p></span>';
    scoreText.innerHTML = scoreTag;
});


function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Waktu Habis";
            const soal = document.querySelector(".atas");
            const isi = document.querySelector(".isi");
            isi.style.display = 'none';
            soal.style.display = 'none';
        }
    }
}