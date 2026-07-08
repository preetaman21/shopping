import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';

interface TODO {
  id: string;
  name: string;
  iscompleted: boolean;
}

const ToDo2 = () => {
  const [task, setTask] = useState<string>('');
  const [todos, setTodos] = useState<TODO[]>([]);

  function handleaddtodo() {
    if (task.trim() === '') {
      return;
    }

    const newtodo: TODO = {
      id: Date.now().toString(),
      name: task,
      iscompleted: false,
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
        <TextInput className="border border-gray-300 p-2" placeholder="Enter task..." 
        value={task}
        onChangeText={setTask}
        />
        <Pressable onPress={handleaddtodo} className="bg-rose-200 p-2 rounded-xl">
          <Text>Add Task</Text>
        </Pressable>
      </View>
      <View>
        <Text>Task List</Text>
        <View>
           {todos.length===0 ? (
            <View> 
              <Text>No Todos Available</Text>
           </View> ) : ( 
            <View>
                <FlatList
                 data={todos}
                 keyExtractor={(item)=> item.id}
                 renderItem={({item}) =>(
                    <View className="flex flex-row justify-between">
                     <Text>{item.name}</Text>
                    <Pressable onPress={()=> handleDeleteTodo(item.id)}>
                      <Text>Delete</Text>
                    </Pressable>
                    </View>
                 )}
                />
             </View> )}
        </View>
      </View>
    </View>
  );
};

export default ToDo2;
