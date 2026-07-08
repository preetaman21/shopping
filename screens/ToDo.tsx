import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';

interface Todo {
  id: string;
  name: string;
}

const ToDo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleaddtodo() {
    if (task.trim() === '') {
      return;
    }

    const newtodo: Todo = {
      id: Date.now().toString(),
      name: task,
    };

    setTodos([...todos, newtodo]);
    setTask('');
  }

  function handleDeleteTodo(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <View>
      <View className="flex-row items-center justify-between p-4">
        <TextInput
          className="rounded-lg border border-gray-400 px-4 py-2 font-bold "
          placeholder="Enter Your Task....."
          value={task}
          onChangeText={setTask}
        />
        <Pressable className="rounded-lg bg-[#0A4174] px-4 py-2" onPress={handleaddtodo}>
          <Text className="font-bold text-white">Add Task</Text>
        </Pressable>
        
      </View>
      <View className="m-4 rounded-lg border-t border-gray-400 p-4">
        <Text className="mt-2 text-center text-lg font-bold">Task List - </Text>
        <View>
          {todos.length === 0 ? (
            <View>
              
              <Text>No todo available</Text>
            </View>
          ) : (
            <View>
              <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View className="flex flex-row justify-between">
                    <Text>{item.name}</Text>
                    <Pressable onPress={() => handleDeleteTodo(item.id)}>
                      <Text>Delete ❌</Text>
                    </Pressable>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ToDo;
