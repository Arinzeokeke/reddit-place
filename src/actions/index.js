import axios from 'axios'
import { Creators } from './types'
import { Place } from '../agent'

export const fetchBoard = () => async dispatch => {
  const board = await Place.board()
  dispatch(Creators.fetchBoard(board))
}
