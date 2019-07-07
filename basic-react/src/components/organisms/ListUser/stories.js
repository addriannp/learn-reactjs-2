import React from 'react';
import { storiesOf } from '@storybook/react';

import ListUser from '.';

storiesOf('organisms / List User', module)
.add('example', () => {
    return (
        <ListUser/>
    )
})