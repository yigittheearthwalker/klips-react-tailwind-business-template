import React, { useEffect, useContext } from 'react'
import CareersContext from '../../../context/careers/careersContext'
import { FaRegDizzy } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = (props) => {
    const careersContext = useContext(CareersContext)
    const { getJob, selectedJob } = careersContext
    useEffect(() => {
        getJob(parseInt(props.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedJob])
    return (
        <section id='jobs' className="min-h-screen">
            <div className='max-w-6xl px-5 py-32 mx-auto text-start'>
                <div className='flex flex-col items-center space-y-3 text-4xl font-bold'>
                    <p>Jobs Advertisement</p>
                    <hr className='w-24 border-2 border-lightBlue rounded-3xl' />
                </div>
                <div className='flex flex-col pt-20 px-3 md:px-10'>
                    {selectedJob ? 
                    (
                        <div className='flex flex-col text-start md:px-12 space-y-3 md:space-y-12'>
                            <h2 className='text-lg md:text-2xl'><span className='font-bold'>Position: </span><span>{selectedJob.title}</span></h2>
                            <h2 className='text-lg md:text-2xl'><span className='font-bold'>Advertisement Date: </span><span>{new Date(selectedJob.advertisementDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h2>
                            <h2 className='text-lg md:text-2xl'><span className='font-bold'>Due Date: </span><span>{new Date(selectedJob.dueDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h2>
                            <h2 className='text-lg md:text-2xl'><span className='font-bold'>Type: </span><span>{selectedJob.type}</span></h2>
                            <h2 className='text-lg md:text-2xl'><span className='font-bold'>Job Description: </span></h2>
                            <p className='leading-relaxed tracking-wide'>{selectedJob.description}</p>
                            <div className="text-end">
                            <Link to="#" className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-lightBlue text-lightBlue rounded-xl baseline hover:bg-lightBlue hover:text-white'>Apply Now</Link>   
                            </div>
                        </div>
                    ) : (
                        (<div className='flex flex-col items-center space-y-6 text-center'>
                            <FaRegDizzy className='text-6xl'/>
                            <p className='text-2xl'>Job Advertisement not Found!</p>
                        </div>)
                    )}
                </div>
            </div>
        </section>
    )
}

export default Job