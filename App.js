// React Imports
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

// Component Imports
import {Header} from './src/components/header';
import Input from './src/components/input';
import TodoItem from './src/components/todoItem';

// Style Imports
import generalStyles from './src/utils/generalStyles';
import {colors} from './src/utils/constans';

const App = () => {
  const initialText = '';

  const [text, setText] = useState(initialText);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      title: text,
      date: new Date(),
      completed: false,
    };

    const trimText = text.trim();

    if (trimText === initialText) {
      Alert.alert('Lütfen bir todo giriniz.');
    } else {
      setTodos([...todos, newTodo]);
    }

    setText(initialText);
  };

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header>My Todo App</Header>
      <Input
        placeholder="Enter Todo"
        hasIcon={true}
        onIconPress={addTodo}
        value={text}
        onChangeText={t => setText(t)}
      />
      <View style={styles.todosWrapper}>
        {todos?.length === 0 && (
          <Text style={styles.emptyText}>
            Henüz Kayıtlı Bir Todo Bulunmamaktadır
          </Text>
        )}
        {todos?.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {todos?.map(todo => (
              <TodoItem key={todo.id} item={todo} />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  scrollView: {
    flexGrow: 1,
    borderWidth: 1,
    padding: 20,
  },
});

export default App;
