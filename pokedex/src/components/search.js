import React from 'react'
import { connect } from 'react-redux'
import { fetchPokes, setDisplayFilteredStatus, setDisplaySelectedPokemon } from '../redux/actions'

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            id: ''
        }

        this.props.fetchPokes();
    }

    render(){
        const {pokemons, error, displayFilteredStatus, setDisplayFilteredStatus, setDisplaySelectedPokemon, displaySelectedStatus } = this.props;
        
        const filteredPokes  = pokemons.filter(pokemon => {
            return pokemon.name.includes(this.state.query.value)
        })
        return(
            <div>
                {error}
                
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        placeholder="search"
                        ref={(i) => this.newInput = i}
                        onChange={e => this.setState({ query: this.newInput}, () => {setDisplayFilteredStatus()} )}/>
                    <ul>
                        {displayFilteredStatus && filteredPokes.map(pokemon => 
                                <li 
                                    key={pokemon.name} 
                                    onClick={() => this.setState({id: pokemon.id}, () => setDisplaySelectedPokemon())}>
                                    {pokemon.name}
                                </li>
                            )}
                    </ul>
                    {displaySelectedStatus &&
                        <div className="poke-img">
                            <img
                                alt="pokemon"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png`} 
                            />
                        </div> 
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pokemons: state.reducer.pokemons,
    error: state.reducer.error,
    displaySelectedStatus: state.reducer.displaySelectedStatus,
    displayFilteredStatus: state.reducer.displayFiltered,
})

const mapDispatchToProps =  {
    fetchPokes,
    setDisplayFilteredStatus,
    setDisplaySelectedPokemon
}

export const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search)