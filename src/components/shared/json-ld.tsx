/** Server-only structured data tag. Never render from a "use client" file. */
export function JsonLd({ data }: { data: object | object[] }) {
  const entries = Array.isArray(data) ? data : [data];
  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
