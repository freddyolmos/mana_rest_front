import { useEffect, useState } from 'react';
import axios from 'axios';
import { SimpleGrid } from '@mantine/core';
import HomeCard from '@/components/home/homeCard/homeCard';

interface FoodItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  store: number | null;
}

export default function HomeLayout() {
  const [foods, setFoods] = useState<FoodItem[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/foods')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
      m="xs"
    >
      {foods.map(food => (
        <HomeCard
          key={food.id}
          image={food.image}
          description={food.description}
          price={parseFloat(food.price)}
          title={food.title}
          discont={food.store ? '10% desc.' : undefined}
        />
      ))}
    </SimpleGrid>
  );
}
