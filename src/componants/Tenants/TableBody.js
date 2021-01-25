import React, { Component } from 'react'
import Tenant from './Tenant'
import TableBody from '@material-ui/core/TableBody'


// class Body extends Component {
//     render() {
//         let page = this.props.page
//         let rowsPerPage = this.props.rowsPerPage
//         return (
//             <TableBody>
//                 {this.props.tenants.tenants
//                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                     .map(c => (
//                         <tenant key={c.id} tenant={c} />
//                     ))}
//             </TableBody>
//         )
//     }
// }

// export default Body