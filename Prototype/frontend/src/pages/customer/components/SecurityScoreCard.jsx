import React from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

function SecurityScoreCard({ score }) {
  const getScoreColor = (value) => {
    if (value >= 80) return '#00c853';
    if (value >= 60) return '#ffd700';
    return '#f44336';
  };

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        Security Score
      </Typography>
      
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={score}
          size={120}
          thickness={4}
          sx={{ color: getScoreColor(score) }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Tooltip title="Based on your security settings and recent activity">
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold', color: getScoreColor(score) }}
            >
              {score}
            </Typography>
          </Tooltip>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Your account security is {score >= 80 ? 'strong' : score >= 60 ? 'moderate' : 'at risk'}
      </Typography>
    </Box>
  );
}

export default SecurityScoreCard;
