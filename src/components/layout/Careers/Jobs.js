import React, { useContext, useEffect } from 'react'
import CareersContext from '../../../context/careers/careersContext'
import { Link } from "react-router-dom";

const Jobs = () => {
    const careersContext = useContext(CareersContext);
    const { getJobs, jobs } = careersContext;

    useEffect(() => {
        getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jobs])
    return (
        <section id='jobs' className="min-h-screen">
            <div className='max-w-6xl px-5 py-32 mx-auto text-start'>
                <div className='flex flex-col items-center space-y-3 text-4xl font-bold'>
                    <p>Jobs</p>
                    <hr className='w-24 border-2 border-lightBlue rounded-3xl' />
                </div>
                <div className='flex flex-col md:flex-row pt-20 px-10 flex-wrap justify-center gap-6'>
                    {jobs && jobs.map((job, i) => {
                        return (
                            <div key={i} className="flex flex-col space-y-6 p-6 mb-16 md:w-1/3 lg:w-1/4 shadow-md hover:shadow-2xl transition duration-300 rounded-xl">
                            <h2 className=""><span className="font-bold text-lg">Position: </span>{job.title}</h2>
                            <p><span className="font-bold text-lg">Type: </span>{job.type}</p>
                            <p className="grow"><span className="font-bold text-lg">Due Date: </span>{new Date(job.dueDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
                            <div className="text-end">
                            <Link to={`/jobs/${job.id}`} className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-lightBlue text-lightBlue rounded-xl baseline hover:bg-lightBlue hover:text-white'>Read More</Link>   
                            </div>
                        </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Jobs
