import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 10,
    backgroundColor: '#088F8F',
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 6,
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: '#00FFFF',
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  btnItem: {
    flex: 1,
  },
  imgStyle: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export {style};
