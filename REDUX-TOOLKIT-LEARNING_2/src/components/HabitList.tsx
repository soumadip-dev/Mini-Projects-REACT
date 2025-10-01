import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Box, Button, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const today = new Date().toISOString().split('T')[0];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {habits.map(habbit => (
        <Paper key={habbit.id} elevation={2} sx={{ p: 2 }}>
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
                {habbit.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {habbit.frequency}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: { xs: 1, sm: 0 } }}>
              <Button
                variant="outlined"
                color={habbit.completedDates.includes(today) ? 'success' : 'primary'}
                startIcon={<CheckCircleIcon />}
              >
                {habbit.completedDates.includes(today) ? 'Completed' : 'Mark as completed'}
              </Button>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
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
