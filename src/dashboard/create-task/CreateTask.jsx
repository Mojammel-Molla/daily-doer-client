import useAxios from '../../hooks/useAxios';
import DashboardTitle from '../../shared/DashboardTitle';
import { useForm } from 'react-hook-form';
const CreateTask = () => {
  const axios = useAxios();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const newTask = { ...data, status: 'Incomplete' };
    axios.post('/todo-lists', newTask).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        alert('Task added successfully');
      }
    });
  };
  return (
    <div>
      <DashboardTitle title="Create Task"></DashboardTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body mx-auto w-2/4"
      >
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Task Name:</span>
            </label>
            <input
              {...register('title')}
              name="title"
              type="text"
              placeholder="Write here task name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Task Description:</span>
            </label>
            <textarea
              {...register('description')}
              placeholder="Task Description"
              className="textarea textarea-bordered textarea-xs w-full max-w-md"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Deadline:</span>
            </label>
            <input
              {...register('deadline')}
              name="deadline"
              type="date"
              placeholder="Select Task Deadline"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Priority Level:</span>
            </label>
            <select
              {...register('priority')}
              required
              defaultValue="set one"
              className="select select-bordered"
            >
              <option disabled selected>
                Choose Priority Level
              </option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
              <option>No Priority</option>
            </select>
          </div>
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn text-white bg-[#ee9949] hover:bg-[#62238c] "
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
