import React from "react";

//Custom components
import MemberCard from "../cards/MemberCard";

//Images Resources
import imgPrincipal from "../../resources/images/team/core/principal.webp";
import imgContent from "../../resources/images/team/core/Nikita_Tenjerla@Head_Of_Content.webp";

const TeamPage = () => {
  return (
    <div className="m-gutter lg:m-gutterbig">
      <MemberCard
        name="Dr. Aswath M. U."
        title="Principal, BIT Bangalore"
        path={imgPrincipal}
        description={`Dr. Aswath M. U. is an esteemed academician and a dedicated professional who oversees our club, TEDxBITBangalore, in his role as the faculty coordinator. With a passion for education and a commitment to nurturing students' talents, Dr. Ashwath plays a pivotal role in the success and growth of our club. As a principal, Dr. Ashwath possesses exceptional leadership qualities, known for his ability to inspire and motivate students to achieve their full potential. Under his guidance, the club has flourished, providing a platform for students to become the best versions of themselves and for various speakers to share ideas and innovations. With his profound knowledge, exceptional leadership skills, and unwavering support, he continues to inspire and guide students, leaving a lasting positive impact on their journeys.`}
      />
      <MemberCard
        name="Nithyashree Madhusudhan"
        title="Co-Organiser"
        path={imgContent}
        description={`The creative architecta behind our transformative gatherings. The driving forcea that are responsible for capturing the spirit of TED in the event by sparking community connections and inspiring ideas that change perspectives. They are the guiding hands, uniting impassioned individuals to create a powerful, unforgettable event. In essence, they are the catalyst for innovation and positive change.`}
      />
      <MemberCard
        name="Sushma Jayaram"
        title="Head of Content"
        path={imgContent}
        description={`Under the adept leadership of the Content Head, the TEDxBITBangalore Content Team is a dedicated group crafting compelling content for TEDx events. They create thought-provoking material, pen insightful articles for the "TEDlet" newsletter, and contribute to TEDx magazines. Their skills also include crafting engaging snippets for ads and supporting marketing pitches, all in the spirit of collaboration and organization, contributing to TEDx BIT Bangalore's impactful experiences.`}
      />
      <MemberCard
        name="Sourabh Ponekar"
        title="Head of Curation"
        path={imgContent}
        description={`The visionary force behind our extraordinary events. Their mission? To seek, select, and cultivate the most compelling ideas, bringing them to our stage to inspire and transform the world, headed by a resilient and visionary head who holds pivotal role in shaping the essence and impact of our event. These dedicated individuals are the gatekeepers of innovation, tirelessly working to curate a line-up that reflects the very essence of "Ideas Worth Spreading."`}
      />
      <MemberCard
        name="Ganga Gola"
        title="Head of Creative"
        path={imgContent}
        description={`As the wellspring that gives birth to the river, they are the headwaters to our event's flow. With the skill of painters, they create intricate brushstrokes on a blank canvas. They are the idea architects, problem solvers, and pioneers who stretch the boundaries of what can be achieved.
        Dedicated to their craft, they invest tireless effort in research, innovative idea exploration, concept development, prototyping, refinement, and the invaluable feedback loop. It is the magic of our creative team that gives each event its distinct pulse, weaving together the threads of imagination to create moments that linger in the memory, inspiring and illuminating.`}
      />
      <MemberCard
        name="Apeksha Babu A."
        title="Head of Marketing"
        path={imgContent}
        description={`The marketing team plays a pivotal role in expanding the reach of our creations to a wider audience. Under the leadership of the head , they function as an attractive force, much like a beautiful flower that draws in a friendly crowd with its appealing nectar. Through their carefully crafted campaigns, they skillfully orchestrate engagement, directing our audience to the most compelling aspects of our event. Acting as a persuasive link between our visions and the outside world, they infuse our creations with energy and enthusiasm, making them engaging and impactful.`}
      />
      <MemberCard
        name="Shwet Kamal"
        title="Head of Treasury"
        path={imgContent}
        description={`Treasury Desc.`}
      />
    </div>
  );
};

export default TeamPage;
