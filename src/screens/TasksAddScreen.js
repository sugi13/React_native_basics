import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';

const TasksAddScreen = () => {

  const [TaskInput, setTaskInput] = useState('');


  return (
    <View style={styles.TaskScreenContainer}>
      <View style={styles.ContentHolder}>
        <Text style={styles.Header}>Create a New Task Here..</Text>
        <TextInput onChangeText={(value) => setTaskInput(value)} placeholder="add task" style = {styles.userInput}/>
        <TouchableOpacity>
          <Text style = {styles.Button} >Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TaskScreenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  ContentHolder: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'column',
    gap: 20,
  },
  Header: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#F36F1C',
  },
  userInput: {
    padding:12,
    fontSize: 18,
    borderColor: "#F4F4F4",
    borderWidth: .9,
    borderRadius: 10,
  },
  Button: {
    backgroundColor: "#F36F1C",
    width: 100,
    textAlign:"center",
    padding: 10,
    color: "white",
    borderRadius: 10
  }

})

export default TasksAddScreen;
