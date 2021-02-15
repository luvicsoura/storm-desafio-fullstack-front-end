import { shallow } from 'enzyme'

import { Clock } from './index.jsx'

describe('<Clock />', function () {

    it('Deve mostar data por padrão', function () {

        const wrapper = shallow(<Clock/>)
        expect(wrapper.find('[data-testid="date"]')).toHaveLength(1)
    })

    it('Deve esconder data, quando a propriedade showDate for passada como false', function () {

        const wrapper = shallow(<Clock showDate = {false} />)
        expect(wrapper.find('[data-testid="date"]')).toHaveLength(0)
    })
})