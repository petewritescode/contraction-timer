import React from 'react';
import { Status } from '../../../models/status.model';
import { STATUS_INDICATOR_ANIMATIONS } from '../../../constants/animation.constants';
import { StyledStatusIndicator } from './status-indicator.styles';
import { timerSelectors } from '../../../store/timer/timer.selectors';
import { useForceUpdate } from '../../../hooks/force-update.hook';
import { usePrevious } from '../../../hooks/previous.hook';
import { useSelector } from 'react-redux';

const getAnimation = (status: Status, previousStatus: Status) => {
  const statusChanged = status !== previousStatus;

  if (status === Status.Contraction) {
    return statusChanged
      ? STATUS_INDICATOR_ANIMATIONS.contractionInitial
      : STATUS_INDICATOR_ANIMATIONS.contractionLoop;
  }

  if (status === Status.Rest) {
    return statusChanged
      ? STATUS_INDICATOR_ANIMATIONS.restInitial
      : STATUS_INDICATOR_ANIMATIONS.restLoop;
  }

  return STATUS_INDICATOR_ANIMATIONS.stopped;
};

export const StatusIndicator: React.FC = () => {
  const status = useSelector(timerSelectors.getStatus);
  const previousStatus = usePrevious(status);
  const forceUpdate = useForceUpdate();

  const { scale, times, duration, repeat } = getAnimation(status, previousStatus);

  const handleAnimationComplete = () => {
    forceUpdate();
  };

  return (
    <StyledStatusIndicator
      animate={{ scale }}
      transition={{ duration, repeat, times, ease: 'easeOut' }}
      onAnimationComplete={handleAnimationComplete}
    />
  );
};
