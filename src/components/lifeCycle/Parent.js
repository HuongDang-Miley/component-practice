import React, { Component } from 'react'
import '../style.css'
import Child from './Child.js'

export default class Parent extends Component {
    //==========Life Cycle==============
    // State is assigned before class is created
    constructor(props) {
        super(props);
        this.state = {
            name: 'huong',
            number: 1,
            grade: 'B',
            show: true,
            dino: 'T-rex'
        }
        // console.log('======CONSTRUCTOR=======')
    }
    // State is assigned after class is created
    // state = {
    //     name: 'huong'
    // }


    // Get Derive State from Props: can edit the state using props
    static getDerivedStateFromProps(props, state) {
        // console.log('props', props)
        // console.log('state', state)
        // console.log('======DERIVE=======')
        return {
            ...state,
            // name: 'Miley'
        }
    }

    // Do most of mouting operation in componentDidMount
    componentDidMount() {
        // console.log('====DIDMOUNT====')
        // Will trigger the update of life cycle
        // this.setState({
        //     ...this.state,
        //     name: 'Guy',
        //     id: 22
        // })
        // return state
    }

    // Return Boolean where as to where we should re-render or not
    // Can determine where or not to render using state
    shouldComponentUpdate(nextProp, nextState) {
        // console.log('====ShouldUpdate====')
        // console.log('nextProp', nextProp)
        // console.log('nextState', nextState)

        if (this.state.grade !== nextState.grade) {
            return false;
        }
        return true;
    }

    // Purpose to look at previous state, an determin where or not we want in form there. 
    //Return an object refer to the state
    getSnapshotBeforeUpdate(preProps, preState) {
        // console.log('====SnapShot====')
        // console.log('preProps', preProps)
        // console.log('preState', preState)

    }

    // Will run once the re-render has complete
    // Becare full if you want to update component in here, it may run to infintie loop
    componentDidUpdate() {
        // console.log('====DidUpdate====')
    }

    //Unmount occur when an item is removed from parent component


    //=========FUNCTIONS=======================
    changeName = () => {
        this.setState({
            ...this.state,
            name: 'newName'
        })
    }
    changeGrade = () => {
        this.setState({
            ...this.state,
            grade: 'A'
        })
    }
    changeNumber = () => {
        this.setState({
            ...this.state,
            number: 7
        })
    }

    closeComponent = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                show: !prevState.show
            }
        })
    }


    // REnder and parses our JSX for us
    render() {
        // console.log('====RENDER====')
        return (
            <div class='classComponent'>
                <h6>Life Cycle Practice</h6>
                <h1>{this.state.name}</h1>
                <h1>Fav Number:{this.state.number}</h1>
                <h3>Grade:{this.state.grade}</h3>
                <button onClick={this.changeName}>Change Name</button>
                <button onClick={this.changeNumber}>Change Number</button>
                <button onClick={this.changeGrade}>Change Grade</button>
                <button onClick={this.checkState}>Check State</button>
                <button onClick={this.closeComponent}>Close Component</button>
                <div>
                    {this.state.show
                        ? <Child dino={this.state.dino} />
                        : null}

                </div>
            </div>
        )
    }
}
