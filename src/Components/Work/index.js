import React, { Component } from "react";
import axios from "axios";
import {
  WorkSection,
  // WorkTitle,
  // Span,
  WorkPart,
  I,
  PartTitle,
  Hr,
  PartDesc,
} from "./Work";
class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios.get("Data/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const worksList = works.map((worksItems) => {
      return (
        <WorkPart key={works.id} id="work">
          <I className={worksItems.icon_name}></I>
          <PartTitle className="part-title">{worksItems.title}</PartTitle>
          <Hr />
          <PartDesc className="part-desc">{worksItems.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">{worksList}</div>
      </WorkSection>
    );
  }
}
export default Work;
