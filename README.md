# EcoCode

## Project Members
- Viviana
- Suparna
- Katherine
- Pelin
- Catherine

---

## Videos
- [Technical Introduction](https://drive.google.com/file/d/1HQ0833KdR6Aph_YxUoIZl_qqCioP8gGP/view?usp=share_link)
- [Technical Introduction V2](https://drive.google.com/file/d/13mbS0XoBl8TWP3rWMD1WFwvFhTcuBgHp/view?usp=sharing)
- [EcoCode Introduction](https://drive.google.com/file/d/1PndMrkP62fhoOIT8M4I34tmmfLRkkNCt/view?usp=share_link)
- [EcoCode Introduction V2](https://drive.google.com/file/d/1L5MbV7Z_9sSOuh4CMVzi21IaBomj0tb-/view?usp=sharing)

---

## [GitHub-Pages URL](https://vvanaa.github.io/EcoCode/milestone1/)

---

## Project Description
**EcoCode** is an innovative project that combines environmental sustainability with computer programming. Our aim is to encourage eco-friendly actions through the engaging world of coding.

### Motivation
As the world grapples with environmental challenges, EcoCode seeks to make sustainability both cool and accessible, using coding and real-time environmental data.

### Project Features
- **Custom Blocks in EcoCode:**
  - **Electricity Emissions Estimate:** Calculate carbon emissions from electricity based on location.
  - **Flight Emissions Estimate:** Estimate air travel emissions.
  - **Shipping Emissions Estimate:** Determine carbon footprint of shipping methods.
  - **Text Input Block:** For enhanced user interaction.
  - **Notification System:** Engage users with custom message notifications.

### Interactive Elements and Event Listeners
EcoCode uses interactive elements and event listeners for a dynamic user experience, like toggling element visibility based on user actions.

### Main Goals
- **Enhancing Environmental Awareness:** Using interactive and real-world data.
- **User-Friendly Experience:** Accessible and intuitive design.
- **Promoting Collaboration and Learning:** Encouraging shared eco-actions and learning.

### Relation to Parsing, Interpretation, and Compilation
EcoCode applies these concepts to transform environmental awareness into actionable plans, incorporating real-time data for a personalized approach.

---


## Blockly JavaScript Code Generator - EcoCode
### [GitHub-Pages URL](https://vvanaa.github.io/EcoCode/milestone1/)
This feature provides a graphical interface to design logic and generate JavaScript code.

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari, Edge).

### Setup
1. Clone the repository or download the source files.
2. Navigate to `milestone1` or 'main' directory.

### Running the Blockly Interface
1. Open `index.html` in a browser.
2. Design logic with available blocks.
3. Generate JavaScript code with a click.
4. Save the code as a `.js` file, if desired.

### Additional Information
- Custom blocks are in `custom_blocks.js`.
- `index.html` is the main interface for Blockly interaction.

- Certainly! Here's a section for your README that outlines the steps for extending your Blockly-based project with new features:

---

## Extending EcoCode with New Features

To enhance EcoCode with additional functionalities, follow these steps:

### 1. Add Custom Blocks to `custom_blocks.js`
Define new custom blocks in the `custom_blocks.js` file. Your current blocks like `generate_electricity_emissions_estimate`, `generate_flight_emissions_estimate`, and others, are defined with specific attributes such as fields, inputs, tooltips, and colors.

### 2. Add JavaScript Generators
For every new block, define the JavaScript code that will be generated when the block is used. This is done in `custom_blocks.js` using `Blockly.JavaScript['block_name']`. For example, `Blockly.JavaScript['generate_electricity_emissions_estimate']` creates a JavaScript snippet to calculate electricity emissions.

### 3. Update the Toolbox in `index.html`
Include your new custom blocks in the Blockly workspace by updating the toolbox in `index.html`. Modify the XML structure to add new categories or items as needed.

### 4. Include Additional Functionality
Add any additional JavaScript functions required for your project, like event listeners or interactive elements. For instance, a `toggleSun()` function to change element visibility based on user input.

### 5. Integrating with External APIs
Ensure that your custom blocks correctly interact with external APIs. Check for valid API keys, correct endpoint URLs, and handle API responses efficiently.

### 6. Handling Dependencies
Include any necessary external libraries or SDKs in your project, such as SDKs needed for functionalities like notifications.

### 7. Testing
Thoroughly test your application after adding new blocks or features. Ensure that the new functionalities work as intended without introducing bugs.


## Contributions

**Team Contributions:**

- **Pelin:** Was the primary coder for the project, taking charge of interface design, addressing bugs, and conducting thorough testing.

- **Suparna:** Worked with interface design, notifications block and involved in testing processes.

- **Viviana:** Published the website.

- **Katherine:** Focused on GitHub organization for submissions.

- **Catherine:** Addressed problems/functionality of project at midterm benchmark; Provided the ideas of new usable blocks ; midterm presentation


