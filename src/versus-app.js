
let techs = {
    angular: require('./tech/angular/versus-angular.js'),
    polymer: require('./tech/polymer/versus-polymer.js'),
    ractive: require('./tech/ractive/versus-ractive.js'),
    react: require('./tech/react/versus-react.js')
}

let feedData = require('./feed-data')
let rootElement = document.getElementById('root')
let techSelector = document.getElementById('tech')

techSelector.addEventListener('change', (e) => {
    let techName = e.target.value

    if (techName) {
        // Reset the root element
        if (rootElement.hasChildNodes()) {
            for (let i = 0; i < rootElement.childNodes.length; i++) {
                rootElement.removeChild(rootElement.childNodes[i])
            }
        }

        techs[techName].bootstrap(rootElement, feedData)
    }
})
