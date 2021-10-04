
const FILLED_BAR_CHAR = "■";
const EMPTY_BAR_CHAR = "·";

const drawBar = function drawBar (progress) {
  const totalLength = process.stdout.columns - 30;
  const filledLength = (progress * totalLength).toFixed(0);
  const emptyLength = totalLength - filledLength;

  const filledBar = FILLED_BAR_CHAR.repeat(filledLength);
  const emptyBar = EMPTY_BAR_CHAR.repeat(emptyLength);
  const progressPercentage = (progress * 100).toFixed(2);

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Current progress: [${filledBar}${emptyBar}] | ${progressPercentage}%`);
};

const bar = function bar (total) {

  let current = 0;

  drawBar(current);

  const update = function update (to) {
    current = to;
    drawBar(current / total);
  };

  const progress = function progress (amount = 1) {
    update(current + amount);
  };

  return {
    progress,
    update
  };
};

module.exports = bar;
