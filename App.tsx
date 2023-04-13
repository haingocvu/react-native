/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Button} from 'react-native';
import GoalItem from './components/goal-item';
import GoalInput from './components/goal-input';

function App(): JSX.Element {
  const [listGoals, setListGoals] = useState<Array<{id: string; text: string}>>(
    [],
  );

  const [showModal, setShowModal] = useState(false);

  const handleAddNew = (goalText: string) => {
    setShowModal(false);
    setListGoals(curGoalList => [
      ...curGoalList,
      {id: Math.random().toString(), text: goalText},
    ]);
  };

  const handleDeleteItem = (id: string) => {
    setListGoals(curList => curList.filter(it => it.id !== id));
  };

  const addNewHandler = () => {
    setShowModal(true);
  };

  const cancelAddHandler = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.addBtnStyle}>
          <Button title="Add New Goal" onPress={addNewHandler} />
        </View>
        <GoalInput
          visible={showModal}
          initValue=""
          onAddNew={handleAddNew}
          onCancel={cancelAddHandler}
        />
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
  addBtnStyle: {
    marginBottom: 16,
  },
});

export default App;
