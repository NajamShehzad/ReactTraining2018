import React, { Component } from 'react';


class ClassWork extends Component {

    constructor() {
        super()
        this.state = {
            text: '',
            list: [

            ]
        }
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    changeText(e) {
        const text = e.target.value;

        this.setState({ text });

    }
    addItem() {
        const { text, list } = this.state;
        const value = text.split('').reverse().join('');
        const date = new Date().toLocaleTimeString();
        const obj = { value, date, hide: false }
        list.push(obj);

        this.setState({
            list, text: ''
        })
        console.log(list);

    }
    show(index) {
        const { list } = this.state;
        list[index].hide = false;
        this.setState({ list })
    }
    hide(index) {
        const { list } = this.state;
        list[index].hide = true;
        this.setState({ list })

    }
    Screen() {
        const { text } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                <h2>
                    Add Item
                </h2>
                <div>
                    <input
                        type="text"
                        value={text}
                        placeholder="Type here"
                        autoFocus
                        onChange={this.changeText.bind(this)}
                    />
                    <button onClick={this.addItem.bind(this)}>
                        Add
                </button>
                </div>
            </div>
        )
    }
    listItem() {
        const { list } = this.state;
        return (
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Date</th>
                        <th>Show/Hide</th>
                    </tr>
                </thead>
                <tbody>

                    {list.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{!data.hide && data.value}</td>
                                <td>{!data.hide && data.date}</td>
                                <td>{data.hide ? <button onClick={() => this.show(index)} >Show</button> : <button onClick={() => this.hide(index)}>Hide</button>}</td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>

        )
    }
    render() {
        return (
            <div>
                {this.Screen()}
                {this.listItem()}
            </div>
        )
    }

}
export default ClassWork;