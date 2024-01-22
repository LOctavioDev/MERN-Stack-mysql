import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/task.api";
import { useTask } from "../context/taskProvider";


function TaskForm() {

  const {createTask} = useTask()

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createTask(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="onSubmit" disabled = {isSubmitting}>Save</button>
            {isSubmitting ? "Saving..." : "Save"}
          </Form>
        )}
      </Formik>
    </div>
  );
}


export default TaskForm