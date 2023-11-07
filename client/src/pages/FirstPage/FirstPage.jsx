 import { useEffect } from 'react';
import style from './FirstPage.module.css'
 const tg = window.Telegram.WebApp;
 function FirstPage() {
useEffect(()=>{
    tg.ready()
},[])

    const onClose = () => {
        tg.close()
    }
    return (
        <div >
        <button>Закрыть</button>
        </div>
    )
}

export default FirstPage