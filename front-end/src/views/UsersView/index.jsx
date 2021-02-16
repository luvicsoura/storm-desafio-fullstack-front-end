import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import FilterIcon from '@material-ui/icons/Tune'

import { UsersService } from 'services'
import { AppBar } from 'components'
import { UsersDashboard, FiltersDrawer, AppBarItems } from './components'

import {
    BACKEND_URL,
    USERS_PER_PAGE ,
    PAGINATION_SHOW_FIRST,
    PAGINATION_SHOW_LAST,
    PAGINATION_SHOW_PREVIOUS,
    PAGINATION_SHOW_NEXT
} from 'config'
import { DASHBOARD_HEADERS, FILTERS_HELP_TEXT, FILTERS } from './config'

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
`

export class UsersView extends Component{

    state = {
        users: [],
        page: 1,
        totalPages: 1,
        totalItemsCount: 0,
        showFilters: false
    }

    constructor(props) {
        super(props)

        this.userService = new UsersService({baseUrl: BACKEND_URL}, axios)
        this.bindMethods()
    }

    bindMethods() {
        this.transformUserData = this.transformUserData.bind(this)
    }

    componentDidMount() {
        this.getUsers()
    }

    componentDidUpdate(_, prevState) {
        if (prevState.page !== this.state.page) this.getUsers()
    }

    async getUsers() {

        const offset = this.calculateOffsetFromPage(this.state.page)
        const response = await this.userService.getUsers(null, { limit: USERS_PER_PAGE, offset })
        const newUserData = response.data.map(this.transformUserData)
        const totalCount = parseInt(response.headers['x-total-items-count'])

        this.updateUsersData(newUserData, totalCount)
    }

    updateUsersData(newUserData, totalCount) {
        this.setState({
            users: newUserData,
            totalItemsCount: totalCount,
            totalPages: Math.floor(totalCount / USERS_PER_PAGE)
        })
    }

    calculateOffsetFromPage(page = 1) {
        return parseInt(page) * USERS_PER_PAGE - USERS_PER_PAGE
    }

    transformUserData(user) {

        const transformedData = {}
    
        Object.entries(user).forEach(([key, value]) => {

            switch(key) {

                case 'created_date':
                case 'updated_date':
                    
                    transformedData[key] = (new Date(value)).toLocaleDateString('pt-BR')
                    break
                
                case 'status':
                    
                    transformedData[key] = this.mapStatus(value)
                    break

                case 'roles':
                    
                    const stringValue = value.toString()
                    transformedData[key] = (stringValue.length === 1) ? '0' + stringValue : stringValue
                    break

                default:
                    
                    transformedData[key] = value
            }
        })

        return transformedData
    }

    mapStatus(value) {
    
        switch(value) {
            case 'active':
                return 'ativo'
            
            default: 
                return 'inativo'
        }
    }

    setPage(page) {
        this.setState({ page })
    }

    showFilters = () => {
        this.setState({showFilters: true})
    }

    hideFilters = () => {
        this.setState({showFilters: false})
    }

    render = () => (
        <StyledPage className = "UsersPage">
            <FiltersDrawer
                showFilters = { this.state.showFilters }
                anchor = "right"
                title = "Filtros"
                HeaderIcon = { FilterIcon }
                onClose = { this.hideFilters }
                text = { FILTERS_HELP_TEXT }
                filters = { FILTERS }
            />
            <AppBar 
                position="sticky"
            >
                <AppBarItems
                    onFilterButtonClick = { this.showFilters }
                />
            </AppBar>
            <UsersDashboard
                users = { this.state.users }
                headers = { DASHBOARD_HEADERS }
                totalPages = {this.state.totalPages}
                hidePreviousButton = { !PAGINATION_SHOW_PREVIOUS }
                hideNextButton = { !PAGINATION_SHOW_NEXT }
                showFirstButton = { PAGINATION_SHOW_FIRST }
                showLastButton = { PAGINATION_SHOW_LAST }
                onPaginationChange = { (_, page) => this.setPage(page) }  
            />
        </StyledPage>
    )
}