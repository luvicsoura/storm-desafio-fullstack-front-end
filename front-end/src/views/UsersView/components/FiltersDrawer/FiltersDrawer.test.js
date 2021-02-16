import { shallow } from 'enzyme'

import { FiltersDrawer } from './index'
import { Filter } from 'components'

describe('<FiltersDrawer />', function() {

    it('Deve renderizar filtros passados', function () {

        const filters = [
            { title: 'Todas as datas de inclusão' },
            { title: 'Todas as datas de alteração' }
        ]
        const wrapper = shallow(<FiltersDrawer filters = {filters} />)
        
        expect(wrapper.find(Filter)).toHaveLength(2)
    })

    it('Deve renderizar o testo passado', function () {

        const wrapper = shallow(<FiltersDrawer text="texto"/>)

        expect(wrapper.find('[data-testid="text"]').text().includes('texto')).toBe(true)
    })
})