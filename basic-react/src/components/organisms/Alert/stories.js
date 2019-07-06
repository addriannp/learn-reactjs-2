import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '.';

storiesOf('organisms / Alert', module)
.add('example', () => {
    return (
        <Alert/>
    )
})