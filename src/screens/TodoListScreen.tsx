import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { getThemeColors } from '../styles/colors';
import TodoListItem from '../components/TodoListItem';
import Header from '../components/Header';

const categories = ['Semua', 'Kerja', 'Pribadi', 'Belanja', 'Urgent'];

type TodoStatus = 'Terlambat' | 'Pending' | 'Selesai';

interface TodoItem {
  status: TodoStatus;
  category: string;
  title: string;
  dueDate: string;
  isCompleted: boolean;
}

const initialTodos: TodoItem[] = [
  {
    status: 'Terlambat',
    category: 'Kerja',
    title: 'Review laporan penjualan Q2',
    dueDate: 'Kemarin, 17:00',
    isCompleted: false,
  },
  {
    status: 'Pending',
    category: 'Pribadi',
    title: 'Jadwalkan janji temu dokter gigi',
    dueDate: 'Hari ini, 14:00',
    isCompleted: false,
  },
  {
    status: 'Pending',
    category: 'Belanja',
    title: 'Beli bahan makanan untuk minggu ini',
    dueDate: 'Besok, 10:00',
    isCompleted: false,
  },
  {
    status: 'Selesai',
    category: 'Kerja',
    title: 'Kirim email follow-up ke klien',
    dueDate: 'Kemarin, 11:30',
    isCompleted: true,
  },
  {
    status: 'Selesai',
    category: 'Pribadi',
    title: 'Bayar tagihan internet',
    dueDate: '2 hari lalu',
    isCompleted: true,
  },
];

const TodoListScreen = () => {
  const colorScheme = useColorScheme();
  const themeColors = getThemeColors(colorScheme);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [todos, setTodos] = useState(initialTodos);

  const handleToggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    newTodos[index].status = newTodos[index].isCompleted
      ? 'Selesai'
      : 'Pending'; // Simplified status update
    setTodos(newTodos);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <Header
        title="Daftar To-Do List"
        onBackPress={() => {
          // TODO: Implement navigation
        }}
        rightComponent={
          <TouchableOpacity>
            <MaterialIcons
              name="search"
              size={24}
              color={themeColors.textPrimary}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.filterButton,
                {
                  backgroundColor:
                    selectedCategory === category
                      ? themeColors.primary
                      : themeColors.surface,
                },
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color:
                      selectedCategory === category
                        ? '#fff'
                        : themeColors.textSecondary,
                  },
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.listContainer}>
          {todos.map((todo, index) => (
            <TodoListItem
              key={index}
              status={todo.status}
              category={todo.category}
              title={todo.title}
              dueDate={todo.dueDate}
              isCompleted={todo.isCompleted}
              onToggleComplete={() => handleToggleComplete(index)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
});

export default TodoListScreen;
