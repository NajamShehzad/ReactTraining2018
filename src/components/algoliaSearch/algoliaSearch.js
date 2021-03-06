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
            data: [],
            page: '0',
            searched:{}
        }
    }

    search = (e = '', pageNo) => {
        let { search, data, page, searchWord } = this.state;
        if (e !== '' && !pageNo) {
            e.preventDefault();
        }
        console.log('Search');
        if (pageNo) {
            page = pageNo;
            data = []
        }

        if (searchWord === search) {
            fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchWord}&&${PARAM_PAGE}${page}`)
                .then(data1 => {
                    return data1.json()
                })
                .then(searchData => {
                    console.log(searchData.hits);
                    // console.log(data);
                    this.setState({ data: data.concat(searchData.hits), page: Number(page) + 1 })
                })
        } else {
            fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchWord}&&${PARAM_PAGE}${0}`)
                .then(data1 => {
                    return data1.json()
                })
                .then(searchData => {
                    console.log(searchData.hits);
                    // console.log(data);

                    this.setState({ data: searchData.hits, page: 0, searchWord: search ,[searchWord]:searchData})
                })
        }

    }

    // componentDidMount() {
    //     this.refs.iScroll.addEventListener("scroll", () => {
    //         if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
    //             this.search();
    //         }
    //     });
    // }

    render() {
        const { search, data, page } = this.state;
        return (
            <div ref="iScroll" style={{ height: "500px", overflow: "auto", textAlign: 'center' }}>
                <form onSubmit={this.search}>
                    <input
                        value={search}
                        onChange={(e) => {
                            if (e.target.value == "") {
                                this.setState({ search: '', data: [], page: '0' })
                            }
                            this.setState({ search: e.target.value })
                        }}
                    />
                    <button>
                        Search
                    </button>
                    <h4>
                        Page = {page == 0 ? page : page - 1}
                    </h4>
                </form>
                <div>
                    {data.map((data, index) => {
                        return (
                            <div key={data.objectID + index}>
                                {data.title}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <span onClick={() => this.search(null, '1')}>Page1</span>
                    <span onClick={() => this.search(null, '2')}>Page2</span>
                    <span onClick={() => this.search(null, '3')}>Page3</span>
                    <span onClick={() => this.search(null, '4')} >Page4</span>
                    <span onClick={() => this.search(null, '5')}>Page5</span>
                </div>
            </div>
        )
    }
}
export default AlgoliaSearch;