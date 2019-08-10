import React, {Component} from 'react'
import axios from 'axios'
import { UserDataList } from '../components/UserDataList';
import Pagination from '../components/Pagination';

class FetchUsersExample extends Component {

    state = {
        loading: false,
        error: false,
        search_text: '',
        totalResults: 0,
        currentPage: 1,
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const user_input = this.state.search_text

        axios.get(`https://api.github.com/search/users?q=${user_input}`)
            .then(results => {

            const {items} = results.data
            
            if(items && items.length){
                this.setState({users: results.data.items, totalResults: results.data.total_count })
            } else {
            }
        })
    };

    nextPage = (pageNumber) => {

        const user_input = this.state.search_text
        axios.get(`https://api.github.com/search/users?q=${user_input}&page=${pageNumber}`)
            .then(results => {

            const {items} = results.data
            
            if(items && items.length){
                this.setState({users: results.data.items, currentPage: pageNumber})
            } else {
                // Do nothing
            }
        })
    }

    render () {
        console.log('test', this.state.users)
        const numberPages = Math.floor(this.state.totalResults / 20)
        return (
            <div style={{textAlign:'center'}}>
                
                <h2>Search for GitHub Users!</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Text here: 
                        <input
                        type='text'
                        name='search_text'
                        value={this.state.search_text}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </form>

                <div>

                    <p>Total results: {this.state.totalResults}</p>

                    { this.state.users ? <UserDataList items={this.state.users} /> : <p>User data will populate here once you hit submit!</p> }
                    
                    { this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}

                </div>
            </div>
        )
    }
};

export default FetchUsersExample