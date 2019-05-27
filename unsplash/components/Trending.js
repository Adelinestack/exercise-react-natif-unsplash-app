import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { getPhotos } from '../services/apiCalls';

export default class Trending extends Component {
  state = {
    photos: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchPhotos();
    this.setState({ loading: false });
  }

  async fetchPhotos() {
    const photos = await getPhotos();
    this.setState({
      photos,
    });
  }

  render() {
    const { photos, loading } = this.state;
    const photosList = photos.map(({ urls }) => ({ uri: urls.thumb }));
    return (
      <View style={{ flex: 1 }}>
        <Text>Trending</Text>
        <MasonryList style={{ flex: 1 }} images={photosList} columns={3} />
      </View>
    );
  }
}
