import React, { Component } from 'react';
import { Data } from './IssusesData';


class Issues extends Component {
    constructor() {
        super();
        this.state = {
            data: Data
        }
    }

    changeFavorite(index) {
        const { data } = this.state;

        data[index].isFavorite = !data[index].isFavorite;

        this.setState({ data });
    }


    render() {
        const { data } = this.state;
        return (
            <div>
                {data.map((data, index) => {
                    return (
                        <div key={data.title} style={{ margin: 10 }}>
                            <h2>{data.title}</h2>
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