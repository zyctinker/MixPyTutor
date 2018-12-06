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
let time = {
  currentTime : 0,
  getCurrentTime: function () {
    return this.currentTime;
  },
  sleep: function(sleeptime){
    //check before add currentTime
    check();
    this.currentTime += sleeptime;
  }
}
  /**
   * check the result accroding to time and given condition in editProject Page
   */
function Checker() {
  this.checkpointList = [];//Every time we call assert, make a new checkpoint and add it to checkpointList
  this.flag = true; // if any checkpoint failed, it will become false
  this.checkCode = ''; //checkcode from editProject Page's Blockly workspace
}
/*
 * get check code from editProject page
 */
Checker.prototype.getCheckCode = function (checkcode) {
  this.checkCode = checkcode;
};
/*
 * assert whether status meets the check condition
 */
Checker.prototype.assert = function (realValue, idealValue) {
  if(realValue === idealValue){
    this.checkpointList.push(true);
    return true;
  }
  else{
    this.checkpointList.push(false);
    this.flag = false;
    return false;
  }
};
/*
 * report check result after eval(code)
 */
Checker.prototype.report = function () {
  Vue.set('editor',result,this.flag?'正确':'错误');
}
let VMchecker = new Checker();
