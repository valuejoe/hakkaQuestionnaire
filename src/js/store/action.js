export const inputAnser = (key, id, value) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_RADIO',
            payload: { key, id, value }
        })
        dispatch({
            type: 'CLEAN_ERROR'
        })
    }
}

export const updateClientData = (id, value) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_CLIENTDATA',
            payload: { id, value }
        })
        dispatch({
            type: 'CLEAN_ERROR'
        })
    }
}

export const clickFinish = () => {
    return dispatch => {
        dispatch({ type: 'CLICK_FINISH' })
    }
}

export const changeStep = (value) => {
    return dispatch => {
        dispatch({
            type: 'CHANGE_STEP',
            value
        })
    }
}