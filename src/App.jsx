import Header from 'modules/Header/Header';
import Routes from './Routes'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  return (
    <div>
    <Header />
      <Routes />
    </div>
  );
};

export default App;
