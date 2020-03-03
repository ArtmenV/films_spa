import { createAction } from 'redux-actions'
import types from './actionTypes'

export const setCurrentPage = createAction(types.CURRENT_PAGE)
export const setTotalPages = createAction(types.TOTAL_PAGES)