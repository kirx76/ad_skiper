// const buttonContainer = () => {
//     const container = document.createElement('div');
//
//     container.style.display = 'flex';
//     container.style.justifyContent = 'flex-start';
//     container.style.alignItems = 'flex-end';
//     // container.style.width = '100%';
//     // container.style.height = '100%';
//     container.style.position = 'absolute';
//     container.style.zIndex = '10';
//     container.style.bottom = '60px';
//     container.style.left = '12px';
//     // container.style.backgroundColor = 'red';
//
//     return container;
// }

// const skipBtn = () => {
//     const btn = document.createElement('button');
//
//     btn.textContent = 'Skip';
//     btn.style.display = 'flex';
//     btn.style.padding = '10px';
//     btn.style.backgroundColor = '#8787874d';
//     btn.style.outline = 'none';
//     btn.style.border = 'none';
//     btn.style.borderRadius = '6px';
//     btn.style.cursor = 'pointer';
//     btn.style.color = 'white';
//     btn.style.fontFamily = 'Roboto';
//     // btn.style.marginBottom = '70px';
//     // btn.style.marginLeft = '16px';
//
//     return btn;
// }

const div = () => {
    return document.createElement('div')
}

const dialog = () => {
    const div = document.createElement('div')

    div.id = 'skipDialog'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    // div.style.alignItems = 'center'
    // div.style.justifyContent = 'space-around'
    div.style.backgroundColor = '#8787874d'
    div.style.position = 'absolute';
    div.style.zIndex = '10';
    div.style.bottom = '60px';
    div.style.right = '12px';
    div.style.padding = '24px';
    div.style.borderRadius = '6px';

    return div;
}

const text = (value) => {
    const span = document.createElement('span')

    span.textContent = value
    // span.style.backgroundColor = 'blue'

    return span
}

const button = (value) => {
    const btn = document.createElement('button');

    btn.textContent = value;
    btn.style.display = 'flex';
    btn.style.padding = '10px';
    btn.style.backgroundColor = '#8787874d';
    btn.style.outline = 'none';
    btn.style.border = 'none';
    btn.style.borderRadius = '6px';
    btn.style.cursor = 'pointer';
    btn.style.color = 'white';
    btn.style.fontFamily = 'Roboto';

    return btn
}

// const skipButton = (onSkipButtonPress) => {
//     let btn = document.createElement("button");
//
//     btn.textContent = 'Пропустить';
//
//     btn.style.marginLeft = 'auto';
//     btn.style.display = 'flex';
//     btn.style.padding = '10px';
//     btn.style.backgroundColor = '#8787874d';
//     btn.style.outline = 'none';
//     btn.style.border = 'none';
//     btn.style.borderRadius = '6px';
//     btn.style.marginRight = '16px';
//     btn.style.cursor = 'pointer';
//     btn.style.color = 'white';
//     btn.style.fontFamily = 'Roboto';
//
//     btn.onclick = onSkipButtonPress
//     return btn
// }
//
// const controlPanel = () => {
//     let div = document.createElement("div")
//
//     div.style.height = '10px';
//     div.style.marginTop = 'auto';
//     div.style.paddingBottom = '90px';
//     div.style.width = '100%';
//
//     return div;
// }
//
// const defaultDiv = () => {
//     let div = document.createElement("div")
//     div.style.position = 'absolute';
//     div.style.zIndex = '25';
//     div.style.bottom = '0';
//     div.style.display = 'flex';
//     div.style.alignItems = 'flex-end';
//     div.style.right = '0'
//
//     return div;
// }
//
// const component = (onSkipButtonPress) => {
//     const container = defaultDiv()
//     const panel = controlPanel()
//     const btn = skipButton(onSkipButtonPress)
//     panel.append(btn)
//     container.append(panel)
//     container.id = 'skipButtonComponent'
//     return container
// }
//
//
// const onSeekEnd = (onAcceptButtonClick, onDeclineButtonClick, mainContainer) => {
//     const acceptButton = document.createElement('button')
//     acceptButton.textContent = 'Да'
//     acceptButton.style.padding = '10px';
//     acceptButton.style.backgroundColor = '#8787874d';
//     acceptButton.style.outline = 'none';
//     acceptButton.style.border = 'none';
//     acceptButton.style.borderRadius = '6px';
//     acceptButton.style.marginRight = '16px';
//     acceptButton.style.cursor = 'pointer';
//     acceptButton.style.color = 'white';
//     acceptButton.style.fontFamily = 'Roboto';
//
//     acceptButton.onclick = onAcceptButtonClick
//
//     const declineButton = document.createElement('button')
//     declineButton.textContent = 'Нет'
//     declineButton.style.padding = '10px';
//     declineButton.style.backgroundColor = '#8787874d';
//     declineButton.style.outline = 'none';
//     declineButton.style.border = 'none';
//     declineButton.style.borderRadius = '6px';
//     declineButton.style.marginRight = '16px';
//     declineButton.style.cursor = 'pointer';
//     declineButton.style.color = 'white';
//     declineButton.style.fontFamily = 'Roboto';
//
//     declineButton.onclick = onDeclineButtonClick
//
//     const buttonContainer = document.createElement('div')
//     buttonContainer.style.display = 'flex'
//     buttonContainer.style.marginLeft = '16px'
//     buttonContainer.append(acceptButton)
//     buttonContainer.append(declineButton)
//
//     const span = document.createElement('span')
//     span.textContent = 'Это конец рекламы?'
//     span.style.fontFamily = 'Roboto'
//     span.style.fontSize = '16px'
//     span.style.color = 'white'
//
//     const textContainer = document.createElement('div')
//     textContainer.style.width = '100%'
//     textContainer.style.height = '100%'
//     textContainer.style.backgroundColor = '#8787874d'
//     textContainer.style.display = 'flex'
//     textContainer.style.alignItems = 'center'
//     textContainer.style.borderRadius = '6px';
//     textContainer.style.padding = '0 8px'
//     textContainer.append(span)
//
//     const container = document.createElement('div')
//     container.style.display = 'flex'
//     container.style.alignItems = 'center'
//     container.style.marginLeft = 'auto'
//     container.style.borderRadius = '8px';
//
//     const div = document.createElement('div')
//     div.style.display = 'flex'
//     container.append(textContainer)
//     container.append(buttonContainer)
//     div.append(container)
//
//     return div
// }
//
// const onSeekEndComponent = (onAcceptButtonClick, onDeclineButtonClick) => {
//     const container = defaultDiv()
//     const panel = controlPanel()
//     const text = onSeekEnd(onAcceptButtonClick, onDeclineButtonClick, container)
//     panel.append(text)
//     container.append(panel)
//     container.id = 'onSeekEndComponent'
//     return container
// }
//
// const raterComponent = (onAcceptButtonClick, onDeclineButtonClick) => {
//     const acceptButton = document.createElement('button')
//     acceptButton.textContent = 'Да'
//     acceptButton.style.padding = '10px';
//     acceptButton.style.backgroundColor = '#8787874d';
//     acceptButton.style.outline = 'none';
//     acceptButton.style.border = 'none';
//     acceptButton.style.borderRadius = '6px';
//     acceptButton.style.marginRight = '16px';
//     acceptButton.style.cursor = 'pointer';
//     acceptButton.style.color = 'white';
//     acceptButton.style.fontFamily = 'Roboto';
//
//     acceptButton.onclick = onAcceptButtonClick
//
//     const declineButton = document.createElement('button')
//     declineButton.textContent = 'Нет'
//     declineButton.style.padding = '10px';
//     declineButton.style.backgroundColor = '#8787874d';
//     declineButton.style.outline = 'none';
//     declineButton.style.border = 'none';
//     declineButton.style.borderRadius = '6px';
//     declineButton.style.marginRight = '16px';
//     declineButton.style.cursor = 'pointer';
//     declineButton.style.color = 'white';
//     declineButton.style.fontFamily = 'Roboto';
//
//     declineButton.onclick = onDeclineButtonClick
//
//     const buttonContainer = document.createElement('div')
//     buttonContainer.style.display = 'flex'
//     buttonContainer.style.marginLeft = '16px'
//     buttonContainer.append(acceptButton)
//     buttonContainer.append(declineButton)
//
//     const span = document.createElement('span')
//     span.textContent = 'Полезно?'
//     span.style.fontFamily = 'Roboto'
//     span.style.fontSize = '16px'
//     span.style.color = 'white'
//
//     const textContainer = document.createElement('div')
//     textContainer.style.width = '100%'
//     textContainer.style.height = '100%'
//     textContainer.style.backgroundColor = '#8787874d'
//     textContainer.style.display = 'flex'
//     textContainer.style.alignItems = 'center'
//     textContainer.style.borderRadius = '6px';
//     textContainer.style.padding = '0 8px'
//     textContainer.append(span)
//
//     const container = document.createElement('div')
//     container.style.display = 'flex'
//     container.style.alignItems = 'center'
//     container.style.marginLeft = 'auto'
//     container.style.borderRadius = '8px';
//
//     const div = document.createElement('div')
//     div.style.display = 'flex'
//     container.append(textContainer)
//     container.append(buttonContainer)
//     div.append(container)
//
//     return div
// }
//
//
// const afterSkipComponent = (onAcceptButtonClick, onDeclineButtonClick) => {
//     const container = defaultDiv()
//     const panel = controlPanel()
//     const rater = raterComponent(onAcceptButtonClick, onDeclineButtonClick)
//     panel.append(rater)
//     container.append(panel)
//     container.id = 'afterSkipComponent'
//     return container
// }
