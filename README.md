# Blockly R Code Generator

This project provides a graphical interface using Google's Blockly to allow users to design custom logic. It then generates R code based on the designed logic.

## Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
- For running the generated R code: An R environment. You can download and install R from [R's official website](https://www.r-project.org/).

## Setup

1. Clone the repository or download the source files.
2. Navigate to the `milestone1` directory.

## Running the Blockly Interface

1. Open the `index.html` file in a web browser.
2. Design your logic using the available blocks.
3. Click the "Generate R Code" button to view the generated R code.
4. Optionally, click the "Save Code" button to download the generated code as an `.R` file.

## Testing the Generated R Code

1. Save the generated code using the "Save Code" button in the Blockly interface.
2. Navigate to the directory where you saved the `.R` file.
3. Run the file using the command:

```bash
Rscript generated_code.R

(Replace generated_code.R with the name of the file if you've renamed it.)

## Additional Information
1. The custom blocks are defined in the custom_blocks.js file.
2. The index.html file provides the main interface for interacting with Blockly and generating R code.