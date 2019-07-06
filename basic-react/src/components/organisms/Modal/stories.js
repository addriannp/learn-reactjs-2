import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '.';

storiesOf('organisms / Modal', module)
.add('example', () => {
    return (
        <Modal/>
    )
})