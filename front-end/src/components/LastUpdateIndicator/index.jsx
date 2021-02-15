import React from 'react'
import styled from 'styled-components'
import UpdateIcon from '@material-ui/icons/Update'

const StyledUpdateIcon = styled(UpdateIcon)`
    &&{
        font-size: 16px;
        color: #666666;
        margin-right: 8px;
    }
`

const StyledLastUpdateIndicator = styled.div`
    font-size: 14px;
    font-style: italic;

    align-items: center;
    display: inline-flex;

    b {
        font-weight: 600;
    }
`

export const LastUpdateIndicator = ({
    updateTime
}) => (
    <StyledLastUpdateIndicator>
        <StyledUpdateIcon/>
        Última atualização em <b>{updateTime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</b>
    </StyledLastUpdateIndicator>
)