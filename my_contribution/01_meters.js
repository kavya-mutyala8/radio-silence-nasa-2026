
/*
 * RADIO SILENCE
 * Junior Astronaut Mission Trainer
 *
 * Contribution: Resource Meter Data
 * Prepared by: Research and Data Team
 *
 * NOTE:
 * All starting values and daily changes below are
 * estimated gameplay values, NOT actual NASA habitat specifications.
 */

const METERS_DATA = {

    // 1. POWER MANAGEMENT
    power: {
        start: 85,
        perSol: -3,
        source: "NASA - Spacecraft Electrical Power Systems: https://science.nasa.gov/learn/basics-of-space-flight/chapter11-3/ . Game estimate: power decreases as habitat systems consume electricity."
    },

    // 2. OXYGEN MANAGEMENT
    oxygen: {
        start: 90,
        perSol: -5,
        source: "NASA - Apollo 13 Mission Operations Report: https://www.nasa.gov/wp-content/uploads/static/history/alsj/a13/A13_MissionOpReport.pdf . Game estimate: oxygen decreases through crew consumption and habitat use."
    },

    // 3. FOOD MANAGEMENT
    food: {
        start: 85,
        perSol: -4,
        source: "NASA - Growing Plants in Space: https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/ . Game estimate: food supplies decrease as astronauts consume stored food."
    },

    // 4. RADIATION SAFETY
    radiation: {
        start: 100,
        perSol: -2,
        source: "NASA - Protecting Astronauts from Space Radiation at the Moon: https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/ . Game estimate: radiation safety decreases over time without adequate shielding."
    }

};

// Export for use in other JavaScript files
if (typeof module !== "undefined" && module.exports) {
    module.exports = METERS_DATA;
}
