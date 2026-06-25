"use client";

import Button from "./Button";
import Icon from "./Icon";
import { track } from "@/lib/analytics";
import { whatsappLink, telLink } from "@/lib/constants";

/**
 * Conversion CTAs with GA4 tracking (PRD §16). Thin client wrappers around
 * the presentational Button so the rest of the tree stays server-rendered.
 */

export function WhatsAppButton({
  message,
  location = "unknown",
  size = "md",
  variant = "whatsapp",
  className,
  children = "Book on WhatsApp",
  withIcon = true,
}) {
  return (
    <Button
      href={whatsappLink(message)}
      variant={variant}
      size={size}
      className={className}
      onClick={() => track.whatsappClick(location)}
      aria-label="Book on WhatsApp"
    >
      {withIcon ? <Icon name="whatsapp" size={20} /> : null}
      {children}
    </Button>
  );
}

export function CallButton({
  location = "unknown",
  size = "md",
  variant = "ghost",
  className,
  children = "Call us",
  withIcon = true,
}) {
  return (
    <Button
      href={telLink()}
      variant={variant}
      size={size}
      className={className}
      onClick={() => track.callClick(location)}
      aria-label="Call the clinic"
    >
      {withIcon ? <Icon name="phone" size={18} /> : null}
      {children}
    </Button>
  );
}
