import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../../videos/components/suggestion-list-layout';
import Empty from '../../videos/components/empty';
import Separator from '../../videos/components/vertical-separator';
import Suggestion from '../../videos/components/suggestion';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state) {
  return {
    list: state.videos.categoryList
  }
}

class Category extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    })
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    )
  }
  renderItem = ({item}) => {
    return (
      <Suggestion
        {...item}
        onPress={()=> { this.viewMovie(item) }}
      />
    )
  }
  render() {

    return (
      <Layout
        title={`${this.props.navigation.getParam('genre', 'Categoria')}`}
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(Category)
