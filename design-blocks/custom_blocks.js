// custom_blocks.js

// Turn Off Lights
Blockly.Blocks['turn_off_lights'] = {
  init: function() {
    this.appendDummyInput().appendField("Turn Off Lights");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Turn off lights when not in use.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['turn_off_lights'] = function(block) {
  var code = 'console.log("Remember to turn off lights when not in use.");\n';
  code += 'let energy_tips = getEnergyTips();  // Assuming a getEnergyTips function in JS\n';
  code += 'if (energy_tips) {\n    console.log(energy_tips);\n}\n';
  return code;
};

// Motion Sensor
Blockly.Blocks['motion_sensor'] = {
  init: function() {
    this.appendDummyInput().appendField("Motion Sensor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("Learn about motion sensors for energy efficiency.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['motion_sensor'] = function(block) {
  var code = 'console.log("Benefits of motion sensors for energy efficiency:");\n';
  code += 'console.log("Motion sensors reduce energy waste by turning off lights when not needed.");\n';
  return code;
};

// Reduce Water Usage
Blockly.Blocks['reduce_water_usage'] = {
  init: function() {
    this.appendDummyInput().appendField("Reduce Water Usage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Reduce water consumption with practical tips.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['reduce_water_usage'] = function(block) {
  var code = 'console.log("Practical suggestions to reduce water consumption:");\n';
  code += 'let water_tips = getWaterSavingTips();  // Assuming a getWaterSavingTips function in JS\n';
  code += 'if (water_tips) {\n    console.log(water_tips);\n}\n';
  return code;
};

// Control thermostat
Blockly.Blocks['thermostat_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Thermostat Control");
    this.appendValueInput("temperature")
        .setCheck("Number")
        .appendField("Set temperature to");
    this.appendDummyInput()
        .appendField("Mode")
        .appendField(new Blockly.FieldDropdown([["Heating", "heat"], ["Cooling", "cool"], ["Off", "off"]]), "mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("Control your thermostat settings.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['thermostat_control'] = function(block) {
  var temperature = Blockly.JavaScript.valueToCode(block, 'temperature', Blockly.JavaScript.ORDER_ATOMIC);
  var mode = block.getFieldValue('mode');

  var code = 'setThermostat(' + temperature + ', "' + mode + '");  // Implement setThermostat function in JS\n';
  code += 'console.log("Thermostat set to " + ' + temperature + ' + " degrees in ' + mode + ' mode.");\n';
  return code;
};

// Control solar panel
Blockly.Blocks['solar_panel_efficiency'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Solar Panel Efficiency");
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("Set panel angle to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Adjust the solar panel angle for maximum efficiency.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['solar_panel_efficiency'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'setSolarPanelAngle(' + angle + ');  // Implement setSolarPanelAngle function in JS\n';
  code += 'console.log("Solar panel angle set to " + ' + angle + ' + " degrees for optimal energy generation.");\n';
  return code;
};


