
export default function EntryButton({ openModal}: {openModal: () => void}) {
  return (
    <div className="entry">
      <button className="entry-button" onClick={openModal}>Add Entry</button>
    </div>
  );
}
