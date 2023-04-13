import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 10,
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 6,
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  btnItem: {
    flex: 1,
  },
});

export {style};
