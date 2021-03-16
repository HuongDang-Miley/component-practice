import React, { Component } from 'react'
import GrandChild from './GrandChild'
import '../style.css'

export default class Child extends Component {
    state = {
        name: 'Jackfruit',
        link: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg'
    }
    render() {
        return (
            <div class='classComponent'>
                <h6>This Is Child Component</h6>
                <GrandChild state ={this.state}/>
            </div>
        )
    }
}
