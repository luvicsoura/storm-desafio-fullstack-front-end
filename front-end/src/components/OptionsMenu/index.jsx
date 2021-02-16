import React from 'react'
import styled from 'styled-components'

import MenuItem from '@material-ui/core/MenuItem'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'

const StyledMenu = styled.nav`
    display: inline-flex;
`

export const StyledMenuItem = styled(MenuItem)`
    && {
        padding-left: 12px;
        padding-right: 12px;
    }
`

export const OptionsMenu = ({
    children
}) => (
    <StyledMenu>
        <div>
            {children}
        </div>
        <StyledMenuItem>
            <HomeIcon />
        </StyledMenuItem>
        <StyledMenuItem>
            <SettingsIcon />
        </StyledMenuItem>
        <StyledMenuItem>
            <PowerIcon />
        </StyledMenuItem>
    </StyledMenu>
)