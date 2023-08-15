import style from './css/profile.module.css'


const SiteHeader = ()=>{
    const emailFirst = ' wes@kasisto.com'
    const emailSecond = ' eric@kasisto.com'
    return(
        <div className='flow-2'>
             <h1 className="flow-1">Github Jobs</h1>
                <article>
                    <p className={`flow-1 flex gap-1 ${style.clrblue}` }  style={{}}><span>&#8592; </span> Back to search</p>
                    <h5 className={`flow-1 ${style.clrgray}`}>HOW TO APPLY</h5>
                    <p>Please email a copy of your resume and online portfolio to
                    <span className={`${style.clrblue}`}>{emailFirst}</span> and CC <span className={`${style.clrblue}`}>{emailSecond}</span>
                    </p>
                </article>
        </div>
    )
}

export default SiteHeader
