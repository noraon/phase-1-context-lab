/* Your Code Here*/
const createEmloyeeRecord = ([firstName, familyName,title,payPerHour]) =>{
    let empObj = {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents : [],
        timeOutEvents :[] 
  }
  return empObj
}

function createEmloyeeRecord(records) {
    return records.map(createEmloyeeRecord)
}

function createTimeInEvent(timeStamp){
    let[date, hour] = timeStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date,
    })
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

