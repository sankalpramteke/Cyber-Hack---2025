import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

const mockLocations = [
  { id: 1, lat: 19.0760, lng: 72.8777, risk: 'high', count: 15 }, // Mumbai
  { id: 2, lat: 28.6139, lng: 77.2090, risk: 'medium', count: 8 }, // Delhi
  { id: 3, lat: 12.9716, lng: 77.5946, risk: 'low', count: 5 }, // Bangalore
];

function UserBehaviorMap() {
  const [timeRange, setTimeRange] = React.useState('24h');

  // In a real application, this would be replaced with an actual map library
  // like Google Maps, Mapbox, or Leaflet
  const renderMockMap = () => {
    return (
      <Box
        sx={{
          height: 300,
          backgroundColor: '#f5f5f5',
          borderRadius: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" gutterBottom>
          Login Activity Heatmap
        </Typography>
        {mockLocations.map((location) => (
          <Box
            key={location.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor:
                  location.risk === 'high'
                    ? '#f44336'
                    : location.risk === 'medium'
                    ? '#ffa726'
                    : '#4caf50',
                mr: 1,
              }}
            />
            <Typography variant="body2">
              {`${location.lat.toFixed(2)}, ${location.lng.toFixed(2)} - ${
                location.count
              } logins (${location.risk} risk)`}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6">User Behavior Analysis</Typography>
          <FormControl size="small">
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="24h">Last 24 Hours</MenuItem>
              <MenuItem value="7d">Last 7 Days</MenuItem>
              <MenuItem value="30d">Last 30 Days</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {renderMockMap()}

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Key Insights:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Unusual login activity detected in Mumbai (15 attempts)
            <br />
            • Multiple failed login attempts from Delhi
            <br />
            • Normal activity patterns in Bangalore
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserBehaviorMap;
