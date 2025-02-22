import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useMyTasks from "../../hooks/useMyTasks";

const InProgress = () => {

    const [myTasks, refetch] = useMyTasks();
    const axiosPublic = useAxiosPublic();

    const inProgressTasks = myTasks.filter(task => task.Category === "In Progress");

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this task!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/task/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your task has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    };

    const handleUpdate = (task) => {
        Swal.fire({
            title: "Update Task",
            html: `
                <form>
                    <div class="form-control">
                        <label class="label"><span class="label-text">Task Title:</span></label>
                        <input type="text" id="title" class="input input-bordered w-full" value="${task.TaskTitle}" maxLength="50" required />
                    </div>

                    <div class="form-control">
                        <label class="label"><span class="label-text">Task Description:</span></label>
                        <textarea id="description" class="textarea textarea-bordered w-full" maxLength="200" >${task.TaskDescription}</textarea>
                    </div>

                    <div class="form-control">
                        <label class="label"><span class="label-text">Task Category:</span></label>
                        <select id="category" class="select select-bordered w-full" required>
                            <option value="To-Do" ${task.Category === "To-Do" ? "selected" : ""}>To-Do</option>
                            <option value="In Progress" ${task.Category === "In Progress" ? "selected" : ""}>In Progress</option>
                            <option value="Done" ${task.Category === "Done" ? "selected" : ""}>Done</option>
                        </select>
                    </div>
                </form>
                `,
            showCancelButton: true,
            confirmButtonText: "Update",
            cancelButtonText: "Cancel",
            preConfirm: async () => {
                const updatedTask = {
                    TaskTitle: document.getElementById("title").value,
                    TaskDescription: document.getElementById("description").value,
                    Category: document.getElementById("category").value
                };

                const res = await axiosPublic.put(`/task/${task._id}`, updatedTask);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your task has been updated.",
                        icon: "success"
                    });
                    refetch();
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to update the task.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h2 className="md:text-2xl text-xl font-bold mb-4">In Progress List</h2>
            {inProgressTasks.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {inProgressTasks.map(task => (
                        <div key={task._id} className="p-4 border rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">{task.TaskTitle}</h3>
                            <p className="text-gray-600">{task.TaskDescription}</p>
                            <p className="text-sm text-gray-400">Added on: {task.Timestamp}</p>
                            <div className='mt-2 flex gap-2'>
                                <button className='btn btn-sm btn-primary' onClick={() => handleUpdate(task)}>Update</button>
                                <button className='btn btn-sm btn-error' onClick={() => handleDelete(task._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No tasks in "In Progress" category.</p>
            )}
        </div>
    );
};

export default InProgress;