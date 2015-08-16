let VsReactSidebarElement = React.createClass({

    propTypes: {
        mention: React.PropTypes.object.isRequired,
        selectMention: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            <li>
                <a href="#" onClick={this.onMentionClick}>
                    <div>{this.props.mention.title}</div>
                    <p>{this.props.mention.shortDesc}</p>
                </a>
            </li>
        )
    },

    onMentionClick: function(e) {
        this.props.selectMention(this.props.mention)
    }
})

module.exports = VsReactSidebarElement
