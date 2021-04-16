import SiteConfig from "@config/seo.json";
import SocialIcons from "@config/icons.json";

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

export function getSocialIcons () {
  return SocialIcons.blogIcons;
}