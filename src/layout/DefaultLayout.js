import React, { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
const Login = React.lazy(() => import('./../views/pages/login/Login'))
const DefaultLayout = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'))

    if (items !== null) {
      setItems(items)
    } else {
      setItems({ username: '', password: '' })
    }
  
  }, [])

  return (
    <>
      {items.username !== '' ? (
        <>
          <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
              <AppHeader />
              <div className="body flex-grow-1 px-3">
                <AppContent />
              </div>
              <AppFooter />
            </div>
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  )
}

export default DefaultLayout
