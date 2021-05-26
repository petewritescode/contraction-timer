import { StyledAverages, StyledContainer, StyledTimerView } from './timer-view.styles';
import { Averages } from '../averages/averages.component';
import { Controls } from '../controls/controls.component';
import React from 'react';
import { Timer } from '../timer/timer.component';

export const TimerView: React.FC = () => (
    <StyledTimerView>
        <StyledContainer>
            <section>
                <Timer />
            </section>

            <StyledAverages>
                <Averages />
            </StyledAverages>

            <section>
                <Controls />
            </section>
        </StyledContainer>
    </StyledTimerView>
);
