// custom_blocks.js


// Generate Electricity Emissions Estimate
Blockly.Blocks['generate_electricity_emissions_estimate'] = {
  init: function() {
    this.appendDummyInput().appendField("Generate Electricity Emissions Estimate");
    this.appendValueInput("electricity_value")
        .setCheck("Number")
        .appendField("Electricity Consumption");
    //this.appendDummyInput()
    //    .appendField("unit")
    //    .appendField(new Blockly.FieldDropdown([
    //        ["kWh", "kwh"], 
    //        ["MWh", "mwh"]
    //    ]), "electricity_unit");
    this.appendDummyInput()
        .appendField("Electricity Unit")
        .appendField(new Blockly.FieldTextInput("kwh"), "electricity_unit");
    this.appendDummyInput()
        .appendField("Country Code")
        .appendField(new Blockly.FieldTextInput("us"), "country");
    this.appendDummyInput()
        .appendField("State Code")
        .appendField(new Blockly.FieldTextInput("fl"), "state");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Generate electricity emissions estimate based on electricity consumption and location.");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['generate_electricity_emissions_estimate'] = function(block) {
  var electricity_value = Blockly.JavaScript.valueToCode(block, 'electricity_value', Blockly.JavaScript.ORDER_ATOMIC);
  var electricity_unit = block.getFieldValue('electricity_unit');
  var country = block.getFieldValue('country');
  var state = block.getFieldValue('state');

  // Define your Carbon Interface API key here
  var API_KEY = "ZkuRHR05F6eDiKoAgsjTQ";  // Replace with your actual API key
// alert(electricity_value);
// alert(electricity_unit);
// alert(country);
// alert(state);

// var code = `fetch('https://jsonplaceholder.typicode.com/todos/1') 
// .then(response => response.json())
// .then(json => console.log(json))`;

var code = `
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",
      headers: {
        "Authorization": "Bearer ${API_KEY}",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "type": "electricity",
        "electricity_unit": "${electricity_unit}",
        "electricity_value": ${electricity_value},
        "country": "${country}",
        "state": "${state}"
      })
    })
    .then(response => response.json())
    .then(json => 
          {
            //console.log(json);
            //console.log(json.data);
            //console.log(json.data.attributes);

            console.log('Carbon in grams :'+eval(json.data.attributes.carbon_g));
            
            console.log('Carbon in pounds :'+eval(json.data.attributes.carbon_lb));
            
            console.log('Carbon in kilograms :'+eval(json.data.attributes.carbon_kg));
            
            console.log('Carbon in metric tonnes :'+eval(json.data.attributes.carbon_mt));
            
            alert('Carbon in grams :'+eval(json.data.attributes.carbon_g));
            alert('Carbon in pounds :'+eval(json.data.attributes.carbon_lb));
            alert('Carbon in kilograms :'+eval(json.data.attributes.carbon_kg));
            alert('Carbon in metric tonnes :'+eval(json.data.attributes.carbon_mt));
            
            
          
          })
    .catch(error => {
      console.error(error);
      throw error;
    });
  `;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
  
  };




Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input Text")
        .appendField(new Blockly.FieldTextInput(""), "TEXT");
    this.setOutput(true, "String"); // This block returns a string
    this.setColour(160);
    this.setTooltip("Enter a text string.");
    this.setHelpUrl(""); // URL to a relevant help page, if needed
  }
};

Blockly.JavaScript['text_input'] = function(block) {
  var text = block.getFieldValue('TEXT');
  var code = JSON.stringify(text); // Encapsulate the string in quotes for JavaScript
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
  var COST_PER_KWH = 0.120; // This is a hypothetical value; you should input the actual cost per kWh
  
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
