import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Paper } from '@material-ui/core';
import Introduction from './Introduction';
import Radio from './Radio';
import ClientData from './ClientData';
import { connect } from 'react-redux';
import { clickFinish, changeStep } from '../store/action';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',

        // marginLeft: theme.spacing(0),
        // marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    unfinished: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            margin: theme.spacing(0),
        },
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
    },
    stepper: {
        paddingBottom: theme.spacing(0),
        paddingTop: theme.spacing(2)

    },
    error: {
        color: 'red'
    },
    finished: {
        marginTop: theme.spacing(5),
        paddingBottom: '200px'
    }
}));

function getSteps() {
    return ['介紹', '前十題', '後十題', '填寫資料'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Introduction />;
        case 1:
            return (
                <React.Fragment>
                    <Radio key={0} RadioId={0} leftWords={'不重要'} rightWords={'重要'} asc={true} />
                    <Radio key={1} RadioId={1} leftWords={'有趣的'} rightWords={'無趣的'} asc={false} />
                    <Radio key={2} RadioId={2} leftWords={'不相關的'} rightWords={'相關的'} asc={true} />
                    <Radio key={3} RadioId={3} leftWords={'不令人興奮的'} rightWords={'令人興奮的'} asc={true} />
                    <Radio key={4} RadioId={4} leftWords={'意義重大的'} rightWords={'沒有意義的'} asc={false} />
                </React.Fragment>
            )
        case 2:
            return (
                <React.Fragment>
                    <Radio key={5} RadioId={5} leftWords={'不吸引人的'} rightWords={'吸引人的'} asc={true} />
                    <Radio key={6} RadioId={6} leftWords={'俗氣的'} rightWords={'迷人的'} asc={true} />
                    <Radio key={7} RadioId={7} leftWords={'有價值的'} rightWords={'無價值的'} asc={false} />
                    <Radio key={8} RadioId={8} leftWords={'和我無關的'} rightWords={'和我有關的'} asc={true} />
                    <Radio key={9} RadioId={9} leftWords={'需要的'} rightWords={'不需要的'} asc={false} />
                </React.Fragment>
            )
        default:
            return <ClientData />;
    }
}

function HorizontalLabelPositionBelowStepper(props) {
    const { clickFinish, changeStep, error, step } = props
    console.log(props)
    const classes = useStyles();
    const steps = getSteps();

    function handleNext() {
        changeStep(1)
    }

    function handleBack() {
        changeStep(-1)
    }

    function handleFinish() {
        clickFinish()
    }
    return (
        <div >
            <Paper className={classes.root}>
                <Stepper activeStep={step} alternativeLabel className={classes.stepper}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div >
                    {step === 4 ? (
                        <div className={classes.finished}>
                            <Typography align='center' variant='h6'>
                                感謝您填寫我們的問卷調查
                            </Typography>
                        </div>
                    ) : (
                            <div className={classes.unfinished}>
                                <Typography align='center' variant="h6">
                                    {step === 1 || step === 2 ? '客家文化對您的意義是什麼？' : ''}
                                </Typography>
                                {getStepContent(step)}
                                {step !== 0 && error ? (
                                    <Typography align='center' variant="h6" className={classes.error}>
                                        您尚未填寫完畢!!
                                    </Typography>
                                ) : (null)}
                                <div className={classes.buttons}>
                                    <Button
                                        disabled={step === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    {step === steps.length - 1 ? (
                                        <Button variant="contained" color="secondary" onClick={handleFinish}>
                                            Finish
                                        </Button>
                                    ) : (
                                            <Button variant="contained" color="secondary" onClick={handleNext}>
                                                Next
                                            </Button>
                                        )
                                    }
                                </div>
                            </div>
                        )}
                </div>
            </Paper>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        step: state.step
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickFinish: () => dispatch(clickFinish()),
        changeStep: (value) => { dispatch(changeStep(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLabelPositionBelowStepper)