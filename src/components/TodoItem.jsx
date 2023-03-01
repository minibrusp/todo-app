import React from 'react';
import IconCheck from '../images/icon-check.svg'
import IconCross from '../images/icon-cross.svg'
import { ACTIONS } from '../reducer/todoReducer';

const TodoItem = (props) => {
	const {todo, id, completed, dispatch} = props

	const handleDelete = () => {
		dispatch({type: ACTIONS.DEL_TODO , id: id})
	}

	const handleToggleComplete = (e) => {
		dispatch({type: ACTIONS.COMP_TODO, id: id})
	}

    return ( 
      	<li className='flex justify-between items-center bg-neutral-light-verylightgray py-[10.6px] px-[16px] border-b first:rounded-t-md text-neutral-light-verydarkgrayishblue dark:bg-neutral-dark-verydarkdesaturatedblue dark:text-neutral-dark-lightgrayishblue-normal dark:border-neutral-dark-verydarkgrayishblue2'>
				
			<label className='flex justify-start items-center w-full cursor-move' >
				<div className='mr-2 w-6 aspect-square relative flex justify-center items-center cursor-pointer peer'>
					<input type="checkbox" className='peer w-[20px] h-[20px] appearance-none border border-neutral-light-lightgrayishblue rounded-full checked:bg-gradient-to-r from-primary-checkbg-from to-primary-checkbg-to hover:border-gradient-to-r cursor-pointer' 
					onClick={handleToggleComplete}
					defaultChecked={completed ? true : false}
					/>
					<img src={IconCheck} alt="check-icon" className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] hidden peer-checked:block cursor-pointer' />
					<div className='w-[20px] h-[20px] bg-gradient-to-r from-primary-checkbg-from to-primary-checkbg-to absolute rounded-full hidden peer-hover:block peer-checked:peer-hover:hidden'></div>
					<div className='w-[18px] h-[18px] bg-neutral-light-verylightgray dark:bg-neutral-dark-verydarkdesaturatedblue absolute rounded-full hidden peer-hover:block peer-checked:peer-hover:hidden'></div>
				</div>
				<p className={`text-[12px] cursor-move ${completed && 'completed'}`}>{todo}</p>
			</label>

			<button
				onClick={handleDelete}
			><img src={IconCross} alt="icon-cross" /></button>
		</li>
     );
}
 
export default TodoItem;