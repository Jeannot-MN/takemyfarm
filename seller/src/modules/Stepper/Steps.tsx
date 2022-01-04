import React, { Children } from 'react';
import { Box, Button, CircularProgress, makeStyles, Step, StepConnector, StepIconProps, StepLabel, Stepper, Typography, withStyles } from '@material-ui/core';
import IncompleteIcon from '../../assets/IncompleteIcon.svg'
import CompletedIcon from '../../assets/CompletedIcon.svg'
import ProgressIcon from '../../assets/ProgressIcon.svg'
import clsx from 'clsx';

export enum StepState {
  COMPLETE = 1,
  UNVIEWED,
  TOUCHED,
}

interface Props {
  children: React.ReactChild[];
  currentStep: number;
  titles: string[];
  progress: (step: number) => void;
  regress: (step: number) => void;
  stepStates: StepState[];
  submitting: boolean;
}
export function Steps({
  children,
  currentStep,
  titles,
  progress,
  regress,
  stepStates,
  submitting
}: Props) {

  const StepperLineStyle = withStyles({
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        borderColor: '#000',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#000',
      },
    },
    line: {
      borderTop: '1px dashed #000',
      height: '2px',
    },
  })(StepConnector);

  const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#276552',
    },
    circle: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#FFF',
      zIndex: 1,
      borderRadius: '50%',
      fontSize: 22,
    },
    stepperLabel: {
      marginTop: '-2px',
    },
  });

  function StepperIcon(props: StepIconProps) {
    const { active, completed } = props;
    const classes = useQontoStepIconStyles();

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? (
          <img
            src={CompletedIcon}
            alt="Completed Icon"
            className={classes.completed}
          />
        ) : active ? (
          <img
            src={ProgressIcon}
            alt="Progress Icon"
            className={classes.completed}
          />
        ) : (
          <img
            src={IncompleteIcon}
            alt="Incomplete Icon"
            className={classes.completed}
          />
        )}
      </div>
    );
  }
  const classes = useQontoStepIconStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="1440px"
        flexDirection="column"
        style={{ flex: 1 }}
      >
        <Box pt={3} display="flex" width="100%" justifyContent="center">
          <Stepper
            activeStep={currentStep}
            alternativeLabel
            style={{
              width: '100%',
              maxWidth: '1180px',
              padding: 0,
              paddingTop: '',
            }}
            connector={<StepperLineStyle />}
          >
            {titles.map((title, index) => (
              <Step key={index} style={{ paddingLeft: 0 }}>
                <StepLabel
                  classes={{ labelContainer: classes.stepperLabel }}
                  StepIconComponent={StepperIcon}
                >
                  <Typography
                    style={{
                      fontSize: '14px',
                      lineHeight: '14px',
                      color: '#000000',
                      fontWeight: 'bold'
                    }}
                  >
                    {title}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box display="flex" justifyContent="center" width="100%">
          {Children.map(children, (child, index) =>
            currentStep === index ? <>{child}</> : null
          )}
        </Box>
      </Box>

      <Box
        pb={10}
        pt={10}
        display="flex"
        width="100%"
        justifyContent={currentStep === 5 ? 'flex-end' : 'center'}
        alignItems={currentStep === 5 ? 'flex-end' : 'center'}
        height={currentStep === 5 ? '100vh' : ''}
        style={{ position: currentStep === 5 ? 'fixed' : 'unset' }}
      >
        {currentStep > 0 ? (
          <Box width="100%" display="flex" justifyContent="flex-end">
            <Button
              fullWidth
              disabled={submitting}
              style={{
                maxWidth: '360px',
                backgroundColor: 'white',
                border: '1px solid #000000',
              }}
              onClick={() => {
                currentStep !== 0 && regress(currentStep);
              }}
            >
              <Typography
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: '#000000',
                }}
              >
                BACK
              </Typography>
            </Button>
          </Box>
        ) : (
          ''
        )}
        <Box
          width="100%"
          display="flex"
          justifyContent={currentStep === 0 ? 'center' : 'flex-start'}
          pl="30px"
        >
          <Button
            fullWidth
            style={{ maxWidth: '360px' }}
            color="secondary"
            disabled={submitting}
            onClick={async () => {
              // not submitting just ensures that there is no duplicate fire occurring
              !submitting && progress(currentStep);
            }}
          >
            {submitting ? (
              <CircularProgress />
            ) : currentStep === children.length - 1 ? (
              <Typography
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                DONE
              </Typography>
            ) : (
              <Typography
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                NEXT
              </Typography>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

