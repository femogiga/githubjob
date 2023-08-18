import style from './css/mainform.module.css'
import PublicIcon from '@mui/icons-material/Public';

const MainForm = ()=>{

    return(
        <form className={style.form}>
            <fieldset className='flex gap-1'>
                <input type ='checkbox' className={style.checkbox} id="fulltime" name="fullttime"/><label htmlFor="fulltime">Full time</label>
            </fieldset>
            <fieldset>
                <p className='flow-05'>Location</p>
                <div className={style.rel} style={{color:'grey'}}>
                    <PublicIcon className={style.icon} />
                    <input type='text' className={style.textfield} placeholder='City, state, zip code or country' />
                </div>
            </fieldset>
            <fieldset className={style.radioCont}>
                <div>
                    <input type='radio' name = 'location' value ='London' id='london' className={`${style.radio}`} />
                    <label htmlFor="">  London</label>
                </div>
                <div>
                <input type='radio' name = 'location' value ='London' id='amsterdam' className={style.radio} />
                    <label htmlFor="">  Amsterdam</label>
                 </div>
                <div>
                    <input type='radio' name = 'location' value ='London' id='newyork' className={style.radio}/>
                    <label htmlFor=""> New York</label>
                </div>
                <div>
                    <input type='radio' name = 'location' value ='London' id='berlin'  className={style.radio} />
                    <label htmlFor=""> Berlin</label>
                </div>

            </fieldset>
        </form>
    )
}

export default MainForm
