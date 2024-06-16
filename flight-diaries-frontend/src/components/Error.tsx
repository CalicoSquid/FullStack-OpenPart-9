export default function Error({ error }: { error: string | null }) {
  if (!error) return null;

  return <div className="error-message">{error}</div>;
}
