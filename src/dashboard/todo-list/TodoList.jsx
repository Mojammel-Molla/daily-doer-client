import { useEffect, useState } from 'react';
import DashboardTitle from '../../shared/DashboardTitle';
import TodoTitle from '../../shared/TodoTitle';
import useAxios from './../../hooks/useAxios';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TodoList = () => {
  const [listItems, setListItems] = useState([]);
  const [updateItems, setUpdateItems] = useState({});
  const axios = useAxios();
  useEffect(() => {
    axios.get('/todo-lists').then(res => {
      setListItems(res.data);
    });
  }, [axios]);
  const incompleteItems = listItems?.filter(
    item => item.status == 'Incomplete'
  );
  const ongoingItems = listItems?.filter(item => item.status == 'Ongoing');
  const completedItems = listItems?.filter(item => item.status == 'Complete');

  const handleTaskDelete = _id => {
    axios.delete(`todo-lists/${_id}`).then(res => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast('Your task has been deleted');
      }
    });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, _id) => {
    console.log(data);
    const updateTask = { ...data };
    axios.put(`todo-lists/${_id}`, updateTask).then(res => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast('Your task has been deleted');
      }
    });
  };
  const handleTaskUpdate = _id => {
    axios.get(`todo-lists/${_id}`).then(res => {
      console.log('data from update page', res.data);
      setUpdateItems(res.data);
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  console.log('data from state', updateItems);
  return (
    <>
      <DashboardTitle title="Todo Items">:{listItems.length}</DashboardTitle>
      <div className="grid lg:grid-cols-3 gap-2">
        {/* Incomplete items */}
        <div className=" bg-lime-600">
          <TodoTitle
            title="Incomplete"
            count={incompleteItems.length}
          ></TodoTitle>
          <div
            data-aos="slide-up"
            className="grid gap-3 cursor-grab justify-center"
          >
            {incompleteItems?.map(item => (
              <div
                data-aos="slide-up"
                key={item._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <div className="relative">
                    <h2 className="card-title justify-between">
                      {item?.title}
                    </h2>
                    <div>
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        id="back"
                        className=" absolute right-1 top-1 text-2xl"
                        onClick={() =>
                          document.getElementById('my_modal_5').showModal()
                        }
                      >
                        <FaRegEdit onClick={() => handleTaskUpdate(item._id)} />
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <div className="modal-action">
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="card-body mx-auto w-2/4"
                            >
                              <div className="flex gap-5">
                                <div className="form-control w-2/4">
                                  <label className="label">
                                    <span className="label-text">
                                      Task Name:
                                    </span>
                                  </label>
                                  <input
                                    {...register('title', {
                                      value: updateItems?.title,
                                    })}
                                    name="title"
                                    type="text"
                                    defaultValue={updateItems?.title}
                                    className="input input-bordered"
                                  />
                                </div>

                                <div className="form-control w-2/4">
                                  <label className="label">
                                    <span className="label-text">
                                      Task Description:
                                    </span>
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
                                    <span className="label-text">
                                      Deadline:
                                    </span>
                                  </label>
                                  <input
                                    {...register('deadline')}
                                    name="deadline"
                                    type="date"
                                    defaultValue={updateItems?.deadline}
                                    className="input input-bordered"
                                  />
                                </div>

                                <div className="form-control w-2/4">
                                  <label className="label">
                                    <span className="label-text">
                                      Priority Level:
                                    </span>
                                  </label>
                                  <select
                                    {...register('priority')}
                                    defaultValue={updateItems?.priority}
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
                                  className="btn text-white  bg-[#ee9949] hover:bg-[#62238c] "
                                >
                                  Update Task
                                </button>
                              </div>
                            </form>
                            <button
                              onClick={() => document.getElementById('back')}
                              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                  <p>{item?.description}</p>
                  <div className="card-actions justify-between">
                    <div>
                      <p>
                        Deadline:
                        <span className="font-medium">{item.deadline}</span>
                      </p>
                      <p>
                        Priority:
                        <span className="font-medium">{item.priority}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleTaskDelete(item._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Ongoing items */}
        <div className=" bg-yellow-700">
          <TodoTitle title="Ongoing" count={ongoingItems.length}>
            :{ongoingItems.length}
          </TodoTitle>
          <div className="grid gap-3 justify-center cursor-grab ">
            {ongoingItems?.map(item => (
              <div
                data-aos="slide-up"
                key={item._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title">{item?.title}</h2>
                  <p>{item?.description}</p>
                  <div className="card-actions justify-between">
                    <div>
                      <p>
                        Deadline:
                        <span className="font-medium">{item.deadline}</span>
                      </p>
                      <p>
                        Priority:
                        <span className="font-medium">{item.priority}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleTaskDelete(item._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* completed Items */}
        <div className=" bg-lime-600">
          <TodoTitle
            title="Completed"
            count={completedItems.length}
          ></TodoTitle>

          <div className="grid gap-3 justify-center cursor-grab ">
            {completedItems?.map(item => (
              <div
                data-aos="slide-up"
                key={item._id}
                className="card md:w-96 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title">{item?.title}</h2>
                  <p>{item?.description}</p>
                  <div className="card-actions justify-between">
                    <div>
                      <p>
                        Deadline:
                        <span className="font-medium">{item.deadline}</span>
                      </p>
                      <p>
                        Priority:
                        <span className="font-medium">{item.priority}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleTaskDelete(item._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default TodoList;
