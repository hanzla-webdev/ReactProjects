function coustomRender(createElement, container) {
    const domElement = document.createElement(createElement.type);
    domElement.innerHTML = createElement.children;
    domElement.setAttribute('href', createElement.props.href)
    domElement.setAttribute('target', createElement.props.target)

    container.appendChild(domElement);
}


const createElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

const mainContainer = document.querySelector("#root")

coustomRender(createElement, mainContainer);