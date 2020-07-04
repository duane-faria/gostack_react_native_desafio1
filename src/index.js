import './config/Reactotron';
import './config/Devtools';

import React, {Component, Fragment} from 'react';
import Post from '~/components/Post';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
      {
        id: 5,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
      {
        id: 6,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
      {
        id: 7,
        title: 'Aprendendo React Native',
        author: 'Duane Faria',
        description:
          'lorem dwapodjkwaop dkwapodkwaop kdpwoakdwpao kdopwakdpo wakdowpakdwpoakdwopadkwapo',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
          }}>
          <Text style={{fontWeight: 'bold'}}>React Native App</Text>
        </View>
        <View style={styles.container}>
          <ScrollView style={{}}>
            {this.state.posts.map((post) => (
              <Post data={post} key={post.id}></Post>
            ))}
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    flex: 1,
    display: 'flex',
    margin: 0,
  },
});
