import React from "react";

//Custom components
import MemberCard from "../cards/MemberCard";
import MemberCardTwo from "../cards/MemberCardTwo";

//Images Resources
import imgPrincipal from "../../resources/images/team/principal.webp";
import imgContent from "../../resources/images/team/Sushma.png";
import imgCreative from "../../resources/images/team/Ganga.jpg";
import imgTreasury from "../../resources/images/team/Shwet.webp";
import imgCoOrg2 from "../../resources/images/team/Khushi.jpg";
import imgMarketing from "../../resources/images/team/Apeksha.jpg";
import imgCuration from "../../resources/images/team/Sourabh.jpg";
import imgCoOrg1 from "../../resources/images/team/Nithyashree.jpg";

const TeamPage = () => {
  return (
    <div className="m-gutter lg:m-gutterbig mx-auto">
      <MemberCard
        name="Dr. Aswath M. U."
        title="Principal, BIT Bangalore"
        path={imgPrincipal}
        description={`Dr. Aswath M. U., an esteemed academician and a dedicated professional, oversees our organisation in his role as the faculty coordinator. With a passion for education and a commitment to nurturing students' talents, he plays a pivotal role in the success and growth of our club. As the Principal, Dr. Aswath possesses exceptional leadership qualities, known for his ability to inspire and motivate students to achieve their full potential. Under his guidance, the club has flourished, providing a platform for students to become the best versions of themselves and for various speakers to share ideas and innovations. With his profound knowledge, exceptional leadership skills, and unwavering support, he continues to inspire and guide students, leaving a lasting positive impact on their journeys.`}
      />
      <MemberCardTwo
        names={["Nithyashree M.", "Khushi V."]}
        titles={["Co-Organiser", "Co-Organiser"]}
        paths={[imgCoOrg1, imgCoOrg2]}
        description={`The creative architects behind our transformative gatherings. The driving forcea that are responsible for capturing the spirit of TED in the event by sparking community connections and inspiring ideas that change perspectives. They are the guiding hands, uniting impassioned individuals to create a powerful, unforgettable event. In essence, they are the catalyst for innovation and positive change.`}
      />
      <MemberCard
        name="Sushma J."
        title="Head of Content"
        path={imgContent}
        description={`Under the adept leadership of the head of Content, the TEDxBITBangalore Content Team is a dedicated group crafting compelling content for TEDx events. They create thought-provoking material, pen insightful articles for the "TEDlet" newsletter, and contribute to TEDx magazines. Their skills also include crafting engaging snippets for ads and supporting marketing pitches, all in the spirit of collaboration and organization, contributing to TEDxBITBangalore's impactful experiences.`}
      />
      <MemberCard
        name="Sourabh P."
        title="Head of Curation"
        path={imgCuration}
        description={`The visionary force behind our extraordinary events. Their mission? To seek, select, and cultivate the most compelling ideas, bringing them to our stage to inspire and transform the world, headed by a resilient and visionary head who holds pivotal role in shaping the essence and impact of our event. These dedicated individuals are the gatekeepers of innovation, tirelessly working to curate a line-up that reflects the very essence of "Ideas Worth Spreading."`}
      />
      <MemberCard
        name="Ganga G."
        title="Head of Creative"
        path={imgCreative}
        description={`The Creative Team comprises the idea architects, problem solvers, and pioneers who stretch the boundaries of what can be achieved. With the skill of painters, they create intricate brushstrokes on a blank canvas. 
          Dedicated to their craft, they invest tireless effort in idea exploration, concept development, prototyping, refinement, and the invaluable feedback loop. It is their magic that gives each event its distinct pulse, weaving together the threads of imagination to create moments that linger in the memory, inspiring and illuminating.`}
      />
      <MemberCard
        name="Apeksha B. A."
        title="Head of Marketing"
        path={imgMarketing}
        description={`The Marketing Team plays a pivotal role in expanding the reach of our creations to a wider audience. Under the leadership of the head , they function as an attractive force, much like a beautiful flower that draws in a friendly crowd with its appealing nectar. Through their carefully crafted campaigns, they skillfully orchestrate engagement, directing our audience to the most compelling aspects of our event. Acting as a persuasive link between our visions and the outside world, they infuse our creations with energy and enthusiasm, making them engaging and impactful.`}
      />
      <MemberCard
        name="Shwet K."
        title="Head of Treasury"
        path={imgTreasury}
        description={`The financial backbone of TEDxBITBangalore, the Treasury is responsible for managing the organisation's financial resources. Balancing budgets, making informed financial decisions and providing strategic financial oversight, the Treasury enables TEDxBITBangalore to deliver impactful experiences while maintaining fiscal responsibility and long-term sustainabiity.`}
      />
    </div>
  );
};

export default TeamPage;
