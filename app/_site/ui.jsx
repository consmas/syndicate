import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export function Media({ src, alt = "", className = "", sizes, priority = false, style, ...rest }) {
  return (
    <div className={`media ${className}`} {...rest}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={style} />
    </div>
  );
}

// Splits a phrase into words that rise in one after another; `from` continues the stagger count.
export function Words({ text, from = 0 }) {
  return text.split(" ").map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className="w">
        <span style={{ "--i": from + i }}>{w}</span>
      </span>{" "}
    </Fragment>
  ));
}

export function MoreLink({ href, children, light = false }) {
  return (
    <Link className={`more-link${light ? " light" : ""}`} href={href}>
      {children} <span className="arr">→</span>
    </Link>
  );
}

// Staggered reveal delay for the i-th item in a list.
export const d = (i, step = 0.08) => ({ "--d": `${i * step}s` });
