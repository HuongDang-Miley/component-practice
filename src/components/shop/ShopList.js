import React, { Component } from 'react'
import Item from './Item.js'
import './style.css'

export default class ShopList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    name: 'apple',
                    price: 20,
                    img: 'https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg'
                },
                {
                    id: 2,
                    name: 'pinapple',
                    price: 5,
                    img: 'https://www.eatright.lk/image/cache/catalog/Product%20Images/Fruits/pineapple-550x550.jpg'
                },
                {
                    id: 3,
                    name: 'banana',
                    price: 8,
                    img: 'https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg'
                }
            ]

        }

        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.urlRef = React.createRef();
    }

    handleSubmitItem = () => {
        let newItem = {
            id: this.state.list.length + 1,
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            img: this.urlRef.current.value,
        }
        
        let newArray = [...this.state.list, newItem]

        // console.log('button click')
        this.setState({
            ...this.state,
            list: newArray
        })
        
        // console.log(this.nameRef.current.value)
        // console.log('test click')
    }


    handleInputChange = () => {
    }
    
    
    render() {
        
        return (
            <div className='classComponent'>
                <div className="Card">
                    <h1>Add Item:</h1>
                    <label>Item Name</label>
                    <input ref={this.nameRef} onchange={this.handleInputChange} ></input>
                    <label>Item Price</label>
                    <input ref={this.priceRef}></input>
                    <label>Item Url</label>
                    <input ref={this.urlRef}></input>
                    <button onClick={this.handleSubmitItem}>Submit</button>
                    
                </div>
                {this.state.list.map(item => {
                    return (
                        <Item name={item.name} price={item.price} img={item.img} key={item.id} />
                    )
                })}
            </div>
        )
    }
}
