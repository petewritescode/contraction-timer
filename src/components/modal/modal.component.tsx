import React, { FunctionComponent, MouseEvent } from 'react';
import {
    StyledBackground,
    StyledClose,
    StyledCloseButton,
    StyledDialog,
    StyledFooter,
    StyledHeader,
    StyledHeading,
    StyledPrimaryButton,
    StyledSecondaryButton,
} from './modal.styles';
import { Icon } from '../icon/icon.component';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { modalActions } from '../../store/modal/modal.slice';
import { useDispatch } from 'react-redux';

interface Props {
    heading: string;
    primaryButtonText?: string;
    primaryButtonOnClick?: () => void;
    secondaryButtonText?: string;
    secondaryButtonOnClick?: () => void;
}

export const Modal: FunctionComponent<Props> = ({
    heading,
    primaryButtonText,
    primaryButtonOnClick,
    secondaryButtonText,
    secondaryButtonOnClick,
    children,
}) => {
    const dispatch = useDispatch();
    const showPrimaryButton = Boolean(primaryButtonText && primaryButtonOnClick);
    const showSecondaryButton = Boolean(secondaryButtonText && secondaryButtonOnClick);
    const showFooter = showPrimaryButton || showSecondaryButton;

    const handleCloseClick = () => {
        dispatch(modalActions.close());
    };

    const handleDialogClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <StyledBackground onClick={handleCloseClick}>
            <StyledDialog onClick={handleDialogClick}>
                <StyledHeader>
                    <StyledHeading>{heading}</StyledHeading>

                    <StyledClose>
                        <StyledCloseButton onClick={handleCloseClick}>
                            <Icon name={IconName.Clear} size={IconSize.Small} />
                        </StyledCloseButton>
                    </StyledClose>
                </StyledHeader>

                <main>{children}</main>

                {showFooter && (
                    <StyledFooter>
                        {showPrimaryButton && (
                            <StyledPrimaryButton onClick={primaryButtonOnClick}>{primaryButtonText}</StyledPrimaryButton>
                        )}

                        {showSecondaryButton && (
                            <StyledSecondaryButton onClick={secondaryButtonOnClick}>{secondaryButtonText}</StyledSecondaryButton>
                        )}
                    </StyledFooter>
                )}
            </StyledDialog>
        </StyledBackground>
    );
};
