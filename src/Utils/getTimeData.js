
// let timers = [];

// timers.push(times[0]['start'] - 0);
// timers.push(times[0]['end'] - times[0]['start']);
// timers.push(times[1]['start'] - times[0]['end']);
// timers.push(times[1]['end'] - times[1]['start']);
// timers.push(total_duration - times[1]['end']);
// console.log(timers);

// let data = []
// let i = 0;
// while (i < times.length) {
//     if (times[i]['start'] != 0 && i == 0) {
//         data.push(times[i]['start'] - 0)
//         console.log("start: ", times[i]['start'] - 0)
//     }
//     data.push(times[i]['end'] - times[i]['start'])
//     console.log("i: ",i , "time in: ", times[i]['end'] - times[i]['start']);
//     if (i != times.length -1) {
//         data.push(times[i+1]['start'] - times[i]['end'])
//         console.log("i: ",i , "time: ", times[i+1]['start'] - times[i]['end']);
//     }
   
//     else {
//         if (times[i]['end'] == total_duration) {
//             break
//         }
//         data.push(total_duration - times[i]['end'])
//         console.log("end: ", total_duration - times[i]['end'])
//         console.log('yay')
//     }
//     i++;
// }

// let percent = Math.round(times[0]['start'] / total_duration * 100) + ' %';
// total = timers.reduce((a,b) => a + b);
// console.log("Data: ", data)

export default function getTimeData(times, total_duration) {
    

    let data = []
    let i = 0;
    while (i < times.length) {
        if (times[i]['start'] != 0 && i == 0) {
            data.push({percent: Math.round((times[i]['start'] - 0) / total_duration * 100), inorout: false})
        }
        data.push({percent: Math.round((times[i]['end'] - times[i]['start']) / total_duration * 100), inorout: true})
        if (i != times.length -1) {
            data.push({percent: Math.round((times[i+1]['start'] - times[i]['end']) / total_duration * 100), inorout: false})
        }
    
        else {
            if (times[i]['end'] == total_duration) {
                break
            }
            data.push({percent: Math.round((total_duration - times[i]['end']) / total_duration * 100),inorout: false})
        }
        i++;
    }
    return data;

}