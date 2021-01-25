import React, { Component } from 'react'
import axios from 'axios'

class login extends Component {

    token = ''

    getToken = async () => {
        let response;
        try {
            let cred = {}
            cred["name"] = "ori"
            cred["password"] = "1234i"
            response = await axios({ url: 'http://127.0.0.1:4000/api/login', data: cred, method: "POST" })
            let http_status_code = response.status

            if (http_status_code === 200) {
                // TODO
                let obj = response.data
                let token = JSON.parse(obj)["token"]
                // TODO - save token to State and go to Home
                // console.log(token)
            }
        } catch (err) {
            console.log(err)
            // if (err === ) {
            //     // TODO - message user for invalid cred
            //     console.log("$#$%#$")
            // }
            // else {
            //     // TODO - something went wrong
            // }
        }
    }

    render() {

        return (<div className="login">
            <button onClick={this.getToken} > YES!
            </button>
        </div>)
    }


}

export default login