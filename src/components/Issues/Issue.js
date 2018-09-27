import React, { Component } from 'react';
import { Data } from './IssusesData';


class Issues extends Component {
    constructor() {
        super();
        this.state = {
            data: Data,
            text: '',
            searchData: Data
        }
        this.search = this.search.bind(this);
    }


    changeFavorite(index) {
        const { searchData } = this.state;

        searchData[index].isFavorite = !searchData[index].isFavorite;

        this.setState({ searchData });
    }

    search(e) {
        const text = e.target.value;
        let { searchData, data } = this.state;
        if (text === "is:open") {
            searchData = data.filter(data => {
                return data.isOpen;
            })
        } else if (text === "is:close") {
            searchData = data.filter(data => {
                return !data.isOpen;
            })
        }
        else {
            searchData = data;
        }
        this.setState({ text, searchData })
    }


    render() {
        const { searchData, text } = this.state;
        return (
            <div>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <input
                            type='text'
                            value={text}
                            onChange={this.search}
                        />
                    </div>
                </div>
                {searchData.map((data, index) => {
                    return (
                        <div key={data.title + index} style={{ margin: 10 }}>

                            <h2>
                                {data.isOpen ?
                                    <i style={{ color: 'green' }}
                                        className="fa fa-check-circle"></i>

                                    :
                                    <i
                                        className="fa fa-check-circle"></i>
                                }

                                {data.title}
                            </h2>
                            <h3>{data.date.toLocaleString()}</h3>
                            <div style={{ fontSize: 30 }}>
                                <i className="fa fa-comment-o"></i>
                                {data.comments}
                                {
                                    data.isFavorite ? <i className="fa fa-heart" onClick={() => this.changeFavorite(index)} style={{ color: 'red', marginLeft: 20 }}></i>
                                        : <i style={{ marginLeft: 20 }} onClick={() => this.changeFavorite(index)} className="fa fa-heart-o"></i>
                                }
                            </div >

                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Issues;