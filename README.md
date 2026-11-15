# Radio Silence

**Play it here: https://kavya-mutyala8.github.io/radio-silence-nasa-2026/**

A browser game for kids (8-12) built for the NASA Space Apps Challenge 2026.
Challenge: **Build a Junior Astronaut Mission Trainer**. Team: **Signal Lag**.

## The game

You run a small Moon outpost and keep four systems balanced: power, oxygen, food and radiation safety. Every move helps one system and hurts another. Mission Control replies arrive late, so you must decide on your own. At the end, the game compares your choices with what NASA really did.

## How to play

1. Open the link above in any browser (phone or computer). No download or login needed.
2. Pick a difficulty.
3. Each sol (day), choose an action and watch the four meters change.
4. When a crisis happens, you may have to act before Mission Control answers.
5. Survive 10 sols, then read the debrief to see how your choices compare with NASA's.

To run it on your own computer, download the repo and open `index.html`.

## Why Radio Silence?

Real astronauts far from Earth cannot wait for instant answers. Signals take time to travel, so crews must be trained to think and decide on their own. The game lets kids feel that delay and learn how astronauts handle it.

## NASA data and resources used

The NASA facts in the game and in the debrief come from these NASA pages:

- Apollo 13: "Houston, We've Had a Problem": https://www.nasa.gov/history/houston-weve-had-a-problem/
- Apollo 13: The Successful Failure: https://www.nasa.gov/missions/apollo/apollo-13-the-successful-failure/
- Apollo 13: Mission Details: https://www.nasa.gov/history/apollo-13-mission-details/
- Basics of Space Flight, Chapter 11: Onboard Systems: https://science.nasa.gov/learn/basics-of-space-flight/chapter11-3/
- Growing Plants in Space: https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/
- How NASA Will Protect Astronauts From Space Radiation at the Moon: https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/
- NASA Hazard of Space Radiation: https://www.nasa.gov/hrp/hazard-space-radiation/

Every fact in `data.js` is stored with its source. The starting values, daily changes and action effects in the game are our own estimates for gameplay. They are not NASA specifications.

## Files

- `index.html`, `style.css`: the page and its look
- `game.js`: game logic
- `data.js`: numbers, actions and NASA facts (with sources)
- `my_contribution/`: the data modules (`01_meters.js`, `02_actions.js`, `03_crisis.js`, `04_debrief.js`) and a test file (`test_data.js`), written by Koduru Kesava and joined into `data.js`
- `assets/`: astronaut illustrations

## Team

- Kavya Mutyala: game code and design
- Koduru Kesava: NASA research, numbers and debrief text

## Use of AI (Super Intelligence)

- **Code:** We used Claude (Anthropic) to help write and fix parts of the game code in `game.js` and `data.js`. This is also noted in comments at the top of those files.
- **Images:** [[EDIT THIS LINE: say which illustrations in assets/ are AI-generated, which tool made them, and that they carry a visible "AI" watermark. Delete this note after editing.]]
- **Idea and design:** The game idea, the four-system balance and the delayed Mission Control reply came from our team.
- **NASA facts:** We checked the NASA facts against the NASA pages listed above.
- No NASA logos, flags or mission patches are used or modified in any AI-generated content.
- No images, video or likeness of anyone under 18 appear in this project.

## Note

An independent learning game, not endorsed by NASA.
