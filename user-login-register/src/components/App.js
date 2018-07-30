import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return(
            <div>
                <Link to='/LoginForm' ><button>LoginForm</button></Link>
                <Link to='/RegisterForm' ><button>RegisterForm</button></Link>
            </div>
        )
    }
}

export default App;


/*
import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/LoginForm');
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>App</button>
            </div>
        )
    }
}

export default App;
 */