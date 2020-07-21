import React, { FunctionComponent } from 'react';
import { StyledContainer, StyledHeading } from './header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../container/container.component';
import { SecondaryButton } from '../secondary-button/secondary-button.component';
import { SecondaryButtonType } from '../../models/secondary-button-type.model';
import { timerActions } from '../../store/timer/timer.slice';
import { View } from '../../models/view.model';
import { VIEW_TO_HEADING_MAP } from '../../constants/view.constants';
import * as timerSelectors from '../../store/timer/timer.selectors';
import * as viewSelectors from '../../store/view/view.selectors';

export const Header: FunctionComponent = () => {
    const dispatch = useDispatch();
    const view = useSelector(viewSelectors.getView);
    const heading = VIEW_TO_HEADING_MAP[view];
    const showClearButton = view === View.History;
    const clearButtonDisabled = !useSelector(timerSelectors.hasCompletedContractions);

    const handleClearClick = () => {
        dispatch(timerActions.clearComplete());
    };

    return (
        <header>
            <Container>
                <StyledContainer>
                    <StyledHeading>{heading}</StyledHeading>

                    {showClearButton && (
                        <SecondaryButton type={SecondaryButtonType.Clear} disabled={clearButtonDisabled} onClick={handleClearClick} />
                    )}
                </StyledContainer>
            </Container>
        </header>
    );
};
