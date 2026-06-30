import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const cat = [
  { name: 'Women', icon: 'woman' },
  { name: 'Men', icon: 'man' },
  { name: 'Kids', icon: 'happy' },
  { name: 'Beauty', icon: 'sparkles' },
  { name: 'Home', icon: 'home' },
  { name: 'Western', icon: 'shirt' },
  { name: 'Electronics', icon: 'phone-portrait' },
  { name: 'Bags', icon: 'bag' },
];

const Categories = () => {
  return (
    <View>
      <FlatList
        data={cat}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: any) => (
          <View className="m-2 rounded-lg bg-pink-900 items-center py-3 flex flex-row px-3">
            <Ionicons name={item.icon} size={24} color="#fefce8" />
            <Text className="font-bold text-yellow-50 mt-1 text-center">{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;
