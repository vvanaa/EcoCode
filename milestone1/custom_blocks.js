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
    this.setColour('#03492C');
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
    var API_KEY = "ZkuRHR05F6eDiKoAgsjTQ";
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "type": "electricity",
        "electricity_unit": "` + electricity_unit + `",
        "electricity_value": ` + electricity_value + `,
        "country": "` + country + `",
        "state": "` + state + `"
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(json => {
      let carbonGrams = 'Carbon in grams :' + eval(json.data.attributes.carbon_g);
      let carbonPounds = 'Carbon in pounds :' + eval(json.data.attributes.carbon_lb);
      let carbonKilograms = 'Carbon in kilograms :' + eval(json.data.attributes.carbon_kg);
      let carbonMetricTonnes = 'Carbon in metric tonnes :' + eval(json.data.attributes.carbon_mt);
      
      let output = carbonGrams + '\\n' + carbonPounds + '\\n' + carbonKilograms + '\\n' + carbonMetricTonnes;
      document.getElementById('outputDiv').innerText = output;
      
      console.log(carbonGrams);
      console.log(carbonPounds);
      console.log(carbonKilograms);
      console.log(carbonMetricTonnes);
    })
    .catch(error => {
      console.error(error);
      document.getElementById('outputDiv').innerText = 'Error: ' + error.message;
    });
  `;

  return [code, Blockly.JavaScript.ORDER_NONE];
};



  // Generate Flight Emissions Estimate
Blockly.Blocks['generate_flight_emissions_estimate'] = {
  init: function() {
    this.appendDummyInput().appendField("Generate Flight Emissions Estimate");
    this.appendValueInput("passengers")
        .setCheck("Number")
        .appendField("Number of Passengers");
    this.appendValueInput("departure_airport")
        .setCheck("String")
        .appendField("Departure Airport");
    this.appendValueInput("destination_airport")
        .setCheck("String")
        .appendField("Destination Airport");
    this.appendDummyInput()
        .appendField("Cabin Class")
        .appendField(new Blockly.FieldDropdown([
            ["Economy", "economy"], 
            ["Premium ", "premium"]
        ]), "cabin_class");
    this.appendDummyInput()
        .appendField("Distance Unit")
        .appendField(new Blockly.FieldDropdown([
            ["Kilometers", "km"], 
            ["Miles", "mi"]
        ]), "distance_unit");
    this.setOutput(true, "Number");
    this.setColour('#010101');
    this.setTooltip("Generate flight emissions estimate based on the number of passengers, departure and destination airports, cabin class, and distance unit.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['generate_flight_emissions_estimate'] = function(block) {
  var passengers = Blockly.JavaScript.valueToCode(block, 'passengers', Blockly.JavaScript.ORDER_ATOMIC);
  var departure_airport = Blockly.JavaScript.valueToCode(block, 'departure_airport', Blockly.JavaScript.ORDER_ATOMIC);
  var destination_airport = Blockly.JavaScript.valueToCode(block, 'destination_airport', Blockly.JavaScript.ORDER_ATOMIC);
  var cabin_class = block.getFieldValue('cabin_class');
  var distance_unit = block.getFieldValue('distance_unit');

  // Define your Carbon Interface API key here
  var API_KEY = "ZkuRHR05F6eDiKoAgsjTQ"; // Replace with your actual API key

  var code = `
  fetch("https://www.carboninterface.com/api/v1/estimates", {
    method: "POST",
    headers: {
      "Authorization": "Bearer ${API_KEY}",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "type": "flight",
      "passengers": ${passengers},
      "legs": [{
        "departure_airport": ${departure_airport},
        "destination_airport": ${destination_airport},
        "cabin_class": "${cabin_class}"
      }],
      "distance_unit": "${distance_unit}"
    })
  })
  .then(response => response.json())
  .then(json => {
    // Formatting the carbon data
    let carbonData = [
      'Carbon in grams: ' + json.data.attributes.carbon_g,
      'Carbon in pounds: ' + json.data.attributes.carbon_lb,
      'Carbon in kilograms: ' + json.data.attributes.carbon_kg,
      'Carbon in metric tonnes: ' + json.data.attributes.carbon_mt
    ].join('\\n');

    // Displaying the result in outputDiv
    document.getElementById('outputDiv').innerText = carbonData;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('outputDiv').innerText = 'Error: ' + error.message;
  });
`;

return [code, Blockly.JavaScript.ORDER_NONE];

};


 
// Generate Shipping Emissions Estimate
Blockly.Blocks['generate_shipping_emissions_estimate'] = {
  init: function() {
    this.appendDummyInput().appendField("Generate Shipping Emissions Estimate");
    this.appendValueInput("weight_value")
        .setCheck("Number")
        .appendField("Weight Value");
    this.appendDummyInput()
        .appendField("Weight Unit")
        .appendField(new Blockly.FieldDropdown([
            ["Grams", "g"], 
            ["Kilograms", "kg"],
            ["Pounds", "lb"],
            ["Tonnes", "mt"]
        ]), "weight_unit");
    this.appendValueInput("distance_value")
        .setCheck("Number")
        .appendField("Distance Value");
    this.appendDummyInput()
        .appendField("Distance Unit")
        .appendField(new Blockly.FieldDropdown([
            ["Kilometers", "km"], 
            ["Miles", "mi"]
        ]), "distance_unit");
    this.appendDummyInput()
        .appendField("Transport Method")
        .appendField(new Blockly.FieldDropdown([
            ["Truck", "truck"], 
            ["Train", "train"],
            ["Ship", "ship"],
            ["Plane", "plane"]
        ]), "transport_method");
    this.setOutput(true, "Number");
    this.setColour('#06975A');
    this.setTooltip("Generate shipping emissions estimate based on weight, distance, and transport method.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['generate_shipping_emissions_estimate'] = function(block) {
  var weight_value = Blockly.JavaScript.valueToCode(block, 'weight_value', Blockly.JavaScript.ORDER_ATOMIC);
  var weight_unit = block.getFieldValue('weight_unit');
  var distance_value = Blockly.JavaScript.valueToCode(block, 'distance_value', Blockly.JavaScript.ORDER_ATOMIC);
  var distance_unit = block.getFieldValue('distance_unit');
  var transport_method = block.getFieldValue('transport_method');

  // Define your Carbon Interface API key here
  var API_KEY = "ZkuRHR05F6eDiKoAgsjTQ"; // Replace with your actual API key

  var code = `
  fetch("https://www.carboninterface.com/api/v1/estimates", {
    method: "POST",
    headers: {
      "Authorization": "Bearer ${API_KEY}",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "type": "shipping",
      "weight_value": ${weight_value},
      "weight_unit": "${weight_unit}",
      "distance_value": ${distance_value},
      "distance_unit": "${distance_unit}",
      "transport_method": "${transport_method}"
    })
  })
  .then(response => response.json())
  .then(json => {
    let carbonData = [
      'Carbon in grams: ' + json.data.attributes.carbon_g,
      'Carbon in pounds: ' + json.data.attributes.carbon_lb,
      'Carbon in kilograms: ' + json.data.attributes.carbon_kg,
      'Carbon in metric tonnes: ' + json.data.attributes.carbon_mt
    ].join('\\n');

    // Displaying the result in outputDiv
    document.getElementById('outputDiv').innerText = carbonData;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('outputDiv').innerText = 'Error: ' + error.message;
  });
`;

return [code, Blockly.JavaScript.ORDER_NONE];

};




// Generate Vehicle Emissions Estimate
// Generate Fuel Combustion Estimate

























  Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input Text")
        .appendField(new Blockly.FieldTextInput(""), "TEXT");
    this.setOutput(true, "String"); // This block returns a string
    this.setColour('#06C374');
    this.setTooltip("Enter a text string.");
    this.setHelpUrl(""); // URL to a relevant help page, if needed
  }
};

Blockly.JavaScript['text_input'] = function(block) {
  var text = block.getFieldValue('TEXT');
  var code = JSON.stringify(text); // Encapsulate the string in quotes for JavaScript
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
    this.setColour('#47FAAF');
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
