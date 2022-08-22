import axios from 'axios'

export const lessonsAction = () => async dispatch => {
    try {
        dispatch({ type: 'LESSONS_REQ_LOAD' })
        const {data} = await axios.get(`https://fireship-6470a-default-rtdb.firebaseio.com/lessons.json`);
        dispatch({ type: 'LESSONS_REQ_SUC', payload: data })
    }catch(err) {
        dispatch({ type: 'LESSONS_REQ_ERR' })
    }
}

export const tweetsAction = () => async dispatch => {
    try {
        dispatch({ type: 'TWEETS_REQ_LOAD' })
        const {data} = await axios.get(`https://fireship-6470a-default-rtdb.firebaseio.com/tweets.json`);
        dispatch({ type: 'TWEETS_REQ_SUC', payload: data })
    }catch(err) {
        dispatch({ type: 'TWEETS_REQ_ERR' })
    }
}

export const coursesAction = () => async dispatch => {
    try {
        dispatch({ type: 'COURSES_REQ_LOAD' })
        const {data} = await axios.get(`https://fireship-6470a-default-rtdb.firebaseio.com/courses.json`);
        dispatch({ type: 'COURSES_REQ_SUC', payload: data })
    }catch(err) {
        dispatch({ type: 'COURSES_REQ_ERR' })
    }
}

export const tagsAction = () => async dispatch => {
    try {
    dispatch({ type: 'TAGS_REQ_LOAD' })
    const {data} = await axios.get(`https://fireship-6470a-default-rtdb.firebaseio.com/tags.json`);
    dispatch({ type: 'TAGS_REQ_SUC', payload: data })
    }catch(err) {
        dispatch({ type: 'TAGS_REQ_ERR' })
    }
}

export const licensesAction = () => async dispatch => {
    try {
    dispatch({ type: 'LICENSE_REQ_LOAD' })
    const {data} = await axios.get(`https://fireship-6470a-default-rtdb.firebaseio.com/license.json`);
    dispatch({ type: 'LICENSE_REQ_SUC', payload: data })
    }catch(err) {
        dispatch({ type: 'LICENSE_REQ_ERR' })
    }
}

export const userAction = () => async dispatch => {
    try {
    dispatch({ type: 'USER_REQ_LOAD' })
    const {data} = await axios.get(`https://fireship-6470a-default-rtdb.firebaseio.com/user.json`);
    dispatch({ type: 'USER_REQ_SUC', payload: data })
    }catch(err) {
        dispatch({ type: 'USER_REQ_ERR' })
    }
}