import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {  user } = useSelector(state => state.auth)

  const handleLogout = (e) => {
    e.preventDefault()
    navigate('/signUp')
    dispatch(logout())
  }

 
  return (
    <nav>
      <Link className='link' to={'/'} >Blog</Link>
      {
          user ? (
          <Link className='link' onClick={handleLogout} >Log out</Link>
          ) : (
            <>
            <Link className='link' to={'signUp'}>Sign up</Link>
            <Link className='link' to={'login'}>login</Link>
          </>
        )
      }
    </nav>
  )
}

export default Navbar
