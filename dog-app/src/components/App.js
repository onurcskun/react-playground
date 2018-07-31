import React from 'react'
import { fetchDog } from '../actions/actions'
import { connect } from 'react-redux'

/*
    *random dog img api
    *https://dog.ceo/api/breeds/image/random
*/

class App extends React.Component {
    render() {
        const {loading, error, fetch} = this.props
        
        return(
            <div>
                <button onClick={() => fetch()}>Show Dog</button>
                {loading
                    ? <p>Loading...</p> 
                    : error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url}/></p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    url: state.reducer.url,
    loading: state.reducer.loading,
    error: state.reducer.error
})

const mapDispatchToProps = (dispatch) => ({
    fetch: () => (dispatch(fetchDog()))
})
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
