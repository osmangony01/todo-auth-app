import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';


const TaskList = () => {

    const [addModel, setAddModal] = useState(false);

    // to handle task pop-up modal
    const handleAddModal = (status) => {
        setAddModal(status)
    }

    return (
        <div className=' w-full lg:w-[1000px] mx-auto border px-12 py-6 bg-white mt-3 h-full'>
            <h1 className='text-2xl text-center pb-8 font-semibold'>Welcome to Task Manager</h1>
            <div>
                <button onClick={() => handleAddModal(true)} className='px-4 py-1.5 bg-blue-500 rounded my-4 font-semibold text-white hover:bg-blue-700'>Add Task + </button>
                {
                    <AddTask status={addModel} handleAddModal={handleAddModal}></AddTask>
                }
                <div className='overflow-x-auto w-full '>
                    <table className='table w-full'>
                        <thead className=''>
                            <tr>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;