

const initState = {
    ansId: ['', '', '', '', '', '', '', '', '', ''],
    ans: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    clientData: { name: '', career: '', email: '', telephone: '', contactMethod: '' },
    error: '',
    step: 0,
    createAt: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_RADIO':
            const newAnsId = [...state.ansId]
            const newAns = [...state.ans]

            newAnsId[action.payload.key] = action.payload.id
            newAns[action.payload.key] = action.payload.value
            return {
                ...state,
                ansId: newAnsId,
                ans: newAns
            }
        case 'UPDATE_CLIENTDATA':
            return {
                ...state,
                clientData: {
                    ...state.clientData,
                    [action.payload.id]: action.payload.value
                }
            }
        case 'CLICK_FINISH':
            const { error, completed } = isCompleted(state);
            if (completed) {
                updateToData(state);
                return {
                    ...state,
                    step: 4,
                }
            } else {
                return {
                    ...state,
                    error: error
                }
            }
        case 'CLEAN_ERROR':
            return {
                ...state,
                error: ''
            }
        case 'CHANGE_STEP':
            return {
                ...state,
                step: state.step + action.value
            }
        default:
            return state
    }
}

export default reducer

const isCompleted = (data) => {
    let error = {}

    for (let i = 0; i < 10; i++) {
        if (data.ans[i] === 0) error.ans = true
    }

    if (data.clientData.name === '') error.name = '請填寫姓名'
    if (data.clientData.career === '') error.career = '請填寫職業'
    if (data.clientData.email === '') error.email = '請填寫電子信箱'
    if (data.clientData.telephone === '') error.telephone = '請填寫聯絡電話'
    if (data.clientData.contactMethod === '') error.contactMethod = '請填寫聯絡方式'

    return {
        error,
        completed: Object.keys(error).length ? false : true
    }
}

const updateToData = (value) => {
    const data = {
        "createAt": new Date().toISOString(),
        "name": value.clientData.name,
        "career": value.clientData.career,
        "ans0": value.ans[0],
        "ans1": value.ans[1],
        "ans2": value.ans[2],
        "ans3": value.ans[3],
        "ans4": value.ans[4],
        "ans5": value.ans[5],
        "ans6": value.ans[6],
        "ans7": value.ans[7],
        "ans8": value.ans[8],
        "ans9": value.ans[9],
        "email": value.clientData.email,
        "telephone": value.clientData.telephone,
        "contactMethod": value.clientData.contactMethod
    };
    $.ajax({
        type: "post",
        url: "https://script.google.com/macros/s/AKfycbxGVnGfaszeOftVOvQawm9eInG8nUvIC3Asz5oiqZbuwN88oxZb/exec",
        data: data,
        dataType: "JSON",
        success: function (response) {
            console.log('update success')
        }
    });

}