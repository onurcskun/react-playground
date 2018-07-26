import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../component/Link'

const mapStateProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.setVisibilityFilter
    }
}
const mapDispatchProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
    
const FilterLink = connect(
    mapStateProps,
    mapDispatchProps
)(Link)

export default FilterLink