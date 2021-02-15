import { shallow } from 'enzyme'

import { DashboardList } from './index.jsx'

describe('<DashboardList />', function () {

    it('Deve renderizar cabeçalhos', function () {

        const headers = [{label: 'Usuário'}, {label: 'Email'}, {label: 'Data de inclusão'}]
        const wrapper = shallow(<DashboardList headers = {headers} />)

        expect(wrapper.find({children: 'Usuário'})).toHaveLength(1)
        expect(wrapper.find({children: 'Email'})).toHaveLength(1)
        expect(wrapper.find({children: 'Data de inclusão'})).toHaveLength(1)
    })
})