import React from 'react';
import { View as NativeView } from 'react-native';

import { useBanStylerProps, useStyler } from '../../hooks';

export const View = (props) => <NativeView style={useStyler(props)} {...useBanStylerProps(props)} />;
