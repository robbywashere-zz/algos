const O_FORTUNA = `O Fortuna, velut luna, statu variabilis, semper crescis, aut decrescis; vita detestabilis, nunc obdurat, et tunc curat, ludo mentis aciem, egestatem,, potestatem, dissolvit ut glaciem.  Sors immanis, et inanis, rota tu volubilis, status malus, vana salus, semper dissolubilis, obumbrata, et velata, michi quoque niteris; nunc per ludum, dorsum nudum, fero tui sceleris.  Sors salutis, et virtutis, michi nunc contraria, est affectus, et defectus, semper in angaria. Hac in hora, sine mora, corde pulsum tangite; quod per sortem, sternit fortem, mecum omnes plangite.`

function * getLine(t, l) {
  let text = t.trim();
  if (text.length <= l) {
    yield text;
    return;
  }
  let index = l;
  while (text[index] !== " " && index !== 0) index--;
  if (index <= 0) while (text[index] !== " ") index++;
  yield text.substr(0,index);
  yield * getLine(text.substr(index),l)
}

function spaceOut(text, L){
  for (let line of getLine(text,L)){
    let padding = L - line.length;
    let words = line.split(' ');
    if (words.length > 1) {
      let i = 0;
      let spaceWords = words.slice(0,-1);
      while (padding--) spaceWords[(i++ % spaceWords.length)] += " ";
      spaceWords.push(...words.slice(-1))
      console.log(spaceWords.join(" "));
    } else {
      console.log(line);
    }
  }
}

spaceOut(O_FORTUNA,36); // 🚀
