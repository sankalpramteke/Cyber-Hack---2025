import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
} from '@mui/material';
import {
  Face as FaceIcon,
  Fingerprint as FingerprintIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';

function IdentityVerification() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Identity Verification
      </Typography>
      
      <Stack spacing={2}>
        <Card variant="outlined">
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 2 }}
            >
              <FaceIcon color="primary" />
              <Box>
                <Typography variant="subtitle1">Face Recognition</Typography>
                <Typography variant="body2" color="text.secondary">
                  Verify your identity using facial recognition
                </Typography>
              </Box>
            </Stack>
            <Button variant="contained" startIcon={<FaceIcon />}>
              Scan Face
            </Button>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 2 }}
            >
              <FingerprintIcon color="primary" />
              <Box>
                <Typography variant="subtitle1">Fingerprint</Typography>
                <Typography variant="body2" color="text.secondary">
                  Use your device's fingerprint scanner
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              startIcon={<FingerprintIcon />}
              color="secondary"
            >
              Verify Fingerprint
            </Button>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 2 }}
            >
              <PhoneIcon color="primary" />
              <Box>
                <Typography variant="subtitle1">Two-Factor Authentication</Typography>
                <Typography variant="body2" color="text.secondary">
                  Receive a verification code via SMS
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              color="info"
            >
              Send Code
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default IdentityVerification;
