import { Card, Image, Avatar, Text, Group } from "@mantine/core";
import classes from "./Article.module.css";

export function ArticleCardVertical({ category, title, author, date }) {
  return (
    <Card mt="md" withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <div className={classes.body}>
          {category && (
            <>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                {category}
              </Text>
            </>
          )}

          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar
                size={20}
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
              />
              <Text size="xs">{author}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
