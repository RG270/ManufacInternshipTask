import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Container, TextField, FormControlLabel, Checkbox, Grid, Link } from '@material-ui/core';

class login extends Component {
    
    constructor(){
        super();
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
    }
    
    // Rendering the app and form to the page.
    render() {
        return (
            <div>
                <Container>
                    <div className=''>
                        <h1>LOGIN</h1>
                        
                        <form noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={this.handleChange}
                                autoFocus
                                />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
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
                            <Grid container>
                                <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                                </Grid>
                                <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                                </Grid>
                            </Grid>
                            </form>
                        
                    </div>
                </Container>
            </div>
        )
    }
}

export default login