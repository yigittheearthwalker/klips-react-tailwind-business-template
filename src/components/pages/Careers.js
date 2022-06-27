
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../layout/Footer'
import Jobs from '../layout/Careers/Jobs'
import Job from '../layout/Careers/Job';

const Careers = (props) => {
const params = useParams();

    return (
        <Fragment>
            {params && params.id ? <Job id={params.id}/> : <Jobs />}
            <Footer logo={props.logo} />
        </Fragment>
    )
}

export default Careers