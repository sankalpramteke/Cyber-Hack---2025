import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Paper,
  Chip,
} from '@mui/material';
import {
  AccountTree as TreeIcon,
  ZoomIn as ZoomInIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const mockTransactions = [
  {
    id: '0x1234...5678',
    from: '0xabcd...efgh',
    to: '0xijkl...mnop',
    amount: '₹5,00,000',
    timestamp: '2 minutes ago',
    risk: 'high',
    connections: 3,
  },
  {
    id: '0x5678...9abc',
    from: '0xqrst...uvwx',
    to: '0xyzab...cdef',
    amount: '₹2,50,000',
    timestamp: '15 minutes ago',
    risk: 'low',
    connections: 1,
  },
  {
    id: '0x9abc...def0',
    from: '0xghij...klmn',
    to: '0xopqr...stuv',
    amount: '₹10,00,000',
    timestamp: '1 hour ago',
    risk: 'medium',
    connections: 2,
  },
];

function BlockchainTracker() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Blockchain Transaction Tracking
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Monitoring suspicious transaction patterns across the blockchain
        </Typography>
      </Box>

      {mockTransactions.map((tx) => (
        <Paper
          key={tx.id}
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            border: '1px solid',
            borderColor: 'divider',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Typography variant="subtitle1" component="div">
              Transaction {tx.id}
            </Typography>
            <Box>
              <Chip
                size="small"
                label={`${tx.risk} risk`}
                color={
                  tx.risk === 'high'
                    ? 'error'
                    : tx.risk === 'medium'
                    ? 'warning'
                    : 'success'
                }
                icon={tx.risk === 'high' ? <WarningIcon /> : undefined}
                sx={{ mr: 1 }}
              />
              <Tooltip title="View transaction graph">
                <IconButton size="small">
                  <TreeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View details">
                <IconButton size="small">
                  <ZoomInIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              From: {tx.from}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To: {tx.to}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">
              Amount: <strong>{tx.amount}</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tx.timestamp} • {tx.connections} connected accounts
            </Typography>
          </Box>
        </Paper>
      ))}

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2" color="primary">
          Network Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • 2 high-risk transaction patterns detected
          <br />
          • 3 new suspicious wallet addresses identified
          <br />
          • 5 connected transactions under investigation
        </Typography>
      </Box>
    </Box>
  );
}

export default BlockchainTracker;
