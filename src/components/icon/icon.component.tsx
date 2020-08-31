import React, { FunctionComponent } from 'react';
import { ICON_TYPE_TO_CODE_MAP } from '../../constants/icon.constants';
import { IconSize } from '../../models/icon-size.model';
import { IconType } from '../../models/icon-type.model';
import { StyledIcon } from './icon.styles';

interface Props {
    type: IconType;
    size: IconSize;
}

export const Icon: FunctionComponent<Props> = ({ type, size }) => {
    const iconCode = `&#x${ICON_TYPE_TO_CODE_MAP[type]};`;

    return (
        <StyledIcon
            className="material-icons-round"
            size={size}
            dangerouslySetInnerHTML={{ __html: iconCode }}
        />
    );
};
