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
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#dddddd'}}
        onPress={onDeleteHandler}
        style={({pressed}) => pressed && styles.itemPressed}>
        <Text style={styles.itemTextStyle}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
