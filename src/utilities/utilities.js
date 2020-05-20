class Applicant {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

class Job {
  constructor(nameOfJob, department, time) {
    this.nameOfJob = nameOfJob;
    this.department = department;
    this.time = time;
  }
}

class ListOfJobs {
  constructor() {
    this.jobList = {};
  }

  addJob(nameOfJob, department, time) {
    let newJob = new Job(nameOfJob, department, time);
    this.jobList = newJob;
  }
}

let newList = new ListOfJobs();

newList.addJob('seo writer', 'creative', '3 - 5 months');

newList.addJob('developer', 'creative', '3 - 5 months');

console.log('This is the list:', newList);

console.log(typeof newList.jobList);

console.log(newList.jobList[0]);
