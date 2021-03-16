import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../style.css'
import Home from './Home.js'
import Rename from './Rename.js'
export default class SwitchPractice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Huong'
        }
        this.nameRef = React.createRef()
    }

    handleChangeName = (name) => {
        this.setState({
            ...this.state,
            name: this.nameRef
        })
    }
    render() {
        return (
            <div className='classComponent'>

                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/rename">Rename</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/home'>
                            <Home name={this.state.name} />
                        </Route>
                        <Route path='/rename'>
                            <Rename nameRef={this.nameRef} name={this.state.name} handleChangeName={this.handleChangeName} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
