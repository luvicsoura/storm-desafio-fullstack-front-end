import { shallow } from 'enzyme'

import { AppBar, Divider } from './index.jsx'

describe('<AppBar />', function () {

    it('Deve não deve renderizar divisores quando children for não passado', function () {

        const wrapper = shallow(<AppBar />)

        expect(wrapper.find(Divider)).toHaveLength(0)
    })

    it('Deve renderizar dois divisores quando children for passado', function () {

        const wrapper = shallow(
            <AppBar>
                <h1>Hooray</h1>
            </AppBar>
        )

        expect(wrapper.find(Divider)).toHaveLength(2)
    })

    it('Deve renderizar children', function () {

        const wrapper = shallow(
            <AppBar>
                <h1>Hooray</h1>
            </AppBar>
        )

        expect(wrapper.find("h1")).toHaveLength(1)
        expect(wrapper.find("h1").text()).toBe('Hooray')
    })
})