class Clock {
  constructor() {
    // 1. Create a Date object.
    this.today = new Date(); 
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.today.getHours() % 12;   
    this.minutes = this.today.getMinutes(); 
    this.seconds = this.today.getSeconds();
    // 3. Call printTime.
    this.printTime(); 
    // 4. Schedule the tick at 1 second intervals.
    const boundTick = this._tick.bind(this)
    setInterval(this._tick.bind(this), 1000); // this._tick() returning undefined bc we are getting the return value of ._tick which is essentially undefined.  function() = 
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let format = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    console.log(format);
  }

  _tick() {
    this.seconds++;
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (this.seconds === 60){
      this.minutes++; 
      this.seconds = 0;
    } else if (this.minutes === 60) {
      this.minutes = 0; 
      this.hours++;
    } 
    this.printTime() 
  }
}

const clock = new Clock();


// const readline
// createInterface