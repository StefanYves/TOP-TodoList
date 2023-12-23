import "../style.css";

class Task {
  constructor(title, description, date, projectId) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.projectId = projectId;
  }
}

export default Task;
