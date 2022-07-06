// Get Value
function changeLang(){
    lang == "english"
}


function getValue() {
    let stanceNo = document.getElementById('stance-no').value;
    console.log(stanceNo);
    thirukuralApi(stanceNo);
};


// randomBtn

function randomBtn() {
    let stanceNo = Math.ceil(Math.random() * 1331);
    console.log(stanceNo);
    thirukuralApi(stanceNo);
}

let lang = "tamil";

function checkbox() {
    let checkForEnglish = document.getElementById('check-for-english');
    if (checkForEnglish.checked) {
        lang = "english";
        console.log(lang);
    }
    else {
        lang = 'tamil';
        console.log(lang);
    }
    console.log(displayData);
    displayDataFunc(displayData);

}

let displayData;
function thirukuralApi(stanceNo) {
    fetch(`https://api-thirukkural.vercel.app/api?num=${stanceNo}`)
        .then((res) => res.json())
        // .then((data)=>console.log(data))
        .then((data) => (displayData = data))
        .then(() => displayDataFunc(displayData))
        .catch((e => console.log(e)));

};



function displayDataFunc(data) {
    let Snumber;
    let section;
    let chapterGroup;
    let chapter;
    let explanation;
    let line;
    if (lang == "english") {
        Snumber = data.number;
        section = data.sect_eng;
        chapterGroup = data.chapgrp_eng;
        chapter = data.chapgrp_eng;
        explanation = data.eng_exp;
        line = data.eng;
    }
    else {
        Snumber = data.number;
        section = data.sect_tam;
        chapterGroup = data.chapgrp_tam;
        chapter = data.chapgrp_tam;
        explanation = data.tam_exp;
        line = `${data.line1}<br>${data.line2}`;
    }
    let lineNo = document.querySelector(".card-footer");
    lineNo.innerHTML = "Thirukural Stance : " + Snumber;

    let cbody = document.querySelector(".card-header");
    cbody.innerHTML =
        "Section : " +
        section +
        "<br />" +
        "Group : " +
        chapterGroup +
        "<br />" +
        "Chapter : " +
        chapter +
        "<br />";

    let kural = document.getElementsByClassName("card-title");
    // kural[0].innerHTML = data.line1 + "<br>" + data.line2;
    // console.log(kural);
    kural[0].innerHTML = line;


    kural[1].innerHTML = "Explantation : " + explanation;

}




let timeNow = () => {
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();
        cDay = currentTime.getDate(),
        cMonths = currentTime.getMonth(),
        cYear = currentTime.getFullYear(),
        date = `${cDay+1}/${cMonths}/${cYear}`;
        
        

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    let suffix = 'Am';
    if (hours >= 12) {
        suffix = "Pm";
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }

    document.getElementById('timenow').innerHTML = `${date}  ${hours} : ${minutes} : ${seconds} ${suffix}`;
}

setInterval(timeNow, 1000);






