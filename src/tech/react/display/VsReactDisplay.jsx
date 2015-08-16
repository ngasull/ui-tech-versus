
let VsReactDisplay = React.createClass({

    propTypes: {
        mention: React.PropTypes.object
    },

    render: function () {

        if (this.props.mention)
            return (
                <div className="col-md-8">
                    <h2>{this.props.mention.title}</h2>
                    <p>{this.props.mention.content}</p>
                </div>
            )
        else
            return <div/>
    }
})

module.exports = VsReactDisplay
