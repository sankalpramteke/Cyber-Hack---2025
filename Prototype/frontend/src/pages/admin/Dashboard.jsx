import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Container,
  Grid,
  styled,
  Paper,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animations';
import FraudAlerts from './components/FraudAlerts';
import TransactionGraph from './components/TransactionGraph';
import UserBehaviorMap from './components/UserBehaviorMap';
import BlockchainTracker from './components/BlockchainTracker';
import CaseManagement from './components/CaseManagement';
import Sidebar from './components/Sidebar';

const GlassAppBar = styled(AppBar)`
  background: rgba(26, 35, 126, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AnimatedGrid = styled(motion.div)`
  height: 100%;
`;

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <GlassAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ flexGrow: 1 }}
          >
            SatyaShield Admin Panel
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </GlassAppBar>

      <Sidebar open={sidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          pt: 8,
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid
            container
            spacing={3}
            component={motion.div}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Fraud Alerts Panel */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <AnimatedGrid variants={fadeIn}>
                  <FraudAlerts />
                </AnimatedGrid>
              </Paper>
            </Grid>

            {/* Real-time Transaction Monitoring */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <AnimatedGrid variants={fadeIn}>
                  <TransactionGraph />
                </AnimatedGrid>
              </Paper>
            </Grid>

            {/* User Behavior Insights */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <AnimatedGrid variants={fadeIn}>
                  <UserBehaviorMap />
                </AnimatedGrid>
              </Paper>
            </Grid>

            {/* Blockchain Traceability */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <AnimatedGrid variants={fadeIn}>
                  <BlockchainTracker />
                </AnimatedGrid>
              </Paper>
            </Grid>

            {/* Case Management */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <AnimatedGrid variants={fadeIn}>
                  <CaseManagement />
                </AnimatedGrid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
