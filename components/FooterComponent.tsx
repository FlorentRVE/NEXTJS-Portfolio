"use client";

import SVGComponentGithub from "./GithubSvgComponent";
import SVGComponentLinkedin from "./LinkedinSvgComponent";

export default function FooterComponent() {

  return (
    <div className="bg-slate-950 h-48 flex items-center">
      <div className="flex justify-center items-center md:w-1/2 mx-auto h-16 gap-4">
        <a href="https://github.com/FlorentRVE" target="_blank">
          <SVGComponentGithub className="w-12 h-auto" />
        </a>

        <a href="https://github.com/FlorentRVE" target="_blank">
          <SVGComponentLinkedin className="w-12 h-auto" />
        </a>
      </div>
    </div>
  );
}