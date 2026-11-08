
const assert = require("assert");

// Import your four files
const meters = require("./01_meters.js");
const actions = require("./02_actions.js");
const crisis = require("./03_crisis.js");
const debrief = require("./04_debrief.js");

console.log("\n===== RADIO SILENCE DATA TEST =====\n");

// 1. Test meters
console.log("1. Testing Meters...");

const meterNames = ["power", "oxygen", "food", "radiation"];

meterNames.forEach((name) => {
    assert(meters[name], `${name} meter is missing`);
    assert(
        meters[name].start >= 0 && meters[name].start <= 100,
        `${name} starting value is invalid`
    );
    assert(
        typeof meters[name].perSol === "number",
        `${name} daily change is invalid`
    );
    assert(
        typeof meters[name].source === "string" &&
        meters[name].source.length > 0,
        `${name} NASA source is missing`
    );
});

console.log("PASS: All four meters are valid.");


// 2. Test actions
console.log("\n2. Testing Actions...");

assert(Array.isArray(actions), "Actions must be an array");
assert(actions.length >= 5, "At least five actions are required");

actions.forEach((action, index) => {
    assert(action.name, `Action ${index + 1} has no name`);

    ["power", "oxygen", "food", "radiation"].forEach((meter) => {
        assert(
            typeof action[meter] === "number",
            `${action.name}: ${meter} impact is invalid`
        );
    });

    assert(action.why, `${action.name}: explanation is missing`);
});

console.log(`PASS: ${actions.length} actions are valid.`);


// 3. Test crisis
console.log("\n3. Testing Crisis Research...");

assert(crisis.title, "Crisis title is missing");
assert(crisis.year, "Crisis year is missing");
assert(Array.isArray(crisis.what_happened));
assert(Array.isArray(crisis.what_nasa_did));
assert(crisis.what_happened.length > 0);
assert(crisis.what_nasa_did.length > 0);
assert(crisis.source.startsWith("https://"));

console.log("PASS: Crisis research is available.");


// 4. Test debrief
console.log("\n4. Testing Debrief...");

assert(debrief.success, "Success message is missing");
assert(debrief.fail, "Failure message is missing");
assert(Array.isArray(debrief.nasa));
assert(debrief.nasa.length === 3, "Exactly three NASA cards are required");

debrief.nasa.forEach((card) => {
    assert(card.title, "NASA card title is missing");
    assert(card.description, "NASA card description is missing");
    assert(card.source.startsWith("https://"), "NASA source link is invalid");
});

console.log("PASS: Debrief and three NASA cards are valid.");


// Final result
console.log("\n================================");
console.log("ALL FOUR FILES PASSED TESTING!");
console.log("================================\n");
