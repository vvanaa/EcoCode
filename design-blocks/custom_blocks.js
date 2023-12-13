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

Blockly.Blocks['random_environment_fact'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Random Environment Fact");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Displays a random fact or tip about helping the environment.");
    this.setHelpUrl(""); // set this to a URL with more information if available
  }
};

Blockly.JavaScript['random_environment_fact'] = function(block) {
  var code = 'displayRandomEnvironmentFact();\n';
  return code;
};

function displayRandomEnvironmentFact() {
  const facts = [
    // facts / tips go here
  ];
  
  // Randomly select a fact
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  
  // display the fact - this would be implementation-specific, e.g., logging to console,
  // showing on a webpage, or in an application alert.
  console.log(randomFact);
}