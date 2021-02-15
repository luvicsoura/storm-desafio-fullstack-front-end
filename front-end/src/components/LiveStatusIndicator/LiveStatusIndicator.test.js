import { shallow } from 'enzyme'
import { LiveStatusIndicator } from './index.jsx'

describe('<LiveStatus />', function () {

    it('Deve mostrar o texto "Fora do ar" por padrão', function () {

        const wrapper = shallow(<LiveStatusIndicator />)
        
        expect(wrapper.text().includes('No ar')).toBe(false)
        expect(wrapper.text().includes('Fora do ar')).toBe(true)
    })

    it('Deve mostrar o texto "No ar", quando a propriedade "live" for passada como "true"', function () {

        const wrapper = shallow(<LiveStatusIndicator live = {true} />)
        
        expect(wrapper.text().includes('No ar')).toBe(true)
        expect(wrapper.text().includes('Fora do ar')).toBe(false)
    })
})