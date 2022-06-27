import React, {useReducer} from 'react'
import CareersContext from './careersContext'
import careersReducer from './careersReducer'
import jobsHelper from '../../utils/jobsHelper'

import {
    GET_JOBS,
    GET_JOB
} from '../types'

const CareersState = props => {
    const initialState = {
        jobs: null,
        selectedJob: null
    }
    const [state, dispatch] = useReducer(careersReducer, initialState);
    const getJobs = () => {
        dispatch(
            {
                type: GET_JOBS,
                payload: jobsHelper.getJobs()
            }
        )
    }
    const getJob = (id) => {
        dispatch({
            type: GET_JOB,
            payload: jobsHelper.getJob(id)
        })
    }

    return (
        <CareersContext.Provider
        value={{
            jobs: state.jobs,
            selectedJob: state.selectedJob,
            getJobs: getJobs,
            getJob: getJob
        }}
        >
            {props.children}
        </CareersContext.Provider>
    )

}

export default CareersState 