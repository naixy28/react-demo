/**
 * Created by ryuan018 on 8/1/2016.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state,ownProps) => {
  return {
    active: ownProps.filter ===state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onClick: () =>{
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink
