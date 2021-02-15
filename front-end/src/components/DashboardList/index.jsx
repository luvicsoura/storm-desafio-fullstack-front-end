import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


export const DashboardList = ({
    headers = [],
    children
}) => (
    <Table>
        {!!headers.length && (
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    {headers.map((header, key) => (
                        <TableCell key = {key}>
                            { header.label }
                        </TableCell>
                    ))}
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
        )}
        <TableBody>
            { children }
        </TableBody>
    </Table>
)