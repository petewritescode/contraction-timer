import React, { FunctionComponent } from 'react';
import { StyledContent, StyledLayout } from './layout.styles';
import { Content } from '../content/content.component';
import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Layout: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);

    return (
        <StyledLayout status={status}>
            <section>
                <Header />
            </section>

            <StyledContent>
                <Content />
            </StyledContent>

            <section>
                <Footer />
            </section>
        </StyledLayout>
    );
};
