import {FC, PropsWithoutRef, useState} from 'react';
import {Button, TextInput, View} from 'react-native';

import {style} from './styles';

interface IGoalInputPropps extends PropsWithoutRef<any> {
  initValue: string;
  onAddNew: (text: string) => void;
}

const GoalInput: FC<IGoalInputPropps> = props => {
  const {initValue, onAddNew} = props;

  const [goalText, setGoalText] = useState(initValue);

  const onAddHandler = () => {
    onAddNew(goalText);
    setGoalText('');
  };

  return (
    <View style={style.inputContainer}>
      <TextInput
        value={goalText}
        placeholder="your course goals"
        style={style.inputStyle}
        onChangeText={setGoalText}
      />
      <Button title="Click me" color="blue" onPress={onAddHandler} />
    </View>
  );
};

export default GoalInput;
