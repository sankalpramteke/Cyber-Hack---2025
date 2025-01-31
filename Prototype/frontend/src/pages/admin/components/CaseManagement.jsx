import React from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Block as BlockIcon,
  CheckCircle as ApproveIcon,
  Message as MessageIcon,
  Assignment as CaseIcon,
} from '@mui/icons-material';

const mockCases = [
  {
    id: 'CASE-001',
    customer: 'Amit Patel',
    type: 'Unauthorized Transaction',
    status: 'Open',
    priority: 'High',
    assignedTo: 'Deepa Verma',
    lastUpdated: '10 minutes ago',
  },
  {
    id: 'CASE-002',
    customer: 'Sneha Reddy',
    type: 'Account Takeover Attempt',
    status: 'In Progress',
    priority: 'Medium',
    assignedTo: 'Arjun Mehta',
    lastUpdated: '1 hour ago',
  },
  {
    id: 'CASE-003',
    customer: 'Karthik Iyer',
    type: 'Suspicious Login',
    status: 'Pending Review',
    priority: 'Low',
    assignedTo: 'Priya Sharma',
    lastUpdated: '2 hours ago',
  },
];

function CaseManagement() {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'error';
      case 'in progress':
        return 'warning';
      case 'pending review':
        return 'info';
      case 'closed':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h6">Case Management</Typography>
        <Button
          variant="contained"
          startIcon={<CaseIcon />}
          color="primary"
        >
          Create New Case
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Case ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCases.map((case_) => (
              <TableRow
                key={case_.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {case_.id}
                </TableCell>
                <TableCell>{case_.customer}</TableCell>
                <TableCell>{case_.type}</TableCell>
                <TableCell>
                  <Chip
                    label={case_.status}
                    size="small"
                    color={getStatusColor(case_.status)}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={case_.priority}
                    size="small"
                    color={getPriorityColor(case_.priority)}
                  />
                </TableCell>
                <TableCell>{case_.assignedTo}</TableCell>
                <TableCell>{case_.lastUpdated}</TableCell>
                <TableCell>
                  <Tooltip title="Block Account">
                    <IconButton size="small" color="error">
                      <BlockIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Approve Transaction">
                    <IconButton size="small" color="success">
                      <ApproveIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Send Message">
                    <IconButton size="small" color="primary">
                      <MessageIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CaseManagement;
