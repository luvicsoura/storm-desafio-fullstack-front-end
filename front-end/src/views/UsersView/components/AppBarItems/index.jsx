import React from 'react'
import styled from 'styled-components'

import FilterIcon from '@material-ui/icons/Tune'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person'
import SecurityIcon from '@material-ui/icons/Security'

import { ExpandableSection, SearchForm } from 'components'

const FilterButton = styled(Button)`
    && {
        color: #666666;
        line-height: 1;
        font-size: 20px;

        min-width: 0;
        padding: 14px;
        margin: 0 4px;
        background-color: #ffffff;
        
        svg {
            display: inline-block;
        }
    }
`

const AddButton = styled(Button)`
    && {
        color: #fff;
        line-height: 1;
        font-size: 14px;
        text-transform: uppercase;

        min-width: 0;
        padding: 14px;
        margin: 0 4px;
        background-color: #D83367;

        svg {
            font-size: 20px;

            display: inline-block;
        }

        &:hover {
            background-color: #C02A39;
        }
    }
`

const SwitcherButton = styled(Button)`
    && {
        min-width: 0;
        padding: 14px 16px;
        
        svg {
            font-size: 20px;    
        }

        ${props => {
            if (props.active) {
                return `
                    color: #fff;
                    background-image: linear-gradient( 224deg, #FF8700, #D83367);
                `
            }
            
            return `
                color: #666666;
                background-color: #ffff;
            `
        }}
    }
`

const Switcher = styled(Grid)`
    padding-left: 8px;
`

const SearchFormColumn = styled(Grid)`
    padding-left: 40px;
`

const UsersOptions = styled(Grid)`
    padding-right: 4px;
`

export const AppBarItems = ({
    onFilterButtonClick = () => {},
    ...props
}) => (
    <Grid
        container
        alignItems = "center"
    >
        <Switcher item>
            <SwitcherButton>
                <SecurityIcon />
            </SwitcherButton>
            <SwitcherButton
                active="true"
            >
                <PersonIcon />
            </SwitcherButton>
        </Switcher>
        <SearchFormColumn
            item
            component = { ExpandableSection }
        >
            <SearchForm/>
        </SearchFormColumn>
        <UsersOptions item>
            <FilterButton
                onClick = { onFilterButtonClick }
                data-testid = "btn-filter"
            >
                <FilterIcon/>
            </FilterButton>
            <AddButton
                startIcon = { <PersonIcon /> }
            >
                Incluir usuário
            </AddButton>
        </UsersOptions>
    </Grid>
)