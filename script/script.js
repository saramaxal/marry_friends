import { configs } from "./configs.js";


function InitializeCalendar() {
    let calendar = document.querySelector(".calendar");

    let currentDate = new Date(configs.date.getFullYear(), configs.date.getMonth(), 1);
    let targetDate = new Date(configs.date.getFullYear(), configs.date.getMonth(), configs.date.getDate());
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);

    let text = '';

    text += `<div class="calendar-row">`
        + configs.days.map(el => `<div class="calendar-cell">${el}</div>`).join("")
        + `</div>\n`;

    while (currentDate < targetDate || currentDate.getMonth() == targetDate.getMonth()) {
        text += `<div class="calendar-row">`;
        for (let i = 0; i < 7; i++) {
            let numberClass = currentDate.getMonth() == targetDate.getMonth() 
                ? currentDate.getTime() == targetDate.getTime() ? "calendar-cell-active" : ""
                : "calendar-cell-gray";
            text += `<div class="calendar-cell ${numberClass}"> ${currentDate.getDate()} </div>`;

            currentDate.setDate(currentDate.getDate() + 1);
        }
        text += `</div>`;
    }

    calendar.innerHTML = text;
}


function InitializeShedule() {
    let schedule = document.querySelector(".main__schedule__content");
    schedule.innerHTML = "<h2>Программа свадьбы</h2>";
    for (let key in configs.scheduleData) {
        schedule.innerHTML += `
            <div class="main__schedule__item">
                <div class="main__schedule__item__column">
                    <div class="main__schedule__item__time">${configs.scheduleData[key].time}</div>
                    <div class="main__schedule__item__img"> <img src="${configs.scheduleData[key].image}"></div>
                </div>
                <div class="main__schedule__item__column">
                    <div class="main__schedule__item__title">${configs.scheduleData[key].title}</div>
                    <div class="main__schedule__item__description"> ${configs.scheduleData[key].description} </div>
                </div>
            </div>
        `
    }
}


function InitializeLinks() {
    let linkImageTg = document.querySelectorAll(".link-image-tg");
    linkImageTg.forEach((element) => {
        element.innerHTML = `
        <svg wiconfigs.dateh="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5002 2.8335C9.68016 2.8335 3.3335 9.18016 3.3335 17.0002C3.3335 24.8202 9.68016 31.1668 17.5002 31.1668C25.3202 31.1668 31.6668 24.8202 31.6668 17.0002C31.6668 9.18016 25.3202 2.8335 17.5002 2.8335ZM24.0735 12.4668C23.861 14.7052 22.9402 20.1452 22.4727 22.6527C22.2743 23.7152 21.8777 24.0693 21.5093 24.1118C20.6877 24.1827 20.0643 23.5735 19.271 23.0493C18.0243 22.2277 17.316 21.7177 16.1118 20.9243C14.7093 20.0035 15.616 19.4935 16.4235 18.6718C16.636 18.4593 20.2627 15.1585 20.3335 14.861C20.3433 14.8159 20.342 14.7692 20.3297 14.7247C20.3173 14.6803 20.2943 14.6395 20.2627 14.606C20.1777 14.5352 20.0643 14.5635 19.9652 14.5777C19.8377 14.606 17.8543 15.9235 13.9868 18.5302C13.4202 18.9127 12.9102 19.111 12.4568 19.0968C11.9468 19.0827 10.9835 18.8135 10.261 18.5727C9.3685 18.2893 8.67433 18.1335 8.731 17.6377C8.75933 17.3827 9.1135 17.1277 9.77933 16.8585C13.916 15.0593 16.6643 13.8693 18.0385 13.3027C21.9768 11.6593 22.7843 11.376 23.3227 11.376C23.436 11.376 23.7052 11.4043 23.8752 11.546C24.0168 11.6593 24.0593 11.8152 24.0735 11.9285C24.0593 12.0135 24.0877 12.2685 24.0735 12.4668Z" fill="#322222"/>
        </svg>`
    } );
    
    let linkImageWt = document.querySelectorAll(".link-image-wt");
    linkImageWt.forEach((element) => {
        element.innerHTML = `
        <svg wiconfigs.dateh="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5002 2.8335C9.67591 2.8335 3.3335 9.17591 3.3335 17.0002C3.3335 19.6777 4.07725 22.1852 5.37066 24.3215L4.107 28.6168C4.03444 28.8634 4.02967 29.1251 4.09318 29.3742C4.15668 29.6233 4.28613 29.8506 4.46791 30.0324C4.64968 30.2142 4.87707 30.3436 5.12617 30.4072C5.37527 30.4707 5.63688 30.4659 5.8835 30.3933L10.1788 29.1297C12.387 30.4655 14.9193 31.1701 17.5002 31.1668C25.3244 31.1668 31.6668 24.8244 31.6668 17.0002C31.6668 9.17591 25.3244 2.8335 17.5002 2.8335ZM14.2957 20.2061C17.1616 23.0706 19.8972 23.4488 20.8633 23.4842C22.3324 23.5381 23.7632 22.4161 24.32 21.1142C24.3897 20.9521 24.4149 20.7743 24.393 20.5993C24.3711 20.4242 24.3028 20.2582 24.1953 20.1182C23.419 19.1266 22.3692 18.414 21.3436 17.7057C21.1295 17.5572 20.8663 17.4976 20.6092 17.5394C20.3521 17.5811 20.1212 17.721 19.9652 17.9295L19.1152 19.2257C19.0702 19.2952 19.0006 19.3449 18.9204 19.3649C18.8402 19.3849 18.7553 19.3736 18.6831 19.3334C18.1065 19.0033 17.2664 18.4423 16.6629 17.8388C16.0594 17.2353 15.5324 16.4335 15.2363 15.8937C15.2005 15.825 15.1904 15.7457 15.2078 15.6701C15.2252 15.5946 15.269 15.5277 15.3312 15.4815L16.6402 14.5097C16.8276 14.3476 16.9485 14.1221 16.9799 13.8763C17.0113 13.6306 16.9509 13.3819 16.8102 13.178C16.1756 12.2487 15.4361 11.0672 14.3637 10.2837C14.225 10.1841 14.0629 10.122 13.8931 10.1033C13.7234 10.0847 13.5517 10.1103 13.3947 10.1775C12.0913 10.7357 10.9637 12.1665 11.0175 13.6384C11.0529 14.6046 11.4312 17.3402 14.2957 20.2061Z" fill="#322222"/>
        </svg>`
    } );
}

function InitializeMaps() {
    let mainDateAndPlaceWrapCards = document.querySelectorAll(".main__date-and-place__wrap-card");

    let blocks = [];
    mainDateAndPlaceWrapCards.forEach((element) => {
        blocks.push(element.children[1]);
    });

    addEventListener("scroll", (e) => {
        blocks.forEach((el) => el.style.display = "block");
    });
    blocks.forEach((el) => {
        el.addEventListener("click", () =>{
            el.style.display = "none";
        })
    })
}


function InitializeTimer () {
    let elements = document.querySelectorAll(".timer");
    let currentTimezoneDifference = (configs.timezone * 60 + new Date().getTimezoneOffset()) * 60;

    const hrs = { 1: "час", 2: "часа", 3: "часа", 4: "часа", "def": "часов"};
    const dys = { 1: "день", 2: "дня", 3: "дня", 4: "дня", "def": "дней"};
    const getSeconds = (int) => { let n = int % 60; return `${n} сек`; };
    const getMinutes = (int) => { let n = Math.round(int / 60) % 60; return `${n} мин`; };
    const getHours = (int) => { 
        let n = Math.round(int / 3600) % 24; 
        return `${n} ${ (Math.round(n / 10) % 10 != 1 && hrs[n % 10]) || hrs["def"]}`; 
    };
    const getDays = (int) => { 
        let n = Math.round(int / 3600 / 24); 
        return `${n} ${(Math.round(n / 10) % 10 != 1 && dys[n % 10]) || dys["def"]}`; 
    };

    setInterval(() => {
        let i = Math.round((configs.date - Date.now()) / 1000 - currentTimezoneDifference);
        elements.forEach(el => el.innerHTML = `${getDays(i)} ${getHours(i)} ${getMinutes(i)} ${getSeconds(i)}`);
    }, 200);
}


function test() {
    let delElement = document.querySelector(".main__info-content__photo:first-child img");
    let main = document.querySelector("main");
    
    delElement.addEventListener("click", () => {
            console.log(main.style.backgroundColor);
            if (main.style.backgroundColor == "rgb(255, 251, 243)") {
                main.style.backgroundColor = "#F4EBD9";
            }
            else {
                main.style.backgroundColor = "#FFFBF3";
            }
    });
}


InitializeCalendar();
InitializeShedule();
InitializeLinks();
InitializeMaps();
InitializeTimer();
test();
