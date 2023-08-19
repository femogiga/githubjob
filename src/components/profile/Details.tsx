import Description from "./Description";
import JobProfile from "./JobProfile";
import SiteHeader from "./SiteHeader";
import "../../App.css";
import { useLocation } from "react-router-dom";
import { timeConverter } from "../../utility/timeConverter";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const Details = ({ children, props }) => {
  const location = useLocation();
  const data = location.state?.job;
    console.log("state===>", data);
    const navigate = useNavigate()

  return (
    <section>
          <SiteHeader onClick={(): void => navigate('/')} applicationLink={data.applicationLink} />
      <JobProfile
        location={data?.locationRestrictions[0]}
        jobTitle={data?.title}
        dwell={timeConverter(data?.pubDate)}
        src={data?.companyLogo}
        companyName={data.companyName}
      />
      <Description decription={parse(data.description)} />
    </section>
  );
};

export default Details;
