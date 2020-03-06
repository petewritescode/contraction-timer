import React, { FunctionComponent } from 'react';

interface Props {
    heading: string;
}

export const Header: FunctionComponent<Props> = ({ heading }) => <div>{heading}</div>;
