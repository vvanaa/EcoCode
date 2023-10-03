// Turn Off Lights
Blockly.Blocks['turn_off_lights'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("Turn Off Lights");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Turn off lights when not in use.");
      this.setHelpUrl("");
    },
  };
  
  Blockly.JavaScript['turn_off_lights'] = function (block) {
    // Generate code for the "Turn Off Lights" block.
    var code = 'Display a reminder message: "Remember to turn off lights when not in use.";\n';
    code += 'Check if there are energy conservation tips available for the designated area;\n';
    code += 'If available, display the tips;\n';
    code += 'Provide links to tutorials on energy-efficient lighting;';
    return code;
  };

// Motion Sensor
Blockly.Blocks['motion_sensor'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("Motion Sensor");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("Learn about motion sensors for energy efficiency.");
      this.setHelpUrl("");
    },
  };
  
  Blockly.JavaScript['motion_sensor'] = function (block) {
    // Generate code for the "Motion Sensor" block.
    var code = 'Display information about the benefits of motion sensors for energy efficiency;\n';
    code += 'Offer links to tutorials on how to install and configure motion sensors for lighting;';
    return code;
  };

  // Reduce Water Usage
  Blockly.Blocks['reduce_water_usage'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("Reduce Water Usage");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Reduce water consumption with practical tips.");
      this.setHelpUrl("");
    },
  };
  
  Blockly.JavaScript['reduce_water_usage'] = function (block) {
    // Generate code for the "Reduce Water Usage" block.
    var code = 'Provide practical suggestions for reducing water consumption;\n';
    code += 'Check if there are links to tutorials on water-saving techniques;\n';
    code += 'If available, display the links;';
    return code;
  };
