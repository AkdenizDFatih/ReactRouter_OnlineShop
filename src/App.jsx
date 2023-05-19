import {useEffect} from 'react'
import {login_user, logout_user} from './store/slices/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import Router from './routes/Routes.jsx'
import LoadingSpinner from './components/LoadingSpinner'
import useAutoFetch from './hooks/useAutoFetch.js'


function App(){
    const token = useSelector((state) => state.user.access_token)
    const dispatch = useDispatch()

    const accessToken = localStorage.getItem('accessToken')
    const username = localStorage.getItem('username')

    const [data, isLoading, error] = useAutoFetch('post', 'auth/token/verify/', {token: accessToken})

    if(!error){
        dispatch(login_user({user: {username}, access: accessToken}))
        console.log(data)
    } else {
        dispatch(logout_user())
        localStorage.clear()
    }

    if(token || token === null) return <Router/>
    if(isLoading) return <LoadingSpinner />

    return <LoadingSpinner/>
}

export default App
