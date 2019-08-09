import React, {Component} from "react"
import axios from "axios"
import { UserDataList } from "../components/UserDataList";

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

        axios.get(`https://api.github.com/search/users?q=${user_input}`)
            .then(results => {
            // console.log("check",results.data.items)
            // const my_data = JSON.stringify(results.data.items)
            const {items} = results.data
            if(items && items.length){
                this.setState({users: items})
                console.log("users", users)
            } else {
                console.log("no data")
            }

        })
    }

    render () {
        return (
            <div>
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

                <h1>Github api loads at run time</h1>
                
                {/* {console.log("yo",this.state.my_data)} */}
                <UserDataList items={this.state.users} />
                
    
                {/* <div>
                    { this.state.my_data ? <p>{this.state.my_data}</p>: <p>please enter text</p> }
                </div> */}
            </div>
        )
    }
}

export default FetchUsersExample