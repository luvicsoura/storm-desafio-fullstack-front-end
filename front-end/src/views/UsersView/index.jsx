import React, { Component } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'

import { DashboardList, DashboardListItem, Pagination } from 'components'

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
`

export class UsersView extends Component{

    render = () => (
        <StyledPage className = "UsersPage">
            <Container>
                <DashboardList>

                </DashboardList>
                <Pagination />
            </Container>
        </StyledPage>
    )
}