import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData, getSocialIcons } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();
  const { socialIcons } = getSocialIcons();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require("../../../content/assets/profile.png")}
        webpSrc={require("../../../content/assets/profile.png?webp")}
        previewSrc={require("../../../content/assets/profile.png?lqip")}
        alt="Profile"
      />
      <div>
        <p className="text-base leading-7 inner1">
          Written by <b className="font-semibold">{author.name}</b>{" "}
          {author.summary}{" "}
        </p>
        <div className="right inner2" style={{ display: "flex", flexDirection: "row" }}>
          <a href={`https://twitter.com/${social.twitter}`}>
            <img src={require("../../../public/icons/twitter.svg")} alt="twitter-logo" />
          </a>
          <a href={`https://linkedin.com/in/${social.linkedin}`}>
            <img src={require("../../../public/icons/linkedin.svg")} alt="linkedin-logo" />
          </a>
          <a href={`https://instagram.com/${social.instagram}`}>
            <img src={require("../../../public/icons/instagram.svg")} alt="instagram-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
