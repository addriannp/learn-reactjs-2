import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '.';

storiesOf('atoms / Message', module)
.add('example', () => {
    return (
        <Message date={" 6 - 7 - 2019 "}></Message>
    )
})