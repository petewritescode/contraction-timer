import { StyledAverage, StyledAverages, StyledHeading } from './averages.styles';
import { Average } from './average/average.component';
import { AverageType } from '../../models/average-type.model';
import { MS_IN_AN_HOUR } from '../../constants/time.constants';
import { now } from '../../utils/now.util';
import React from 'react';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useIntervalUpdate } from '../../hooks/interval-update.hook';
import { useSelector } from 'react-redux';

const UPDATE_INTERVAL_RUNNING = 1000;
const UPDATE_INTERVAL_STOPPED = 10000;

export const Averages: React.FC = () => {
  const startTimestamp = now() - MS_IN_AN_HOUR;
  const running = useSelector(timerSelectors.getRunning);
  const averageDuration = useSelector(timerSelectors.getAverageDurationSince(startTimestamp));
  const averageInterval = useSelector(timerSelectors.getAverageIntervalSince(startTimestamp));

  useIntervalUpdate(running ? UPDATE_INTERVAL_RUNNING : UPDATE_INTERVAL_STOPPED);

  return (
    <>
      <StyledHeading id="averages-heading">One hour averages</StyledHeading>

      <StyledAverages aria-labelledby="averages-heading">
        <StyledAverage>
          <Average type={AverageType.Duration} duration={averageDuration} />
        </StyledAverage>

        <StyledAverage>
          <Average type={AverageType.Interval} duration={averageInterval} />
        </StyledAverage>
      </StyledAverages>
    </>
  );
};
