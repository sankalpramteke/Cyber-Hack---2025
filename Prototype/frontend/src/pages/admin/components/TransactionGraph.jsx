import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { time: '00:00', fraudulent: 4, legitimate: 65 },
  { time: '04:00', fraudulent: 3, legitimate: 45 },
  { time: '08:00', fraudulent: 7, legitimate: 89 },
  { time: '12:00', fraudulent: 5, legitimate: 121 },
  { time: '16:00', fraudulent: 8, legitimate: 106 },
  { time: '20:00', fraudulent: 6, legitimate: 78 },
];

function TransactionGraph() {
  const [timeRange, setTimeRange] = React.useState('24h');

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">
          Transaction Monitoring
        </Typography>
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

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={mockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="legitimate"
            stroke="#2196f3"
            name="Legitimate Transactions"
          />
          <Line
            type="monotone"
            dataKey="fraudulent"
            stroke="#f44336"
            name="Fraudulent Transactions"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TransactionGraph;
