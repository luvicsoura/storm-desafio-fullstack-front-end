import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const OverlayContainer = styled.td`
    padding: 0;
    position: relative;
`

const Overlay = styled.div`
    top: 0;
    right: 0;
    position: absolute;

    display: flex;
    padding-left: 69px;
    padding-right: 69px;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid #D83367;
    background-color: rgba(255, 255, 255, 0.88);
`

const StyledActionButton = styled(Button)`
    && {
        color: #666666;
    
        padding: 0;
        min-width: 0;
    }
`

export const StyledTableCell = styled(TableCell)`
    && {
        color: #333333;

        border: 0;
        padding-top: 3px;
        padding-bottom: 3px;
    }
`

export const StyledCheckbox = styled(Checkbox)`
    position: relative;

    &:not(.Mui-checked) {
        svg {
            fill: #E9E9E9;
        }

        :before {
            content: '';

            top: 50%;
            left: 50%;
            position: absolute;
            transform: translateY(-50%) translateX(-50%);
            
            width: 18px;
            height: 18px;
            background-color: #fff;
        }
    }
`


export const DashboardListItem = ({
    data = {},
    actions = [],
    ...props
}) => {
    
    const rowRef = useRef()
    const [ isActionOverlayActive, setActionOverlayActiveState ] = useState(false)
    const [ overlayDimensions, setOverlayDimensions ] = useState({width: 0, height: 0})

    function toggleActionOverlayActiveState() {
        setActionOverlayActiveState(!isActionOverlayActive)
    }

    useEffect(() => {
        updateOverlayDimensions()
        document.addEventListener("mousedown", handleClickToClose)
        window.addEventListener('resize', updateOverlayDimensions)
        
        return () => {
            document.removeEventListener("mousedown", handleClickToClose)
            window.removeEventListener('resize', updateOverlayDimensions)
        }
    }, [])

    function updateOverlayDimensions() {

        const row = rowRef.current
        const newDimensions = { width: row.clientWidth, height: row.clientHeight }
        setOverlayDimensions(newDimensions)
    }

    function handleClickToClose() {
        setActionOverlayActiveState(false)
    }

    return (
        <TableRow
            ref={rowRef}
            { ...props }
        >
            <StyledTableCell>
                <StyledCheckbox />
            </StyledTableCell>
            {Object.entries(data).map(([key, input]) => {

                const value = typeof input === 'object' ? input.value : input

                return (
                    <StyledTableCell
                        key = { key }
                        style = { input?.style }
                    >
                        { value }
                    </StyledTableCell>
                )
            })}
            <StyledTableCell
                align = "center"
            >
                <StyledActionButton
                    data-testid = "btn-actions"
                    onClick = { toggleActionOverlayActiveState }
                >
                    <MoreHorizIcon/>
                </StyledActionButton>
            </StyledTableCell>
            {isActionOverlayActive && (
                <OverlayContainer>
                    <Overlay
                        style = { overlayDimensions }
                        data-testid = "actions-overlay"
                    >
                        {actions.map((action, key) => (
                            <StyledActionButton
                                key = { key }
                                onClick = { action.action }
                                style = {{
                                    marginLeft: '16px'
                                }}
                            >
                                { action.label }
                            </StyledActionButton>
                        ))}
                    </Overlay>
                </OverlayContainer>
            )}
        </TableRow>
    )
}