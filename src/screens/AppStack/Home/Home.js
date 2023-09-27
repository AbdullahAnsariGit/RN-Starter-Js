// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import {colors} from '../../../utils/theme';
// import {useDispatch} from 'react-redux';
// import {logoutUser} from '../../../redux/actions/authAction';
// import Popup from '../../../containers/Popup/Popup';
// import {postMethod} from '../../../services/Api';

// const Home = ({navigation}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const disPatch = useDispatch();

//   const handleApiCall = async() => {
//     const res = await postMethod({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })

//     console.log('rsssses', res);
//   };
//   return (
//     <View style={{gap: 20}}>
//       <Popup
//         onBackButtonPress={() => setIsVisible(false)}
//         onBackdropPress={() => setIsVisible(false)}
//         isVisible={isVisible}
//       />
//       <TouchableOpacity
//         onPress={() => navigation?.navigate('Details')}
//         style={{backgroundColor: 'red', padding: 20}}>
//         <Text>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => setIsVisible(true)}
//         style={{backgroundColor: 'blue', padding: 20}}>
//         <Text style={{color: colors?.white}}>Show Popup</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={handleApiCall}
//         style={{backgroundColor: 'green', padding: 20}}>
//         <Text style={{color: colors?.white}}>Call Api</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddAction, DeleteTodo} from '../../../redux/actions/AddTodoAction';
import {colors} from '../../../utils/theme';
import {logoutUser} from '../../../redux/actions/authAction';

export default function Home() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const todoData = useSelector(state => state?.todo);
  console.log('todoData', todoData);
  const addTodo = () => {
    const newTodo = {
      id: todoData == [] ? 1 : todoData.length + 1,
      name: name,
      descriptio: description,
      age: age,
    };
    if (name == '' || description == '' || age == '') 0;
    else dispatch(AddAction(newTodo));

    setName('');
    setDescription('');
    setAge('');
  };

  const handleDelete = id => {
    dispatch(DeleteTodo(id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(logoutUser())}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text style={{color: colors?.white}}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Todo App</Text>

      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={text => setName(text)}
        />

        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={text => setDescription(text)}
        />

        <Text>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter age"
          value={age}
          onChangeText={text => setAge(text)}
          keyboardType="numeric"
        />

        <Button title="Add" onPress={addTodo} />
      </View>

      <ScrollView style={styles.todoList}>
        {todoData?.map(todo => (
          <View key={todo.id} style={styles.todoItem}>
            <Text>Id: {todo.id}</Text>
            <Text>Name: {todo.name}</Text>
            <Text>Description: {todo.description}</Text>
            <Text>Age: {todo.age}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  marginHorizontal: 20,
                  padding: 5,
                }}>
                <Text style={{color: colors.white}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 55,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  padding: 5,
                }}
                onPress={() => handleDelete(todo?.id)}>
                <Text style={{color: colors.white}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  todoList: {
    flex: 1,
  },
  todoItem: {
    backgroundColor: 'white',
    elevation: 5,
    margin: 6,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
