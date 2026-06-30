"use client";

import { siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

type DiscoveryCallButtonProps = {
  className: string;
  children: React.ReactNode;
  source: string;
};

export default function DiscoveryCallButton({
  className,
  children,
  source,
}: DiscoveryCallButtonProps) {
  const handleClick = () => {
    trackEvent("book_discovery_call", {
      source,
      page: window.location.pathname,
    });
  };

  return (
    <a
      href={siteConfig.calendly}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}