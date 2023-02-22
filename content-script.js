// const getYTVideo = () => {
//     return document.getElementsByClassName('video-stream html5-main-video')[0] || undefined;
// }
//
const getYTVideoPlayer = () => {
    return document.getElementsByClassName('html5-video-player')[0] || undefined;
}
//
// const getYTVideoID = (url) => {
//     const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[7].length === 11) ? match[7] : false;
// }
//
// const setYTVideoHandler = () => {
//     const video = getYTVideo()
//     video.addEventListener('loadeddata', YTVideoHandler, false);
// }
//
// const between = (x, min, max) => {
//     return x >= min && x <= max;
// }
//
// const debounce = (func, wait, immediate) => {
//     let timeout;
//     return function executedFunction() {
//         let context = this;
//         let args = arguments;
//         let later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         let callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };
//
// const YTVideoHandler = () => {
//     videoNotFounded()
//     // fetch(`http://localhost:5000/video/${getYTVideoID(document.URL)}`)
//     //     .then((response) => {
//     //         return response.json();
//     //     })
//     //     .then((data) => {
//     //         console.log(data);
//     //         if (data.code === 200) {
//     //             videoFounded(data.result)
//     //         } else {
//     //             videoNotFounded()
//     //         }
//     //     });
// }
//
// const sendPost = async (endpoint = '', data = {}) => {
//     const response = await fetch(`http://localhost:5000${endpoint}`, {
//         method: 'POST',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }
//
// const saveVideoOnBackEnd = (start, end) => {
//     sendPost(`/video`, {
//         url: document.URL,
//         hashID: getYTVideoID(document.URL),
//         skipPhase: {
//             start,
//             end
//         }
//     }).then(res => {
//         console.log(res, 'RESA')
//     }).catch(err => {
//         console.log(err, 'ERRA')
//     })
// }
//
// const changeSkipRate = (skipPhase, up = true) => {
//     sendPost(`/rate${up ? 'up' : 'down'}/${skipPhase.id}`).then(res => {
//         console.log(res, 'RESA')
//     }).catch(err => {
//         console.log(err, 'ERRA')
//     })
// }
//
// const testSeek = () => {
//     const vid = getYTVideo();
//     vid.onseeking = function () {
//         let seekStartTime = 0;
//         if (vid.played.length >= 1) {
//             seekStartTime = vid.played.end(vid.played.length - 1);
//         }
//         console.log("Video seeked from - " + seekStartTime + " seconds")
//     };
//     vid.onseeked = function () {
//         let seekEndTime = vid.currentTime;
//         console.log("Video seeked to - " + seekEndTime + " seconds")
//     };
// }
//
// const videoNotFounded = () => {
//     console.log('videoNotFounded');
//     const video = getYTVideo();
//
//     const skippedPhases = []
//
//     let timing = 0;
//     video.addEventListener('timeupdate', function () {
//         let previousTime = timing;
//         let currentTime = Math.round(this.currentTime);
//         if (currentTime > previousTime + 1) {
//             debounce(() => {
//                 console.log('Video was skipped from ' + previousTime + ' to ' + currentTime);
//                 if (!skippedPhases.find((sp) => between(previousTime, sp.start, sp, end) || between(currentTime, sp.start, sp.end))) {
//                     if (skippedPhases.find((sp => sp.end === previousTime))) {
//                         skippedPhases.find((sp => sp.end === previousTime)).end = currentTime
//                     } else {
//                         skippedPhases.push({
//                             start: previousTime,
//                             end: currentTime,
//                         })
//                     }
//                 }
//             }, 1000)()
//         }
//         timing = currentTime;
//
//         console.log(skippedPhases)
//     });
//
//     // video.ontimeupdate = () => {
//     //     if (!isSeeking) {
//     //         startTime = video.currentTime
//     //
//     //     } else {
//     //         debounce((e) => {
//     //             endTime = video.currentTime
//     //             console.log(`GOTCHA: ${startTime} to ${endTime}`)
//     //         }, 1000)()
//     //     }
//     // }
//     // video.onseeking = (e) => {
//     //     isSeeking = true
//     //     console.log('SEEKING')
//     //     // console.log('onseeking', e, video.currentTime)
//     // }
//     // video.onseeked = (e) => {
//     //     isSeeking = false
//     //     // console.log('onseeked', e, video.currentTime)
//     // }
//
//
//     // video.oncanplay = (event) => {
//     //     console.log('Video can start, but not sure it will play through.');
//     // };
//     // video.oncanplaythrough = (event) => {
//     //     console.log('I think I can play through the entire ' +
//     //         'video without ever having to stop to buffer.');
//     // };
//     // video.onwaiting = (event) => {
//     //     console.log('Video is waiting for more data.');
//     // };
//
//     // video.onseeking = () => {
//     //     if (video.played.length >= 1) {
//     //         seekStartTime = video.played.end(video.played.length - 1);
//     //     }
//     // }
//     // video.onseeked = () => {
//     //     seekEndTime = video.currentTime;
//     // }
//     //
//     // video.onplay = () => {
//     //     console.log(`GOTCHA: ${seekStartTime} to ${seekEndTime}`)
//     // }
// }
//
// const videoNotFounded2 = () => {
//     console.log('videoNotFounded')
//     let currentVideoTime = 0;
//     let isSeeking = false;
//     let createdElement = false
//     const videoPlayer = getYTVideoPlayer()
//     const video = getYTVideo()
//
//     const onAcceptButtonClick = () => {
//         saveVideoOnBackEnd(currentVideoTime, video.currentTime)
//     }
//
//     const onDeclineButtonClick = () => {
//         createdElement = false
//     }
//
//     video.addEventListener('timeupdate', () => {
//         if (!isSeeking) {
//             currentVideoTime = video.currentTime
//         } else {
//             if (createdElement) {
//                 const alreadyCreatedOnSeekEndComponent = document.getElementById('onSeekEndComponent')
//                 alreadyCreatedOnSeekEndComponent.remove()
//                 videoPlayer.append(onSeekEndComponent(onAcceptButtonClick, onDeclineButtonClick))
//             } else {
//                 videoPlayer.append(onSeekEndComponent(onAcceptButtonClick, onDeclineButtonClick))
//                 createdElement = true
//             }
//         }
//     })
//
//     video.addEventListener('seeking', () => {
//         isSeeking = true;
//     })
//
//     video.addEventListener('seeked', () => {
//         isSeeking = false;
//     });
// }
//
// const findSkipPhase = (skipPhases, currentTime) => {
//     return skipPhases.find(sp => {
//         return between(currentTime, sp.start, sp.end)
//     })
// }
//
// const videoFounded = (result) => {
//     let createdElement = false
//     const video = getYTVideo();
//
//     const onSkipButtonPress = (skipPhase) => {
//         const onAcceptButtonClick = () => {
//             changeSkipRate(skipPhase, true)
//             const afterSkipComponent = document.getElementById('afterSkipComponent')
//             afterSkipComponent.remove()
//         }
//
//         const onDeclineButtonClick = () => {
//             changeSkipRate(skipPhase, false)
//             const afterSkipComponent = document.getElementById('afterSkipComponent')
//             afterSkipComponent.remove()
//         }
//
//         video.currentTime = parseFloat(skipPhase.end);
//         setTimeout(() => {
//             console.log('KEKA')
//             const skipButtonComponent = document.getElementById('skipButtonComponent')
//             skipButtonComponent.remove()
//             createdElement = false
//             const videoPlayer = getYTVideoPlayer()
//             videoPlayer.append(afterSkipComponent(onAcceptButtonClick, onDeclineButtonClick))
//         }, 3000)
//     }
//
//     video.addEventListener('timeupdate', () => {
//         const skipPhaseEnd = findSkipPhase(result.skipPhases, video.currentTime)
//         if (skipPhaseEnd) {
//             const videoPlayer = getYTVideoPlayer()
//             if (createdElement) {
//                 const skipButtonComponent = document.getElementById('skipButtonComponent')
//                 skipButtonComponent.remove()
//                 videoPlayer.append(component(() => onSkipButtonPress(skipPhaseEnd)))
//             } else {
//                 videoPlayer.append(component(() => onSkipButtonPress(skipPhaseEnd)))
//                 createdElement = true;
//             }
//         }
//     })
// }
//
// const main = () => {
//     setYTVideoHandler()
// }
//
// main()

const checkIfVideoIsYouTube = (url) => {
    return !!url.includes('youtube')
}

const getMainVideo = () => {
    const video = document.getElementsByTagName('video');
    if (video.length === 1) {
        const mainVideo = video[0]
        if (checkIfVideoIsYouTube(mainVideo.src)) {
            return mainVideo
        } else {
            console.log('Video is not YouTube.')
            return null
        }
    } else {
        console.log('Not found video.')
        return null
    }
}

const createSkipButton = () => {
    console.log('createSkipButton')
    const videoContainer = getYTVideoPlayer();
    console.log(videoContainer)
    const bc = buttonContainer();
    bc.append(skipBtn());
    videoContainer.append(bc);
}

let seekerData = {
    currentTime: 0,
    events: [],
    counterForClear: 0,
}

function clearSeekerData() {
    console.log('CLEARED DATA');
    seekerData = {
        currentTime: 0,
        events: [],
        counterForClear: 0,
    }
}

function createSkipDialog(data) {
    const {start, end, difference} = calculateDifference(data.events);
    const existedDialog = document.getElementById('skipDialog');
    if (existedDialog) return;
    // console.log(data, 'DOTA', calculateDifference(data.events))
    console.log('SAVE SKIP AS: ', `FROM: ${start} TO: ${end} DURATION: ${difference}`)

    const dialogContainer = dialog();
    setTimeout(() => {
        dialogContainer.remove();
    }, 7500)

    const textContent = text('Это была реклама?');
    dialogContainer.append(textContent);

    const agreeButton = button('Yes')
    const disagreeButton = button('No')
    disagreeButton.onclick = () => {
        dialogContainer.remove();
    }

    const divContainer = div();
    divContainer.style.marginTop = '8px'
    divContainer.style.display = 'flex'
    divContainer.style.flexDirection = 'row'
    divContainer.style.alignItems = 'center'
    divContainer.style.justifyContent = 'space-between'

    divContainer.append(agreeButton)
    divContainer.append(disagreeButton)

    dialogContainer.append(divContainer);

    const videoContainer = getYTVideoPlayer();
    videoContainer.append(dialogContainer);
}

function calculateDifference(values) {
    if (values.length === 0) {
        return {difference: 0, start: null, end: null};
    }
    const start = values[0].from;
    const end = values[values.length - 1].to;
    const difference = end - start;

    return {difference, start, end};
}

function seeker(event) {
    if (seekerData.counterForClear >= 5) {
        if (seekerData.events.length) {
            createSkipDialog(new Object(seekerData));
        }
        clearSeekerData();
    }
    const currentTime = event.target.currentTime;

    if (Math.abs(currentTime - seekerData.currentTime) > 4.5 && Math.abs(seekerData.currentTime) > 0) {
        seekerData.events.push({from: seekerData.currentTime, to: currentTime})
    } else {
        seekerData.counterForClear += 1;
    }

    seekerData.currentTime = currentTime;
}

const listener = (mainVideo) => {
    mainVideo.addEventListener('timeupdate', seeker);
}

const runMain = (mainVideo) => {
    console.log('runMain')
    listener(mainVideo);
}


const main = () => {
    console.log('MAIN')
    const mainVideo = getMainVideo();
    if (!!mainVideo) {
        runMain(mainVideo)
    }
}

main()
