import React from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import { Drawer, Filter } from 'components'

const StyledTypography = styled(Typography)`
    color: #666666;
    font-size: 16px;
    font-style: italic;
    line-height: 1.25;
`

const StyledDivider = styled(Divider)`
    && {
        width: 24px;
        margin-bottom: 16px;
        border-color: #E9E9E9;
    }
`

const StyledButton = styled(Button)`
    && {
        color: #D83367;
        font-size: 14px;
        text-transform: uppercase;

        width: 100%;
        padding: 21px;
        margin-top: 40px;
        border-color: #D83367;

        &:disabled {
            color: #D83367;
            border-color: #D83367;

            opacity: .4;
        }
    }
`

export const FiltersDrawer = ({
    showFilters,
    HeaderIcon,
    onClose,
    text,
    filters = [],
    ...props
}) => (
    <Drawer
        onClose = { onClose }
        HeaderIcon = { HeaderIcon }
        open = { showFilters }
        { ...props }
    >
        <StyledTypography
            paragraph = { true }
            data-testid = "text"
        >
            { text }
        </StyledTypography>
        <StyledDivider/>
        {filters.map((filter, key) => (
            <Filter
                key = { key }
                title = { filter.title }
                type = { filter.type }
                Icon = { filter.icon }
            />
        ))}
        <StyledButton
            variant = "outlined"
            disabled
        >
            Aplicar
        </StyledButton>
    </Drawer>
)