import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import MoonIcon from '../images/icon-moon.svg'
import SunIcon from '../images/icon-sun.svg'

export default function Header() {

	const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)


	return (
		<>
			<header className='relative after:content after:bg-mobile-light dark:after:bg-mobile-dark after:bg-no-repeat after:bg-cover after:aspect-video after:absolute after:left-0 after:top-0 after:z-[-1] dark:after:z-[2] after:w-full after:h-max flex justify-between overflow-visible pt-[45px] pb-[30px] px-4 text-center items-center sm:after:bg-desktop-light'>
					<h1 className='text-2xl text-neutral-light-verylightgray font-bold uppercase tracking-[7px] dark:z-[3]'>Todo</h1>
					<div className="theme-toggler cursor-pointer dark:z-[3]"
					onClick={() => setIsDarkTheme(!isDarkTheme)}
					>
						<img src={isDarkTheme ? SunIcon : MoonIcon} alt="moon icon" />
					</div>
			</header>
		</>
	)
}