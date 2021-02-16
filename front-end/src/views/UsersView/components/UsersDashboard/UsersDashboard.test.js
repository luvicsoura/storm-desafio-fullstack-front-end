import { shallow } from 'enzyme'

import { Pagination } from 'components'
import { UsersDashboard, ListItem } from './index'

describe('<UsersDashboard />', function () {

    it('Deve renderizar os usuários passados', function () {

        const users = [{}, {}]
        const wrapper = shallow(<UsersDashboard users = {users} />)

        expect(wrapper.find(ListItem)).toHaveLength(2)
    })

    it('Deve passar onPaginationChange para onChange do componente de paginação', function () {

        const mock = jest.fn()
        const wrapper = shallow(<UsersDashboard onPaginationChange = {mock} />)
        const pagination = wrapper.find(Pagination)

        expect(pagination.prop('onChange')).toBe(mock)
    })
})