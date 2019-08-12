import React, { Component } from 'react';
import axios from 'axios';
import { UserDataList } from '../components/UserDataList';
import Pagination from '../components/Pagination';
import '../styles/my_styles.scss';
import { FaUserCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet'
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
        const numberPages = Math.floor(this.state.totalResults / 20)
        return (
            <Helmet>
                <html lang='en' />
                <title>Search GitHub Users</title> 
                <meta name='author' content='Alicia Barrett'/>
                <meta name="docsearch:version" content="2.0"/>
                <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
                />
            </Helmet>
            <div>    
                {/* Content starts here */}
                <section className='hero is-medium is-primary is-bold has-text-centered'>
                    <div className='hero-body'>
                        <div className='container'>
                            <h1 className='title'>
                            Search for GitHub Users!
                            </h1>
                        </div>
                    </div>
                </section>
                
                <section >
                    <div className='columns is-multiline'>
                        <form onSubmit={this.handleSubmit} className='column is-8'>
                            <div className='field'>
                                <div className='control has-icons-left'>
                                    <label className='has-text-centered'>
                                        <input
                                        type='text'
                                        name='search_text'
                                        className='input is-primary input is-large is-focused'
                                        placeholder='User name'
                                        value={this.state.search_text}
                                        onChange={this.handleInputChange}
                                        />
                                        
                                        <span className='icon is-small is-left'>
                                            < FaUserCircle />
                                        </span>
                                    </label>
                                    <p className='help'>e.g aliciawyse</p>
                                </div>
                            </div>
                            <button type='submit' className="button is-primary">Submit</button>
                        </form>

                        <div className='column is-12 has-text-centered'>
                            <p>Total results: {this.state.totalResults}</p>

                            { this.state.users ? <UserDataList items={this.state.users} /> : <p>User data will populate here once you hit submit!</p> }
                            
                            { this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
                        </div>
                    </div>
                </section>
                {/* Content ends here */}
            </div>
        )
    }
};

export default FetchUsersExample