
let fs = require('fs')

var VsRactiveSidebar = Ractive.extend({

    isolated: true,

    template: fs.readFileSync(__dirname + '/VsRactiveDisplay.html', 'utf8'),
});

module.exports = VsRactiveSidebar
