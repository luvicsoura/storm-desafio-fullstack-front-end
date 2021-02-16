import { shallow } from 'enzyme'
import MaterialPagination from '@material-ui/lab/Pagination'

import { Pagination, StyledButton } from './index.jsx'

describe('<Pagination />', function () {

    it('Deve renderizar uma instância de <Pagination /> da biblioteca @material-ui', function () {

        const wrapper = shallow(<Pagination />)
        
        expect(wrapper.find(StyledButton)).toHaveLength(3)
    })

    it('Deve chamar a função passada por onChange, quando botão de página for clicado', function () {

        const mock = jest.fn()
        const wrapper = shallow(<Pagination onChange = {mock} />)

        wrapper.find('[data-testid="btn-page"]').first().simulate('click')

        expect(mock).toHaveBeenCalledTimes(1)
        expect(mock).toHaveBeenCalledWith(undefined, 1)
    })
})