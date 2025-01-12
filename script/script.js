var COUNT_DAY = 31;
var COUNT_DAY_LAST = 31;
var START_DAY = 28;
var BIG_DAY = 10;

var days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

var scheduleData = {
    1 : {
        time: "10:30",
        title: "Сбор гостей",
        description: "Познакомьтесь с другими гостями, пообщайтесь и выберете подходящее себе место.",
        image: "./image/1030.png"
    },
    2 : {
        time: "11:00",
        title: "Церемония венчания",
        description: "Вы сможете стать свидетелями того, как два сердца соединятся в одно.",
        image: "./image/1100.png"
    },
    3 : {
        time: "12:00",
        title: "Фруктовый фуршет",
        description: "Вы сможете насладиться закусками и напитками в непринуждённоё атмосфере.",
        image: "./image/1200.png"
    },
    4 : {
        time: "15:00",
        title: "Вегетарианский банкет",
        description: "На банкете в кафе «Марили» вас ждет разнообразие вкусных блюд и увлекательные развлечения в компании близких и друзей.",
        image: "./image/1500.png"
    },
    5 : {
        time: "20:00",
        title: "Окончание мероприятия",
        description: "Надеюсь, этот замечательный день останется в вашей памяти.",
        image: "./image/2000.png"
    }
}

// calendar setting

var calendar = document.querySelector(".calendar");

var text = '';
var stepRow;
var stepColumn;
var checkActive = 0;
var day = START_DAY;

for (stepRow = 0; stepRow < 7; stepRow++) {
    text += '<div class="calendar-row">';
    for (stepColumn = 0; stepColumn < 7; stepColumn++) {

        if (stepRow == 0) {
            text += '<div class="calendar-cell">';
            text += days[stepColumn];
            text += '</div>';
        }

        else {
            if (checkActive % 2 == 0) {
                text += '<div class="calendar-cell calendar-cell-gray">'
            }

            else if (checkActive == 1 && day == BIG_DAY) {
                text += '<div class="calendar-cell calendar-cell-active">';
            }

            else {
                text += '<div class="calendar-cell">';
            }
            
            text += day;
            day += 1;
    
            if ((checkActive == 0 && day > COUNT_DAY_LAST) || (checkActive == 1 && day > COUNT_DAY)) {
                day = 1;
                checkActive += 1;
            }

            text += '</div>';
        }
        
    }
    text += '</div>';
}

calendar.innerHTML = text;

// schedule setting

var schedule = document.querySelector(".main__schedule__content");

for (let key in scheduleData) {
    schedule.innerHTML += `
        <div class="main__schedule__item">
            <div class="main__schedule__item__column">
                <div class="main__schedule__item__time">${scheduleData[key].time}</div>
                <div class="main__schedule__item__img"> <img src="${scheduleData[key].image}"></div>
            </div>
            <div class="main__schedule__item__column">
                <div class="main__schedule__item__title">${scheduleData[key].title}</div>
                <div class="main__schedule__item__description"> ${scheduleData[key].description} </div>
            </div>
        </div>
    `
}

