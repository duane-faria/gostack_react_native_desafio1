import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const post = (props) => (
  <View style={style.container}>
    <Text style={style.title}>{props.data.title}</Text>
    <Text style={style.author}>{props.data.author}</Text>
    <View style={style.line} />
    <Text style={style.description}>{props.data.description}</Text>
  </View>
);

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  author: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: '#D5D5D5',
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    height: 150,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    width: 250,
    padding: 15,
    marginBottom: 15,
    marginRight: 35,
    borderRadius: 5,
  },
});

export default post;
