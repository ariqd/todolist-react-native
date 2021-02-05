import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Todo from "./Todo";

const TodoList = () => {
  const [title, setTitle] = useState("Todo List");

  return (
    <View>
      <Text>{title}</Text>
      <Todo name={"First Todo"} />
      <Todo name={"Second Todo"} />
      <Todo name={"Third Todo"} />
      <Button title="Change Me!" onPress={() => setTitle("My List")} />
    </View>
  );
};

export default TodoList;
