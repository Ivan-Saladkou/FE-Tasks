class Month {
    constructor(nameOftheMonth, numberOftheMonth, amountOfTheDays, thefirstDay) {
        this.monthName = nameOftheMonth;
        this.daysAmount = amountOfTheDays;
        this.firstDay = thefirstDay;
        this.monthNumber = numberOftheMonth
    }
}
class Year {
    constructor(numberOfTheYear, firstDayOfTheYear) {
        this.yearNumber = numberOfTheYear;
        this.firstYearDay = new WeekDay(firstDayOfTheYear);
        this.January = new Month("Январь", 1, 31, firstDayOfTheYear);
        this.February = new Month("Февраль", 2, 28, firstDayOfTheYear + 3);
        this.March = new Month("Март", 3, 31, firstDayOfTheYear + 3);
        this.April = new Month("Апрель", 4, 30, firstDayOfTheYear + 6);
        this.May = new Month("Май", 5, 31, firstDayOfTheYear + 1);
        this.June = new Month("Июнь", 6, 30, firstDayOfTheYear + 4);
        this.July = new Month("Июль", 7, 31, firstDayOfTheYear + 6);
        this.August = new Month("Август", 8, 31, firstDayOfTheYear + 2);
        this.September = new Month("Сентябрь", 9, 30, firstDayOfTheYear + 5);
        this.October = new Month("Октябрь", 10, 31, firstDayOfTheYear);
        this.November = new Month("Ноябрь", 11, 30, firstDayOfTheYear + 3);
        this.December = new Month("Декабрь", 12, 31, firstDayOfTheYear + 5);
    }
}

class WeekDay {
    constructor(weekDayNumber) {
        this.number = weekDayNumber;
        if (weekDayNumber > 7) {
            this.number = weekDayNumber - 7;
        }
    }

}
class MonthNumber {
    constructor(n) {
        this.number = n; {

        }
    }
    setNumber(num) {
        this.number = num; {
            if (this.number < 1) {
                this.number = 1;
            }
            if (this.number > 12) {
                this.number = 12;
            }
        }
    }
    plus() {
        this.number++;
        if (this.number < 1) {
            this.number = 1;
        }
        if (this.number > 12) {
            this.number = 12;
        }
    }
    minus() {
        this.number--;
        if (this.number < 1) {
            this.number = 1;
        }
        if (this.number > 12) {
            this.number = 12;
        }
    }
}


var body = document.body;
var grid = document.createElement("table");
grid.border = 1;
grid.width = 400;

grid.align = "center";
grid.id = "grid";
var month = document.createElement("caption");
month.border = 1;
month.align = "center";

var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
var y2018 = new Year(2018, 1);
var showingMonthNumber = new MonthNumber(currentMonth);

var nextMonthButton = document.createElement("button");
nextMonthButton.innerHTML = ">";
nextMonthButton.style.cssText = "font-size:50px;margin-left:875px;margin-top:65px;position:absolute;"
nextMonthButton.onclick = function() { nextButtonClick(); };

var previousMonthButton = document.createElement("button");
previousMonthButton.innerHTML = "<";
previousMonthButton.style.cssText = "font-size:50px;margin-left:430px;margin-top:65px;position:absolute;"
previousMonthButton.onclick = function() { previousButtonClick(); };

var daysRow1 = document.createElement("tr");
var d1_1 = document.createElement("td");
var d1_2 = document.createElement("td");
var d1_3 = document.createElement("td");
var d1_4 = document.createElement("td");
var d1_5 = document.createElement("td");
var d1_6 = document.createElement("td");
var d1_7 = document.createElement("td");

var daysRow2 = document.createElement("tr");
var d2_1 = document.createElement("td");
var d2_2 = document.createElement("td");
var d2_3 = document.createElement("td");
var d2_4 = document.createElement("td");
var d2_5 = document.createElement("td");
var d2_6 = document.createElement("td");
var d2_7 = document.createElement("td");

var daysRow3 = document.createElement("tr");
var d3_1 = document.createElement("td");
var d3_2 = document.createElement("td");
var d3_3 = document.createElement("td");
var d3_4 = document.createElement("td");
var d3_5 = document.createElement("td");
var d3_6 = document.createElement("td");
var d3_7 = document.createElement("td");

var daysRow4 = document.createElement("tr");
var d4_1 = document.createElement("td");
var d4_2 = document.createElement("td");
var d4_3 = document.createElement("td");
var d4_4 = document.createElement("td");
var d4_5 = document.createElement("td");
var d4_6 = document.createElement("td");
var d4_7 = document.createElement("td");

var daysRow5 = document.createElement("tr");
var d5_1 = document.createElement("td");
var d5_2 = document.createElement("td");
var d5_3 = document.createElement("td");
var d5_4 = document.createElement("td");
var d5_5 = document.createElement("td");
var d5_6 = document.createElement("td");
var d5_7 = document.createElement("td");

var daysRow6 = document.createElement("tr");
var d6_1 = document.createElement("td");
var d6_2 = document.createElement("td");
var d6_3 = document.createElement("td");
var d6_4 = document.createElement("td");
var d6_5 = document.createElement("td");
var d6_6 = document.createElement("td");
var d6_7 = document.createElement("td");



var week_days = document.createElement("tr");
var monday = document.createElement("th");
var tuesday = document.createElement("th");
var wednsday = document.createElement("th");
var thursday = document.createElement("th");
var friday = document.createElement("th");
var saturday = document.createElement("th");
var sunday = document.createElement("th");

month.innerHTML = "Ноябрь";
monday.innerHTML = "Пн";
tuesday.innerHTML = "Вт";
wednsday.innerHTML = "Ср";
thursday.innerHTML = "Чт";
friday.innerHTML = "Пт";
saturday.innerHTML = "Сб";
sunday.innerHTML = "Вс";

body.appendChild(nextMonthButton);
body.appendChild(previousMonthButton);
body.appendChild(grid);


grid.appendChild(month);
grid.appendChild(week_days);
grid.appendChild(daysRow1);
grid.appendChild(daysRow2);
grid.appendChild(daysRow3);
grid.appendChild(daysRow4);
grid.appendChild(daysRow5);
grid.appendChild(daysRow6);

week_days.appendChild(monday);
week_days.appendChild(tuesday);
week_days.appendChild(wednsday);
week_days.appendChild(thursday);
week_days.appendChild(friday);
week_days.appendChild(saturday);
week_days.appendChild(sunday);

daysRow1.appendChild(d1_1);
daysRow1.appendChild(d1_2);
daysRow1.appendChild(d1_3);
daysRow1.appendChild(d1_4);
daysRow1.appendChild(d1_5);
daysRow1.appendChild(d1_6);
daysRow1.appendChild(d1_7);

daysRow2.appendChild(d2_1);
daysRow2.appendChild(d2_2);
daysRow2.appendChild(d2_3);
daysRow2.appendChild(d2_4);
daysRow2.appendChild(d2_5);
daysRow2.appendChild(d2_6);
daysRow2.appendChild(d2_7);

daysRow3.appendChild(d3_1);
daysRow3.appendChild(d3_2);
daysRow3.appendChild(d3_3);
daysRow3.appendChild(d3_4);
daysRow3.appendChild(d3_5);
daysRow3.appendChild(d3_6);
daysRow3.appendChild(d3_7);

daysRow4.appendChild(d4_1);
daysRow4.appendChild(d4_2);
daysRow4.appendChild(d4_3);
daysRow4.appendChild(d4_4);
daysRow4.appendChild(d4_5);
daysRow4.appendChild(d4_6);
daysRow4.appendChild(d4_7);

daysRow5.appendChild(d5_1);
daysRow5.appendChild(d5_2);
daysRow5.appendChild(d5_3);
daysRow5.appendChild(d5_4);
daysRow5.appendChild(d5_5);
daysRow5.appendChild(d5_6);
daysRow5.appendChild(d5_7);

daysRow6.appendChild(d6_1);
daysRow6.appendChild(d6_2);
daysRow6.appendChild(d6_3);
daysRow6.appendChild(d6_4);
daysRow6.appendChild(d6_5);
daysRow6.appendChild(d6_6);
daysRow6.appendChild(d6_7);




function feelTableCells(Month) {

    var dayNumber = 1;
    var begin = Month.firstDay - 1;

    month.innerHTML = Month.monthName;
    for (j = 1; j <= 6; j++) {
        for (i = 0; i <= 6; i++) {
            document.getElementById("grid").rows[j].cells[i].innerHTML = "&nbsp";
        }
    }
    for (j = 1; j <= 6; j++) {
        for (i = begin; i <= 6; i++) {
            if (dayNumber > Month.daysAmount) {
                break;
            }
            document.getElementById("grid").rows[j].cells[i].innerHTML = dayNumber;

            dayNumber++;
        }
        begin = 0;

    }
}

function formatTable(numberOftheMonth) {
    var styleTd = "color:#E4E4E5; background-color:#131719;border:none; opacity:0.75 ;";
    var styleTr = "border:1px solid #131719";
    month.style.cssText = "color:#00B7C3; background-color:#131719;border:none; opacity:0.75 ;";
    for (j = 0; j <= 6; j++) {
        for (i = 0; i <= 6; i++) {
            document.getElementById("grid").rows[j].cells[i].style.cssText = styleTd;
            document.getElementById("grid").rows[j].style.cssText = styleTr;
            if (document.getElementById("grid").rows[j].cells[i].innerHTML == currentDay && numberOftheMonth == currentMonth) {
                document.getElementById("grid").rows[j].cells[i].style.cssText = "color:#E4E4E5; background-color:#00B7C3";
            }
        }
    }
}



function MonthShow(year, counter) {
    switch (counter) {

        case 1:
            feelTableCells(year.January);
            break;
        case 2:
            feelTableCells(year.February);
            break;
        case 3:
            feelTableCells(year.March);
            break;
        case 4:
            feelTableCells(year.April);
            break;
        case 5:
            feelTableCells(year.May);
            break;
        case 6:
            feelTableCells(year.June);
            break;
        case 7:
            feelTableCells(year.July);
            break;
        case 8:
            feelTableCells(year.August);
            break;
        case 9:
            feelTableCells(year.September);
            break;
        case 10:
            feelTableCells(year.October);
            break;
        case 11:
            feelTableCells(year.November);
            break;
        case 12:
            feelTableCells(year.December);
            break;
    }

}







function nextButtonClick() {

    showingMonthNumber.plus();
    MonthShow(y2018, showingMonthNumber.number);
    formatTable(showingMonthNumber.number);


}

function previousButtonClick() {
    showingMonthNumber.minus();
    MonthShow(y2018, showingMonthNumber.number);
    formatTable(showingMonthNumber.number);



}

MonthShow(y2018, 11);
formatTable(showingMonthNumber.number);

var input = document.createElement("input");
input.style.cssText = "margin-left:550px";
body.appendChild(input);

input.onkeydown = function() {
    if (event.key == "/") {
        return;
    } else if (event.which == 8) {
        return;
    } else if (event.which < 48 || event.which > 57) { event.preventDefault() }

};



var findButton = document.createElement("button");
findButton.innerHTML = "найти день";
body.appendChild(findButton);
var p = document.createElement("p");
p.innerHTML = "введите дату в формате ДД/ММ";
p.style.cssText = "margin-left:560px;margin-top 50px";
body.appendChild(p);



findButton.onclick = function() { findButtonclick(); };

function findButtonclick() {
    let d = input.value[0] + input.value[1];
    let m = input.value[3] + input.value[4];
    showingMonthNumber.setNumber(m);
    MonthShow(y2018, Number(m));
    formatTable(m);
    lightFindingDay(Number(d));
}





function lightFindingDay(day) {
    for (j = 0; j <= 6; j++) {
        for (i = 0; i <= 6; i++) {
            if (document.getElementById("grid").rows[j].cells[i].innerHTML == day)
                document.getElementById("grid").rows[j].cells[i].style.cssText = " background-color:#5A5A5A;color:#E4E4E5;opacity:0.75";

        }
    }
}

// function catchErrors{
//     try{

//     }
// }