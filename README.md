# rn-device-specific-stylesheet

Add Device specific media query based styles to your react native app.

For Mobile use key 'mobile'
For Tablet use key 'tablet'

## Installation

```
npm install --save rn-device-specific-stylesheet
```

## Example

To add red color to Welcome text in mobile and yellow color to Welcome text in tablet

```
import StyleSheet from 'rn-device-specific-stylesheet';

const styles = StyleSheet.create({
welcome: {
    fontSize: normalize(20),
    textAlign: 'center',
    margin: 10,
    mobile: {
      color: 'red',
    },
    tablet: {
      color: 'yellow',
    },
  }
});
```

To use it with React Native StyleSheet import it with a different name

```
import DSS from 'rn-pss';
```
