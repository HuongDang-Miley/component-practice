import React, { Component } from 'react'
import '../style.css'
import './pagination.css'
import Item from './Item.js'
import itemContext from './itemContext'
import ReactPaginate from 'react-paginate';
import { TextField, InputAdornment, InputBase, IconButton } from '@material-ui/core'
import { DeleteOutline, AccountCircle, SearchOutlined } from '@material-ui/icons'


export default class DeletePractice extends Component {
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
                id: 3,
                name: 'hung'
            },
            {
                id: 3,
                name: 'hang'
            },
        ],

        searchTerm: ''
    }

    handleDeleteItem = (id) => {
        let newArray = [...this.state.list]
        let deleteItem = newArray.filter(item => item.id !== id)
        this.setState({
            ...this.state,
            list: deleteItem
        })
    }


    handleSearchChange = (event) => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })

    }

    render() {
        return (
            <div className='classComponent'>
                <h1>Practice Delete Item</h1>
                <div className='inputBase'>
                <IconButton >
                <SearchOutlined color='secondary'/>
                </IconButton>
                    <InputBase
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.handleSearchChange}
                    >Something here</InputBase>

                </div>
                <TextField

                    style={{ color: 'pink', backgroundColor: 'green' }}
                    size='small'
                    color='secondary'
                    // variant="outlined"
                    startIcon={<DeleteOutline />}
                    style={{ marginBottom: 16 }}
                    onChange={this.handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
                {/* <input onChange={this.handleSearchChange}></input> */}
                <itemContext.Provider value={{ state: this.state, handleDeleteItem: this.handleDeleteItem }}>
                    {this.state.list.filter(item => {
                        if (this.state.searchTerm === '') { return item }
                        else if (item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                            return item
                        }
                    })
                        .map(item => {
                            return (<Item key={item.key} item={item} />)
                        })}
                </itemContext.Provider>

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages-pagination'}
                    activeClassName={'active'}
                />

            </div>
        )
    }
}
