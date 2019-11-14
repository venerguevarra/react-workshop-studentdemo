import React from 'react';

class Item extends React.Component {
    state = {
        text: this.props.text
    };

    onChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    componentDidMount() {
        console.log("Mounted ", this.props.text);
    }

    componentWillUnmount() {
        console.log("Unmounting ", this.props.text);
    }

    render() {
        console.log("rerendering ", this.props.text);
        const { text } = this.state;
        return (
            <li>
                <input value={text} onChange={this.onChange} />
            </li>
        );
    }
}

export default Item;