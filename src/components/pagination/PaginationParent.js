import React, { Component } from 'react'

import './style.css'
export default class PaginationParent extends Component {
    state = {
        list: [
            {
                id: 1,
                name: 'huong'
            },
            {
                id: 2,
                name: 'linh'
            },
            {
                id: 3,
                name: 'guy'
            },
            {
                id: 4,
                name: 'hung'
            },
            {
                id: 5,
                name: 'hin'
            },
            {
                id: 6,
                name: 'gea'
            },
            {
                id: 7,
                name: 'oi'
            },
            {
                id: 8,
                name: 'aw'
            },
        ],
        list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        pageArr: [],
        startIndex: 0,
    }


    // startIndex = (this.state.currPage - 1) * this.state.list.length
    // endIndex = this.startIndex + 5

    handlePreviousBtn = () => {
        if (this.state.startIndex === 0) {
            this.setState({
                ...this.state,
                startIndex: 0
            })
        }

        else {
            this.setState((prevState) => {
                return {
                    ...this.state,
                    startIndex: prevState.startIndex - 5,
                }
            })
        }

    }

    handleNextBtn = () => {
        this.setState((prevState) => {
            return {
                ...this.state,
                startIndex: prevState.startIndex + 5,
            }
        })

    }

    componentDidMount = () => {
        let { list2 } = this.state
        let page = Math.ceil(list2.length / 5)

        let array = []
        for (let i = 1; i <= page; i++) {
            array.push({ number: i, isActive: false })
        }
        this.setState({
            ...this.state,
            pageArr: array,
            startIndex: page * 5 - 5
        })
    }

    handleChangePage = (item) => {

        let selectButton = this.state.pageArr.map(page => {
            if (page.number === item.number) {
                page.isActive = true
                return page
            }
            else {
                page.isActive = false
                return page
            }
        })


        this.setState({
            ...this.state,
            startIndex: item.number * 5 - 5,
            pageArr: selectButton
        })

    }

    render() {
        let { startIndex, list2, pageArr } = this.state
        let endIndex = startIndex + 5



        return (
            <div className='classComponent'>
                <br />
                {list2.slice(startIndex, endIndex)}
                <br />
                <button
                    onClick={this.handlePreviousBtn}
                    disabled={startIndex === 0 ? true : false}
                >Previous</button>
                {pageArr.map(item => {
                    return (
                        <button className={item.isActive === true ? 'currentPage' : ''} onClick={() => this.handleChangePage(item)}>{item.number}</button>
                    )
                })}
                <button
                    onClick={this.handleNextBtn}
                    disabled={this.state.list2.length <= endIndex ? true : false}
                >Next</button>
            </div>
        )
    }
}
