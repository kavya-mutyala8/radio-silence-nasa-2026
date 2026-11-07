// Kesava fills this file. All numbers and texts below are PLACEHOLDERS. Change values only, keep the shape.
// perSol: change every sol (day), minus = goes down. Meters go 0 to 100. radiation = "Safety" (100 = safe).
// Each action can have an optional icon (an emoji) and a "why" line (shown on the card).
const GAME_DATA = {
  meters: {
    power: { start: 80, perSol: -5, source: "NASA link + note" },
    oxygen: { start: 90, perSol: -8, source: "NASA link + note" },
    food: { start: 85, perSol: -6, source: "NASA link + note" },
    radiation: { start: 100, perSol: -3, source: "NASA link + note" },
  },
  actions: [
    {
      name: "Make oxygen",
      icon: "💨",
      why: "Turn water into breathing air.",
      power: -10,
      oxygen: 20,
      food: 0,
      radiation: 0,
    },
    {
      name: "Charge batteries",
      icon: "☀️",
      why: "Catch sunlight with your panels.",
      power: 20,
      oxygen: 0,
      food: 0,
      radiation: 0,
    },
    {
      name: "Grow food",
      icon: "🌱",
      why: "Give your little garden a boost.",
      power: -15,
      oxygen: 0,
      food: 15,
      radiation: 0,
    },
    {
      name: "Shield habitat",
      icon: "🛡️",
      why: "Add cover against space radiation.",
      power: -10,
      oxygen: 0,
      food: 0,
      radiation: 15,
    },
    {
      name: "Save power",
      icon: "🔋",
      why: "Switch off the spare air machine.",
      power: 10,
      oxygen: -5,
      food: 0,
      radiation: 0,
    },
    {
      name: "Send supply rover",
      icon: "🚚",
      why: "Bring fresh supplies to your outpost.",
      power: -70,
      oxygen: 0,
      food: 30,
      radiation: 0,
    },
  ],
  crisis: {
    title: "",
    year: "",
    what_happened: "",
    what_nasa_did: "",
    source: "",
  },
  debrief: {
    success: "", // optional: replaces the default win message
    fail: "", // optional: replaces the default fail message
    source: "", // NASA link shown under "What NASA did"
    nasa: [
      // exactly 3 items: what NASA really did (placeholders, replace with sourced facts)
      {
        icon: "💧",
        title: "Made oxygen from water",
        text: "On the space station, NASA uses systems that split water to make oxygen.",
      },
      {
        icon: "📋",
        title: "Planned for the crew",
        text: "NASA teams plan food, power and other supplies, then track how much is used.",
      },
      {
        icon: "🛡️",
        title: "Designed safer spacecraft",
        text: "NASA studies radiation and uses shielding to help protect astronauts.",
      },
    ],
  },
};
