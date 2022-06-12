import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

const Input = ({ half }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            label={label}
            autofocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment>
                        <IconButton onClick={handdleShowPassword}>
                            {type === 'password' ? <Visisbilty/> : <VisibiltyOff/> }
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    </Grid>
  )
}

export default Input;