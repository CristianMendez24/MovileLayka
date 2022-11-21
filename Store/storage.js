import {combineReducers} from 'redux';
import data from './pedidos.json'
import statusModal from './reducers'

export default combineReducers({
    orders: ()=>data,
    statusModal:statusModal
})
