const audio = document.getElementById("bgMusic");
const cover = document.getElementById("cover-screen");
const pauseBtn = document.getElementById("pauseBtn");

const playlist = [
  "audio files/The Wind - Joe Hisaishi.mp3",
  "audio files/Nahoko (A Rainbow) - Joe Hisaishi.mp3",
  "audio files/Nahoko (An Unexpected Meeting) - Joe Hisaishi.mp3",
  "audio files/Nahoko (Her Destiny) - Joe Hisaishi.mp3",
  "audio files/Nahoko (I Miss You) - Joe Hisaishi.mp3",
  "audio files/Nahoko (The Encounter) - Joe Hisaishi.mp3",
  "audio files/Nahoko (The Proposal) - Joe Hisaishi.mp3",
  "audio files/Nahoko (Together) - Joe Hisaishi.mp3",
  "audio files/A Heart Aflutter - Joe Hisaishi.mp3",
  "audio files/A Journey (A Decision) - Joe Hisaishi.mp3",
  "audio files/A Journey (A Dream of Flight) - Joe Hisaishi.mp3",
  "audio files/A Journey (A Kingdom of Dreams) - Joe Hisaishi.mp3",
  "audio files/A Journey (A Parting) - Joe Hisaishi.mp3",
  "audio files/A Journey (An Encounter at Karuizawa) - Joe Hisaishi.mp3",
  "audio files/A Journey (Caproni Retires) - Joe Hisaishi.mp3",
  "audio files/A Journey (First Day at Work) - Joe Hisaishi.mp3",
  "audio files/A Journey (Italian Winds) - Joe Hisaishi.mp3",
  "audio files/A Journey (Jiro's Sister) - Joe Hisaishi.mp3",
  "audio files/A Journey (The Wedding) - Joe Hisaishi.mp3",
  "audio files/A Shooting Star - Joe Hisaishi.mp3",
  "audio files/Caproni (A Phantom Giant Aircraft) - Joe Hisaishi.mp3",
  "audio files/Caproni (An Aeronautical Designer's Dream) - Joe Hisaishi.mp3",
  "audio files/Castorp (A Separation) - Joe Hisaishi.mp3",
  "audio files/Castorp (The Magic Mountain) - Joe Hisaishi.mp3",
  "audio files/Junkers - Joe Hisaishi.mp3",
  "audio files/Paper Airplane - Joe Hisaishi.mp3",
  "audio files/Prototype 8 - Joe Hisaishi.mp3",
  "audio files/The Falcon - Joe Hisaishi.mp3",
  "audio files/The Falcon Project - Joe Hisaishi.mp3",
  "audio files/The Lifesaver - Joe Hisaishi.mp3",
  "audio files/The Refuge - Joe Hisaishi.mp3"
];

let track = 0;
let zIndexCounter = 400;

audio.src = playlist[track];
audio.volume = 0.4;

cover.onclick = () => {
  audio.play();
  cover.style.display = "none";
};

audio.onended = () => {
  track = (track + 1) % playlist.length;
  audio.src = playlist[track];
  audio.play();
};

pauseBtn.addEventListener("click", () => {
  const musicIcon = pauseBtn.querySelector("img");

  if (audio.paused) {
    audio.play();
    musicIcon.src = "icons/music.png";
  } else {
    audio.pause();
    musicIcon.src = "icons/mute.png";
  }
});

const PIN = "152421";
const isDesktop = window.matchMedia("(pointer:fine)").matches;

function bringToFront(win) {
  zIndexCounter++;
  win.style.zIndex = zIndexCounter;
}

function setupWindow(btnId, winId) {
  const btn = document.getElementById(btnId);
  const win = document.getElementById(winId);
  const close = win.querySelector(".close");
  const unlock = win.querySelector(".unlock");
  const input = win.querySelector(".pincode");
  const content = win.querySelector(".popup-content");
  const header = win.querySelector(".popup-header");

  btn.onclick = () => {
    win.classList.remove("hidden");
    bringToFront(win);
  };

  close.onclick = () => win.classList.add("hidden");

  unlock.onclick = () => {
    if (input.value === PIN) {
      const gate = win.querySelector(".auth-section");
      const secretContent = win.querySelector(".popup-content");

      if (gate) gate.style.display = "none";
      if (secretContent) {
        secretContent.classList.remove("hidden");
        secretContent.style.display = "block";
      }

      win.classList.add("unlocked");
    } else {
      alert("Incorrect pincode.");
    }
  };

  win.addEventListener("mousedown", () => bringToFront(win));

  if (isDesktop) {
    let dragging = false, ox = 0, oy = 0;

    header.onmousedown = e => {
      dragging = true;
      ox = e.clientX - win.offsetLeft;
      oy = e.clientY - win.offsetTop;
    };

    document.addEventListener("mousemove", e => {
      if (!dragging) return;
      win.style.left = e.clientX - ox + "px";
      win.style.top = e.clientY - oy + "px";
      win.style.transform = "none";
    });

    document.addEventListener("mouseup", () => dragging = false);
  }

}

setupWindow("messageBtn", "messageWindow");

const galleryData = [
  { img: "imgs/photojournals/0102-0326.jpeg",
    text: [
      "Are you here?",
      "If you are, I don’t know, you shouldn’t read this journal entry. It’s very long, mentally exhausting; simply put, draining.",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "Please, skip this.",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "It’s 12:31 AM on January 3rd. I am writing this, attaching a photo I took on the night of January 2nd. I went for a walk—a really long walk. It took me 3 hours, 5 minutes, and 37 seconds to go back and forth to our house. I covered 11.57 kilometers, exceeding my record by 0.05 kilometers.",
      "Actually, my mom begged me to stop walking for three hours; she said an hour or an hour and a half is enough. But, she doesn’t understand. Perhaps I don’t, too. I believe there’s no rational reason, just emotional. I’ve been following my emotions whenever I decide to do this activity. I’ve been feeling lost, and I don’t know where to blame it or how to control it.",
      "Really, I thought I was getting better last year. I thought I had my life all figured out, I knew what to do, I was in control—turns out, it was all wishful thinking. I learned nothing at all.",
      "I walk because I am lost, and so I let my feet go where they want to. And maybe, this is the only thing I feel in control of for now.",
      "So maybe that’s why I do it.",
      "I’m so lost that this entry has a complete junky flow.",
      "Talk about: flow state, I am no writer.",
      "I am an imposter in all the things I am passionate about. I am neither an artist nor a tech-oriented person; I am nothing at all. I don’t know what I am. All my life, I’ve been parading as someone else. It’s funny, no?",
      "I am so lacking in love. As a child, I would be a great daughter and an overachiever. Despite all my potential, I was limited by maybe a lack of attention. My parents would always commend my younger brother because they thought he was talented. “Thought” because I think he hasn’t any at all. Evil, huh? I grew up hating him. He got all the love I always worked hard for. Every time they commend him, I would always feel a quick surge of passion to do better in my academics. And later, I found art, which I thought would finally get me some more love because it’s a talent.",
      "Fuck, I am tired of this narrative. I don’t hate my brother at all. I regret the whole life I led trying to make my parents love him less. It was so fucking childish and not very good from an older sister who should’ve helped him learn life. It’s true, I don’t hate him, and I’m sorry. But, hell! Recently, I felt so envious. A fucking disgusting feeling from someone claiming to feel sorry.",
      "He dropped out of school. Third time now. What made me feel envious was that my mom asked him if he wanted to see a therapist again. Believe it or not, I think it wasn’t envy I felt. I think I felt nothing diabolical towards my brother at that time. Mayhap, I felt upset that my mom knows he needs one and has no idea I do too. It’s even funnier thinking that I’m at the age that I should, I don’t know—maybe handle my own expenses? If I need a therapist, why don’t I invest in one?",
      "I don’t even know what I’m talking about at this point. We are not in flow state, folks. I know I’m still writing, but like everything I write is full of confusion and chaos.",
      "Shit, it’s almost possible I’m just distracting myself from the thoughts of you. I might’ve made another grave mistake. It could be that what I did was simply chickenshit. I understand you not replying or responding. But it hurts my head thinking about how you are doing. I hope you’re not reading this.",
      "Should I take this website down? Should I disappear from your sight? What should I do?",
      "I don’t know. I’m stupid. I probably disgust you.",
      "No, I should stop writing. I’m writing nonsense. None of these is making any sense. All of these are irresponsible, unaccountable, and shameless.",
      "I am gonna think this through. AAAAAAAAAAAAAAAAAAAAAAAAAAAA, this is stupid and highly immoral and demanding for a perpetrator like me.",
      "This is too much, this is not gentle. How is this gentle? What the fuck was I thinking?",
      "What am I thinking now?",
      "I should cease writing now."

      ]
  },
  { img: "imgs/photojournals/010126.jpeg", text: [
    "January 1, 2026",
    "It's the first day of the year, and I am writing this feeling defeated by my anxieties about what would happen if I finally send her this letter. But KC asked me what I’d prefer. Would I prefer my efforts to stay with me, or would I prefer it to reach its muse, even if she doesn't respond? I think that now, at least, it would reach her. So I will send her this.",
    "It's 3AM, and just approximately three hours before this, I had the best New Year's celebration ever. This is the first time I spent it outside on the street, on our street. I never go outside the house when the clock hits 12AM of any other year. Because I would always go upstairs to watch the fireworks display. I never thought that watching the streets filled with people would be more enthralling.",
    "The street was filled with smoke from firecrackers and motorcycles. This is the noisiest on our street, except that one time a fire broke out. People threw coins in the air, and KC’s mom threw chocolate candies, too. Our street was filled with karaoke speakers, and that one humongous sound system that looked like it came from Korea's DMZ, party horn noises, bogas, thundering motorcycle revs, from a specific car, too. A neighbor offered me tequila. I said yes, but retreated the moment I saw lemon slices. Only then do I realize it would make me choke and make my throat burn. Thank heavens, I withdrew. I love living here, I just realized. I almost lost my voice from singing too much at the karaoke, too. I kind of lost some air blowing my party horn. Regardless, I felt happy.",
    "This is the first time, too, that I celebrated the New Year with KC. I have never been grateful enough for having such a friend who would celebrate with me both Christmas and New Year. Regrettably, though, we couldn’t celebrate the 2025’s Christmas together. Anyway, we spent a few times near the plaza yesterday, and I bought us ice cream. She accompanied me to buy party horns for my siblings. I can only wish we could celebrate with our other friends, too.",
    "My mom and siblings were with me on the street as well, and I'm content with how they smiled today. I wish this year would bring us together more. I wish to spend the celebrations we’ll have this year feeling genuinely happy.",
    "Recalling what happened in the first few hours of this year, the thought of this website burdening its muse never escaped me. But as I now write my first entry in my digital photojournal, I fear the next course of action I would take.",
    "Nevertheless, I wish to have a happy New Year. No matter what.",
    "If you're reading this:",
    "Happy New Year! May you enjoy living a healthy life and success. I always wish you the best."
    ]
  }
];

const gallery = document.getElementById("photoGallery");
const viewer = document.getElementById("journalViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerText = document.getElementById("viewerText");
const closeViewer = document.getElementById("closeViewer");

if (gallery) {
  galleryData.forEach((item, i) => {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "journal entry " + (i + 1);
    img.dataset.index = i;

    img.onclick = () => {
      viewerImage.src = item.img;
      viewerText.innerHTML = item.text.map(p => `<p>${p}</p>`).join("");
      viewer.classList.remove("hidden");
    };

    gallery.appendChild(img);
  });
}

if (closeViewer) {
  closeViewer.onclick = () => viewer.classList.add("hidden");
}


setupWindow("photoBtn", "photoWindow");

document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.getElementById("avatarImg");
    const portraitViewer = document.getElementById("portrait-viewer");
    const closePortraitBtn = document.getElementById("close-portrait");

    if (avatar && portraitViewer) {
        avatar.onclick = (e) => {
            e.preventDefault();
            portraitViewer.classList.remove("hidden");
            console.log("Portrait opened");
        };
    }

    if (closePortraitBtn) {
        closePortraitBtn.onclick = () => {
            portraitViewer.classList.add("hidden");
        };
    }

    portraitViewer.onclick = (e) => {
        if (e.target === portraitViewer) {
            portraitViewer.classList.add("hidden");
        }
    };

});

