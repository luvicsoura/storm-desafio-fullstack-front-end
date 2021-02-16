import React from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import MaterialDrawer from '@material-ui/core/Drawer'

import { ExpandableSection } from 'components'

const StyledMaterialDrawer = styled(MaterialDrawer)`
    & .MuiDrawer-paper {
        width: 100%;
        max-width: 480px;
        background-color: #F5F5F5;
        overflow: hidden;
    }
`

const DrawerHeader = styled(Grid)`
    padding: 16px 24px;
    background-color: #fff;
    box-shadow: 0 2px 24px 0 rgba(0,0,0,.04)

    line-height: 1;
`

const CloseButton = styled(Button)`
    &&& {
        color: #666666;
        line-height: 1;
        font-size: 20px;

        min-width: 0;
        padding: 12px;
        background-color: #fff;
    }
`

const Content = styled.div`
    padding: 40px 24px;
`

const Title = styled(Grid)`
    color: #333333;    
    font-size: 16px;
    text-transform: uppercase;
`

export const Drawer = ({
    children,
    title,
    HeaderIcon,
    onClose = () => {},
    ...props
}) => (
    <StyledMaterialDrawer
        { ...props }
        onClose = { onClose }
    >
        <DrawerHeader
            container
            alignItems = "center"
            spacing = {2}
        >
            <Grid
                item
                data-testid = "icon-column"    
            >
                {!!HeaderIcon && (
                    <HeaderIcon
                        data-testid = "icon"
                        style = {{
                            color: '#999999',
                            fontSize: '24px',
                            display: 'block'
                        }}
                    />
                )}
            </Grid>
            <Title
                item
                className = "ff-audiowide"
                component = { ExpandableSection }
                data-testid = "title"
            >
                { title }
            </Title>
            <Grid item>
                <CloseButton
                    variant = "contained"
                    onClick = { onClose }
                >
                    <CloseIcon />
                </CloseButton>
            </Grid>            
        </DrawerHeader>
        <Content data-testid = "content">
            { children }
        </Content>
    </StyledMaterialDrawer>
)