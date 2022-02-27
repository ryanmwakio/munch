import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchViewStyled = styled.View`
  padding: 16px;
`;

const ListViewStyled = styled.View`
  padding: 16px;
  flex: 1;
  background-color: #fff;
`;

function RestaurantsScreen() {
  return (
    <>
      <SafeAreaViewStyled>
        <SearchViewStyled>
          <Searchbar />
        </SearchViewStyled>

        <ListViewStyled>
          <RestaurantInfoCard />
        </ListViewStyled>
      </SafeAreaViewStyled>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default RestaurantsScreen;
