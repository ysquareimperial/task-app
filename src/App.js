import { useCallback, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import AppNavigation from './Route/AppNavigation';
import { initUser } from './redux/action/auth';
import { useNavigate } from 'react-router-dom';
import Example from './AdminDashboard/Example';
function App() {
  const emptyToken = localStorage.getItem('taskify')
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const navigateUser = useCallback(() => {
    if (!emptyToken){
      navigate('/');
    }
    dispatch(
      initUser(() => console.log("Login"))
    );
  }, [dispatch]);

  useEffect(() => {
  navigateUser()
    
  }, [navigateUser]);
  return (
    <div>
      <AppNavigation />
      {/* <Example/> */}
    </div>
  );
}

export default App;
