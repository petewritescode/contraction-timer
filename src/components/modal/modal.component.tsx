import React, { FunctionComponent, MouseEvent } from 'react';
import {
    StyledBackground,
    StyledClose,
    StyledCloseButton,
    StyledDialog,
    StyledFooter,
    StyledHeader,
    StyledHeading,
    StyledSecondaryButton,
} from './modal.styles';
import { Button } from '../button/button.component';
import { ButtonType } from '../../models/button-type.model';
import { Icon } from '../icon/icon.component';
import { IconSize } from '../../models/icon-size.model';
import { IconType } from '../../models/icon-type.model';
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
                            <Icon type={IconType.Clear} size={IconSize.Small} />
                        </StyledCloseButton>
                    </StyledClose>
                </StyledHeader>

                <main>{children}</main>

                {showFooter && (
                    <StyledFooter>
                        {showPrimaryButton && (
                            <Button label={primaryButtonText} onClick={primaryButtonOnClick} type={ButtonType.Confirm} />
                        )}

                        {showSecondaryButton && (
                            <StyledSecondaryButton>
                                <Button label={secondaryButtonText} onClick={secondaryButtonOnClick} type={ButtonType.Cancel} />
                            </StyledSecondaryButton>
                        )}
                    </StyledFooter>
                )}
            </StyledDialog>
        </StyledBackground>
    );
};
