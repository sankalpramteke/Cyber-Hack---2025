import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '../utils/animations';

// Styled components
const GlassBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const AnimatedTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const AnimatedButton = styled(Button)`
  background: linear-gradient(45deg, #1a237e 30%, #00c853 90%);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(45deg, #00c853 30%, #1a237e 90%);
  }
`;

function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('customer');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if (!data.get('email') || !data.get('password')) {
      setError('Please fill in all fields');
      return;
    }

    if (userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/customer');
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a237e 0%, #00c853 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            y: ['0vh', '100vh'],
            x: ['0vw', `${(i + 1) * 20}vw`],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '20vh',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(1px)',
          }}
        />
      ))}

      <Container component="main" maxWidth="xs">
        <GlassBox
          initial="initial"
          animate="animate"
          exit="exit"
          variants={scaleIn}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <LockOutlinedIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
            </motion.div>

            <Typography
              component={motion.h1}
              variants={fadeIn}
              variant="h4"
              sx={{
                mb: 1,
                background: 'linear-gradient(45deg, #1a237e, #00c853)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              SatyaShield
            </Typography>

            <Typography
              component={motion.p}
              variants={fadeIn}
              variant="subtitle1"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Advanced Security System
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: '100%' }}
            >
              {error && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                  </Alert>
                </motion.div>
              )}

              <AnimatedTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ mb: 2 }}
              />

              <AnimatedTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ mb: 2 }}
              />

              <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
                <InputLabel id="user-type-label">Login As</InputLabel>
                <Select
                  labelId="user-type-label"
                  id="user-type"
                  value={userType}
                  label="Login As"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <MenuItem value="customer">Customer</MenuItem>
                  <MenuItem value="admin">Bank Admin</MenuItem>
                </Select>
              </FormControl>

              <AnimatedButton
                component={motion.button}
                whileTap={{ scale: 0.95 }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </AnimatedButton>
            </Box>
          </motion.div>
        </GlassBox>
      </Container>
    </Box>
  );
}

export default Login;
