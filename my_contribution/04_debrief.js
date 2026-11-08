
/*
 * RADIO SILENCE
 * Junior Astronaut Mission Trainer
 *
 * Contribution: Mission Debrief and NASA Comparison
 */

const DEBRIEF_DATA = {

    success:
        "Congratulations, astronaut! You successfully managed the habitat resources. Your decisions maintained essential supplies and protected the crew. Real space missions also depend on careful planning, teamwork and resource conservation.",

    fail:
        "Mission unsuccessful! One or more critical habitat resources reached a dangerous level. In a real space mission, losing essential resources such as oxygen, power or radiation protection could threaten astronaut safety. Review your decisions and try again.",

    source:
        "NASA Apollo 13: https://www.nasa.gov/missions/apollo/apollo-13-the-successful-failure/",

    nasa: [

        {
            title: "Apollo 13 – Oxygen Management",
            description:
                "The Apollo 13 crew faced an oxygen supply emergency after an oxygen tank failure. NASA engineers and astronauts worked together to conserve resources and bring the crew home safely.",
            source:
                "https://www.nasa.gov/missions/apollo/apollo-13-the-successful-failure/"
        },

        {
            title: "NASA – Growing Plants in Space",
            description:
                "NASA researches growing plants in space to support future exploration missions. Plants can provide fresh food and contribute to life-support research.",
            source:
                "https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/"
        },

        {
            title: "NASA – Radiation Protection",
            description:
                "NASA studies shielding methods, including the use of lunar surface materials, to help protect astronauts from harmful space radiation.",
            source:
                "https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/"
        }

    ]

};

// Export for Node.js use
if (typeof module !== "undefined" && module.exports) {
    module.exports = DEBRIEF_DATA;
}
