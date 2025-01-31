import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import {
  Report as ReportIcon,
  ContactSupport as SupportIcon,
  Book as GuideIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

function HelpSupport() {
  const supportOptions = [
    {
      icon: <ReportIcon fontSize="large" color="error" />,
      title: 'Report Fraud',
      description: 'Report suspicious transactions or account activity',
      action: 'Report Now',
      color: 'error',
    },
    {
      icon: <SupportIcon fontSize="large" color="primary" />,
      title: 'Contact Support',
      description: '24/7 customer support via phone or email',
      action: 'Contact Us',
      color: 'primary',
    },
    {
      icon: <GuideIcon fontSize="large" color="info" />,
      title: 'Security Guide',
      description: 'Learn about account security best practices',
      action: 'Read Guide',
      color: 'info',
    },
    {
      icon: <ChatIcon fontSize="large" color="success" />,
      title: 'Live Chat',
      description: 'Chat with our security experts',
      action: 'Start Chat',
      color: 'success',
    },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Help & Support
      </Typography>
      
      <Grid container spacing={2}>
        {supportOptions.map((option, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                '&:hover': {
                  boxShadow: 2,
                },
              }}
            >
              <CardContent>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  {option.icon}
                  <Typography variant="h6" component="div">
                    {option.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {option.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color={option.color}
                    size="small"
                  >
                    {option.action}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HelpSupport;
