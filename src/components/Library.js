import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Library() {
    return (
        <Grid container>
            <Grid item xs={12} sm={4} md={4}></Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Typography>LIBRARY APP</Typography>
                <TextField
                variant="outlined"
                margin="normal"
                label="Book Title"
                fullWidth
                required
                type="text"
                />
                <TextField
                variant="outlined"
                margin="normal"
                label="Description"
                fullWidth
                required
                type="text"
                />
                <TextField
                variant="outlined"
                margin="normal"
                label="Publisher Name"
                fullWidth
                required
                type="text"
                />
                <TextField
                variant="outlined"
                margin="normal"
                label="Author"
                fullWidth
                required
                type="text"
                />
                <TextField
                variant="outlined"
                margin="normal"
                label="Distributor Name"
                fullWidth
                required
                type="text"
                />
                <Button
                variant="contained"
                color="secondary"
                margin="normal"
                type="submit"
                >
                    SUBMIT
                </Button>

            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>

        </Grid>
    )
}
