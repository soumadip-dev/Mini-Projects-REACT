import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { Box, Button, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { toggleHabit, deleteHabit } from '../store/habitSlice';

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const today = new Date().toISOString().split('T')[0];

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {habits.map(habit => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                {habit.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: { xs: 1, sm: 0 } }}>
              <Button
                variant="outlined"
                color={habit.completedDates.includes(today) ? 'success' : 'primary'}
                startIcon={<CheckCircleIcon />}
                onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}
              >
                {habit.completedDates.includes(today) ? 'Completed' : 'Mark as completed'}
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(deleteHabit({ id: habit.id }))}
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
