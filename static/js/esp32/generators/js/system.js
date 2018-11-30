'use strict';

goog.provide('Blockly.JavaScript.system');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.system_run_in_background = function() {
    var branch = Blockly.JavaScript.statementToCode(this, 'do');
    return 'control.inBackground(() => {\n' + branch + '})\n';
};
Blockly.JavaScript.system_reset= function() {
    return 'control.reset()\n';
}

Blockly.JavaScript.system_wait= function() {
    var data = Blockly.JavaScript.valueToCode(this, 'data', Blockly.JavaScript.ORDER_ATOMIC) || profile.default.serial;
    return 'control.waitMicros('  + data +  ')\n';
}

Blockly.JavaScript.system_raise_event= function() {
    var source = Blockly.JavaScript.valueToCode(this, 'system_event_bus_source', Blockly.JavaScript.ORDER_ATOMIC) || profile.default.serial;
    var value = Blockly.JavaScript.valueToCode(this, 'system_event_bus_value', Blockly.JavaScript.ORDER_ATOMIC) || profile.default.serial;
    return 'control.raiseEvent('  + source + ', ' + value +  ')\n';
}

Blockly.JavaScript.system_on_event = function() {
    var source = Blockly.JavaScript.valueToCode(this, 'system_event_bus_source', Blockly.JavaScript.ORDER_ATOMIC) || profile.default.serial;
    var value = Blockly.JavaScript.valueToCode(this, 'system_event_bus_value', Blockly.JavaScript.ORDER_ATOMIC) || profile.default.serial;
    var branch = Blockly.JavaScript.statementToCode(this, 'do');
    return 'control.onEvent('  + source + ', ' + value +  ', () => {\n' + branch + ')\n';
}

Blockly.JavaScript.system_timestamp = function() {
    return ['control.eventTimestamp()', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript.system_value = function() {
    return ['control.eventValue()', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript.system_event_bus_source = function() {
    return [this.getFieldValue('key'), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript.system_event_bus_value = function() {
    return [this.getFieldValue('key'), Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript.system_device_name = function() {
    return ['control.deviceName()', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript.system_device_serial_number = function() {
    return ['control.deviceSerialNumber()', Blockly.JavaScript.ORDER_ATOMIC];
}

//ok
Blockly.JavaScript.Panic_with_status_code = function () {
    var status_code = Blockly.JavaScript.valueToCode(this, 'STATUS_CODE', Blockly.JavaScript.ORDER_ATOMIC) || '1000'
    var code = 'panic(' + status_code + ')\n';
    return code;
};
//ok
Blockly.JavaScript.controls_millis = function () {
    Blockly.JavaScript.definitions_['import_time'] = 'import time';
    var dropdown_time = this.getFieldValue('Time');
    switch (dropdown_time) {
    case "ms":
       var code ='time.ticks_ms()';
       return [code, Blockly.JavaScript.ORDER_ATOMIC];
       break;
    case "us":
       var code ='time.ticks_us()';
       return [code, Blockly.JavaScript.ORDER_ATOMIC];
       break;
  }
};
//ok
Blockly.JavaScript.controls_end_program = function () {
    return 'while True:\n    pass\n';
};
//ok
Blockly.JavaScript.reset = function () {
    Blockly.JavaScript.definitions_['import_mixgo'] = 'import mixgo';
    return 'reset()\n';
};
Blockly.JavaScript.controls_uname = function () {
    Blockly.JavaScript.definitions_['import_os'] = 'import os';
    return 'os.uname()';
};
Blockly.JavaScript.controls_delay = function () {
    // Blockly.JavaScript.definitions_.import_time = "import time";
    Blockly.JavaScript.definitions_['import_time'] = 'import time';
    var delay_time = Blockly.JavaScript.valueToCode(this, 'DELAY_TIME', Blockly.JavaScript.ORDER_ATOMIC) || '1000'
    var dropdown_time = this.getFieldValue('Time');
    switch (dropdown_time) {
    case "s":
       var code = 'time.sleep(' + delay_time + ')\n';
       return code;
       break;
    case "ms":
       var code ='time.sleep_ms(' + delay_time + ')\n';
       return code;
       break;
    case "us":
       var code ='time.sleep_us(' + delay_time + ')\n';
       return code;
       break;
  }
};

Blockly.JavaScript.timer = function () {
   Blockly.JavaScript.definitions_['import_mixgo'] = 'import mixgo';
    var v = Blockly.JavaScript.valueToCode(this, "VAR", Blockly.JavaScript.ORDER_NONE) || "None";
    var period = Blockly.JavaScript.valueToCode(this, "period", Blockly.JavaScript.ORDER_NONE) || "0";
    var mode = Blockly.JavaScript.valueToCode(this, "mode", Blockly.JavaScript.ORDER_NONE) || "None";
    var callback=Blockly.JavaScript.valueToCode(this, "callback", Blockly.JavaScript.ORDER_NONE) || "None";
    // var callback = Blockly.JavaScript.valueToCode(this, "callback", Blockly.JavaScript.ORDER_NONE) || "None";
    var code = v + ".init(period = " + period + ", mode = Timer." + mode + ", callback = " + callback + ")\n";
    return code;
};

Blockly.JavaScript.system_timer = function () {
   Blockly.JavaScript.definitions_['import_machine'] = 'import machine';
    var v = Blockly.JavaScript.valueToCode(this, "VAR", Blockly.JavaScript.ORDER_NONE) || "None";
    var period = Blockly.JavaScript.valueToCode(this, "period", Blockly.JavaScript.ORDER_NONE) || "0";
    var mode = this.getFieldValue('mode');
    //var branch = Blockly.JavaScript.statementToCode(this, 'callback') || Blockly.JavaScript.PASS;
    var callback = Blockly.JavaScript.valueToCode(this, "callback", Blockly.JavaScript.ORDER_NONE) || "None";
    //var code = v + ".init(period = " + period + ", mode = machine.Timer." + mode + ", callback = " + v + "_callback_func)\n";
    //Blockly.JavaScript.setups_['timer_callback_func'] = 'def ' + v + '_callback_func(t):\n' + branch + '\n';
    var code = v + ".init(period = " + period + ", mode = machine.Timer." + mode + ", callback = " + callback +")\n";
    return code;
};


Blockly.JavaScript.system_ticks_diff = function () {
    Blockly.JavaScript.definitions_['import_time'] = 'import time';
    var end = Blockly.JavaScript.valueToCode(this, "END", Blockly.JavaScript.ORDER_NONE) || "0";
    var start = Blockly.JavaScript.valueToCode(this, "START", Blockly.JavaScript.ORDER_NONE) || "0";
    var code = "time.ticks_diff(" + end + ", " + start + ")";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.system_timer_init=function(){
    var v = Blockly.JavaScript.valueToCode(this, 'SUB', Blockly.JavaScript.ORDER_ATOMIC);
    Blockly.JavaScript.definitions_['import_machine'] = 'import machine';
    var code = v + ' = machine.Timer(-1)\n';
    return code;
};

Blockly.JavaScript.Timer_init=Blockly.JavaScript.system_timer_init;
Blockly.JavaScript.timer2=Blockly.JavaScript.system_timer;
Blockly.JavaScript.time_ticks_diff=Blockly.JavaScript.system_ticks_diff;
Blockly.JavaScript.base_delay=Blockly.JavaScript.controls_delay;
