export const lessonsReducer = (state = {lessons: []}, action) => {
    switch(action.type) {
        case 'LESSONS_REQ_SUC':
            return { error: false, loading: false, lessons: action.payload }
        case 'LESSONS_REQ_LOAD':
            return { error: false, loading: true, lessons: [] }
        case 'LESSONS_REQ_ERR':
            return { error: true, loading: false, lessons: [] }
        default:
            return state
    }
}

export const coursesReducer = (state = {courses: []}, action) => {
    switch(action.type) {
        case 'COURSES_REQ_SUC':
            return { error: false, loading: false, courses: action.payload }
        case 'COURSES_REQ_LOAD':
            return { error: false, loading: true, courses: [] }
        case 'COURSES_REQ_ERR':
            return { error: true, loading: false, courses: [] }
        default:
            return state
    }
}

export const tweetsReducer = (state = {tweets: []}, action) => {
    switch(action.type) {
        case 'TWEETS_REQ_SUC':
            return { error: false, loading: false, tweets: action.payload }
        case 'TWEETS_REQ_LOAD':
            return { error: false, loading: true, tweets: [] }
        case 'TWEETS_REQ_ERR':
            return { error: true, loading: false, tweets: [] }
        default:
            return state
    }
}

export const tagsReducer = (state = {tags: []}, action) => {
    switch(action.type) {
        case 'TAGS_REQ_SUC':
            return { error: false, loading: false, tags: action.payload }
        case 'TAGS_REQ_LOAD':
            return { error: false, loading: true, tags: [] }
        case 'TAGS_REQ_ERR':
            return { error: true, loading: false, tags: [] }
        default:
            return state
    }
}

export const licenseReducer = (state = {license: []}, action) => {
    switch(action.type) {
        case 'LICENSE_REQ_SUC':
            return { error: false, loading: false, license: action.payload }
        case 'LICENSE_REQ_LOAD':
            return { error: false, loading: true, license: [] }
        case 'LICENSE_REQ_ERR':
            return { error: true, loading: false, license: [] }
        default:
            return state
    }
}