import React, { useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../actions'
import { useHistory, useLocation } from 'react-router-dom'
import { getActiveTab } from '../selectors'
// import { setCurrentPage } from '../../pagination/actions'


const Navigation = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(getActiveTab)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    setInitialActiveTab()
  }, [])
  
  function setInitialActiveTab () {
    switch (location.pathname) {
      case '/top-rated':
        dispatch(setActiveTab('top-rated'))
        break
      case '/popular':
        dispatch(setActiveTab('popular'))
        break
    }
  }

  function handleChange (e, value) {
    // dispatch(setCurrentPage(1))
    dispatch(setActiveTab(value))
    history.push(`/${value}`)
  }

  return (
    <nav className="app-nav">
        <Tabs
          value={ activeTab }
          onChange={ handleChange }
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab 
            label="Popular" 
            value="popular"
          />
          <Tab 
            label="Top rated" 
            value="top-rated"
          />
        </Tabs>
    </nav>
  )
}

export default Navigation