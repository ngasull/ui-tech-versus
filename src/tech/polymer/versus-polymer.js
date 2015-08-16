let q = require('q')

function bootstrap (rootElement, feedData) {

    let importFiles = ['app.html', 'sidebar/sidebar.html']

    let promises = importFiles.map(impt => {

        let defer = q.defer()
        Polymer.Base.importHref('tech/polymer/' + impt,
            (e)     => defer.resolve(e.target.import),
            (err)   => defer.reject(err))

        return defer.promise
    })

    q.all(promises)
        .fail(console.error)
        .then((imports) => {
            console.log('Polymer elements loaded')
            // NOT GOOD! But only way found to pass data
            window.VsPolymer = { feedData }
            rootElement.appendChild(document.createElement('vs-polymer'))
        })
}

module.exports = { bootstrap }
