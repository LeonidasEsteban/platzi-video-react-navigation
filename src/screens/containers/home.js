import React, { Component, Fragment } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list.js';
import Movie from '../../screens/containers/movie';
import Search from '../../sections/containers/search';

class Home extends Component {
  static navigationOptions = () => {
    return {
      header: Header
    }
  }
  async componentDidMount() {
    const categoryList = await API.getMovies();
    // console.log('Esta es la lista de categorías')
    // console.table(categoryList);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}


export default connect(null)(Home);
