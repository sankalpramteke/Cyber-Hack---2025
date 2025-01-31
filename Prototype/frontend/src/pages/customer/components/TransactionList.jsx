import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  ArrowUpward as SendIcon,
  ArrowDownward as ReceiveIcon,
  Warning as WarningIcon,
  CheckCircle as SafeIcon,
} from '@mui/icons-material';

const mockTransactions = [
  {
    id: 1,
    type: 'send',
    amount: '₹15,000',
    recipient: 'Priya Sharma',
    date: '2025-01-31',
    status: 'safe',
    description: 'Monthly rent payment',
  },
  {
    id: 2,
    type: 'receive',
    amount: '₹45,000',
    sender: 'TechCorp India Ltd.',
    date: '2025-01-30',
    status: 'safe',
    description: 'Salary deposit',
  },
  {
    id: 3,
    type: 'send',
    amount: '₹5,000',
    recipient: 'Unknown Account',
    date: '2025-01-29',
    status: 'suspicious',
    description: 'Online purchase',
  },
];

function TransactionList() {
  const getStatusColor = (status) => {
    return status === 'safe' ? 'success' : 'error';
  };

  const getStatusIcon = (status) => {
    return status === 'safe' ? <SafeIcon /> : <WarningIcon />;
  };

  return (
    <List>
      {mockTransactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            mb: 1,
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <ListItemIcon>
            {transaction.type === 'send' ? (
              <SendIcon color="error" />
            ) : (
              <ReceiveIcon color="success" />
            )}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="subtitle1">
                {transaction.type === 'send'
                  ? `To: ${transaction.recipient}`
                  : `From: ${transaction.sender}`}
              </Typography>
            }
            secondary={
              <>
                <Typography component="span" variant="body2">
                  {transaction.description}
                </Typography>
                <br />
                <Typography component="span" variant="caption" color="text.secondary">
                  {transaction.date}
                </Typography>
              </>
            }
          />
          <Chip
            label={transaction.amount}
            color={transaction.type === 'send' ? 'error' : 'success'}
            size="small"
            sx={{ mx: 1 }}
          />
          <Tooltip title={`Transaction ${transaction.status}`}>
            <IconButton size="small" color={getStatusColor(transaction.status)}>
              {getStatusIcon(transaction.status)}
            </IconButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}

export default TransactionList;
