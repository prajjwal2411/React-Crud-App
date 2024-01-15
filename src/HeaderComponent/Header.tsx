import './Header.css';
import '../index.css';
import { User, Plus } from "@phosphor-icons/react";


export default function Header(){
    return(
    <>
    <div className='flex flex-wrap content-center justify-between max-w-full h-14 bg-dark'>
        <div className='text-blue text-2xl'>CRUD Tutorial</div>
        <div className='text-blue flex options'>
            <div><User size={32}/></div>
            <div><Plus size={32}/></div>
        </div>
    </div>
    </>
    )
}