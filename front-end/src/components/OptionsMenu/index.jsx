import React from 'react'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'

const OptionsMenu = ({
    children
}) => (
    <Menu>
        <div>
            {children}
        </div>
        <MenuItem>
            <HomeIcon />
        </MenuItem>
        <MenuItem>
            <SettingsIcon />
        </MenuItem>
        <MenuItem>
            <PowerIcon />
        </MenuItem>
    </Menu>
)

export default OptionsMenu