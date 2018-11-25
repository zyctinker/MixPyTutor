/**
 * This file included esp32 Virtual Machine and check function for test the status of Virtual Machine
 * @author zyc
 * @date 2018-11-20
 */
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
    //check before add currentTime
    check(window.checkcode);
    this.currentTime += sleeptime;
  }
}
  /**
   * check the result accroding to time and given condition in editProject Page
   */
  /
function checker() {
  this.checkpointList = [];//Every time we call assert, make a new checkpoint and add it to checkpointList
  this.flag = true; // if any checkpoint failed, it will become false
  this.checkcode = ''; //checkcode from editProject Page's Blockly workspace
};
/*
 * get check code from editProject page
 */
checker.prototype.getCheckCode = function (checkcode) {
  this.checkcode = checkcode;
};
/*
 * assert whether status meets the check condition
 */
checker.prototype.assert = function (realValue, idealValue) {
  if(realValue === idealValue){
    this.checkpointList.push(true);
  }
  else{
    this.checkpointList.push(false);
    this.flag = false;
  }
};

let VMchecker = new checker();
