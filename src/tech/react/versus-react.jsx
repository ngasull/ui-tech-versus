let VsReact = require('./VsReact.jsx')

function bootstrap (rootElement, feedData) {
    React.render(<VsReact feedData={feedData} />, rootElement)
}

module.exports = { bootstrap }
