import style from './css/mainform.module.css'
import PublicIcon from '@mui/icons-material/Public';

const MainForm = ({onChange,checked,onSubmit})=>{

    return(
        <form className={style.form} onSubmit ={onSubmit}>
            <fieldset className='flex gap-1'>
                <input type ='checkbox' className={style.checkbox} id="fulltime" name="fullttime"/><label htmlFor="fulltime">Full time</label>
            </fieldset>
            <fieldset>
                <p className='flow-05'>Location</p>
                <div className={style.rel} style={{color:'grey'}}>
                    <PublicIcon className={style.icon} />
                    <input type='text' className={style.textfield} onChange={onChange} placeholder='City, state, zip code or country' />
                </div>
            </fieldset>
            <fieldset className={style.radioCont}>
                <div>
                    <input type='radio' name = 'location'  value ='United Kingdom' id='United Kingdom' className={`${style.radio}`}  onChange={onChange}/>
                    <label htmlFor=""> United Kingdom</label>
                </div>
                <div>
                <input type='radio' name = 'location' value ='Canada'  id='Canada' className={style.radio}  onChange={onChange}/>
                    <label htmlFor="">  Canada</label>
                 </div>
                <div>
                    <input type='radio' name = 'location' defaultChecked value ='United States' id='United States'  className={style.radio} onChange={onChange}/>
                    <label htmlFor="">United States</label>
                </div>
                <div>
                    <input type='radio' name = 'location'  value ='Germany' id='Germany' onChange={onChange} className={style.radio} />
                    <label htmlFor=""> Germany</label>
                </div>

            </fieldset>
        </form>
    )
}

export default MainForm
