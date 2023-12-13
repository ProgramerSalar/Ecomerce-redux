import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

const CategoryCard = ({name, id, deleteHandler}) => {
  return (
    <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{
          backgroundColor: 'blue',
        }}
      />
    </TouchableOpacity>
  </View>
  )
}


const styles = StyleSheet.create({


    cardContainer: {
      backgroundColor: 'grey',
      elevation: 5,
      margin: 10,
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 10,
    },
    cardText: {
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
  });

export default CategoryCard