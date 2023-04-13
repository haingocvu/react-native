import {FC, PropsWithoutRef, useState} from 'react';
import {Button, TextInput, View, Modal} from 'react-native';

import {style} from './styles';

interface IGoalInputPropps extends PropsWithoutRef<any> {
  initValue: string;
  visible: boolean;
  onAddNew: (text: string) => void;
  onCancel: () => void;
}

const GoalInput: FC<IGoalInputPropps> = props => {
  const {initValue, onAddNew, visible = false, onCancel} = props;

  const [goalText, setGoalText] = useState(initValue);

  const addNewHandler = () => {
    onAddNew(goalText);
    setGoalText('');
  };

  const cancelAddHandler = () => {
    setGoalText('');
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={style.inputContainer}>
        <TextInput
          value={goalText}
          placeholder="your course goals"
          style={style.inputStyle}
          onChangeText={setGoalText}
        />
        <View style={style.btnGroup}>
          <View style={style.btnItem}>
            <Button title="Add new" color="blue" onPress={addNewHandler} />
          </View>
          <View style={style.btnItem}>
            <Button title="Cancel" color="gray" onPress={cancelAddHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
