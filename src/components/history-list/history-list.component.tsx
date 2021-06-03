import { Break } from './break/break.component';
import { Contraction } from './contraction/contraction.component';
import { Interval } from './interval/interval.component';
import React from 'react';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

export const HistoryList: React.FC = () => {
  const reversedContractions = useSelector(timerSelectors.getReversedCompletedContractionsWithIntervals);
  const maxIndex = reversedContractions.length - 1;

  return (
    <ol aria-label="Contraction history">
      {reversedContractions.map((contraction, index) => (
        <React.Fragment key={contraction.start}>
          <Contraction start={contraction.start} duration={contraction.duration} />
          {contraction.interval && <Interval duration={contraction.interval} />}
          {index < maxIndex && !contraction.interval && <Break />}
        </React.Fragment>
      ))}
    </ol>
  );
};
