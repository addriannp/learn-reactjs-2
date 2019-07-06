import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonGroup from '.';

storiesOf('organisms / Button Group', module)
.add('example', () => {
    return (
        <ButtonGroup/>
    )
})