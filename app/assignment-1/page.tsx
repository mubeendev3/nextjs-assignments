"use client";
// import Link from "next/link";
// import React from "react";
// import Card from "../components/Card";

// const FlexboxAssignment = () => {
//   return (
//     <div className="flex h-screen w-screen items-center">
//       <div className="leftsidebar p-10 backdrop-blur-md bg-white/80 flex flex-col gap-3 rounded-r-lg mr-[25%]">
//         <h1 className="text-2xl font-black">Flexbox Assignment</h1>
//         <ul className="flex flex-col gap-5 font-semibold">
//           <li>
//             <Link href="/">Card</Link>
//           </li>
//           <li>
//             <Link href="/">Team Members</Link>
//           </li>
//           <li>
//             <Link href="/">Solo Card</Link>
//           </li>
//           <li>
//             <Link href="/">Services Card</Link>
//           </li>
//           <li>
//             <Link href="/">FAQ's Card</Link>
//           </li>
//           <li>
//             <Link href="/">Opposite Card</Link>
//           </li>
//           <li>
//             <Link href="/">News Feed </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="">
//         {/* Dynamically Change Components Here When I Click On Link Tags in li's */}
//       </div>
//     </div>
//   );
// };

// export default FlexboxAssignment;

import React, { useState } from "react";
import Link from "next/link";
import Card from "../components/Card";
import TeamMembers from "../components/TeamMember";
import SoloCard from "../components/SoloCard";
import ServicesCard from "../components/ServicesCard";
import FaqCard from "../components/FaqCard";
import OppositeCard from "../components/OppositeCard";
import NewsFeed from "../components/NewsFeed";

const FlexboxAssignment = () => {
  const [activeComponent, setActiveComponent] = useState("Card"); // Initial component

  const handleLinkClick = (componentName: any) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Card":
        return <Card />;
      case "TeamMembers":
        return <TeamMembers />;
      case "SoloCard":
        return <SoloCard />;
      case "ServicesCard":
        return <ServicesCard />;
      case "FaqCard":
        return <FaqCard />;
      case "OppositeCard":
        return <OppositeCard />;
      case "NewsFeed":
        return <NewsFeed />;
      default:
        return <div>No component found</div>;
    }
  };

  return (
    <div className="flex h-screen w-screen items-center">
      <div className="leftsidebar p-10 backdrop-blur-md bg-white/80 flex flex-col gap-3 rounded-r-lg mr-[20%]">
        <h1 className="text-2xl font-black">Flexbox Assignment</h1>
        <ul className="flex flex-col gap-5 font-semibold">
          <li>
            <Link href="#" onClick={() => handleLinkClick("Card")}>
              Card
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => handleLinkClick("TeamMembers")}>
              Team Members
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => handleLinkClick("SoloCard")}>
              Solo Card
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => handleLinkClick("ServicesCard")}>
              Services Card
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => handleLinkClick("FaqCard")}>
              Faq Card
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => handleLinkClick("OppositeCard")}>
              Opposite Card
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => handleLinkClick("NewsFeed")}>
              News Feed
            </Link>
          </li>
        </ul>
      </div>
      <div className="">{renderActiveComponent()}</div>
    </div>
  );
};

export default FlexboxAssignment;
