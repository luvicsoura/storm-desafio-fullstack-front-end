import React, { useState } from 'react'
import styled from 'styled-components'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'


const Overlay = styled.div`
    top: 0;
    left: 0;
    position: absolute;

    width: 100%;
    height: 100%;
    display: block;
    border-bottom: 1px solid #D83367;
    background-color: rgba(255, 255, 255, 0.88);
`

export const DashboardListItem = ({
    data = {},
    actions = []
}) => {
    
    const [isActionOverlayActive, setActionOverlayActiveState] = useState(false)

    function toggleActionOverlayActiveState() {
        setActionOverlayActiveState(!isActionOverlayActive)
    }

    return (
        <TableRow>
            <TableCell>
                <Checkbox />
            </TableCell>
            {Object.entries(data).map(([key, value]) => (
                <TableCell
                    key = { key }
                >
                    { value }
                </TableCell>
            ))}
            <TableCell>
                <Button
                    data-testid = "btn-actions"
                    onClick = { toggleActionOverlayActiveState }
                >
                    <MoreHorizIcon/>
                </Button>
            </TableCell>
            {isActionOverlayActive && (
                <Overlay
                    data-testid = "actions-overlay"
                >
                    {actions.map((action, key) => (
                        <Button
                            key = { key }
                            onClick = { action.action }
                        >
                            { action.label }
                        </Button>
                    ))}
                </Overlay>
            )}
        </TableRow>
    )
}