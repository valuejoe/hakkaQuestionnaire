import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { updateClientData } from '../store/action';
const useStyles = makeStyles(theme => ({

}));


function ClientData(props) {
    const classes = useStyles();
    const { updateClientData, error, clientData } = props
    function handleChange(e) {
        updateClientData(e.target.id, e.target.value)
    }
    return (
        <React.Fragment>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={clientData.name}
                        label="姓名"
                        variant="outlined"
                        id="name"
                        fullWidth
                        onChange={handleChange}
                        error={error.name ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={clientData.career}
                        label="職業"
                        variant="outlined"
                        id="career"
                        fullWidth
                        onChange={handleChange}
                        error={error.career ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={clientData.email}
                        type='email'
                        label="Email"
                        variant="outlined"
                        id="email"
                        fullWidth
                        onChange={handleChange}
                        error={error.email ? true : false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={clientData.telephone}
                        type='tel'
                        label="連絡電話"
                        variant="outlined"
                        id="telephone"
                        fullWidth
                        onChange={handleChange}
                        error={error.telephone ? true : false}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={clientData.contactMethod}
                        label="聯絡方式"
                        variant="outlined"
                        id="contactMethod"
                        fullWidth
                        onChange={handleChange}
                        error={error.contactMethod ? true : false}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mpaStateToProps = (state) => {
    return {
        clientData: state.clientData,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateClientData: (id, value) => dispatch(updateClientData(id, value))
    }
}

export default connect(mpaStateToProps, mapDispatchToProps)(ClientData)