import "../style.css";

class Task {
  constructor(title, description, date, projectId) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.projectId = projectId;
  }

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      date: this.date,
      projectId: this.projectId,
    };
  }
}

export default Task;
