
let fs = require('fs')

var VsRactiveSidebar = Ractive.extend({

    isolated: true,

    template: fs.readFileSync(__dirname + '/VsRactiveSidebar.html', 'utf8'),

    oninit: function () {
        this.on('select', (e) => {
            e.original.preventDefault()
            this.get('select')(e.context)
        })
    },
});

module.exports = VsRactiveSidebar
