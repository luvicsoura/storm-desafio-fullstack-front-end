import { shallow } from 'enzyme'

import PersonIcon from '@material-ui/icons/Person'

import { Drawer } from './index.jsx'

describe('<Drawer />', function () {

    it('Deve renderizar o título passado', function () {

        const wrapper = shallow(<Drawer title = "Título"></Drawer>)
        expect(wrapper.find('[data-testid="title"]').text()).toBe('Título')
    })

    it('Deve renderizar o conteúdo passado via children', function () {

        const wrapper = shallow(<Drawer><p>Parágrafo</p></Drawer>)
        expect(wrapper.find('[data-testid="content"] p').text()).toBe('Parágrafo')
    })

    it('Deve ter a coluna de ícone vazia caso ícone não seja passado', function () {

        const wrapper = shallow(<Drawer></Drawer>)
        expect(wrapper.find('[data-testid="icon-column"] [data-testid="icon"]').exists()).toBe(false)
    })

    it('Deve renderizar um ícone na coluna de ícone, quando um ícone for passado', function () {

        const wrapper = shallow(<Drawer HeaderIcon = {PersonIcon}></Drawer>)
        expect(wrapper.find('[data-testid="icon-column"] [data-testid="icon"]').exists()).toBe(true)
    })
})
