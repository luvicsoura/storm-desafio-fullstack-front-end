import React from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import MaterialDivider from '@material-ui/core/Divider'
import MaterialAppBar from '@material-ui/core/AppBar'

import { OptionsMenu, ExpandableSection } from 'components'

import { ReactComponent as Logo } from 'assets/icons/logo.svg'

const StyledMaterialAppBar = styled(MaterialAppBar)`
    && {
        color: #666666;

        padding: 10px 40px;
        background-color: #F5F5F5;
        box-shadow: 0 0 16px 0 rgba(0,0,0,.08)
    }
`

const StyledDivider = styled(MaterialDivider)`
    &&& {
        height: 24px;
        align-self: auto;
        border-color: #E9E9E9;
    }
`

const StyledLogo = styled(Logo)`
    margin: 0;
    display: block;
`

export const Divider = () => (
    <StyledDivider
        orientation = "vertical"
        variant = "middle"
        flexItem = { true }
    />
)

export const AppBar = ({
    children,
    ...props
}) => (
    <StyledMaterialAppBar
        open = {true}
        {...props}
    >
        <Grid
            container
            alignItems = "center"
        >
            <Grid item>
                <StyledLogo/>
            </Grid>
            {!!children && (<Divider/>)}
            <Grid
                item
                component = {ExpandableSection}
            >
                {children}
            </Grid>
            {!!children && (<Divider/>)}
            <Grid item>
                <OptionsMenu/>
            </Grid>
        </Grid>
    </StyledMaterialAppBar>
)