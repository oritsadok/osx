import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

export default function Head() {
    const headCategories = [
        'Name',
        'phone',
        'address',
        'debt'
    ]

    return (
        <TableHead>
            <TableRow selected={true}>
                {headCategories.map((c, i) => (
                    <TableCell variant="head" size="medium" key={i}>{c}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}