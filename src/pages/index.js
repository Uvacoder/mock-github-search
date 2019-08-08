import React, {Component} from "react"
import axios from "axios"

class FetchUsersExample extends Component {

    state = {
        loading: false,
        error: false,
        search_text: ""
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

        axios.get(`https://github.com/search?q=${user_input}&type=Users`, { crossdomain: true })
            .then(results => {
            console.log(results)
        })
    }

    render () {
        const { search_text } = this.state.search_text
        return (
            <div>

                {/* Form where user enters input here */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search GitHub users
                        <input
                        type="text"
                        name="search_text"
                        value={this.state.search_text}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>

                {/* Area where response is shown */}
                <h1>Github api loads at run time</h1>
                <div>
                    { this.state.loading ? ( <p>Please hold...</p> ) : search_text ? ( <p>${search_text}</p> ) : (<p>Unable to fetch data...</p>) }
                </div>
            </div>
        )
    }
}

export default FetchUsersExample