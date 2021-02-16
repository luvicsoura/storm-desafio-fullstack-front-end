import { shallow } from 'enzyme'

import DateRangeIcon from '@material-ui/icons/DateRange'

import { Filter } from './index.jsx'

describe('<Filter />', function () {

    it('Deve renderizar o filtro conforme props passadas', function () {

        const wrapper = shallow(
            <Filter
                title = "Todas as dadas de inclusão"
                Icon = { DateRangeIcon }
            />
        )

        expect(wrapper.find(DateRangeIcon)).toHaveLength(1)
        expect(wrapper.text().includes('Todas as dadas de inclusão')).toBe(true)
    })
})