function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="sectionTitle">
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action && <span>{action}</span>}
    </div>
  );
}

export default SectionTitle;
