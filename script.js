window.addEventListener("keydown", (e) => {
    document.getElementById(
      "result"
    ).innerHTML = `The key pressed is <span>${e.key}</span><span>Key Code: ${e.keyCode}</span>`;

    if (e.ctrlKey) {
        let sound = document.getElementById('mySound');
        if (e.key === 'z' || e.key === 'Z'  || e.key === 'a'  || e.key === 'A'  || e.key === 'c' || e.key === 'C' || e.key === 's' || e.key === 'S' || e.key === 'v'|| e.key === 'V' ){
            sound.play();
        }
    }
  });

