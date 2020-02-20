function hrm(note, magazine) {
  let noteText = note.toString().toLowerCase();
  let magazineText = magazine.toString().toLowerCase();
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++
  });
  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false
  })

  return noteIsPossible;

}

//test

hrm('very my see nine all', 'My VERY eyes may just see all nine planets');