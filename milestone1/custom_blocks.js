// custom_blocks.js
// Turn Off Lights
Blockly.Blocks['turn_off_lights'] = {
  init: function() {
    this.appendDummyInput().appendField("Turn Off Lights");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
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
    this.setColour(180);
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
    this.setColour(220);
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
    this.setColour(120);
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


// Calculate Electricity Cost
Blockly.Blocks['calculate_electricity_cost'] = {
  init: function() {
    this.appendDummyInput().appendField("Calculate Electricity Cost");
    this.appendValueInput("kwh_usage")
        .setCheck("Number")
        .appendField("Electricity Usage (kWh)");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Calculates electricity cost based on kWh usage.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['calculate_electricity_cost'] = function(block) {
  var kwh_usage = Blockly.JavaScript.valueToCode(block, 'kwh_usage', Blockly.JavaScript.ORDER_ATOMIC);
  
  // Define the cost per kWh (this value should be updated to reflect the current cost in Orange County)
  var COST_PER_KWH = 0.20; // This is a hypothetical value; you should input the actual cost per kWh
  
  var code = kwh_usage + ' * ' + COST_PER_KWH;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Calculate Vehicle Expenses
Blockly.Blocks['gasoline_expenses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Calculate expenses for gasoline")
        .appendField(new Blockly.FieldDropdown([
            ["Regular - $5.589", "5.589"], 
            ["Mid-Grade - $5.830", "5.830"], 
            ["Premium - $5.976", "5.976"], 
            ["Diesel - $6.321", "6.321"]
         ]), "GASOLINE_TYPE");
    this.appendValueInput("MILES")
        .setCheck("Number")
        .appendField("Miles driven per month");
    this.appendDummyInput()
        .appendField("Fuel Efficiency (miles/gallon)")
        .appendField(new Blockly.FieldNumber(25), "FUEL_EFFICIENCY"); // Assuming a default of 25 mpg
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(250);
    this.setTooltip("Calculate monthly gasoline expenses based on miles driven and fuel efficiency.");
    this.setHelpUrl("");
  }
};


Blockly.JavaScript['gasoline_expenses'] = function(block) {
  var gasolinePrice = block.getFieldValue('GASOLINE_TYPE'); // This is the price per gallon based on the selection
  var milesPerMonth = Blockly.JavaScript.valueToCode(block, 'MILES', Blockly.JavaScript.ORDER_ATOMIC);
  var fuelEfficiency = block.getFieldValue('FUEL_EFFICIENCY');

  // Calculation: (Miles driven per month / fuel efficiency) * price per gallon
  var code = `((${milesPerMonth} / ${fuelEfficiency}) * ${gasolinePrice})`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['calculate_simplified_carbon_footprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Calculate Carbon Footprint");
    this.appendValueInput("electricity_usage")
        .setCheck("Number")
        .appendField("Monthly Electricity Usage (kWh)");
    this.appendValueInput("vehicle_mileage")
        .setCheck("Number")
        .appendField("Monthly Vehicle Mileage (miles)");
    this.appendDummyInput()
        .appendField("Diet")
        .appendField(new Blockly.FieldDropdown([
          ["Meat Lover", "HIGH"], 
          ["Vegetarian", "MEDIUM"], 
          ["Vegan", "LOW"]
        ]), "diet");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Enter details to calculate a simplified carbon footprint score.");
    this.setHelpUrl("https://www.footprintcalculator.org/"); // the actual calculator for reference
  }
};

Blockly.JavaScript['calculate_simplified_carbon_footprint'] = function(block) {
  var electricity_usage = Blockly.JavaScript.valueToCode(block, 'electricity_usage', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var vehicle_mileage = Blockly.JavaScript.valueToCode(block, 'vehicle_mileage', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var diet = block.getFieldValue('diet');
  
  // Constants representing average emissions per unit. These might need to be updated based on the most recent data or regional specifics.
  const ELECTRICITY_EMISSIONS_FACTOR = 0.9; // kg CO2e per kWh
  const GASOLINE_EMISSIONS_FACTOR = 2.31; // kg CO2e per gallon of gasoline (approximate)
  
  // Improved approach for diet-related carbon footprint, values per month
  const DIET_EMISSIONS = {
    'HIGH': 600, // kg CO2e
    'MEDIUM': 400, // kg CO2e
    'LOW': 250 // kg CO2e
  };

  // Convert electricity usage to carbon footprint
  var electricityFootprint = electricity_usage * ELECTRICITY_EMISSIONS_FACTOR;

  // Calculate the vehicle footprint assuming a standard fuel economy
  var vehicleFootprint = vehicle_mileage * GASOLINE_EMISSIONS_FACTOR; // This assumes each mile driven consumes 1/GASOLINE_EMISSIONS_FACTOR gallons of gasoline
  
  // Get diet footprint from our updated table
  var dietFootprint = DIET_EMISSIONS[diet];

  // Total carbon footprint
  var totalFootprint = electricityFootprint + vehicleFootprint + dietFootprint;
  
  // Determine the classification based on the total footprint
  var classification;
  if (totalFootprint <= 400) {
    classification = 'Very Low Carbon Footprint';
  } else if (totalFootprint <= 1000) {
    classification = 'Low Carbon Footprint';
  } else if (totalFootprint <= 2000) {
    classification = 'Moderate Carbon Footprint';
  } else if (totalFootprint <= 3000) {
    classification = 'High Carbon Footprint';
  } else {
    classification = 'Very High Carbon Footprint';
  }

  // Generate the code to create an alert with the footprint and its classification
  var code = 'alert("Simplified carbon footprint score: ' + totalFootprint + 
             '\\nClassification: ' + classification + '");\n';
  return code;
};



// Optimize Transportation
Blockly.Blocks['optimize_transportation'] = {
  init: function() {
    this.appendDummyInput().appendField("Optimize Transportation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
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
    this.setColour(95);
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
    this.setColour(90);
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

document.addEventListener("DOMContentLoaded", function () {
  // Existing setup code...

  // Function to control the visibility of the sun based on the switch
  function toggleSun() {
      const sun = document.querySelector('.sun');
      if (sun) {
          sun.style.display = document.getElementById('sunSwitch').checked ? 'block' : 'none';
      }
  }

  // Set up the event listener for the toggle switch
  const sunSwitch = document.getElementById('sunSwitch');
  if (sunSwitch) {
      sunSwitch.addEventListener('change', toggleSun);
  }

  // Initialize the state
  toggleSun();
});
