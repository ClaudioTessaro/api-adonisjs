"use strict";

const Task = use("App/Models/Task");

class TaskController {
  async index({ params, request, response, view }) {
    const tasks = await Task.query()
      .where("project_id", params.projects_id)
      .with("user")
      .fetch();
  }

  async store({ params, request, response }) {
    const data = request.only([
      "user_id",
      "title",
      "description",
      "due_data",
      "file_id",
    ]);
    const task = await Task.create({ ...data, project_id: params.projects_id });

    return task;
  }

  async show({ params }) {
    const task = await Task.findOrFail(params.id);
    console.log(task);
    return task;
  }

  async update({ params, request }) {
    const data = request.only([
      "user_id",
      "title",
      "description",
      "due_data",
      "file_id",
    ]);
    const task = await Task.findOrFail(params.id);

    task.merge(data);

    await task.save();

    return task;
  }

  async destroy({ params }) {
    const task = await Task.findOrFail(params.id);
    await task.delete();
  }
}

module.exports = TaskController;
