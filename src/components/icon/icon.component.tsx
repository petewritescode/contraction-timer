import React, { FunctionComponent } from 'react';
import { ICON_NAME_TO_CODE_MAP } from '../../constants/icon.constants';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { StyledIcon } from './icon.styles';

interface Props {
    name: IconName;
    size: IconSize;
}

export const Icon: FunctionComponent<Props> = ({ name, size }) => {
    const iconCode = `&#x${ICON_NAME_TO_CODE_MAP[name]};`;

    return (
        <StyledIcon
            className="material-icons-round"
            size={size}
            dangerouslySetInnerHTML={{ __html: iconCode }}
        />
    );
};
