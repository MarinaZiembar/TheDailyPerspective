import { connect } from 'react-redux';
import { getLatestNews, getNewsByCategory, } from '../actions/index';
import News from '../components/News';

const mapStateToProps = (state, ownProps) => ({
    category: state.category,
    news: state.news
  })

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetLatestNews: (date) => dispatch(getLatestNews(date)),
  onGetNewsByCategory: (category) => dispatch(getNewsByCategory(category)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News)




