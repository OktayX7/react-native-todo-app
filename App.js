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
import EditModal from './src/components/edit-modal';

// Style Imports
import generalStyles from './src/utils/generalStyles';
import {colors} from './src/utils/constans';

const App = () => {
  const initialText = '';

  const [text, setText] = useState(initialText);
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [willEditTodo, setWillEditTodo] = useState({});

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

  const completedTodo = id => {
    Alert.alert(
      'Emin misiniz?',
      `${id} id'li todonun completed değeri güncellenecektir.`,
      [
        {
          text: 'İptal',
          style: 'destructive',
        },
        {
          text: 'Evet',
          onPress: () => {
            const newTodos = todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            });
            setTodos(newTodos);
            Alert.alert('Todo başarıyla güncellendi.');
          },
        },
      ],
      {cancelable: true},
    );
  };

  const deleteTodo = id => {
    Alert.alert(
      'Emin misiniz?',
      `${id} id'li todo silinecektir. Bu işlem geri alınamaz.`,
      [
        {
          text: 'İptal',
          onPress: () => {},
          style: 'destructive',
        },
        {
          text: 'Evet',
          onPress: () => {
            const newTodos = todos.filter(todo => todo.id !== id);
            setTodos(newTodos);
            Alert.alert('Todo başarıyla silindi.');
          },
        },
      ],
      {cancelable: true},
    );
  };

  const openEditModal = () => {
    setIsEdit(true);
  };

  const closeEditModal = () => {
    setIsEdit(false);
  };

  const onConfirmPress = () => {
    const newTodoTitle = willEditTodo.title.trim();

    if (newTodoTitle === initialText) {
      Alert.alert('Lütfen bir todo giriniz.');
      return;
    } else {
      const newTodos = todos.map(todo => {
        if (todo.id === willEditTodo.id) {
          todo.title = willEditTodo.title;
        }
        return todo;
      });
      setTodos(newTodos);
      Alert.alert('Todo başarıyla güncellendi.');
      closeEditModal();
    }
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
              <TodoItem
                key={todo.id}
                item={todo}
                completedOnPress={() => completedTodo(todo.id)}
                deleteOnPress={() => deleteTodo(todo.id)}
                editOnPress={() => {
                  setWillEditTodo(todo);
                  openEditModal();
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <EditModal
        willEditTodo={willEditTodo}
        setWillEditTodo={setWillEditTodo}
        visible={isEdit}
        closeModal={closeEditModal}
        onConfirmPress={onConfirmPress}
      />
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
  },
});

export default App;
