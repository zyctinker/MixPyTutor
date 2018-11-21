'use strict';

goog.provide('Blockly.JavaScript.actuator');
goog.require('Blockly.JavaScript');


Blockly.JavaScript.esp32_music_pitch = function(block) {
  Blockly.JavaScript.definitions_['import_music'] = 'import music';
  var number_pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC);
  var pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'music.music.pitch(' + pin + ', ' + number_pitch + ')\n';
  return code;
};

Blockly.JavaScript.esp32_music_pitch_with_time = function(block) {
  Blockly.JavaScript.definitions_['import_music'] = 'import music';
  var number_pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC);
  var number_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'music.music.pitch(' + pin + ', '+ number_pitch + ', ' + number_time + ')\n';
  return code;
};

Blockly.JavaScript.esp32_music_stop = function(block) {
  Blockly.JavaScript.definitions_['import_music'] = 'import music';
  var pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'music.music.stop('+pin+')\n';
  return code;
};

Blockly.JavaScript.esp32_music_set_tempo=function(){
    Blockly.JavaScript.definitions_['import_music'] = 'import music';
    var bpm = Blockly.JavaScript.valueToCode(this, 'BPM', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var ticks = Blockly.JavaScript.valueToCode(this, 'TICKS', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var code = "music.music.set_tempo("+ ticks +", "+ bpm +")\n";
    return code;
};

Blockly.JavaScript.esp32_music_get_tempo=function(){
    Blockly.JavaScript.definitions_['import_music'] = 'import music';
    var code =  "music.music.get_tempo()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.esp32_music_play_list=function(){
    Blockly.JavaScript.definitions_['import_music'] = 'import music';
    var lst = Blockly.JavaScript.valueToCode(this, 'LIST', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var code = "music.music.play(music."+ lst +", "+ pin +")\n";
    return code;
};

Blockly.JavaScript.esp32_mixgo_music_play_list_show=function(){
    Blockly.JavaScript.definitions_['import_music'] = 'import music';
    Blockly.JavaScript.definitions_['import_matrix'] = 'import matrix';
    var lst = Blockly.JavaScript.valueToCode(this, 'LIST', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var pin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var display = Blockly.JavaScript.valueToCode(this, 'DISPLAY', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var code = "music.music.play_show(music."+ lst +", "+ pin +", "+ display +")\n";
    return code;
};

Blockly.JavaScript.esp32_music_reset=function(){
    Blockly.JavaScript.definitions_['import_music'] = 'import music';
    return "music.music.reset()\n";
};

Blockly.JavaScript.servo_move = function() {
  Blockly.JavaScript.definitions_['import_servo'] = 'import servo';
  Blockly.JavaScript.definitions_['import_machine'] = 'import machine';
  var dropdown_pin = Blockly.JavaScript.valueToCode(this, 'PIN',Blockly.JavaScript.ORDER_ATOMIC);
  var value_degree = Blockly.JavaScript.valueToCode(this, 'DEGREE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'servo.servo_write_angle('+dropdown_pin+','+value_degree+')\n';
  return code;
};

Blockly.JavaScript.number = function () {
    var code = this.getFieldValue('op');
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.ledswitch = function () {
    var code = this.getFieldValue('flag');
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.actuator_led_bright= function() {
    let op = Blockly.JavaScript.valueToCode(this,'led', Blockly.JavaScript.ORDER_ATOMIC);
    let bright = Blockly.JavaScript.valueToCode(this,'bright', Blockly.JavaScript.ORDER_ATOMIC);
    // var bright = this.getFieldValue('bright');
    let code = "mixgo.led.setonoff("+op+","+bright+")\n";
    return code;
};

Blockly.JavaScript.actuator_get_led_bright= function() {
    var op = Blockly.JavaScript.valueToCode(this,'led', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "mixgo.led.getonoff("+op+")";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};

Blockly.JavaScript.actuator_led_brightness= function() {
    Blockly.JavaScript.definitions_['import_mixgo'] = 'import mixgo';
    var op = Blockly.JavaScript.valueToCode(this,'led', Blockly.JavaScript.ORDER_ATOMIC);
    var flag = Blockly.JavaScript.valueToCode(this,'bright', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mixgo.led.setbrightness('+op+','+flag+')\n';
    return code;
};


Blockly.JavaScript.actuator_neopixel_init=function(){
    var v = Blockly.JavaScript.valueToCode(this, 'SUB', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_rgbpin = Blockly.JavaScript.valueToCode(this, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var value_ledcount = Blockly.JavaScript.valueToCode(this, 'LEDCOUNT', Blockly.JavaScript.ORDER_ATOMIC);
   Blockly.JavaScript.definitions_['import_machine'] = 'import machine';
    Blockly.JavaScript.definitions_['import_neopixel'] = 'import neopixel';
    var code = v + ' = neopixel.NeoPixel(machine.Pin('+dropdown_rgbpin+'), '+value_ledcount+', timing = True)\n';
    return code;
};

Blockly.JavaScript.actuator_neopixel_write=function(){
 Blockly.JavaScript.definitions_['import_machine'] = 'import machine';
  Blockly.JavaScript.definitions_['import_neopixel'] = 'import neopixel';
  var v = Blockly.JavaScript.valueToCode(this, 'SUB', Blockly.JavaScript.ORDER_ATOMIC);
  var code= v + '.write()\n';
  return code;
};
Blockly.JavaScript.actuator_neopixel_rgb=function(){
  Blockly.JavaScript.definitions_['import_machine'] = 'import machine';
  Blockly.JavaScript.definitions_['import_neopixel'] = 'import neopixel';
  var v = Blockly.JavaScript.valueToCode(this, 'SUB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_led = Blockly.JavaScript.valueToCode(this, '_LED_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rvalue = Blockly.JavaScript.valueToCode(this, 'RVALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_gvalue = Blockly.JavaScript.valueToCode(this, 'GVALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bvalue = Blockly.JavaScript.valueToCode(this, 'BVALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code= v + '['+value_led+'] = ('+value_rvalue+', '+value_gvalue+', '+value_bvalue+')\n';
  return code;
};


Blockly.Blocks.led_light=Blockly.Blocks.actuator_led_bright;
Blockly.Blocks.get_led_bright=Blockly.Blocks.actuator_get_led_bright;
Blockly.Blocks.led_brightness=Blockly.Blocks.actuator_led_brightness;
