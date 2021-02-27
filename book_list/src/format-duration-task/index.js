
const secondsInEachUnit = {
    year: 60 * 60 * 24 * 365,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
  
  }

formatDuration = (seconds) => {

    let minute = 0, hour = 0, day = 0, year = 0

    let secondsLeft = seconds

    const findNumberOfUnits = (unit) => {
        let counter = 0
        while (secondsLeft >= secondsInEachUnit[unit]) {
            secondsLeft -= secondsInEachUnit[unit]
            counter++
        }
        return counter
    }

    year = findNumberOfUnits("year")
    day = findNumberOfUnits("day")
    hour = findNumberOfUnits("hour")
    minute = findNumberOfUnits("minute")


    return { year, day, hour, minute, second: secondsLeft }

}

console.log(formatDuration(1234))
const makeIfNumberIsPlural = ({ unit, time }) => time > 1 ? `${time} ${unit}s` : `${time} ${unit}`

const finalResult = time => {
    if (time === 0) {
        return "now"
    }
    return Object.entries(formatDuration(time)).map(([unit, time]) => {
        return { unit, time }
    }).filter(({ time }) => time >= 1).map(makeIfNumberIsPlural).join(" and ")
}
