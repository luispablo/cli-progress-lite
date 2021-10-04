# cli-progress-lite
Small and simple CLI progress bar

## How to use

```javascript
const buildBar = require("cli-progress-lite");

const bar = buildBar(77); // The total to process, starting at 0

// And then either
bar.progress(5); // Will add 5 to the processed number
// Or
bar.progress(); // Will add 1 to the processed number
// Or
bar.update(20); // Will set the processed number to 20
```

Showing this in the terminal

```sh
Current progress: [■■■■■■■·························································] | 5.93%
```
