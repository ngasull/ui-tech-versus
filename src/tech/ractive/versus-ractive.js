
let fs = require('fs')
let VsRactiveSidebar = require('./sidebar/VsRactiveSidebar')
let VsRactiveDisplay = require('./display/VsRactiveDisplay')

function bootstrap (rootElement, feedData) {

    var versusRactive = new Ractive({
        el: rootElement,

        template: fs.readFileSync(__dirname + '/versus-ractive.html', 'utf8'),

        data: {
            feedData,

            select: function (mention) {
                versusRactive.set('activeMention', mention)
            }
        },

        components: { VsRactiveSidebar, VsRactiveDisplay }
    });
}

module.exports = { bootstrap }
