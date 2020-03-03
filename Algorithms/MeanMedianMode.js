// link to repl.it >> https://repl.it/@blarcmann/MeanMedianMode

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  }
}

function getMode(array) {
  let modeObj = {};
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++
  })

  let maxFrequency = 0;
  let modes = [];
  for (num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num]
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num)
    }
  }
  if (modes.length === Object.keys(modeObj).length) {
    modes = [];
  }
  return modes;
}

function getMean(array) {
  let initialMean = 0;
  for (let i = 0; i < array.length; i++) {
    initialMean += array[i];
  }
  let mean = initialMean / array.length;
  return mean;
}

function getMedian(array) {
  array = array.sort((a, b) => a - b);
  console.log(array)
  if (Number.isInteger(array.length / 2)) {
    let med = array[(array.length / 2 - 1)] +
      array[(array.length / 2)];
    let median = Math.round(med / 2);
    return median;
  } else {
    let median = array[Math.trunc(array.length / 2)];
    return median;
  }
}

// Test
meanMedianMode([1, 14, 43, 5, 15, 5, 8, 9, 7, 11]);