import { Provider } from 'react-redux';
import store from './store/store';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h1">Hello</Typography>
      </Container>
      <div>App</div>
    </Provider>
  );
};

export default App;
