import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ButtonAppBar({ user, onLogout }) {
  return (
    <AppBar position="fixed" sx={{ width: '100%', top: 0, zIndex: 100 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          component={Link}
          to="/"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          All Recipes
        </Typography>

        <Button color="inherit" component={Link} to="/favorites" sx={{ color: '#fff' }}>
          Favorites
        </Button>

        {user ? (
          <>
            <Typography variant="h6" sx={{ marginRight: 2 }}>
              {user.username}
            </Typography>
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login" sx={{ color: '#fff' }}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register" sx={{ color: '#fff' }}>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}