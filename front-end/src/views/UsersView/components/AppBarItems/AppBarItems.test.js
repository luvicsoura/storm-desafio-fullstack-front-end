import { shallow } from 'enzyme'

import { AppBarItems } from './index'

describe('<AppBarItems />', function () {

    it('Deve executar a função passada para onFilterButtonClick ao clicar o botão de filtro', function () {

        const mock = jest.fn()
        const wrapper = shallow(<AppBarItems onFilterButtonClick = {mock} />)

        wrapper.find('[data-testid="btn-filter"]').simulate('click')

        expect(mock).toHaveBeenCalledTimes(1)
    })
})