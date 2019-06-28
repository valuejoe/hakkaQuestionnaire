import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, Typography, Grid, Hidden } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { inputAnser } from '../store/action';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
}));

function RadioButtons(props) {
    const { leftWords, rightWords, asc, inputAnser, RadioId, ansId } = props;

    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState(ansId[RadioId]);

    function handleChange(event) {
        setSelectedValue(event.target.id);
        inputAnser(RadioId, event.target.id, event.target.value);
        // console.log(ansId[RadioId])
    }
    return (
        <div className={classes.root}>
            <Hidden smUp>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Typography>
                            {leftWords}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {rightWords}
                        </Typography>
                    </Grid>
                </Grid>

            </Hidden>
            <Grid container justify='space-evenly'>
                <Hidden xsDown>
                    <Grid item xs={2}>
                        <Typography align='center'>
                            {leftWords}
                        </Typography>
                    </Grid>
                </Hidden>

                <Grid item xs={1}>
                    <Radio
                        id='a'
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value={asc ? 1 : 7}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Radio
                        id='b'
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value={asc ? 2 : 6}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item xs={1} >
                    <Radio
                        id='c'
                        checked={selectedValue === 'c'}
                        onChange={handleChange}
                        value={asc ? 3 : 5}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Radio
                        id='d'
                        checked={selectedValue === 'd'}
                        onChange={handleChange}
                        value={4}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Radio
                        id='e'
                        checked={selectedValue === 'e'}
                        onChange={handleChange}
                        value={asc ? 5 : 3}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Radio
                        id='f'
                        checked={selectedValue === 'f'}
                        onChange={handleChange}
                        value={asc ? 6 : 2}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'F' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Radio
                        id='g'
                        checked={selectedValue === 'g'}
                        onChange={handleChange}
                        value={asc ? 7 : 1}
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'G' }}
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={2}>
                        <Typography align='center'>
                            {rightWords}
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ansId: state.ansId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputAnser: (key, id, value) => dispatch(inputAnser(key, id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtons)