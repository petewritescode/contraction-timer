import React, { FunctionComponent } from 'react';
import { StyledContainer, StyledHeading } from './header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../icon/icon.component';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { timerActions } from '../../store/timer/timer.slice';
import { View } from '../../models/view.model';
import { VIEW_TO_HEADING_MAP } from '../../constants/view.constants';
import * as viewSelectors from '../../store/view/view.selectors';

export const Header: FunctionComponent = () => {
    const dispatch = useDispatch();
    const view = useSelector(viewSelectors.getView);
    const heading = VIEW_TO_HEADING_MAP[view];
    const showClearButton = view === View.History;

    const handleClearClick = () => {
        dispatch(timerActions.clearComplete());
    };

    return (
        <header>
            <StyledContainer>
                <StyledHeading>{heading}</StyledHeading>

                {showClearButton && (
                    <button type="button" aria-label="Clear" onClick={handleClearClick}>
                        <Icon name={IconName.Clear} size={IconSize.Medium} />
                    </button>
                )}
            </StyledContainer>
        </header>
    );
};
