import React from "react";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { styled } from "styled-components/native";

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "",
    photos = [
      "https://thumbs.dreamstime.com/z/perfect-hamburger-classic-burger-american-cheeseburger-isolated-white-reflection-giant-large-massive-thick-extra-toppings-59054909.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <>
      <Card style={styles.card} elevation={5}>
        <Card.Cover
          source={{
            uri: photos[0],
          }}
        />
        <Card.Content style={styles.content}>
          <Title>{name}</Title>
          <Paragraph>{address}</Paragraph>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>
    </>
  );
}

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "white",
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
  },
});
