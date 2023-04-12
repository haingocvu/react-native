/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import GoalItem from './components/goal-item';
import GoalInput from './components/goal-input';

function App(): JSX.Element {
  const [listGoals, setListGoals] = useState<Array<{id: string; text: string}>>(
    [],
  );

  const handleAddNew = (goalText: string) => {
    setListGoals(curGoalList => [
      ...curGoalList,
      {id: Math.random().toString(), text: goalText},
    ]);
  };

  const handleDeleteItem = (id: string) => {
    setListGoals(curList => curList.filter(it => it.id !== id));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GoalInput initValue="" onAddNew={handleAddNew} />
        <View style={styles.goalContainer}>
          <FlatList
            data={listGoals}
            renderItem={({item}) => {
              console.log(item.id);
              return (
                <GoalItem
                  id={item.id}
                  text={item.text}
                  onDelete={handleDeleteItem}
                />
              );
            }}
            keyExtractor={(item, index) => item.id + index}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: '100%',
    padding: 16,
  },
  goalContainer: {
    flex: 8,
  },
});

export default App;
