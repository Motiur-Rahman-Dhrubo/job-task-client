import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AddTasks = () => {

    const axiosPublic = useAxiosPublic();

    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const now = new Date();
        const formattedTimestamp = now.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        const addedTask = {
            TaskTitle: title,
            TaskDescription: description || "",
            Timestamp: formattedTimestamp,
            Category: category,
        };

        axiosPublic.post('/task', addedTask)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Task Added!",
                        text: "Your Task has been added successfully.",
                        icon: "success",
                        confirmButtonText: "Okay",
                    });
                    e.target.reset();
                }
            })
    }
    
    return (
        <div className="w-11/12 mx-auto mt-5">
            <h2 className="lg:text-5xl text-3xl font-semibold text-center">Add Your Task:</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title:</span>
                    </label>
                    <input type="text" name="title" placeholder="Task Title (max 50 characters)" className="input input-bordered" maxLength="50" required/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Description:</span>
                    </label>
                    <textarea name="description" placeholder="Task Description (max 200 characters, optional)" className="textarea textarea-bordered" maxLength="200"/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Category:</span>
                    </label>
                    <select name="category" className="select select-bordered" required defaultValue="">
                        <option value="">Select One</option>
                        <option value="To-Do">To-Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <input className="btn btn-primary w-full mt-4" type="submit" value="Add Task" />

            </form>
        </div>
    );
};

export default AddTasks;