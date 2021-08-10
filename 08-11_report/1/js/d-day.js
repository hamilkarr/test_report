const DdayForm = document.getElementById("dday-form");

const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const newDdaySubmit = document.getElementById("submit");

const newYear = yearInput.value;
const newMonth = monthInput.value;
const newDay = dayInput.value;

console.log(newYear, newMonth, newDay);

//const Dday = new.Date('DdayInput');
/*
function handleDdaySubmit(event) {
    event.preventDefault();

    DdayForm.childNodes.value = "";
    calcDday(newYear, newMonth, newDay);
}

function calcDday(newYear, newMonth, newDay) {
    const dday = new Date((year, monthIndex, day), (`${newYear}, ${newMonth}, ${newDay}`))

};

DdayForm.addEventListener("submit", handleDdaySubmit);

*/
