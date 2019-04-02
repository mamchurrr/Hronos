// На планете Хронос празднуется тысячелетие основания колонии, 
// сегодня 24 августа 1001 года, вторник. 
// В день основания тоже был вторник.

// Календарь Хроноса похож на земной: 12 месяцев по 30 дней, в феврале високосного года 31 день. 
// Год является високосным, если его номер кратен 5, 
// однако из кратных 100 високосными являются лишь кратные 500, 
// например, 700, 800 и 900 — невисокосные года, 1000 — високосный.

// Необходимо написать функцию, которая находит день недели на Хроносе для любой заданной даты.

let dateHronos = (data) => {
    const {
        day,
        month, 
        year,
    } = data;
    
    this.day = +day;
    this.month = +month;
    this.year = +year;
    this.days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    this.count = days.length - 1;
    this.activeDay = 0;

    // 360
    // 24.08.0001 - вторник
    this.august24 = () => {
        for(let i = 1; i <= this.year; i++){
            if(i%5 || i%100 === 0 && i%500 ) {
                this.activeDay === this.count ? this.activeDay = 0 : this.activeDay++;
            } else {
                this.activeDay === this.count 
                    ? this.activeDay = 0 
                        : this.activeDay === 5
                            ? this.activeDay = 1
                                : this.activeDay +=2;
            }
        }
    }
    this.dayOfHronos = () => {
        if(this.day < 24) {
            for(let i = 23; i >= this.day; i--){
                if(this.activeDay === 0) {
                    this.activeDay = this.count;
                } else {
                    this.activeDay--;
                }
            }
        }else {
            for(let i = 24; i < this.day; i++){
                if(this.activeDay === this.count) {
                    this.activeDay = 0;
                }else {
                    this.activeDay++;
                }
            }
        }
    }
    this.august24();
    this.dayOfHronos();
    
    console.log(`На Хроносе сейчас замечетельный день - ${this.days[this.activeDay]}!)`);
    alert(`На Хроносе сейчас замечетельный день - ${this.days[this.activeDay]}!)`)
 }
    


dateHronos({
    day: 25, 
    month: 08, 
    year: 1004,
})