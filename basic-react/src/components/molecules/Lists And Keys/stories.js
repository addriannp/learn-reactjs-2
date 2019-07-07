import React from 'react';
import { storiesOf } from '@storybook/react';

import ListsAndKeys from '.';

storiesOf('organisms / Lists And Keys', module)
.add('example', () => {
    return (
        <ListsAndKeys/>
    )
})