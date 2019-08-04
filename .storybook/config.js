import { addDecorator, configure } from '@storybook/react';

import Decorator from './Decorator';

addDecorator(Decorator());

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);