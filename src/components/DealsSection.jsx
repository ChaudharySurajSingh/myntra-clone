import SectionTitle from "./SectionTitle.jsx";

function DealsSection({ deals }) {
  return (
    <section className="sectionBlock">
      <SectionTitle eyebrow="Medal Worthy Brands" title="Biggest Deals On Top Brands" action="Freshly curated" />
      <div className="brandGrid">
        {deals.map((deal) => (
          <article className="brandCard" key={deal.id}>
            <img src={deal.image} alt={deal.name} />
            <strong>{deal.name}</strong>
            <span>{deal.deal}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DealsSection;
