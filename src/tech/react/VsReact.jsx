let VsReactSidebar = require('./sidebar/VsReactSidebar.jsx')
let VsReactDisplay = require('./display/VsReactDisplay.jsx')

let VsReact = React.createClass({

    propTypes: {
        feedData: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            selectedMention: null
        }
    },

    render: function () {
        return (
            <div>
                <VsReactSidebar
                    feedElements={this.props.feedData.elements}
                    selectMention={this.selectMention} />
                <VsReactDisplay mention={this.state.selectedMention} />
            </div>
        )
    },

    selectMention: function (mention) {
        this.setState({
            selectedMention: mention
        })
    }
})

module.exports = VsReact
