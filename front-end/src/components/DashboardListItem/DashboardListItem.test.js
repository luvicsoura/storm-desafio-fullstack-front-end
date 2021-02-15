import { shallow } from 'enzyme'

import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'

import { DashboardListItem, StyledTableCell, StyledCheckbox } from './index.jsx'

describe('<DashboardListItem />', function () {

    it('Deve carregar caixa de seleção', function () {

        const wrapper = shallow(<DashboardListItem/>)
        expect(wrapper.find(StyledCheckbox)).toHaveLength(1)
    })


    it('Deve carregar dados passados', function () {

        const createdDateText = (new Date('2019-12-03T17:10:43Z')).toLocaleDateString()
        const updatedDateText = (new Date('2020-11-26T13:35:02Z')).toLocaleDateString()
        const dados = {
            first_name: 'Westley',
            last_name: 'Eggle',
            email: 'weggle0@ucsd.edu',
            user_name: 'weggle0',
            created_date: createdDateText,
            updated_date: updatedDateText,
            roles: '02',
            status: 'inativo'
        }
        const wrapper = shallow(<DashboardListItem data={dados} />)

        expect(wrapper.find(StyledTableCell)).toHaveLength(Object.keys(dados).length + 2)
        expect(wrapper.text().includes('Westley')).toBe(true)
        expect(wrapper.text().includes('Eggle')).toBe(true)
        expect(wrapper.text().includes('weggle0@ucsd.edu')).toBe(true)
        expect(wrapper.text().includes('weggle0')).toBe(true)
        expect(wrapper.text().includes(createdDateText)).toBe(true)
        expect(wrapper.text().includes(updatedDateText)).toBe(true)
        expect(wrapper.text().includes('02')).toBe(true)
        expect(wrapper.text().includes('inativo')).toBe(true)
    })

    it(
        'Sem que o botão demais ações seja clicado, não deve carregar o overlay de ações',
        function () {

            const wrapper = shallow(<DashboardListItem/>)
            expect(wrapper.find('[data-testid="actions-overlay"]')).toHaveLength(0)
        }
    )

    it(
        'Quando o botão de mais ações é clicado, abre um overlay com as ações',
        function () {

            const wrapper = shallow(<DashboardListItem/>)
            
            wrapper.find('[data-testid="btn-actions"]').simulate('click')

            expect(wrapper.find('[data-testid="actions-overlay"]')).toHaveLength(1)
        }
    )

    it(
        'Quando ações são passadas, carrega botões das ações no overlay de ações',
        function () {

            const actions = [
                {
                    label: <DeleteIcon />
                },
                {
                    label: <EditIcon />
                }
            ]
            const wrapper = shallow(<DashboardListItem actions = { actions }/>)
            
            wrapper.find('[data-testid="btn-actions"]').simulate('click')

            const overlay = wrapper.find('[data-testid="actions-overlay"]')
            expect(overlay.find(DeleteIcon)).toHaveLength(1)
            expect(overlay.find(EditIcon)).toHaveLength(1)
        }
    )

    it(
        'Quando ações são passadas, carrega botões das ações no overlay de ações',
        function () {

            const actionFunction = jest.fn()
            const actions = [
                {
                    label: <DeleteIcon />,
                    action: actionFunction
                }
            ]
            const wrapper = shallow(<DashboardListItem actions = { actions }/>)
            
            wrapper.find('[data-testid="btn-actions"]').simulate('click')
            wrapper.find('[data-testid="actions-overlay"]').find(DeleteIcon).parent(Button).simulate('click')

            expect(actionFunction).toHaveBeenCalledTimes(1)
        }
    )
})