import React from 'react';
import { storiesOf } from '@storybook/react';

import ConditionalRendering from '.';

storiesOf('organisms / Conditional Rendering', module)
.add('example', () => {
    return (
        <ConditionalRendering/>
    )
})