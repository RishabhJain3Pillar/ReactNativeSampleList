import { connect } from 'react-redux';
import articleList from './articleList';
import { updateArticleList } from '../../redux/action';

const mapStateToProps = ({ alerts }) => ({
  alertsList: alerts.articleList,
});

const mapDispatchToProps = { updateArticleList };

export default connect(mapStateToProps, mapDispatchToProps)(articleList);
