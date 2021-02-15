import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import { Clock, ExpandableSection, LiveStatusIndicator, CurrentShowIndicator, LastUpdateIndicator } from 'components'

const StyledGrid = styled(Grid)`
    color: #E9E9E9;
    white-space: pre-wrap;

    overflow: hidden;
    padding: 8px 24px 6px;
    background-color: #333333;
`

export const StatusBar = () => (
    <StyledGrid
        container
        alignItems = "center"
    >
        <Grid
            item
            style = {{paddingRight: "43px"}}
        >
            <LiveStatusIndicator live = { true } />
        </Grid>
        <Grid
            item
            container
            component = {ExpandableSection}
            spacing = {5}
            alignItems = "center"
            style = {{padding: "0 20px", transform: "translateY(2px)"}}
        >
            <Grid
                item
                style = {{paddingTop: 0, paddingBottom: 0}}
            >
                <CurrentShowIndicator
                    showName = "Encontro"
                    startTime = {new Date("02/15/2021 10:00")}
                />
            </Grid>
            <Grid
                item
                style = {{paddingTop: 0, paddingBottom: 0}}
            >
                <LastUpdateIndicator updateTime = {new Date("02/15/2021 10:28")} />
            </Grid>
        </Grid>
        <Grid item>
            <Clock />
        </Grid>
    </StyledGrid>
)