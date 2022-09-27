import { useCallback, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import AppNavigation from './Route/AppNavigation';
import { initUser } from './redux/action/auth';
import { useNavigate } from 'react-router-dom';
// import Example from './AdminDashboard/Example';
// import Loading from './Loading';
// import CK from './Ck';
// import Ck from './Ck';
function App() {
  const emptyToken = localStorage.getItem('taskify')
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const navigateUser = useCallback(() => {
    if (!emptyToken) {
      navigate('/');
    }
    dispatch(
      initUser(() => console.log("Login"))
    );
  }, [dispatch, emptyToken, navigate]);

  useEffect(() => {
    navigateUser()

  }, [navigateUser]);
  return (
    <div>
      <AppNavigation />
      {/* <Example/> */}
      {/* <Loading/> */}
      {/* <Ck /> */}
    </div>

  );
}

export default App;
