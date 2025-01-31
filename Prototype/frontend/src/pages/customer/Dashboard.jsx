import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  LinearProgress,
  Alert,
} from '@mui/material';
import SecurityScoreCard from './components/SecurityScoreCard';
import TransactionList from './components/TransactionList';
import DeviceHistory from './components/DeviceHistory';
import IdentityVerification from './components/IdentityVerification';
import HelpSupport from './components/HelpSupport';

function CustomerDashboard() {
  const user = {
    name: 'Rajesh Kumar',
    securityScore: 85,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, {user.name}
          </Typography>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {user.name.charAt(0)}
          </Avatar>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Security Score */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <SecurityScoreCard score={user.securityScore} />
            </Paper>
          </Grid>

          {/* Recent Transactions */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              <TransactionList />
            </Paper>
          </Grid>

          {/* Identity Verification */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <IdentityVerification />
            </Paper>
          </Grid>

          {/* Device History */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <DeviceHistory />
            </Paper>
          </Grid>

          {/* Help & Support */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <HelpSupport />
            </Paper>
          </Grid>
        </Grid>

        {/* Fraud Alert Notification */}
        <Alert
          severity="warning"
          sx={{ position: 'fixed', bottom: 16, right: 16, maxWidth: 400 }}
        >
          Suspicious login detected from new location. Please verify your identity.
        </Alert>
      </Container>
    </Box>
  );
}

export default CustomerDashboard;
