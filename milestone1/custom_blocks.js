// custom_blocks.js

// Turn Off Lights
Blockly.Blocks['turn_off_lights'] = {
  init: function() {
    this.appendDummyInput().appendField("Turn Off Lights");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Turn off lights when not in use.");
    this.setHelpUrl("https://www.thisgreenlifestyle.com/all-articles/the-benefits-of-turning-your-lights-off");
  }
};

Blockly.JavaScript['turn_off_lights'] = function(block) {
  var code = 'console.log("Remember to turn off lights when not in use.");\n';
  code += 'let energy_tips = getEnergyTips();  // Assuming a getEnergyTips function in JS\n';
  code += 'alert(energy_tips);'
  return code;
};

function getEnergyTips() {
  var tips = [
    " Consider using LED bulbs\n Turn off lights in empty rooms\n Use natural light during the day"
  ];
  return tips;
};

// maybe implement a wait function to remind users to turn off their lights -> could become a notification system in the future

// Motion Sensor
Blockly.Blocks['motion_sensor'] = {
  init: function() {
    this.appendDummyInput().appendField("Motion Sensor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip("Learn about motion sensors for energy efficiency.");
    this.setHelpUrl("https://theecoguide.org/benefits-using-motion-sensor-light-switches");
  }
};

Blockly.JavaScript['motion_sensor'] = function(block) {
  var code = 'console.log("Benefits of motion sensors for energy efficiency:");\n';
  code += 'console.log("Motion sensors reduce energy waste by turning off lights when not needed.");\n';
  code += 'alert("Motion sensors reduce energy waste by turning off lights when not needed.");'
  return code;
};

// Reduce Water Usage
Blockly.Blocks['reduce_water_usage'] = {
  init: function() {
    this.appendDummyInput().appendField("Reduce Water Usage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("Reduce water consumption with practical tips.");
    this.setHelpUrl("https://www.epa.gov/watersense/start-saving#save-indoors");
  }
};

Blockly.JavaScript['reduce_water_usage'] = function(block) {
  var code = 'console.log("Practical suggestions to reduce water consumption:");\n';
  code += 'let water_tips = getWaterSavingTips();  // Assuming a getWaterSavingTips function in JS\n';
  code += 'alert(water_tips)';
  return code;
};

function getWaterSavingTips() {
  var tips = [
    " Take showers, not baths\n Use water-smart flora for a beautiful and efficient landscape\n Check faucets and pipes for leaks"
  ];
  return tips;
};

// Calculate Carbon Footprint
Blockly.Blocks['calculate_carbon_footprint'] = {
  init: function() {
    this.appendDummyInput().appendField("Calculate Carbon Footprint");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("Calculate your carbon footprint here and learn its impact on the environment.");
    this.setHelpUrl("https://www.footprintcalculator.org/home/en"); // calculator website
    this.setTooltip("Learn about actions to reduce carbon footprint.");
    this.setHelpUrl("https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/");
  }
};

Blockly.JavaScript['calculate_carbon_footprint'] = function(block) {
  var code = 'console.log("Awareness of carbon footprint and ways to reduce it:");\n';
  code += 'let footprint_tips = getCarbonFootprintTips();  // Assuming a getCarbonFootprintTips function in JS\n';
  code += 'alert(footprint_tips)';
  return code;
};

function getCarbonFootprintTips() {
  var tips = [
    " Choose organic and/or local food\n Buy vintage or recycled clothes from stores\n Use other transportation instead of driving"
  ];
  return tips;
};

// Recycle
Blockly.Blocks['how_to_recycle'] = {
  init: function() {
    this.appendDummyInput().appendField("How to Recycle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip("Locate your nearest recycling center.");
    this.setHelpUrl("https://recyclenation.com/find/");
    this.setTooltip("Learn about the importance of recycling with guides and tips.");
    this.setHelpUrl("https://www.earthday.org/7-tips-to-recycle-better/");
  }
};

Blockly.JavaScript['how_to_recycle'] = function(block) {
  var code = 'console.log("Information about recycling options and how to recycle:");\n';
  code += 'let recycle_tips = getRecyclingTips();  // Assuming a getRecyclingTips function in JS\n';
  code += 'alert(recycle_tips)';
  return code;
};

function getRecyclingTips() {
  var tips = [
    " Empty, clean, and dry recyclables\n Keep food and liquid out of recycling\n Keep recyclables loos, not in a bag"
  ];
  return tips;
};

// Optimize Transportation
Blockly.Blocks['optimize_transportation'] = {
  init: function() {
    this.appendDummyInput().appendField("Optimize Transportation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Find out about multiple methods of sustainable transportation.");
    this.setHelpUrl("https://www.modeshift.com/what-is-the-most-sustainable-type-of-transportation/#:~:text=Besides%20walking%20and%20biking%2C%20traveling,compared%20to%20cars%20and%20airplanes.");
    this.setTooltip("Locate your closest public transportation stations.");
    this.setHelpUrl("https://moovitapp.com/los_angeles_ca-302/poi/en");
  }
};

Blockly.JavaScript['optimize_transportation'] = function(block) {
  var code = 'console.log("Suggestions for eco-friendly transportation options and routes:");\n';
  code += 'let transportation_tips = getSustainableTransportationTips();  // Assuming a getSustainableTransportationTips function in JS\n';
  code += 'alert(transportation_tips)';
  return code;
};

function getSustainableTransportationTips() {
  var tips = [
    " Walk or bike to work\n Consider carpooling with peers or coworkers\n Use public transportation"
  ];
  return tips;
};

// Solar Panel Control
Blockly.Blocks['solar_panel_control'] = {
  init: function() {
    this.appendDummyInput().appendField("Solar Panel Control");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip("Know about solar panel operation and maintenance.");
    this.setHelpUrl("https://www.cnet.com/home/energy-and-utilities/solar-cheat-sheet-your-complete-guide-to-getting-solar-panels-at-home/");
  }
};

Blockly.JavaScript['solar_panel_control'] = function(block) {
  var code = 'console.log("Information on optimizing solar panel use, including cleaning, maintenance, and energy storage:");\n';
  code += 'let solar_tips = getSolarPanelTips();  // Assuming a getSolarPanelTips function in JS\n';
  code += 'alert(solar_tips)';
  return code;
};

function getSolarPanelTips() {
  var tips = [
    " Clean your solar panels\n Watch your usage via an app\n Take advantage when the sun shines"
  ];
  return tips;
};

// Waste Reduction
Blockly.Blocks['waste_reduction'] = {
  init: function() {
    this.appendDummyInput().appendField("Waste Reduction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Learn tips for reducing waste in daily life.");
    this.setHelpUrl("https://www.epa.gov/recycle/reducing-waste-what-you-can-do");
  }
};

Blockly.JavaScript['waste_reduction'] = function(block) {
  var code = 'console.log("Tips for reducing waste in daily life:");\n';
  code += 'let waste_tips = getWasteReductionTips();  // Assuming a getWasteReductionTips function in JS\n';
  code += 'alert(waste_tips)';
  return code;
};

function getWasteReductionTips() {
  var tips = [
    " Use reusable bottles and cups for to-go beverages\n Compost food scraps whenever you can\n Buy second-hand when you can"
  ];
  return tips;
};
