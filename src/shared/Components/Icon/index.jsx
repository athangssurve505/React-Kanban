
import * as RemixIcon from "@remixicon/react";

import "./icon.css"

export default function Icon({ name, size = 20, className  }) {
  const IconComponent = RemixIcon[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      size={size}
      className={`icon ${className}`}
      aria-hidden="true"
    />
  );
}
