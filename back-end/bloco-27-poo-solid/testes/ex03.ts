class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    if (this.validateDate(day, month, year)) {
      this._day = day;
      this._month = month;
      this._year = year;
    } else {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    }
  }

  public getMonthName() {
    enum Months {
      janeiro = 1,
      fevereiro,
      "março",
      abril,
      maio,
      junho,
      julho,
      agosto,
      setembro,
      outubro,
      novembro,
      dezembro
    }

    return Months[this._month]
  }

  public isLeapYear() {
    const year = this._year
    return (year % 400 == 0) || (year % 4==0 && year %100!= 0)
  }

  public compare(date: string) {
    const objDate = new Date(`${this._year}-${this._month}-${this._day}`)
    const paramDate = new Date(date);
    if (objDate.getTime() < paramDate.getTime()) return -1
    if (objDate.getTime() > paramDate.getTime()) return 1
    return 0
  }

  private validateDate(day: number, month: number, year: number) {
    const string = `${year}-${month}-${day}`;
    return new Date(string).getDate();
  }
}

const teste = new Data(20, 6, 2022);
console.log(teste.getMonthName())
console.log(teste.isLeapYear())
console.log(teste.compare("2000-03-08"))
