import { Provider } from 'react-redux';
import store from './store/store';
import { Container, Typography } from '@mui/material';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/habitList';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
      </Container>
    </Provider>
  );
};

export default App;
