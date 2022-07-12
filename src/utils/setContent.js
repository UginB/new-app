const setContent = (process, Component, data) => {
    switch(process) {
        case 'waiting':
            return console.log('waiting');
        case 'loading':
            return console.log('loading');
        case 'confirmed':
            return <Component data={data} />; 
        case 'error':
            return console.log('error');
        default:
            throw new Error('Unexpected process state')
    }
}

export default setContent;