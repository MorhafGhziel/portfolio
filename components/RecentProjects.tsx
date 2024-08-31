import React from "react";
import { projects } from "@/data/index";

const RecentProjects = () => {
  return (
    <div className="pb-20">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">rescent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
