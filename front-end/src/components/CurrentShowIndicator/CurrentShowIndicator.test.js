import { shallow } from 'enzyme'
import { CurrentShowIndicator } from './index.jsx'

describe('<CurrentShowIndicator />', function () {

    it('Deve mostrar o nome do programa atual e o horário de início separados por um traço', function () {

        const wrapper = shallow(
            <CurrentShowIndicator
                showName = "Encontro"
                startTime = {new Date("02/15/2021 10:00")}
            />
        )
        
        expect(wrapper.text().includes('Encontro - 10:00')).toBe(true)
    })
})