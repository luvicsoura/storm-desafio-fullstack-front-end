import { shallow } from 'enzyme'

import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'

import { OptionsMenu, StyledMenuItem } from './index.jsx'

describe('<OptionsMenu />', function () {

    it('Deve conter três itens', function () {
        
        const wrapper = shallow(<OptionsMenu />)
        
        expect(wrapper.find(StyledMenuItem)).toHaveLength(3)
    })

    it('Deve conter um botão com ícone da home', function () {
        
        const wrapper = shallow(<OptionsMenu />)

        expect(wrapper.find(HomeIcon)).toHaveLength(1)
    })

    it('Deve conter um botão com ícone de engrenagem', function () {
        
        const wrapper = shallow(<OptionsMenu />)

        expect(wrapper.find(SettingsIcon)).toHaveLength(1)
    })

    it('Deve conter um botão com ícone de desligar', function () {
        
        const wrapper = shallow(<OptionsMenu />)

        expect(wrapper.find(PowerIcon)).toHaveLength(1)
    })

    it('Consegue receber itens dimanicamente', function () {
        
        const wrapper = shallow(<OptionsMenu><button id="btn-dinamico">Botão dinâmico</button></OptionsMenu>)

        expect(wrapper.find('#btn-dinamico')).toHaveLength(1)
    })
})