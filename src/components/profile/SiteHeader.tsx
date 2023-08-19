import { Link } from 'react-router-dom'
import style from './css/profile.module.css'


const SiteHeader = ({onClick,applicationLink})=>{
    const emailFirst = ' wes@kasisto.com'
    const emailSecond = ' eric@kasisto.com'
    return (
      <div className="flow-2">
        <h1 className="flow-1">Github Jobs</h1>
        <article>
          <Link to={"/"}>
            {" "}
            <p className={`flow-1 flex gap-1 ${style.clrblue}`} style={{}}>
              <span>&#8592; </span> Back to search
            </p>
          </Link>
          <h5 className={`flow-1 ${style.clrgray}`}>HOW TO APPLY</h5>
          <p>
            Please email a copy of your resume and online portfolio to
            <span className={`${style.clrblue}`}>{applicationLink}</span> and CC{" "}
            
          </p>
        </article>
      </div>
    );
}

export default SiteHeader
