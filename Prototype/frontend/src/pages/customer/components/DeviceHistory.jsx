import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import {
  Computer as ComputerIcon,
  Smartphone as PhoneIcon,
  Tablet as TabletIcon,
} from '@mui/icons-material';

const mockDevices = [
  {
    id: 1,
    type: 'desktop',
    name: 'HP Laptop',
    location: 'Mumbai, India',
    ip: '192.168.1.1',
    lastAccess: '2 minutes ago',
    status: 'current',
  },
  {
    id: 2,
    type: 'phone',
    name: 'OnePlus 10',
    location: 'Delhi, India',
    ip: '192.168.1.2',
    lastAccess: '1 day ago',
    status: 'trusted',
  },
  {
    id: 3,
    type: 'tablet',
    name: 'Samsung Tab',
    location: 'Bangalore, India',
    ip: '192.168.1.3',
    lastAccess: '3 days ago',
    status: 'trusted',
  },
];

function DeviceHistory() {
  const getDeviceIcon = (type) => {
    switch (type) {
      case 'desktop':
        return <ComputerIcon />;
      case 'phone':
        return <PhoneIcon />;
      case 'tablet':
        return <TabletIcon />;
      default:
        return <ComputerIcon />;
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Device & Login History
      </Typography>
      <List>
        {mockDevices.map((device) => (
          <ListItem
            key={device.id}
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
            <ListItemIcon>{getDeviceIcon(device.type)}</ListItemIcon>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle1">{device.name}</Typography>
                  <Chip
                    size="small"
                    label={device.status}
                    color={device.status === 'current' ? 'primary' : 'success'}
                    sx={{ ml: 1 }}
                  />
                </Box>
              }
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    {device.location} • {device.ip}
                  </Typography>
                  <br />
                  <Typography component="span" variant="caption" color="text.secondary">
                    Last access: {device.lastAccess}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default DeviceHistory;
