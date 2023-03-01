import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import MoonIcon from '../images/icon-moon.svg'
import SunIcon from '../images/icon-sun.svg'

export default function Header() {

	const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)


	return (
		<>
			<header className='static after:content after:bg-mobile-light dark:after:bg-mobile-dark after:bg-no-repeat after:bg-cover after:aspect-video after:absolute after:left-0 after:top-0 after:z-[-1] after:max-h-[210px] dark:after:z-[2] after:w-full after:h-max max-w-[575px] mx-auto my-0 flex justify-between overflow-visible pt-[45px] pb-[30px] px-4 text-center items-center sm:after:bg-desktop-light sm:dark:after:bg-desktop-dark sm:after:max-h-[290px]'>
					<h1 className='text-2xl text-neutral-light-verylightgray font-bold uppercase tracking-[7px] dark:z-[3] sm:text-4xl sm:tracking-[0.8rem] sm:mt-8'>Todo</h1>
					<div className="theme-toggler cursor-pointer dark:z-[3]"
					onClick={() => setIsDarkTheme(!isDarkTheme)}
					>
						<img src={isDarkTheme ? SunIcon : MoonIcon} alt="moon icon" />
					</div>
			</header>
		</>
	)
}