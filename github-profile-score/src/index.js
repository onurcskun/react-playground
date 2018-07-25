import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            profiles: [],
            repos: [],
            results: []
        }
    }

    getProfile(uName) {

        return axios.get(`https://api.github.com/users/${uName}`)
            .then((ref) => ref.data)
    }
    
    getRepos(uName) {
        return axios.get(`https://api.github.com/users/${uName}/repos`)
            .then((ref) => ref.data)
    }

    getInfo() {
        var uName = this.state.userName;
        return axios.all([
            this.getProfile(uName),
            this.getRepos(uName)
        ]).then((data) => {
            var profile = data[0];
            var repo = data[1];
        
            this.setState({
                profiles: profile,
                repos: repo
            }, () => this.setState({results: this.calculateScore()}))
        
        })
    }

    getStarCount() {
        return this.state.repos.reduce((count, repo) => count + repo.stargazers_count, 0);
    }

    calculateScore() {
        var followers = this.state.profiles.followers;
        var avatar = this.state.profiles.avatar_url;
        var totalStars = this.getStarCount();
        var profileInfo = {
            avatar: avatar,
            followers: followers,
            totalStars: totalStars,
            score: (followers * 3) + totalStars
        }
        return profileInfo;
    }

    display(item) {
        return(
            <div>
                <li>
                    {console.log(item.avatar_url)}
                    
                    <img src={item.avatar} alt={this.state.userName}></img>
                </li>
                <li>
                    followers : {item.followers}
                </li>
                <li>
                    totalStars: {item.totalStars}
                </li>
                <li>
                    score     : {item.score}
                </li>
            </div>
        )
    }

    render() {
        return(
            <div className="app">
                    <input 
                        type="text"
                        placeholder="enter github username"
                        ref={(i) => this.newInput = i}
                    />
                    <button type="button" onClick={() => this.setState({userName: this.newInput.value}, () => this.getInfo())}>Get User</button>
                    <ul>
                        {this.state.userName && this.display(this.state.results)}
                    </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('wrapper')
)