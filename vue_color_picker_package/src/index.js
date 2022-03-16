import ColorPick from './components/color'

export default ColorPick

if(typeof window!=='undefined' && window.Vue){
    window.Vue.component('color-pick',ColorPick)
}