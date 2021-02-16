import React from 'react'
import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


const StyledTableHead = styled(TableHead)`
    background-color: #fff;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,.08)
`

const StyledTableCell = styled(TableCell)`
    && {
        color: #333333;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;

        padding-top: 12px;
        padding-bottom 12px;
    }
`

const StyledTable = styled(Table)`
    margin: 24px 0;
`

export const DashboardList = ({
    headers = [],
    children
}) => (
    <StyledTable>
        {!!headers.length && (
            <StyledTableHead>
                <TableRow>
                    <StyledTableCell></StyledTableCell>
                    {headers.map((header, key) => (
                        <StyledTableCell
                            key = { key }
                            style = { header?.style }
                        >
                            { header.label }
                        </StyledTableCell>
                    ))}
                    <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
            </StyledTableHead>
        )}
        <TableBody>
            { children }
        </TableBody>
    </StyledTable>
)