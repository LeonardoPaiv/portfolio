import Main from "@/components/containers/Main";
import Certificate from "@/components/titulos/Certificate";
import Header1 from "@/components/titulos/Header1";

const Education = () => {
  return (
    <Main>
      <div className="mt-24 md:mt-0 w-full md:w-1/4 md:h-2/4">
        <Header1>Education</Header1>
        <h2 className="font-bold my-2 text-xl">Bachelor of Computer Science</h2>
        <p className="text-justify">
          Driven by my passion for this field and dedicated to achieving the
          best results, I stand out among my peers as one of the top students in
          my class, maintaining consistently superior grades.
        </p>
      </div>
      <div className="w-full md:w-1/4 md:h-2/4">
        <Header1>Certificates</Header1>
        <Certificate institution="XPE" name="Bootcamp desenvolvedor React - 148h"/>
        <Certificate institution="XPE" name="Bootcamp Desenvolvedor NodeJs - 148h"/>
        <Certificate institution="Camunda" name="Camunda BPMN 2.0"/>
        <Certificate institution="Red Hat Delivery Specialist" name="Container Platform Deployment"/>
        <Certificate institution="Red Hat Delivery Specialist" name="Container Platform Application Deployment"/>
        <Certificate institution="Red Hat Delivery Specialist" name="OpenShift Container Platform Support"/>
        <Certificate institution="Red Hat Delivery Specialist" name="OpenShift Container Platform Support II"/>
      </div>
    </Main>
  );
};

export default Education;
