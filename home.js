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
  },
  { img: "imgs/photojournals/0102-0326.jpeg", text: [
    "January 2-3, 2026",
    "Are you here?",
    "If you are, I don’t know, you shouldn’t try read this journal entry. I translated it into a fictional language. So, I hope that’s enough to make this hard to decipher/understand.",
    "Please, skip this.",
    "It’s 12:31 AM on January 3rd. I am writing this, attaching a photo I took on the night of January 2nd. I went for a walk—a really long walk. It took me 3 hours, 5 minutes, and 37 seconds to go back and forth to our house. I covered 11.57 kilometers, exceeding my record by 0.05 kilometers.",
    "Actually, my mom begged me to stop walking for three hours; she said an hour or an hour and a half is enough.",
    "Yn, ziry doesn’t shifang.  Kostilus nyke don’t, tolī.  Pāsan there’s daor rational drīve, sepār emotional.  I’ve issare following ñuha emotions whenever nyke decide naejot gaomagon bisa activity.  I’ve issare feeling ojūdan, se nyke don’t gīmigon skoriot naejot blame ziry iā skorkydoso naejot control ziry.",
    "really, nyke thought īlen getting sȳrkta mōrī jēdarī.  Nyke thought ēdan ñuha ābrar mirre figured hen, nyke knew skoros naejot gaomagon, īlen isse control—turns hen, īles mirre wishful otāpagon.  Nyke gūrēntan daorun rȳ mirre.",
    "nyke geron kesrio syt iksan ojūdan, se sīr nyke ivestragī ñuha dekossa jikagon skoriot jaelzi naejot.  Se maybe, bisa iksis se mērī run nyke feel isse control hen syt sir.",
    "sīr maybe that’s skoro syt gaoman ziry.",
    "i’m sīr ojūdan bona bisa entry ēza iā complete junky iāragon.",
    "ȳdragon nūmāzma: iāragon state, iksan daor writer.",
    "iksan iā imposter isse mirre se ra iksan passionate nūmāzma.  Iksan neither iā artist nor iā tech-oriented issaros; iksan daorun rȳ mirre.  Nyke don’t gīmigon skoros iksan.  Mirre ñuha ābrar, i’ve issare parading hae someone else.  It’s funny, daor?",
    "iksan sīr lacking isse jorrāelagon.  Hae iā riña, nyke would sagon iā rōvēgrie tala se iā overachiever.  Despite mirre ñuha potential, īlen limited ondoso maybe iā mijegon hen attention.  Ñuha muñar would va moriot commend ñuha valonqar kesrio syt pōnta thought īles talented.  “thought” kesrio syt nyke pendagon ziry hasn’t mirre rȳ mirre.  Evil, huh? nyke mazverdatan bē hating zirȳla.  Ziry jiōraton mirre se jorrāelagon nyke va moriot worked qopsa syt.  Tolvie jēda pōnta commend zirȳla, nyke would va moriot feel iā adere surge hen passion naejot gaomagon sȳrkta isse ñuha academics.  Se tolī, nyke found art, skore nyke thought would finally jiōragon nyke mirri tolī jorrāelagon kesrio syt it’s iā talent.",
    "qogralbar, iksan ēdrugī hen bisa narrative.  Nyke don’t vēdros ñuha lēkia rȳ mirre.  Nyke regret se giez ābrar nyke jentan trying naejot mazverdagon ñuha muñar jorrāelagon zirȳla less.  Īles sīr fucking childish se daor olvie sȳz hen iā uēpkta mandia qilōni should’ve dohaertan zirȳla gūrēñagon ābrar.  It’s drēje, nyke don’t vēdros zirȳla, se i’m vaoreznuni.  Yn, nopāzma ! recently, nyke felt sīr envious.  Iā fucking disgusting feeling hen someone claiming naejot feel vaoreznuni.",
    "ziry rūdan hen hen school.  Saelie jēda sir.  Skoros vēttan nyke feel envious iksin bona ñuha mom eptan zirȳla lo ziry jeldan naejot ūndegon iā therapist arlī.  Pāsagon ziry iā daor, nyke pendagon ziry wasn’t envy nyke felt.  Nyke pendagon nyke felt daorun diabolical va ñuha lēkia rȳ bona jēda.  Mayhap, nyke felt upset bona ñuha mom knows ziry jorrāelagon mēre se ēza daor idea gaoman tolī.  It’s sesīr funnier otāpagon bona i’m rȳ se age bona nyke should, nyke don’t know—maybe handle ñuha own expenses? lo nyke jorrāelagon iā therapist, skoro syt don’t nyke invest isse mēre?",
    "nyke don’t sesīr gīmigon skoros i’m talking nūmāzma rȳ bisa point.  Iksi daor isse iāragon state, folks.  Nyke gīmigon i’m iēdrosa writing, yn hae everything nyke bardugon iksis lēda hen confusion se qrīdronnor.",
    "qrugh, it’s bē possible i’m sepār distracting nykēla hen se thoughts hen ao.  Nyke might’ve vēttan another grave mistake.  Ziry could sagon bona skoros nyke gōntan iksin simply chickenshit.  Nyke shifang ao daor replying iā responding.  Yn ziry hurts ñuha bartos otāpagon nūmāzma skorkydoso iksā doing.  Nyke hope you’re daor reading bisa.",
    "should mazeman bisa website ilagon? should nyke disappear hen aōha sight? skoros should gaoman?",
    "nyke don’t gīmigon.  I’m doru-borto.  Nyke probably disgust ao. ",
    "daor, nyke should keligon writing.  I’m writing nonsense.  Mirre hen these iksis verdagon mirre sense.  Mirre hen these issi irresponsible, unaccountable, se shameless.",
    "iksan gonna pendagon bisa rȳ.  Aaaaaaaaaaaaaaaaaaaaaaaaaaaa, bisa iksis doru-borto se highly immoral se demanding syt iā perpetrator hae nyke.",
    "bisa iksis tolī olvie, bisa iksis daor gentle.  Skorkydoso iksis bisa gentle? skoros se qogralbar iksin nyke otāpagon?",
    "skoros iksin nyke otāpagon sir?",
    "nyke should cease writing sir"
    ]  
  },
  { img: "imgs/photojournals/010426.jpeg", text: [
    "January 04, 2026",
    "I have nothing. I have no right to even say what I’m about to say.",
    "But you are cruel. It’s not like you are obligated to greet me today, and it’s not like I deserve it. And most of all, it’s not like I didn't hurt you at all. Still, you are so cruel. I can only hope that this is all there is; that you are safe and you’re doing well. I can take this as long as you’re in a good situation. I hope that the reason you’re not greeting me today is that I hurt you and I caused you pain, and you hate me so much now. Because I believe I can’t take it if you’re in a tight situation where you are sick. I can take this if that’s all there is, that I don’t deserve your greetings.",
    "I bought myself a bottle of liquor earlier, on January 3. I watched Past Lives. I had a friend watching with me, with Araceli as her alias. It was embarrassing how I didn’t realize I had my mic on the whole time we were watching because I was drinking alone. Because I waited. I waited for you. To greet me. And I burst into tears at exactly 12AM, knowing I was right about you not greeting me. It’s completely a child’s act, no? To cry on your birthday because someone forgot to greet you.",
    "Regardless, I know you want me to lose all hope, and that’s maybe why you’re doing this. I just wish this were all just your cruelty and not because you’re sick or unsafe. Is it wrong to still think you’d greet me? Is it stupid to still think there’s still a lot of time left today for you to greet me? Am I stupid for still hoping? How am I supposed to not hope at all?",
    "But then I heard this line in the movie earlier, and it will stick with me for a while: “You had to leave because you’re you.” I know that, but can I just tell you this: it’s really hard to accept that fact, knowing that I love you. And who you are is a person who can’t love me for me, and who you became is a person who leaves. You are a person who sticks to their ideals, and you are a person with a strong sense of self-identity. Everything you’re doing now is all unfamiliar and indifferent to me. And this is how it’s easy to know I might not have mattered so much to you as you claimed. Then again, you are not burdened by blame because this is my fate, and this much is what I deserve.",
    "Then again, the you I met might just be a version of you, and though she was real, she doesn’t exist anymore in your world. And maybe you left her here with me. So I am defeated—I am defeated by the fact that I might still have the you that met me. And she’s mine to keep for all eternity—maybe. I ought to be a little more grateful, no?",
    "Is this disgusting? Do my words disgust you? Irritate you? I am sorry. I have no idea where to stand. Perhaps I lied when I said I’ll try to live now. Am I allowed to feel this way now? It’s my birthday anyway. Am I allowed to decline the growth I promised you? I don’t know. Have you even visited this site already? Are you even reading this? It’s funny how I might seem so delusional right now. You are not the only thing that matters in my life, but why does it feel like my world just crumbled again?",
    "I am not that drunk, I think. The drink just got me emotional, lmao.",
    "Right now, I am thinking about how hard it was for you to deal with my leaving last year. Maybe I should know. Because perhaps I can say I’m okay with us not talking anymore, too, if only I knew how you did.",
    "You’ve been silent for two days. I don’t know all your social media, but I hope you’re not as quiet on the other as you are on Facebook. I might take this website down tomorrow, on January 5th. My existence might be a threat to you now. I shouldn’t have been too eager to talk to you again.",
    "Maybe we’ll never even talk again. And that’s the most bitter thing I can think about right now. You’re gonna be the strangest stranger in my life—for being a stranger who knows the most about me.",
    "I am pathetic, no? Who’s gonna believe me if I tell my friends about what happened to us last year? I have not told anyone. I am dealing with this in complete solitude, and I can’t reach out to them. They are wondering, have been wondering. They wonder why I gotten so slim, why I had so much physical change in the span of the months I spent in Pampanga. They wonder what I talk about in my dump accounts. Everyone around me is curious. Hehe, maybe that’s simply what I am. I am someone who hides in the comfort of anonymity.",
    "I am someone who eats self-pity for breakfast and self-loathing for supper. I am someone who gets so easily blinded by nostalgia.",
    "I wonder. Nope. Maybe I shouldn’t ask you the questions I have in my head right now. After all, you heard it from me, right? Saying, “Not all questions need to be answered.” This is all just my karmic cycle.",
    "I guess I have to be born anew today, my 21st birthday. Be someone you’ll be proud of.",
    "I wish you’re safe and healthy right now. That’s all I have to wish right now.",
    "And you’re tired of these three words,",
    "I am sorry.",
    "That I can’t be the one you thought you could stay with."
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






