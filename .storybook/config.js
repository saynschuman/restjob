import { i18next } from '../src/localization/i18n';
i18next;
import * as moment from 'moment';
moment.locale('ru');
require('../src/styles/initial.styl');

import { configure } from '@storybook/react';

const req = require.context('../src', true, /.story.tsx$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
