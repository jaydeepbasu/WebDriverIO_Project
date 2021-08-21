const fs = require("fs");

const testDataPath = "./test/testData/jsonData.json";


class JsonData {
    getJsonData (attributeName) {
        var jsonValue="";
        const jsonString = fs.readFileSync(testDataPath, "utf8");

        try {
            const jsonValues = JSON.parse(jsonString);
            for(var attrName in jsonValues){
                if(attrName==attributeName) {
                    jsonValue = jsonValues[attrName];
                }
            }
            
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }

        return jsonValue;
    }
}

module.exports = new JsonData();