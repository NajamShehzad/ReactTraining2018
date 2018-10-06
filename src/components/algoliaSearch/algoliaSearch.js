import React, { Component } from 'react';

const PATH_BASE = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

class AlgoliaSearch extends Component {
    constructor(props) {
        super()
        this.state = {
            search: '',
            data: []
        }
    }

    search = (e) => {
        const { search, data } = this.state;
        e.preventDefault();
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search}&&${PARAM_PAGE}`)
            .then(data1 => {
                return data1.json()
            })
            .then(searchData => {
                console.log(searchData.hits);
                console.log(data);

                this.setState({ data: data.concat(searchData.hits) })
            })

    }

    render() {
        const { search, data } = this.state;
        return (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.search}>
                    <input
                        value={search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                    />
                    <button>
                        Search
                    </button>
                </form>
                <div>
                    {data.map((data,index) => {
                        return (
                            <div key={data.objectID + index}>
                                {data.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default AlgoliaSearch;