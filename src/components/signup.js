import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Container, TextField, FormControlLabel, Checkbox, Grid, Link } from '@material-ui/core';

class signup extends Component {
    // Signup page contains form for creating the id, password
    render() {
        return (
            <div>
                <Container>
                    <div className=''>
                        <h1>SIGNUP</h1>
                        
                        <form noValidate>
                        <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                name="fullName"
                                autoComplete="name"
                                autoFocus
                                />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="create_password"
                                label="Create Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                href="/userpage"
                            >
                                Sign In
                            </Button>
                            
                            </form>
                        
                    </div>
                </Container>
            </div>
        )
    }
}

export default signup