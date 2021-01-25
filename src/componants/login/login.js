import React, { Component } from 'react'
import axios from 'axios'
import createAuthProvider from './createAuthProvider'

class login extends Component {


    authenticate = async () => {
        let response;

        try {
            let cred = {}
            cred["name"] = "ori" // SAVE ME!!! DYNAMIC LOCAL STORAGE USERNAME
            cred["password"] = "1234" // SAVE ME!!! DYNAMIC LOCAL STORAGE USERNAME
            response = await axios({ url: 'http://127.0.0.1:4000/api/login', data: cred, method: "POST" })
            let http_status_code = response.status

            // you're cool, go ahead
            if (http_status_code === 200) {
                let obj = response.data
                let token = JSON.parse(obj)
                console.log(token)
                createAuthProvider().login(token)

                // TODO - save token to State -> and redirect to Home
            }
        }
        // No good, can't get to home
        catch (err) {
            console.log(err)
        }
    }

    logOut = async () => {
        createAuthProvider().logout()
        // TODO - don't forget to set global username
        let cred = {}
        cred["name"] = "ori" // SAVE ME!!! DYNAMIC LOCAL STORAGE USERNAME
        let response = await axios({ url: 'http://127.0.0.1:4000/api/logout', data: cred, method: "POST" })
        // TODO - print to user "Good bye"
    }


    test = async () => {
        // EXAMPLE - how every api call should look like (with token)
        let promise = await createAuthProvider().authFetch('http://127.0.0.1:4000/api/test', { method: 'GET' })

    }

    render() {

        return (<div className="login">
            <button onClick={this.authenticate} > YES!
            </button>

            <button onClick={this.logOut} > NO!
            </button>

            <button onClick={this.test} > TEST!
            </button>
        </div>)
    }


}
export default login


