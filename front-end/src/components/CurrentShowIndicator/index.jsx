import React from 'react'
import styled from 'styled-components'

import TvIcon from '@material-ui/icons/Tv'

const StyledIndicator = styled.div`
    color: #E9E9E9;
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;

    align-items: center;
    display: inline-flex;

    b {
        font-weight: 500;
        font-style: normal;
    }
`

const StyledTVIcon = styled(TvIcon)`
    &&{
        font-size: 16px;
        color: #666666;
        margin-right: 8px;
    }
`

export const CurrentShowIndicator = ({
    showName,
    startTime
}) => (
    <StyledIndicator>
        <StyledTVIcon />
        <span>
            <b>{showName}</b>
            {' - '}
            <b>{startTime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</b>
        </span>
    </StyledIndicator>
)