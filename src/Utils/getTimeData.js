function getParsedTimes(times) {

    times.map((time) => {
        time.start = +(time.start.split(':').reduce((acc,time) => (60 * acc) + +time))
        time.end = +(time.end.split(':').reduce((acc,time) => (60 * acc) + +time))
    })
    return times;
}

function getParsedDuration(total_duration) {
    return total_duration = +(total_duration.split(':').reduce((acc,time) => (60 * acc) + +time))
}


export default function getTimeData(times, total_duration) {
    let parsed_times = getParsedTimes(times);
    total_duration = getParsedDuration(total_duration);
    let data = []
    let i = 0;
    let width = 0;
    while (i < times.length) {
        if (parsed_times[i]['start'] != 0 && i == 0) {
            data.push({
                percent: Math.round((parsed_times[i]['start'] - 0) / total_duration * 100),
                inorout: false,
                time: formatedTime(parsed_times[i]['start'], parsed_times[i]['end'])
            })
        }
        data.push({
            percent: Math.round((parsed_times[i]['end'] - parsed_times[i]['start']) / total_duration * 100),
            inorout: true,
            time: formatedTime(parsed_times[i]['start'], parsed_times[i]['end'])
        })

        if (i != times.length -1) {
            data.push({
                percent: Math.round((parsed_times[i+1]['start'] - parsed_times[i]['end']) / total_duration * 100),
                inorout: false,
                time: formatedTime(parsed_times[i]['start'], parsed_times[i]['end'])
            })

        }
    
        else {
            if (parsed_times[i]['end'] == total_duration) {
                break
            }
            data.push({
                percent: Math.round((total_duration - parsed_times[i]['end']) / total_duration * 100),
                inorout: false,
                time: formatedTime(parsed_times[i]['start'], parsed_times[i]['end'])})

            }
        i++;
    }
    return data;

}

function formatedTime(start, end) {
    let parsedStart = new Date(start * 1000).toISOString().substr(11, 8);
    let parsedEnd = new Date(end * 1000).toISOString().substr(11, 8);
    let a = formathours(parsedStart);
    let b = formathours(parsedEnd);
    let formatedTime = `${a} - ${b}`;
    
    return formatedTime;
}

function formathours(date) {
    let formatDate = date.split(':');
    if (formatDate[0] == '00') {
        formatDate = `${formatDate[1]}:${formatDate[2]}`
        return formatDate;
    }
    else {
        return date
    }

}