import React from 'react';

const TodoOptions = (props) => {

    const { todos, setSortType, sortType, completeLength, notCompleteLength, clearComplete } = props

    const handleBtnClick = () => {
        clearComplete()
        // dispatch({type: ACTIONS.CLEAR_COMP_TODO})
    }

    return ( 
        <div className='flex justify-between items-center bg-neutral-light-verylightgray py-[10.6px] px-[16px] text-neutral-light-darkgrayishblue text-[12px] relative 
        rounded-b-md dark:bg-neutral-dark-verydarkdesaturatedblue dark:text-neutral-dark-darkgrayishblue sm:text-[13px] sm:py-2 sm:px-[1.3rem]'>
            <span className='sm:w-full'>
            { sortType == 'all' && todos.length + " " }
            { sortType == 'active' && notCompleteLength + " " }
            { sortType == 'complete' && completeLength + " " }
                <span>
                    items left

                </span>
            </span>


            <div className='flex justify-center items-center gap-4 bg-neutral-light-verylightgray py-[10.6px] px-[16px] text-neutral-light-darkgrayishblue text-md font-bold absolute w-full left-0 top-[3.7rem] text-[14px] shadow-lg dark:bg-neutral-dark-verydarkdesaturatedblue dark:text-neutral-dark-lightgrayishblue-normal rounded-md sm:static sm:shadow-none sm:p-0'>
                <label className='cursor-pointer hover:text-neutral-light-verydarkgrayishblue
                dark:text-neutral-dark-darkgrayishblue
                hover:dark:text-neutral-dark-lightgrayishblue-hover'
                tabIndex={0}
                >
                    <input type="radio" name="sort" value='all' className='hidden peer' onChange={e => setSortType(e.target.value)} defaultChecked={sortType == 'all' ? true : false} />
                    <span className='peer-checked:text-primary-brightblue'>All</span>
                </label>
                <label className='cursor-pointer hover:text-neutral-light-verydarkgrayishblue
                dark:text-neutral-dark-darkgrayishblue
                hover:dark:text-neutral-dark-lightgrayishblue-hover'
                tabIndex={0}
                >
                    <input type="radio" name="sort" value='active' className='hidden peer' onChange={e => setSortType(e.target.value)}/>
                    <span className='peer-checked:text-primary-brightblue'>Active</span>
                </label>
                <label className='cursor-pointer hover:text-neutral-light-verydarkgrayishblue
                dark:text-neutral-dark-darkgrayishblue
                hover:dark:text-neutral-dark-lightgrayishblue-hover'
                tabIndex={0}
                >
                    <input type="radio" name="sort" value='complete' className='hidden peer' onChange={e => setSortType(e.target.value)}/>
                    <span className='peer-checked:text-primary-brightblue'>Completed</span>
                </label>
            </div>



            <button className='hover:text-neutral-light-verydarkgrayishblue hover:dark:text-neutral-dark-lightgrayishblue-hover sm:w-full sm:text-right'
            onClick={handleBtnClick}
            >Clear Completed</button>
        </div>
     );
}
 
export default TodoOptions