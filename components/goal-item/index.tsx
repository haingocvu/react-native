import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';
import {FC, PropsWithoutRef} from 'react';

interface IGoalItemProps extends PropsWithoutRef<any> {
  text: string;
  id: string;
  onDelete?: (id: string) => void;
}

const GoalItem: FC<IGoalItemProps> = props => {
  const {id, onDelete, text} = props;

  const onDeleteHandler = () => {
    onDelete?.(id);
  };

  return (
    <Pressable onPress={onDeleteHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.itemTextStyle}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
