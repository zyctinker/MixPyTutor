let mixgo = new Object();
mixgo.led = {
  led1: 0,
  led2: 0,
  setonoff: function(op,bright) {
    console.log(this);
    this['led'+ op] = bright;
  },
  getonoff: function(op) {
    return this['led'+ op];
  }
}
time = {
  currentTime : 0,
  getcurrentTime: function () {
    return this.currentTime;
  },
  sleep: function(sleeptime){
    this.currentTime += sleeptime;
  }
}
