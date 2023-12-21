import { useEffect, useState } from 'react';
import DashboardTitle from '../../shared/DashboardTitle';
import TodoTitle from '../../shared/TodoTitle';
import useAxios from './../../hooks/useAxios';

const TodoList = () => {
  const [listItems, setListItems] = useState([]);
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
          <div className="grid gap-3 cursor-grab justify-center">
            {incompleteItems?.map(item => (
              <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
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
                    <button className="btn">Delete</button>
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
              <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
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
                    <button className="btn">Delete</button>
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
                    <button className="btn">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
