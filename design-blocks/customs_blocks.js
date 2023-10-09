// Turn Off Lights
Blockly.Blocks['turn_off_lights'] = {
  init: function () {
      this.appendDummyInput().appendField("Turn Off Lights");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Turn off lights when not in use.");
      this.setHelpUrl("");
  },
};

Blockly.R['turn_off_lights'] = function (block) {
  var code = 'cat("Remember to turn off lights when not in use.\\n")\n';
  code += 'energy_tips <- get_energy_tips()  # Assuming a get_energy_tips function in R\n';
  code += 'if (!is.null(energy_tips)) {\n    cat(energy_tips, "\\n")\n}\n';
  return code;
};

// Motion Sensor
Blockly.Blocks['motion_sensor'] = {
  init: function () {
      this.appendDummyInput().appendField("Motion Sensor");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("Learn about motion sensors for energy efficiency.");
      this.setHelpUrl("");
  },
};

Blockly.R['motion_sensor'] = function (block) {
  var code = 'cat("Benefits of motion sensors for energy efficiency:\\n")\n';
  code += 'cat("Motion sensors reduce energy waste by turning off lights when not needed.\\n")\n';
  return code;
};

// Reduce Water Usage
Blockly.Blocks['reduce_water_usage'] = {
  init: function () {
      this.appendDummyInput().appendField("Reduce Water Usage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Reduce water consumption with practical tips.");
      this.setHelpUrl("");
  },
};

Blockly.R['reduce_water_usage'] = function (block) {
  var code = 'cat("Practical suggestions to reduce water consumption:\\n")\n';
  code += 'water_tips <- get_water_saving_tips()  # Assuming a get_water_saving_tips function in R\n';
  code += 'if (!is.null(water_tips)) {\n    cat(water_tips, "\\n")\n}\n';
  return code;
};




