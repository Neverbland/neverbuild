import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Icon from './icon';

import logo from '../../images/sprite/logo.svg';

storiesOf('Icon', module)
  .add('NB logo', () => (
    <Icon glyph={logo} />
  ));
