
// On the planet Chronos, the millennium of the colony's foundation is celebrated
// today is August 24, 1001, Tuesday.
// On the founding day, too, was Tuesday.

// Calendar of Cronos is similar to the Earth: 12 months for 30 days, in February of a leap year, 31 days.
// A year is a leap year if its number is a multiple of 5,
// however, from multiples of 100, leapfolds are only multiples of 500,
// for example, 700, 800 and 900 - non-leap years, 1000 - leap years.

// You need to write a function that finds the day of the week on Chronos for any given date.

let dateHronos = (data) => {
    const {
        day,
        month, 
        year,
        container_id
    } = data;
    
    this.day = parseInt(day);
    this.month = parseInt(month);
    this.year = parseInt(year);
    this.container_id = document.querySelector(container_id);
    this.days = ["Saturday", "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",];
    this.count = days.length - 1;
    this.activeDay = 0;

    // 360
    // 24.08.0001 - вторник
    this.august24 = () => {
        for(let i = 1; i <= this.year; i++){
            if(i%5 || i%100 === 0 && i%500 ) {
                switch (this.activeDay) {
                    case this.count:
                        this.activeDay = 2;
                        break;
                    case 5:
                        this.activeDay = 1;
                        break;      
                    case 4:
                        this.activeDay = 0;
                        break;      
                    default:
                        this.activeDay +=3;
                }
            } else {

                switch (this.activeDay) {
                    case this.count:
                        this.activeDay = 3;
                        break;
                    case 5:
                        this.activeDay = 2;
                        break;                    
                    case 4:
                        this.activeDay = 1;
                        break;                    
                    case 3:
                        this.activeDay = 0;
                        break;                    
                    default:
                        this.activeDay +=4;
                }
                console.log(this.activeDay )

            }
        }
    }

    this.dayOfHronos = () => {
        if(this.day < 24) {
            for(let i = 23; i >= this.day; i--){
                this.activeDay === 0 ? this.activeDay = this.count : this.activeDay--
            }
        }else {
            for(let i = 24; i < this.day; i++){
                this.activeDay === this.count ? this.activeDay = 0 : this.activeDay++
            }
        }
    }

    this.render = () => {
        let currentDay = this.days[this.activeDay];

        let h2 = document.createElement('h2');
        h2.innerHTML = `The current date: ${day}.${month}.${year} year`;

        let p = document.createElement('p');
        p.innerHTML = `Today is a great day on the planet Chronos - ${currentDay}!)`;

        this.container_id.appendChild(h2);
        this.container_id.appendChild(p);
    }

    this.august24();
    this.dayOfHronos();
    this.render();  
 }
    


dateHronos({
    day: "01", 
    month: "01", 
    year: "1001",
    container_id: '#container-message'
})