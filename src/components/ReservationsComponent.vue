<template>
    <article id="reservationArea">
        <h1 id="calendarTitle">Foglalás</h1>
        <section id="reservations">

            <div id="calendar">
                <div id="calendarHeader">
                    <h1>{{ getCurrentYear }} - {{ months[getCurrentMonth] }}</h1>
                    <div id="buttons">
                        <!-- This Sets back the currentmonth by 1 -->
                        <button @click="changeCalendar(0)">-</button>
                        <!-- This increases the currentmonth by 1 -->
                        <button @click="changeCalendar(1)">+</button>
                    </div>
                </div>
                <div id="days">
                    <div class="day"><h1>Hétfő</h1></div>
                    <div class="day"><h1>Kedd</h1></div>
                    <div class="day"><h1>Szerda</h1></div>
                    <div class="day"><h1>Csütörtök</h1></div>
                    <div class="day"><h1>Péntek</h1></div>
                    <div class="day"><h1>Szombat</h1></div>
                    <div class="day"><h1>Vasárnap</h1></div>
                    <Day 
                        v-for="day in reversedDays"
                        :key="day.id" 
                        :daynumber="getPreviousMonthLastDay - day + 1" 
                        :month="getPreviousDate.getMonth()" 
                        :year="getPreviousDate.getFullYear()"
                        :isPassed="didTheDayPass(day, 0)"
                        @daySelected="(e,year,month,day) => handleSelection(e,year,month,day)"
                        class="notThisMonth"
                    ></Day>
                    <Day 
                        v-for="day in getCurrentMonthLength" 
                        :key="day.id" 
                        :daynumber="day"
                        :month="this.getCurrentMonth" 
                        :year="this.getCurrentYear" 
                        :isPassed="didTheDayPass(day, 1)"
                        @daySelected="(e,year,month,day) => handleSelection(e,year,month,day)"
                        :class="{today: currentDate.getDate() == day && currentDate.getMonth() == getCurrentMonth}"
                    ></Day>
                    <Day 
                        v-for="day in days.slice(getCurrentMonthLastDay).length" 
                        :key="day.id" 
                        :daynumber="day"
                        :month="getNextDate.getMonth()"
                        :year="getNextDate.getFullYear()" 
                        :isPassed="didTheDayPass(day, 2)"
                        @daySelected="(e,year,month,day) => handleSelection(e,year,month,day)"
                        class="notThisMonth monthAfter"
                    ></Day>
                    <!-- The slice is needed due to the limitation that the i = 0. It slices the days array, and gives back its length. Thats how many days r needed to b generated. -->
                </div>
            </div>
        </section>
    </article>
</template>

<script>
import Day from '@/components/DayComponent.vue'

export default {
    components:{Day},
    data(){
        return {
            dateObject: new Date(), /*Date object*/
            currentDate: new Date(), /*The current Date.*/
            months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], /*The list of Months*/
            days: [1,2,3,4,5,6], /*List of days to generate the days after the current months lastday*/
            selectedDay: new Date("2000-01-01"),
            isADaySelected: false,
            selectedDayDom: null,
        }
    },
    computed: {
        getPreviousDate(){
            return new Date(this.getCurrentYear, this.getCurrentMonth, 0)
        },
        getCurrentYear(){
            // This gets the current year
            return this.dateObject.getFullYear()
        },
        getCurrentMonth(){
            // This gets the current year's current month
            return this.dateObject.getMonth()
        },
        getNextDate(){
            return new Date(this.getCurrentYear, this.getCurrentMonth + 2, 0)
        },
        getCurrentMonthLength(){
            /*This gets the date of the current month's last day. (29, 30, 31).
            The new Date() part creates the date string(currentYear, The current month (+1 needed cuz 
            if the day parameter is 0 it means it's gonna look at the prev. month's last day) and the last day of the month (0))
            The .getDate() at the end gets the number(29, 30, 31) from the long date string*/
            return new Date(this.getCurrentYear, this.getCurrentMonth + 1, 0).getDate();
        },
        getCurrentMonthFirstDay(){
            /*This gets the number of days needed to fill the space before this month's first day.).
            The new Date() part creates the date string (currentYear, The current month (no +1 needed bc the day parameter is not 0, so it will actually look at this month) and the first day (1)))
            The .getDay() at the end gets the day's index from the long date string*/
            return new Date(this.getCurrentYear, this.getCurrentMonth, 1).getDay();
        },
        reversedDays() {
            //This function is needed to reverse loop the days needed to fill the space before this month's first day. Without this the days would be decreasing (30,29,28)
            // Initialize an array to hold reversed days
            let reversedDays = [];
            // Loop through the days in reverse order and push them to the reversedDays array
            for (let day = this.getCurrentMonthFirstDay; day > 0; day--) {
                reversedDays.push(day);
            }
            // Return the reversedDays array
            return reversedDays;
        },
        getPreviousMonthLastDay(){
            /*This gets the date of the previous month's last day. (31, 30, 29).
            The new Date() part creates the date string(currentYear, The current month (no +1 needed bc we want the day parameter to be 0 (meaning its going to look at the previous month))
            and the last day of the month (0))
            The .getDate() at the end gets the number(31, 30, 29) from the long date string*/
            return new Date(this.getCurrentYear, this.getCurrentMonth, 0).getDate();
        },
        getCurrentMonthLastDay(){
            /*This gets the index of the last day. This helps to fill the days after this months last day.).
            The new Date() part creates the date string (currentYear, The current month (no +1 needed bc the day parameter is not 0, so it will actually look at this month)
            and the last day (This month's length.)))
            The .getDay() at the end gets the day's index from the long date string*/
            return new Date(this.getCurrentYear, this.getCurrentMonth, this.getCurrentMonthLength).getDay();
        },
    },
    methods: {
        didTheDayPass(day, instance){
            switch (instance) {
                case 0:
                    //this.dateObject is the calendars actual value(meaining current value)
                    //If the actual year is less then the current OR
                    return this.dateObject.getFullYear() < this.currentDate.getFullYear() 
                    || 
                    // The actual month is less then the current one AND its the same year (it's important to not block the previous month days(28-30) in the future) OR
                    this.dateObject.getMonth() <= this.currentDate.getMonth() && this.dateObject.getFullYear() == this.currentDate.getFullYear()
                    ||
                    // The day is less then the current one AND its the same month & year OR
                    (this.getPreviousMonthLastDay - day + 1) < this.currentDate.getDate() && this.dateObject.getMonth() == this.currentDate.getMonth() + 1 
                    && this.dateObject.getFullYear() == this.currentDate.getFullYear()
                    ||
                    (this.getPreviousMonthLastDay - day + 1) < this.currentDate.getDate() && this.dateObject.getFullYear() == this.currentDate.getFullYear() + 1
                    // The day is less then the current one AND its the last year
                case 1:
                    //if the day is less then the current day AND its the same month and year OR
                    return day < this.currentDate.getDate() && this.dateObject.getMonth() == this.currentDate.getMonth() && this.dateObject.getFullYear() == this.currentDate.getFullYear()
                    || 
                    //If the actual month is less then the current one AND its the same year (it's important to not block the days in the future) OR
                    this.dateObject.getMonth() < this.currentDate.getMonth() && this.dateObject.getFullYear() == this.currentDate.getFullYear() 
                    || 
                    this.dateObject.getFullYear() < this.currentDate.getFullYear();
                    // Its the year before.
                case 2: 
                    //If the actual year is less then the current OR
                    return this.dateObject.getFullYear() < this.currentDate.getFullYear() 
                    || 
                    //If the actual month is less then the previous one AND its the same year (it's important to not block the days in the future) OR
                    this.dateObject.getMonth() < this.currentDate.getMonth() - 1 && this.dateObject.getFullYear() == this.currentDate.getFullYear()
                    ||
                    //if the day is less then the current day AND its the current month and year
                    day < this.currentDate.getDate() && this.dateObject.getMonth() == this.currentDate.getMonth() - 1 && this.dateObject.getFullYear() == this.currentDate.getFullYear()
                default:
                    return true
            }

        },
        handleSelection(e,year,month,day){
            if (!this.isADaySelected || this.selectedDay.getFullYear() == year && this.selectedDay.getMonth() == month && this.selectedDay.getDate() == day) {
                this.selectedDayDom = e.srcElement.closest(".day").children[0]
                this.selectedDayDom.classList.toggle("selectedDay")
                this.isADaySelected = !this.isADaySelected
                this.selectedDay = new Date(year, month ,day)
                console.log(this.selectedDay)
            }
        },
        changeCalendar(instance){
            this.selectedDay = new Date("2000-01-01");
            this.isADaySelected = false;
            if (this.selectedDayDom != null) {
                this.selectedDayDom.classList.remove("selectedDay")
            }
            this.selectedDayDom = null
            switch (instance) {
                case 0:
                    this.dateObject = this.getPreviousDate
                    break;
                case 1:
                    this.dateObject = this.getNextDate
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style>
    #reservationArea{
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        color: var(--whiteColor);
    }

    #calendar{
        outline: 2px solid var(--whiteColor);
        background-color: var(--blackColor);
        width: 100vw;
        height: 100vh;
        max-width: 600px;
        max-height: 600px;
        border-radius: 15px;
    }

    #calendarHeader{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 15%;
    }

    #calendarHeader h1{
        width: 80%;
        text-align: center;
        font-size: xx-large;
        margin: 0 auto;
    }

    /*----------  Style Of The Days  ----------*/

    #calendar #days{
        display: grid;
        grid-template-columns: repeat(7, calc(100% / 7));
        height: 85%
    }

    .day{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .today{
        outline: 2px solid var(--purpleColor)
    }
    
    .notThisMonth{
        background-image: linear-gradient(#151515, var(--blackColor));
        color: rgba(128, 128, 128, 0.5);
    }

    .monthAfter{
        background-image: linear-gradient(var(--blackColor), #151515);
    }

    #days .notThisMonth .passedDay{
        outline: 2px solid rgba(128, 128, 128, 0.5);
        color: rgba(128, 128, 128, 0.5);
    }

    .day h1{
        margin: 0;
        font-weight: normal;
    }
    
    .day .circle{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        padding: 5px;
    }

    .day .circle:hover {
        background-color: var(--purpleColor);
        cursor: pointer;
    }

    .day .passedDay{
        outline: 2px solid black;
        color: black;
    }

    .day .passedDay:hover{
        background-color: transparent ;
        cursor: not-allowed ;
    }

    .day .selectedDay{
        outline: 2px solid var(--yellowColor)
    }

    .day .selectedDay:hover{
        background-color: var(--yellowColor);
    }

</style>