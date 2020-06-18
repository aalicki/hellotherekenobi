function playGreeting (person) {

  if (person === 'kenobi') {

    let audio = new Audio('sounds/obi-wan-hello-there.mp3');
    audio.play();
  } else if (person === 'grievous') {

    let audio = new Audio('sounds/general-kenobi.mp3');
    audio.play();
  }
}