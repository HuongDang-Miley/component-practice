import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../style.css'
import ArticlePage from './ArticlePage.js'
export default class DynamicRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Huong',
            articles: [
                 {
                    id: 1,
                    title: 'How to code',
                    subTtile: 'The ultimate way',
                    body: 'At some point you have to read document'
                },
                {
                    id: 1,
                    title: 'How to design',
                    subTtile: 'The fastest way',
                    body: 'Copy others'
                },
                {
                    id: 1,
                    title: 'How to design',
                    subTtile: 'The fastest way',
                    body: 'Copy others'
                },

            ]
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
                    <Link to={{
                        pathname: `/articles/${this.state.article1.id}`,
                        // State is a reserve keyword to hold the object
                        state: this.state.article1
                    }}>Go To article1 </Link>

                    <Link to={{
                        pathname: `/articles/${this.state.article2.id}`,
                        state: this.state.article2
                    }}>Go To article2 </Link>

                    <Switch>
                        <Route path='/articles/:id' children={<ArticlePage />}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
