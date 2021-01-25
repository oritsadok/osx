import React, { Component } from 'react'
import './Tenants.css'
import TableOfTenants from './TableOfTenants'
import SearchInput from './SearchInput'


class Tenants extends Component {
    componentDidTableOfTenantsMount() {
        this.props.Tenants.getTenantsFromDB()
    }

    render() {
        return (
            <div className="Tenants">
                <SearchInput />
                < TableOfTenants />
            </div>
        )
    }
}

export default Tenants