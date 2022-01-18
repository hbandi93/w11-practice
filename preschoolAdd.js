console.log("Hello world");

const preschoolAdd = (num, num2) => {
    const sum = num + num2
    if (sum <= 0) {
        return 0;
    }
    if (sum > 10) {
        return "Sok";
    }
    return Math.floor(sum);
}

// export default... helyett
module.exports = preschoolAdd