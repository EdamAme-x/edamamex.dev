import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>EdamAmex Portfolio</title>
      <meta name="description" content="A portfolio of EdamAmex" />

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <meta property="og:title" content="EdamAmex Portfolio" />
      <meta property="og:description" content="A portfolio of EdamAmex" />
      <meta property="og:site_name" content="EdamAmex Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://edamamex.dev/ogp/cover.webp" />
      <meta property="og:url" content="https://edamamex.dev" />
      <meta property="og:type" content="website" />

      <meta name="google" content="notranslate" />

      <meta name="keywords" content="EdamAmex, amex2189, EdamAme-x, portfolio" />
      <meta name="robots" content="index, follow" />
      <meta name="publisher" content="@EdamAme-x" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="EdamAmex Portfolio" />
      <meta name="twitter:description" content="A portfolio of EdamAmex" />
      <meta name="twitter:image" content="https://edamamex.dev/ogp/cover.webp" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
