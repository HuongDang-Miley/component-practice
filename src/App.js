import React, { Component } from 'react'
import './components/style.css'
import FoodList from './components/FoodList.js'
import Child from './components/Problem2/Child.js'
import CounterController from './components/CounterController/CounterController.js'
import OnChange from './components/OnChangePractice/OnChange.js'
import FruitList from './components/fruits/FruitList.js'
import ConditionRender from './components/conditionRender/ConditionRender.js'
import StudentList from './components/students/StudentList.js'
import Test from './components/test/Test.js'
import Parent from './components/lifeCycle/Parent.js'
import Parent2 from './components/lifeCycle2/Parent2.js'
import PracticePropTypes from './components/propTypes/PracticePropTypes.js'
import Parent3 from './components/contextPractice/Parent3.js'
import Bill from './components/bill/Bill.js'
import Main from './components/ref/Main.js'
import ShopList from './components/shop/ShopList.js'
import FruitCard from './components/fruitCard/FruitCard.js'
import App2 from './components/restaurant/App2.js'
import Average from './components/averageGrade/Average.js'
import ParentAxios from './components/axiosPractice/ParentAxios.js'
// import SwitchPractice from './components/switchPractice/SwitchPractice.js'
// import DynamicRoute from './components/dynamicRoute/DynamicRoute.js'
import DeletePractice from './components/deletePractice/DeletePractice.js'
import PaginationParent from './components/pagination/PaginationParent.js'
import CssPlayground from './components/cssPlayground/CssPlayground.js'
import HookParent from './components/hooks/HookParent.js'
import HookParentReducer from './components/hooks/HookParentReducer.js'
import Counter from './components/counters/Counter.js'


class App extends Component {
  state = {
    currentNum: 0,
  }
  handleAddOne = () => {
    let newNum = this.state.currentNum + 1
    this.setState({
      currentNum: newNum
    })
  }

  handleMinusOne = () => {
    this.setState((prev) => ({
      currentNum: prev.currentNum - 1
    }))
  }
  add = () => { }
  minus = () => { }

  render() {
    return (
      <div className="App">
        <h1>Practice Components</h1>
        <h2>{this.state.currentNum}</h2>
        <HookParentReducer />
        <Counter />
        {/* <HookParent /> */}
        <CssPlayground />
        <PaginationParent />
        <DeletePractice />
        {/* <DynamicRoute /> */}
        {/* <SwitchPractice /> */}
        <ParentAxios />
        <Average />
        <App2 />
        <FruitCard />
        <ShopList />
        <Main />
        <CounterController
          add={this.handleAddOne}
          minus={this.handleMinusOne}
        />
        <Child />
        <FoodList title={'This is from Foodlist'} />
        <OnChange />
        <FruitList />
        <ConditionRender />
        <StudentList />
        <Test />
        <Parent />
        <Parent2 />
        <PracticePropTypes />
        <Parent3 />
        <Bill />

      </div>
    );
  }
}

export default App;
