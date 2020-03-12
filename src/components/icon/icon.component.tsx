import React, { FunctionComponent } from 'react';
import { NAME_TO_CODE_MAP } from '../../constants/icon.constants';
import { IconName } from '../../models/icon-name.model';
import { IconSize } from '../../models/icon-size.model';
import { StyledIcon } from './icon.styles';

interface Props {
    name: IconName;
    size: IconSize;
}

const getIconCode = (name: IconName): string => `&#x${NAME_TO_CODE_MAP[name]};`;

export const Icon: FunctionComponent<Props> = ({ name, size }) => (
    <StyledIcon
        className="material-icons-round"
        size={size}
        dangerouslySetInnerHTML={{ __html: getIconCode(name) }}
    />
);
