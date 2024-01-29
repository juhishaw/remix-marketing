interface SocialLinkProps {
  href: string;
  iconClass: string;
}

const SocialLink = ({ href, iconClass }: SocialLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <span className={`grad-txt ${iconClass}`}></span>
  </a>
);

export default SocialLink;
