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

// Calculate Carbon Footprint
Blockly.Blocks['calculate_carbon_footprint'] = {
  init: function() {
    this.appendDummyInput().appendField("Calculate Carbon Footprint");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Calculate your carbon footprint here and learn its impact on the environment.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['calculate_carbon_footprint'] = function(block) {
  var code = 'console.log("Awareness of carbon footprint and ways to reduce it:");\n';
  code += 'let footprint_tips = getCarbonFootprintTips();  // Assuming a getCarbonFootprintTips function in JS\n';
  code += 'if (footprint_tips) {\n    console.log(footprint_tips);\n}\n';
  return code;
};

// Recycle
Blockly.Blocks['recycle'] = {
  init: function() {
    this.appendDummyInput().appendField("Recycle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Learn about the importance of recycling with guides and tips.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['recycle'] = function(block) {
  var code = 'console.log("Information about recycling options and how to recycle:");\n';
  code += 'let recycle_tips = getRecyclingTips();  // Assuming a getRecyclingTips function in JS\n';
  code += 'if (recycle_tips) {\n    console.log(recycle_tips);\n}\n';
  return code;
};

// Optimize Transportation
Blockly.Blocks['optimize_transportation'] = {
  init: function() {
    this.appendDummyInput().appendField("Optimize Transportation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Find out about multiple methods of sustainable transportation.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['optimize_transportation'] = function(block) {
  var code = 'console.log("Suggestions for eco-friendly transportation options and routes:");\n';
  code += 'let transportation_tips = getSustainableTransportationTips();  // Assuming a getSustainableTransportationTips function in JS\n';
  code += 'if (transportation_tips) {\n    console.log(transportation_tips);\n}\n';
  return code;
};

// Solar Panel Control
Blockly.Blocks['solar_panel_control'] = {
  init: function() {
    this.appendDummyInput().appendField("Solar Panel Control");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Know about solar panel operation and maintenance.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['solar_panel_control'] = function(block) {
  var code = 'console.log("Information on optimizing solar panel use, including cleaning, maintenance, and energy storage:");\n';
  code += 'let solar_tips = getSolarPanelTips();  // Assuming a getSolarPanelTips function in JS\n';
  code += 'if (solar_tips) {\n    console.log(solar_tips);\n}\n';
  return code;
};

// Waste Reduction
Blockly.Blocks['waste_reduction'] = {
  init: function() {
    this.appendDummyInput().appendField("Waste Reduction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Learn tips for reducing waste in daily life.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['waste_reduction'] = function(block) {
  var code = 'console.log("Tips for reducing waste in daily life:");\n';
  code += 'let waste_tips = getWasteReductionTips();  // Assuming a getWasteReductionTips function in JS\n';
  code += 'if (waste_tips) {\n    console.log(waste_tips);\n}\n';
  return code;
};
