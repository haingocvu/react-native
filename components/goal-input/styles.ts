import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  inputStyle: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'green',
    padding: 6,
  },
  buttonStyle: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export {style};
