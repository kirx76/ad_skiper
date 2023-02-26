const getYTVideoPlayer = () => {
  return document.getElementsByClassName("html5-video-player")[0] || undefined;
};

const getYTHashID = () => {
  const currentUrl = window.location.href;
  const videoIdPosition = currentUrl.indexOf("v=");
  return currentUrl.substring(videoIdPosition + 2, videoIdPosition + 13);
};

const getYTVideoName = () => {
  const title = document.getElementsByTagName("title")[0];
  return title.textContent;
};

// {
//   "url": "https://www.youtube.com/watch?v=dTQzCWtEBNY&ab_channel=JoeSpeen",
//     "from": 120,
//     "to": 240,
//     "hashID": "dTQzCWtEBNY"
// }

const sendSkipPhase = async (skipPhase) => {
  const data = {
    url: window.location.href,
    from: +skipPhase.start.toFixed(0),
    to: +skipPhase.end.toFixed(0),
    hashID: getYTHashID(),
    name: getYTVideoName(),
  };

  console.log(data, "SEND DATA");
  const rawResponse = await fetch("https://skiper.kirx.site/video", {
    method: "POST",
    body: JSON.stringify(data),
    // body: data,
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const content = await rawResponse;

  console.log(content, "CONTANT");
};

const checkIfVideoIsYouTube = (url) => {
  return !!url.includes("youtube");
};

const getMainVideo = () => {
  const video = document.getElementsByTagName("video");
  if (video.length === 1) {
    const mainVideo = video[0];
    if (checkIfVideoIsYouTube(mainVideo.src)) {
      return mainVideo;
    } else {
      console.log("Video is not YouTube.");
      return null;
    }
  } else {
    console.log("Not found video.");
    return null;
  }
};

const createSkipButton = () => {
  console.log("createSkipButton");
  const videoContainer = getYTVideoPlayer();
  console.log(videoContainer);
  const bc = buttonContainer();
  bc.append(skipBtn());
  videoContainer.append(bc);
};

let seekerData = {
  currentTime: 0,
  events: [],
  counterForClear: 0,
};

function clearSeekerData() {
  console.log("CLEARED DATA");
  seekerData = {
    currentTime: 0,
    events: [],
    counterForClear: 0,
  };
}

function createSkipDialog(data) {
  const skipPhase = calculateDifference(data.events);
  const { start, end, difference } = skipPhase;
  const existedDialog = document.getElementById("skipDialog");
  if (existedDialog) return;
  // console.log(data, 'DOTA', calculateDifference(data.events))
  console.log(
    "SAVE SKIP AS: ",
    `FROM: ${start} TO: ${end} DURATION: ${difference}`
  );

  const dialogContainer = dialog();
  setTimeout(() => {
    dialogContainer.remove();
  }, 7500);

  const textContent = text("Это была реклама?");
  dialogContainer.append(textContent);

  const agreeButton = button("Yes");
  agreeButton.onclick = () => {
    sendSkipPhase(skipPhase);
    dialogContainer.remove();
  };
  const disagreeButton = button("No");
  disagreeButton.onclick = () => {
    dialogContainer.remove();
  };

  const divContainer = div();
  divContainer.style.marginTop = "8px";
  divContainer.style.display = "flex";
  divContainer.style.flexDirection = "row";
  divContainer.style.alignItems = "center";
  divContainer.style.justifyContent = "space-between";

  divContainer.append(agreeButton);
  divContainer.append(disagreeButton);

  dialogContainer.append(divContainer);

  const videoContainer = getYTVideoPlayer();
  videoContainer.append(dialogContainer);
}

function calculateDifference(values) {
  if (values.length === 0) {
    return { difference: 0, start: null, end: null };
  }
  const start = values[0].from;
  const end = values[values.length - 1].to;
  const difference = end - start;

  return { difference, start, end };
}

function seeker(event) {
  if (seekerData.counterForClear >= 5) {
    if (seekerData.events.length) {
      createSkipDialog(new Object(seekerData));
    }
    clearSeekerData();
  }
  const currentTime = event.target.currentTime;

  if (
    Math.abs(currentTime - seekerData.currentTime) > 4.5 &&
    Math.abs(seekerData.currentTime) > 0
  ) {
    seekerData.events.push({ from: seekerData.currentTime, to: currentTime });
  } else {
    seekerData.counterForClear += 1;
  }

  seekerData.currentTime = currentTime;
}

const listener = (mainVideo) => {
  mainVideo.addEventListener("timeupdate", seeker);
};

const runMain = (mainVideo) => {
  console.log("runMain");
  listener(mainVideo);
};

const main = () => {
  console.log("MAIN");
  const mainVideo = getMainVideo();
  if (!!mainVideo) {
    runMain(mainVideo);
  }
};

main();
