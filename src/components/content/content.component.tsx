import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '../container/container.component';
import { HistoryView } from '../history-view/history-view.component';
import { Path } from '../../models/path.model';
import { StyledContent } from './content.styles';
import { TimerView } from '../timer-view/timer-view.component';

export const Content: FunctionComponent = () => (
    <StyledContent>
        <Container fullHeight padded>
            <Switch>
                <Route path={Path.Timer} exact>
                    <TimerView />
                </Route>

                <Route path={Path.History} exact>
                    <HistoryView />
                </Route>
            </Switch>
        </Container>
    </StyledContent>
);
