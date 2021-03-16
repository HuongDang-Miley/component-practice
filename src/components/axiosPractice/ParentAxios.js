import axios from 'axios'
import React, { Component } from 'react'
import './style.css'
// import Article from './Article.js'

export default class ParentAxios extends Component {
    state = {
        articles: [],
        currIndex: 0,
        show: false,
    }

    //use promise to control order

    // componentDidMount() {
    //     axios.get('http://jsonplaceholder.typicode.com/posts')
    //         .then((result) => {
    //             this.setState({
    //                 ...this.state,
    //                 article: result.data
    //             })
    //         })
    // }


    // use asyn await to control order
    async componentDidMount() {
        let result = await axios.get('http://jsonplaceholder.typicode.com/posts')
        this.setState({
            ...this.state,
            articles: result.data,
            show: true
        })
        
    }


    render() {
        const { articles, currIndex } = this.state
        let index = Number(currIndex)
        // console.log(this.state)
        // console.log('index', index)
        // console.log('articles', articles[0].title)
        // console.log('articles', articles[currIndex].title)
        // console.log('currIndex', currIndex)
        return (
            <div className='classComponent'>
                testing
                {/* {this.state.articles.map(item => (
                    <Article title={item.title} body={item.body} />
                ))} */}
                {this.state.show === true
                    ? (<h1>show</h1>)
                    : null}
                {/* <Article title={articles[currIndex].title} body={articles[currIndex].body} /> */}


                <button>Back</button>
                <button>Forward</button>
            </div>
        )
    }
}
