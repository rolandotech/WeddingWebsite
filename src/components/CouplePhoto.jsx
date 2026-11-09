export default function CouplePhoto({ photo, id }) {
  return (
    <section className="couple-photo" id={id} aria-label="Our picture">
      <img src={photo.src} alt={photo.alt} loading="lazy" />
    </section>
  );
}
