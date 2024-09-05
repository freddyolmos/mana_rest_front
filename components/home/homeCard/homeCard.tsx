import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface HomeCardProps {
  image: string;
  description: string;
  price: number;
  title: string;
  discont?: string
}

function HomeCard({ image, description, price, title, discont }: HomeCardProps) {
  
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={image}
          height={150}
          alt="Card image"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        {discont && <Badge color="pink">{discont}</Badge> }
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Text size="lg" mt="md" w={700}>
        {price}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Agregar
      </Button>
    </Card>
  );
}

export default HomeCard;
