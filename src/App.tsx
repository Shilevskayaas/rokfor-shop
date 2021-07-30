import './styles.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import dataJSON from './data.json'
import { Switch, Route, useHistory } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import About from './components/About/About'
import Delivery from './components/Delivery/Delivery'
import Payment from './components/Payment/Payment'
import Lk from './components/Lk/Lk'
import Basket from './components/Basket/Basket'
import { useEffect } from 'react'
import { useState } from 'react'
import { itemObject } from './types'

const App = (props: any) => {
  const history = useHistory()
  const [loginStatus, updateLoginStatus] = useState(false)
  const [data, updateData] = useState([])
  const [selectedItem, changeSelectedItem] = useState({
    itemName: '',
    imgSrc: '',
    description: ''
  })

  useEffect(() => {
    const data: any = getData()
    updateData(data)
  }, [])

  const getData = () => {
    return dataJSON
  }

  const onBuyClick = (item: itemObject) => {
    changeSelectedItem(item)
    history.push('basket')
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainPage data={data} onBuyClick={onBuyClick} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/delivery">
              <Delivery />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/lk">
              <Lk loginStatus={loginStatus} updateLoginStatus={updateLoginStatus}/>
            </Route>
            <Route exact path="/basket">
              <Basket selectedItem={selectedItem} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
