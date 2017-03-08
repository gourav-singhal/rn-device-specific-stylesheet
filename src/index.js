/**
 * @flow
 */
import {
  StyleSheet,
} from 'react-native';

import DeviceDimension from './deviceDimension';

/**
 * create device dimension specific styles
 */
export default {
  create(styles) {
    const keys = Object.keys(styles);
    const newStyles = {};

    keys.forEach(key => {
      const { mobile, tablet, ...style } = styles[key];
      newStyles[key] = {...style, ...DeviceDimension.select({mobile, tablet})};
    });

    return StyleSheet.create(newStyles);
  },
};