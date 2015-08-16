
let VsReactSidebarElement = require('./VsReactSidebarElement.jsx')

let VsReactSidebar = React.createClass({

    propTypes: {
        feedElements: React.PropTypes.arrayOf(Object).isRequired,
        selectMention: React.PropTypes.func.isRequired
    },

    render: function () {

        let reactElements = this.props.feedElements.map((el) => (
            <VsReactSidebarElement
                key={el.id}
                mention={el}
                selectMention={this.props.selectMention}/>
        ))

        return (
            <ul className="col-md-4">
                { reactElements }
            </ul>
        )
    }
})

module.exports = VsReactSidebar
