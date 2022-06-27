import {GET_JOB, GET_JOBS} from '../types'

const careersReducer = (state, action) => {
    switch (action.type){
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload
            }
        case GET_JOB:
            return {
                ...state,
                selectedJob: action.payload
            }
        default:
            return {state}
    }
}

export default careersReducer;
