import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            Miller Christian Academy, Livingston, TX
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            University of California, Irvine, California
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            soon to have certificate
          </h4>
          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Amazon Warehouse Lead
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Bernardino, CA
          </h4>
          <p>
            Used Leadership and problem-solving skills to lead a team to success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Target Warehouse Trainer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Rialto, CA
          </h4>
          <p>
            Trained new workers in the duties in the warehouse such as safety and job function.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;