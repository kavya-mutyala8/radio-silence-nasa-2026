
/*
 * RADIO SILENCE
 * Junior Astronaut Mission Trainer
 *
 * Contribution: NASA Historical Crisis Research
 * Case Study: Apollo 13
 *
 * Historical event: April 1970
 */

const CRISIS_DATA = {

    title: "Apollo 13 – The Successful Failure",

    year: "1970",

    what_happened: [
        "1. Apollo 13 launched on April 11, 1970, carrying three astronauts: Jim Lovell, Jack Swigert and Fred Haise.",

        "2. On April 13, about 56 hours into the mission, an oxygen tank in the Service Module ruptured, and the crew heard a loud bang.",

        "3. The incident damaged the spacecraft and caused the loss of electrical power and oxygen supplies.",

        "4. The crew abandoned their planned Moon landing and moved into the Lunar Module Aquarius.",

        "5. The Lunar Module became a temporary lifeboat for all three astronauts.",

        "6. Carbon dioxide levels increased because the spacecraft's carbon dioxide removal system had limited capacity.",

        "7. The crew faced serious challenges involving oxygen, electricity, water and temperature."
    ],

    what_nasa_did: [
        "8. NASA Mission Control worked with engineers to develop a solution for connecting incompatible carbon dioxide filter canisters.",

        "9. Engineers designed an emergency adapter using available spacecraft materials, including a spacesuit cooling garment and hose, plastic bags, a cue card from the flight plan and duct tape.",

        "10. The astronauts conserved electrical power and water, followed Mission Control instructions and safely returned to Earth on April 17, 1970."
    ],

    source: "https://www.nasa.gov/history/houston-weve-had-a-problem/"

};

// Export for Node.js use
if (typeof module !== "undefined" && module.exports) {
    module.exports = CRISIS_DATA;
}
