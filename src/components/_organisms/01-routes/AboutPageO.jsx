import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Axios from "axios";

// <Main role='main'> container - Molecule
import SectionContainerM from "@M/02-body_containers/SectionContainerM";

// placeholder
import SectionWrapperAutoA from "@A/05-wrappers/SectionWrapperAutoA";
import SectionHeaderA from "@A/04-headers/SectionHeaderA";
import SectionContainerA from "@A/07-containers/SectionContainerA";
import ParagraphContainerA from "@A/07-containers/ParagraphContainerA";
import HeaderContainerA from "@A/07-containers/HeaderContainerA";

// Left Side Wrapper - Atom
import SectionWrapper40A from "@A/05-wrappers/SectionWrapper40A";
import ListWrapperA from "@A/05-wrappers/ListWrapperA";

// InterestList - Molecule
import AnimatedListM from "@M/04-list_containers/AnimatedListM";

// Paragraph - Atom
import ParagraphA from "@A/06-paragraphs/ParagraphA";

const theme = {
  headheight: "6.250em",
  headff: "Montserrat, sans-serif",
  headfs: "2.375em",
  ls: "0.094em",
  primarycolor: "#dfdfdf",
  secondarycolor: "#b7b7b7",
  secondaryfs: "1.125em",
  secondaryfst: "italic",
  border: ".063em solid #95d5d2",
  paddingb: ".188em",
  sectionfc: "rgb(255, 255, 255, .7)",
  mobilefont: "1.563em",
  pwidth: "80%",
};

const AboutPageO = () => {
  const [technologies, setTechnologies] = useState(null);
  const [paragraph, setParagraph] = useState(null);
  const [project, setProject] = useState(null);

  const fetchData = async (url, cb) => {
    const result = await Axios.get(url);
    cb(result.data.items);
  };

  useEffect(() => {
    fetchData("/resources/stubs/stack.json", setTechnologies);
    fetchData("/resources/stubs/aboutme.json", setParagraph);
    fetchData("/resources/stubs/currentproject.json", setProject);
  }, []); // <== Empty array to avoid activating on updates, and ONLY for mount.

  if (!technologies || !paragraph) return null;
  return (
    <ThemeProvider theme={theme}>
      <SectionContainerM
        id="about" // prettier-ignore
        className="about-page"
        fixed
      >
        <SectionContainerA>
          <SectionWrapper40A
            className="about-l" // prettier-ignore
            align
            hidden
          >
            <HeaderContainerA>
              <SectionHeaderA
                header="Current Project" // prettier-ignore
                secondary="true"
              />
            </HeaderContainerA>
            <ParagraphContainerA>
              <ParagraphA paragraph={project} />
            </ParagraphContainerA>
            <ListWrapperA>
              <SectionHeaderA
                center={true}
                header="Utilizing:"
                secondary="true"
              />
              <AnimatedListM animated items={technologies} />
            </ListWrapperA>
          </SectionWrapper40A>
          <SectionWrapperAutoA className="about-r">
            <SectionHeaderA header={"- I'm Keith Alleman."} />
            <ParagraphA paragraph={paragraph} />
            {/** <DescriptionParagraphA>text</DescriptionParagraph> */}
          </SectionWrapperAutoA>
        </SectionContainerA>
      </SectionContainerM>
    </ThemeProvider>
  );
};

export default AboutPageO;

/**
 * Avid Gamer
 * eSports Enthiusiast
 * Dog Lover
 * Continous Learner
 * Model Kit Builder
 * Hiker
 */
