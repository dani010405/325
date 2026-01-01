document.addEventListener("DOMContentLoaded", () => {
  const welcomeLines = [
    "Once,",
    "you considered me...",
    "your very first patient.",
    "In honor of that,",
    "I dedicate to you...",
    "My very first project...",
		"in website development:",
		"The wind is rising —",
		"we must try to live.",
		"From me,",
		"to you.",
    "Welcome, Daena!"
  ];

  let currentLine = 0;

  const container = document.getElementById("welcome-container");
  const textElement = document.getElementById("welcome-text");
  const music = document.getElementById("bg-music");
  const pauseBtn = document.getElementById("pauseBtn");

  pauseBtn.addEventListener("click", (e) => {
    const btnSpan = pauseBtn.querySelector('span');
    
    if (music.paused) {
      music.play();
      btnSpan.innerHTML = `MUTE <img src="icons/music.png" alt="Music" height="25">`;
    } else {
      music.pause();
      btnSpan.innerHTML = `PLAY <img src="icons/mute.png" alt="Muted" height="25">`;
    }
  });		

  container.addEventListener("click", () => {
    
    if (currentLine === 0) {
      pauseBtn.style.display = "flex";
      document.getElementById("skipBtn").style.display = "flex";
      
      music.play();
      pauseBtn.querySelector('span').innerHTML = `MUTE <img src="icons/music.png" alt="Music" height="25">`;
    }

    if (currentLine < welcomeLines.length) {
      textElement.innerHTML = ""; 

      textElement.style.animation = 'none';
      textElement.offsetHeight; 
      textElement.style.animation = 'fadeInUp 0.8s ease forwards';

      textElement.textContent = welcomeLines[currentLine];
      currentLine++;
    } else {
			document.body.classList.add('fade-out');
			
			fadeOutAudio(music, () => {
					window.location.href = "home.html";
			});
		}
  });

	skipBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.add('fade-out');

    fadeOutAudio(music, () => {
        window.location.href = "home.html";
    });
	});	

	function fadeOutAudio(audio, callback) {
  const fadeDuration = 1000;
  const fadeStep = 50;
  const volumeStep = audio.volume / (fadeDuration / fadeStep);

  const fadeInterval = setInterval(() => {
    if (audio.volume > volumeStep) {
      audio.volume -= volumeStep;
    } else {
      audio.volume = 0;
      audio.pause();
      clearInterval(fadeInterval);
      if (callback) callback();
    }
  }, fadeStep);
	}

});


