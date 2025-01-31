import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Block as BlockIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const mockAlerts = [
  {
    id: 1,
    user: 'Alice Johnson',
    transaction: '$5,000 transfer to unknown account',
    riskScore: 'High',
    timestamp: '2 minutes ago',
  },
  {
    id: 2,
    user: 'Bob Smith',
    transaction: 'Multiple failed login attempts',
    riskScore: 'Medium',
    timestamp: '15 minutes ago',
  },
  {
    id: 3,
    user: 'Carol White',
    transaction: 'Large purchase from unusual location',
    riskScore: 'Low',
    timestamp: '1 hour ago',
  },
];

const getRiskColor = (risk) => {
  switch (risk.toLowerCase()) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'default';
  }
};

function FraudAlerts() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Fraud Alerts
      </Typography>
      <List>
        {mockAlerts.map((alert) => (
          <ListItem
            key={alert.id}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              mb: 1,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
            secondaryAction={
              <Box>
                <Tooltip title="Block Account">
                  <IconButton edge="end" aria-label="block" sx={{ mr: 1 }}>
                    <BlockIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Mark as Safe">
                  <IconButton edge="end" aria-label="safe">
                    <CheckCircleIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            }
          >
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle1" component="span">
                    {alert.user}
                  </Typography>
                  <Chip
                    size="small"
                    label={alert.riskScore}
                    color={getRiskColor(alert.riskScore)}
                    sx={{ ml: 1 }}
                  />
                </Box>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {alert.transaction}
                  </Typography>
                  {' — '}
                  {alert.timestamp}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FraudAlerts;
