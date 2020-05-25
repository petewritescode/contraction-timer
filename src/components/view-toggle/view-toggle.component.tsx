import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../icon/icon.component';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { StyledViewToggle } from './view-toggle.styles';
import { View } from '../../models/view.model';
import { viewActions } from '../../store/view/view.slice';
import * as viewSelectors from '../../store/view/view.selectors';

export const ViewToggle: FunctionComponent = () => {
    const dispatch = useDispatch();
    const view = useSelector(viewSelectors.getView);
    const iconName = view === View.Chart ? IconName.History : IconName.Timer;

    const handleClick = (): void => {
        dispatch(viewActions.toggle());
    };

    return (
        <StyledViewToggle onClick={handleClick}>
            <Icon name={iconName} size={IconSize.Medium} />
        </StyledViewToggle>
    );
};
