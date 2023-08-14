import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import starbuck from '../../photos/starbuck.jpg'

const JobProfile = () =>{
    return(

            <div>
                <h1>Github Jobs</h1>
                <article>
                    <p><span>&#8592;</span>Back to search</p>
                    <h5>HOW TO APPLY</h5>
                    <p>Please email a copy of your resume and online portfolio to
                    <span>{' wes@kasisto.com'}</span> and CC <span>{'eric@kasisto.com'}</span>
                    </p>
                </article>
                <div>
                    <h2>{'Front-End Software Engineer'}</h2>
                    <p>Fulltime</p>
                    <p className='flex gap-05 algn-cen'><AccessTimeIcon fontSize='small' /> <span>5 days ago</span></p>

                </div>
                <article className ='flex gap-1'>
                    <div className='flex' style={{ width: '5.625rem', height: '5.625rem', alignSelf: 'flexStart' }}>
                        <img style={{ width: '100%', objectFit: 'cover' }} src={starbuck} alt="" className="src" />
                    </div>
                    <div>
                        <h3>{'Kasito'}</h3>
                        <p className='flex gap-05 algn-cen'><PublicIcon fontSize='small' /><span>New York</span></p>
                    </div>
                </article>
                <section>
                   <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum incidunt praesentium, doloremque quia ad aliquid
                     quisquam optio eum? Earum sequi odio dignissimos voluptat
                     e neque quidem quas ad veniam in id!
                    </p>

                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum incidunt praesentium, doloremque quia ad aliquid
                     quisquam optio eum? Earum sequi odio dignissimos voluptat
                     e neque quidem quas ad veniam in id!
                    </p>

                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum incidunt praesentium, doloremque quia ad aliquid
                     quisquam optio eum? Earum sequi odio dignissimos voluptat
                     e neque quidem quas ad veniam in id!
                    </p>

                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum incidunt praesentium, doloremque quia ad aliquid
                     quisquam optio eum? Earum sequi odio dignissimos voluptat
                     e neque quidem quas ad veniam in id!
                    </p>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum incidunt praesentium, doloremque quia ad aliquid
                     quisquam optio eum? Earum sequi odio dignissimos voluptat
                     e neque quidem quas ad veniam in id!
                    </p>
                </section>

            </div>

    )
}


export default JobProfile
