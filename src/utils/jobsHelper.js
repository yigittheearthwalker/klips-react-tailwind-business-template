const jobs = [
    {
        id: 1,
        title: 'CEO',
        type: 'Full Time',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    },
    {
        id: 2,
        title: 'Executive Assistant',
        type: 'Part Time',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    },
    {
        id: 3,
        title: 'Backend Developer',
        type: 'Full Time',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    },
    {
        id: 4,
        title: 'Junior Frontend Developer',
        type: 'Part Time',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    },
    {
        id: 5,
        title: 'Project Officer',
        type: 'Long Term Contract',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    },
    {
        id: 6,
        title: 'E-Commerce Marketing Specialist',
        type: 'Full Time',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    },
    {
        id: 7,
        title: 'HR Manager',
        type: 'Full Time',
        advertisementDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        dueDate: new Date(2022, 5, 24, 10, 33, 30, 0),
        description: 'Lorem ipsum dolor sit amet, te per nominavi iudicabit argumentum, nec cetero ceteros at, his primis inciderint no. Sit ei aliquid omittam. Ex legimus laoreet vim. Cu scripta liberavisse nam, ius te option regione numquam.'

        + 'Cu has virtute euismod comprehensam. Ut ius scripta alienum, nec ocurreret quaerendum ut. Sit ex dico albucius scripserit. Vix splendide vulputate ex. Dicant mentitum cum id, pri ad putant imperdiet instructior.'
        
        + 'Novum bonorum per ea. An zril dicam definitiones sea, mel eius recusabo at. Aeque putant vis id, at mel dico minim fabellas, et hinc corpora cum. Pro sint laboramus consequuntur no, id mel nibh animal. Quot suscipit et eos. Te zril placerat sit.'
    }
]

const getJobs = () => {
    return jobs;
}
const getJob = (id) => {
    return jobs.find( job => job.id === id )
}

module.exports = {
    getJobs: getJobs,
    getJob: getJob
}