
/*
 * RADIO SILENCE
 * Junior Astronaut Mission Trainer
 *
 * Contribution: Astronaut Actions
 * Purpose: Manage resources in the Moon/Mars habitat.
 *
 * Values are estimated gameplay effects,
 * not actual NASA engineering specifications.
 */

const ACTIONS_DATA = [

    {
        name: "Run Oxygen Recycler",
        icon: "🌬️",
        power: -12,
        oxygen: 24,
        food: 0,
        radiation: 0,
        why: "Uses electrical power to recycle breathable air and improve oxygen availability."
    },

    {
        name: "Recharge Batteries",
        icon: "🔋",
        power: 20,
        oxygen: 0,
        food: 0,
        radiation: 0,
        why: "Restores stored electrical energy for essential habitat equipment."
    },

    {
        name: "Grow Fresh Food",
        icon: "🌱",
        power: -12,
        oxygen: 3,
        food: 20,
        radiation: 0,
        why: "Uses powered grow lights and plants to support fresh food production."
    },

    {
        name: "Cover Habitat with Regolith",
        icon: "🛡️",
        power: -10,
        oxygen: 0,
        food: 0,
        radiation: 20,
        why: "Uses local lunar or Martian surface material as shielding against radiation."
    },

    {
        name: "Power Down Non-Essential Systems",
        icon: "⚡",
        power: 15,
        oxygen: -4,
        food: 0,
        radiation: 0,
        why: "Saves electrical energy but reduces the operation of some life-support systems."
    },

    {
        name: "Stretch Food Supplies",
        icon: "🥫",
        power: 0,
        oxygen: 0,
        food: 14,
        radiation: 0,
        why: "Carefully manages stored meals to preserve food supplies for future mission days."
    }

];

// Export for Node.js use
if (typeof module !== "undefined" && module.exports) {
    module.exports = ACTIONS_DATA;
}
