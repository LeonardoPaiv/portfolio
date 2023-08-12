import ProjectContainer from "./ProjectContainer";
import project1 from '@/public/projects/tp01.png'
import project2 from '@/public/projects/desafio01.png'
import project3 from '@/public/projects/tp2.png'
import project4 from '@/public/projects/desafio02.png'
import project5 from '@/public/projects/tpm3.png'
import project6 from '@/public/projects/desafio03.png'
import project7 from '@/public/projects/tpm4.png'

export const images = [
  <ProjectContainer
    key={1}
    image={project1}
    title="Practical Assignment 01"
    description="No trabalho prático número 1, foi necessário consumir uma API de maquiagem e estabelecer alguns filtros para poder buscar de forma simplificada cada um dos produtos registrados na API."
  />,
  <ProjectContainer
    key={2}
    image={project2}
    title="Challenge 01"
    description="In challenge 01, it was necessary to develop a web page capable of making queries using the Axios library and displaying the information through a graph, provided by the ChartJS library."
  />,
  <ProjectContainer
    key={3}
    image={project3}
    title="Practical Assignment 02"
    description="In Practical Assignment number 2, it was necessary to use fictitious data about investment funds and build a mobile-first interface to display and manipulate the data to make it more explanatory"
  />,
  <ProjectContainer
    key={4}
    image={project4}
    title="Challenge 02"
    description='In Challenge 02, it was necessary to retrieve data from a backend provisioned using JSON Server and the "elections.json" file in the "data" folder. Once the raw information from the file was retrieved, it was necessary to process and manipulate the data to provide relevant and organized information to the users accurately. For the development of this application, React was used, and a strong emphasis was placed on best practices, avoiding prop drilling and utilizing lifting up state concepts. To retrieve the data, the Axios framework was used with established methods in the "services" folder to prevent code duplication that could occur in larger projects.'
  />,
  <ProjectContainer
    key={5}
    image={project5}
    title="Practical Assignment 03"
    description="In Practical Work 3, we started using React with TypeScript in our application, along with implementing the Google interface called 'Material UI.' This way, we developed more robust applications with the security of TypeScript and a more professional appearance, using well-known components from Google. The challenge involved retrieving data from a backend provisioned by Json-server and making requests that already brought filtered data based on the reference month and year."
  />,
  <ProjectContainer
    key={6}
    image={project6}
    title="Challenge 03"
    description="In challenge 03, it was necessary to implement user session recording for greater security and also to improve application optimization. Additionally, the system received an enhancement; now it provides a summary of the user's monthly expenses."
  />,
  <ProjectContainer
    key={7}
    image={project7}
    title="Practical Assignment 04"
    description="This was an introductory activity to the Next.js framework, where we delved into the advantages of utilizing this framework. We developed an application that follows the best practices for web page rendering, employing a hybrid approach involving SSG, SSR, and CSR.

    Consequently, static contents are generated on the server side, resulting in swifter load times for these sections. Moreover, resources that require frequent updates are retrieved on the client side, delivering fresh data at the moment of request."
  />,
];
