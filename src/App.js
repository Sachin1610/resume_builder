import React, { useState } from "react";
import Homepage from "./components/Homepage";
import BasicDetails from "./components/BasicDetails/BasicDetails";
import WorkHistory from "./components/WorkHistory/WorkHistory";
import EducationMain from "./components/Education/EducationMain";
import TechnologiesMain from "./components/Technologies/TechnologiesMain";
import CertificationsMain from "./components/Certifications/CertificationsMain";
import GenerateResume from "./components/GenerateResume/GenerateResume";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    country: "",
    pincode: "",
    phone: "",
    email: "",
    github: "",
    linkedin: "",
    twitter: "",
  });

  const [workData, setWorkData] = useState([
    {
      id: 1,
      jobTitle: "",
      employer: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    },
  ]);

  const [educationData, setEducationData] = useState([
    {
      id: 1,
      schoolName: "",
      schoolLocation: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      eduDescription: "",
    },
  ]);

  const [technologiesData, setTechnologiesData] = useState([
    {
      id: 1,
      technology: "",
      project: "",
      demoLink: "",
      repoLink: "",
      additionalDetails: "",
    },
  ]);

  const [certificationsData, setCertificationsData] = useState([
    {
      id: 1,
      certificateTitle: "",
      certifyingOrg: "",
    },
  ]);

  const incrementCurrentSection = () => {
    setCurrentSection((prevValue) => prevValue + 1);
  };

  const decrementCurrentSection = () => {
    setCurrentSection((prevValue) => prevValue - 1);
  };

  const handleBasicDataChange = (event) => {
    setBasicData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleAddWorkSection = (id) => {
    setWorkData((prevData) => {
      return [
        ...prevData,
        {
          id: id,
          jobTitle: "",
          employer: "",
          city: "",
          country: "",
          startDate: "",
          endDate: "",
          jobDescription: "",
        },
      ];
    });
  };

  const handleRemoveLastWorkSection = (id) => {
    setWorkData((prevData) => {
      return prevData.filter((object) => object.id !== id);
    });
  };

  const handleWorkDataChange = (event, id) => {
    setWorkData((prevData) => {
      return prevData.map((object) =>
        object.id === id
          ? { ...object, [event.target.name]: event.target.value }
          : object
      );
    });
  };

  const handleWorkEditorChange = (event, id, name, value) => {
    setWorkData((prevData) => {
      return prevData.map((object) =>
        object.id === id ? { ...object, [name]: value } : object
      );
    });
  };

  const handleAddEduSection = (id) => {
    setEducationData((prevData) => {
      return [
        ...prevData,
        {
          id: id,
          schoolName: "",
          schoolLocation: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        },
      ];
    });
  };

  const handleRemoveLastEduSection = (id) => {
    setEducationData((prevValue) =>
      prevValue.filter((object) => object.id !== id)
    );
  };

  const handleEduDataChange = (event, id) => {
    setEducationData((prevData) => {
      return prevData.map((object) =>
        object.id === id
          ? { ...object, [event.target.name]: event.target.value }
          : object
      );
    });
  };

  const handleAddTechSection = (id) => {
    setTechnologiesData((prevData) => {
      return [
        ...prevData,
        {
          id: id,
          technology: "",
          project: "",
          demoLink: "",
          repoLink: "",
          additionalDetails: "",
        },
      ];
    });
  };

  const handleRemoveLastTechSection = (id) => {
    setTechnologiesData((prevValue) =>
      prevValue.filter((object) => object.id !== id)
    );
  };

  const handleTechDataChange = (event, id) => {
    setTechnologiesData((prevData) => {
      return prevData.map((object) =>
        object.id === id
          ? { ...object, [event.target.name]: event.target.value }
          : object
      );
    });
  };

  const handleAddCertSection = (id) => {
    setCertificationsData((prevData) => {
      return [
        ...prevData,
        {
          id: id,
          certificateTitle: "",
          certifyingOrg: "",
        },
      ];
    });
  };

  const handleRemoveLastCertSection = (id) => {
    setCertificationsData((prevValue) =>
      prevValue.filter((object) => object.id !== id)
    );
  };

  const handleCertDataChange = (event, id) => {
    setCertificationsData((prevData) => {
      return prevData.map((object) =>
        object.id === id
          ? { ...object, [event.target.name]: event.target.value }
          : object
      );
    });
  };

  return (
    <div className="App">
      {currentSection === 0 && <Homepage nextPage={incrementCurrentSection} />}
      {currentSection === 1 && (
        <BasicDetails
          nextPage={incrementCurrentSection}
          basicData={basicData}
          onChange={handleBasicDataChange}
        />
      )}
      {currentSection === 2 && (
        <WorkHistory
          nextPage={incrementCurrentSection}
          prevPage={decrementCurrentSection}
          workData={workData}
          handleAddSection={handleAddWorkSection}
          handleRemoveLastSection={handleRemoveLastWorkSection}
          onChange={handleWorkDataChange}
          handleEditorChange={handleWorkEditorChange}
        />
      )}
      {currentSection === 3 && (
        <EducationMain
          nextPage={incrementCurrentSection}
          prevPage={decrementCurrentSection}
          educationData={educationData}
          handleAddSection={handleAddEduSection}
          handleRemoveLastSection={handleRemoveLastEduSection}
          onChange={handleEduDataChange}
        />
      )}
      {currentSection === 4 && (
        <TechnologiesMain
          nextPage={incrementCurrentSection}
          prevPage={decrementCurrentSection}
          technologiesData={technologiesData}
          handleAddSection={handleAddTechSection}
          handleRemoveLastSection={handleRemoveLastTechSection}
          onChange={handleTechDataChange}
        />
      )}
      {currentSection === 5 && (
        <CertificationsMain
          prevPage={decrementCurrentSection}
          certificationsData={certificationsData}
          handleAddSection={handleAddCertSection}
          handleRemoveLastSection={handleRemoveLastCertSection}
          onChange={handleCertDataChange}
          incrementCurrentSection={incrementCurrentSection}
        />
      )}
      {currentSection === 6 && (
        <GenerateResume
          basicData={basicData}
          workData={workData}
          educationData={educationData}
          technologiesData={technologiesData}
          certificationsData={certificationsData}
          editDetails={decrementCurrentSection}
        />
      )}
    </div>
  );
}

export default App;
