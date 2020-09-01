import React, { FunctionComponent } from 'react';
import { StyledContainer, StyledSectionHeading, StyledTimerView } from './timer-view.styles';
import { Averages } from '../averages/averages.component';
import { Controls } from '../controls/controls.component';
import { Timer } from '../timer/timer.component';

export const TimerView: FunctionComponent = () => (
    <StyledTimerView>
        <StyledContainer>
            <section>
                <Timer />
            </section>

            <section>
                <StyledSectionHeading>One hour averages</StyledSectionHeading>
                <Averages />
            </section>

            <section>
                <Controls />
            </section>
        </StyledContainer>
    </StyledTimerView>
);
