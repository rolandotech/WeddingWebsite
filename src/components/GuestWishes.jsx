import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useLocalList } from "../hooks/useLocalList";

const empty = { name: "", message: "" };

export default function GuestWishes() {
  const [wishes, addWish] = useLocalList("rd-wishes");
  const [form, setForm] = useState(empty);

  const onSubmit = (event) => {
    event.preventDefault();
    addWish({
      ...form,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
    setForm(empty);
  };

  return (
    <section className="section section--beige" id="wishes">
      <div className="wrap wishes-layout">
        <Reveal>
          <SectionHeader
            kicker="Leave a blessing"
            title="Wedding Wishes"
            subtitle="A few words from those who love us — kept here as a small book of the day."
          />
          <form className="wish-form" onSubmit={onSubmit}>
            <div className="form-grid">
              <label className="field">
                <span>Your name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
              </label>
              <label className="field">
                <span>Your message</span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="A blessing, a memory, a hope for their years ahead"
                />
              </label>
              <button className="btn" type="submit">
                Leave a wish
              </button>
            </div>
          </form>
        </Reveal>
        <Reveal delay={80}>
          <div className="wish-list" aria-live="polite">
            {wishes.length === 0 ? (
              <p className="empty-note">Be the first to write in the book.</p>
            ) : (
              wishes.map((wish) => (
                <blockquote className="wish-card" key={wish.id}>
                  <p>“{wish.message}”</p>
                  <cite>— {wish.name}</cite>
                </blockquote>
              ))
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
