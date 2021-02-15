import { shallow } from 'enzyme'
import { LastUpdateIndicator } from './index.jsx'

describe('<LastUpdateIndicator />', function () {

    it('Deve mostrar o horário da última atualização de acordo com o horário passado', function () {

        const wrapper = shallow(
            <LastUpdateIndicator
                updateTime = {new Date("02/15/2021 10:28")}
            />
        )
        
        expect(wrapper.text().includes('Última atualização em 10:28')).toBe(true)
    })
})