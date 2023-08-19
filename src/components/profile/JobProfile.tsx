import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import starbuck from "../../photos/starbuck.jpg";
import style from "./css/profile.module.css";

const JobProfile = ({ location, jobTitle, dwell ,src,companyName}) => {
  // const dwell = '5 days ago'
  // const location = 'New York'
  // const jobTitle = 'Front-End Software Engineer'
  return (
    <div>
      <div className="flow-2">
        <h2 className={`${style.jobTitle}`}>{jobTitle}</h2>
        <p className={style.fulltime}>Full time</p>
        <p className={`flex gap-05 algn-cen ${style.clrgray}`}>
          <AccessTimeIcon fontSize="small" style={{ fontSize: "1rem" }} />{" "}
          <span style={{ fontSize: ".75rem" }}>
            {dwell} {dwell <= 1 ? "day" : "days"} ago
          </span>
        </p>
      </div>
      <article className="flex gap-1">
        <div
          className="flex"
          style={{
            width: "2.625rem",
            height: "2.625rem",
            alignSelf: "flexStart",
          }}
        >
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src={src}
            alt=""
            className="src"
          />
        </div>
        <div className="flow-2">
          <h4>{companyName}</h4>
          <p
            className={`flex gap-05 algn-cen ${style.clrgray}`}
            style={{ fontSize: ".75rem" }}
          >
            <PublicIcon style={{ fontSize: "1rem" }} />
            <span>{location}</span>
          </p>
        </div>
      </article>
    </div>
  );
};

export default JobProfile;
