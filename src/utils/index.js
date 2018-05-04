export const formateDefectsByCustomer = (obj) => {
  let result = []
  for (let o of obj) {
    o.select = 'value_' + o.id
    result.push(o)
  }
  return result
}

export const formatPublishProjects = (projects) => {
  const now = new Date().getTime()
  let start = ''
  let end = ''
  for (let p of projects) {
    start = new Date(p.start).getTime()
    end = new Date(p.end).getTime()
    if (now >= start && now < end) {
      p.isInTime = true
    } else {
      p.isInTime = false
    }
  }
  return projects
}

export const formatApplicationsForProject = (projects) => {
  const now = new Date().getTime()
  let end = ''
  for (let p of projects) {
    end = new Date(p.end).getTime()
    if (now >= end) {
      p.isOutTime = true
    } else {
      p.isOutTime = false
    }
  }
  return projects
}
