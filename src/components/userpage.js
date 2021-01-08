import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

class userpage extends Component {
    // Very simple and basic user page with logout button
    render() {
        return (
            <Container>
                <h1>USERPAGE</h1>
                <h2>Welcome User!</h2>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    href="/"
                >
                    Log Out
                </Button>
            </Container>
        )
    }
}

export default  userpage