const check = (result, expected, testCaseDescription) => {
    // console.log(testCaseDescription);
    // if (result === expected) console.log("Success");
    // else console.log("Fail");
    console.log(`Result: ${result}, Expected: ${expected} --- ${testCaseDescription}:${result === expected ? "Sucess" : "Error"}`);
}

module.exports = check;