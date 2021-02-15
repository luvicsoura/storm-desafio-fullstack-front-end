import { shallow } from 'enzyme'
import MaterialPagination from '@material-ui/lab/Pagination'

import { Pagination } from './index.jsx'

describe('<Pagination />', function () {

    it('Deve renderizar uma instância de <Pagination /> da biblioteca @material-ui', function () {

        const wrapper = shallow(<Pagination />)
        expect(wrapper.find(MaterialPagination)).toHaveLength(1)
    })
})