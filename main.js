const fs = require("node:fs");

fs.readFile("data.json", (error, data) => {
    if (error)  {
        console.log(error.message);
        return;
    }

    try {
        const output = parseJSON(data);
        console.log(output);
        writeOutputToFile(output);
    } catch (error) {
        console.error("An error occurred while processing JSON:", err.message);
    }
});

function writeOutputToFile(outputText) {
    fs.writeFile("output.txt", outputText, "utf8", (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Data is saved to output.txt");
        }
    });
}

function parseJSON(data) {
    const jsonData = JSON.parse(data);
    const filteredValues = jsonData
        .filter(item => item.ku === "13" && item.value > 5)
        .map(item => item.value);

    return filteredValues.join("\n");
}