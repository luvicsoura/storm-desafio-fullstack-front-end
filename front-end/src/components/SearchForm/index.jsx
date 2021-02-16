import React from 'react'
import styled from 'styled-components'

import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

const StyledTextField = styled(TextField)`
    && {
        color: #333333;
        min-width: 298px;
    
        .MuiInputBase-root:before {
            border-bottom-color: #E9E9E9;
        }
    
        .MuiInputBase-root:after {
            border-bottom-color: #FF8700;
        }
    }
`

const StyledSearchIcon = styled(SearchIcon)`
    color: #666666;
`

export const SearchForm = () => (
    <StyledTextField
        placeholder = "Pesquisar..."
        InputProps = {{
            endAdornment: (
                <InputAdornment position="end">
                    <StyledSearchIcon />
                </InputAdornment>
            )
        }}
    />
)