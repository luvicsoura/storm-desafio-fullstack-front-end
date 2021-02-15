import React from 'react'
import styled from 'styled-components'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'

const StyledIndicator = styled.div`
    display: flex;
    align-items: center;

    font-size: 12px;
    text-transform: uppercase;
    color: ${({live}) => live ? '#FF8700' : '#fff'};
`

const StyledLiveIcon = styled(RadioButtonCheckedIcon)`
    &&{
        font-size: 16px;
        margin-right: 7px;
    }
`

export const LiveStatusIndicator = ({
    live = false
}) => (
    <StyledIndicator
        live = { live }
        className = "ff-audiowide"
    >
        <StyledLiveIcon />
        { live ? 'No ar' : 'Fora do ar'}
    </StyledIndicator>
)