import { useState } from 'react'
import ecoWatch from './assets/EcoWatch LOGO.png'
import ecoWatchNoTree from './assets/EcoWatch LOGO No Tree.png'
import './App.css'

export const Header = () => {
    const [count, setCount] = useState(0)

    return (
        <>
        <div className='flex border-b-2'>
            <div className='flex-1 grow'>
                <img className='aspect-auto max-h-20' src={ecoWatchNoTree}></img>
                {/* <h1 className=''><span className='text-emerald-600'>ECO</span>Watch</h1> */}
            </div>
            <div className='flex-3 flex justify-end gap-x-6 p-2'>
                <button className='place-self-center bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'>Log In</button>
            </div>
        </div>
        </>
    )
}
