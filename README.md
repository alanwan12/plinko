# Plinko

A Plinko-style simulation built on Matter.js: balls drop through a field of pegs into slots at the bottom.

## What it does
- Uses [Matter.js](https://brm.io/matter-js/) 0.14.2 (MIT license), a bundled copy is included as `matter.js`.
- Builds a staggered grid of static pegs (10 rows) on a 600x700 canvas, and dividers at the bottom that form slots.
- A new ball is dropped from the top at regular intervals, with a small random sideways offset; balls that leave the sides of the screen are removed.
- There is no scoring or player input; it is a physics demo.

## Run it
Open `plinko.html` in a browser. No build step or server needed.

## Files
- `plinko.html` - canvas and script tags
- `plinko.js` - world setup, peg grid, ball spawning
- `particle.js`, `peg.js`, `Boundary.js` - body constructors
- `matter.js` - bundled Matter.js 0.14.2

## Notes
- The HTML file also has a `<script>` tag pointing at `../physics/matter-js-0.14.2/build/matter.js` (or `matter-js-0.14.2/build/matter.js`), a path that is not part of this repo. The bundled `matter.js` next to the page is the copy this repo provides, so the extra tag should just log a 404 in the browser console.
