import { useState } from "react";
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
    <section className="section section--paper" id="wishes">
      <div className="wrap wishes-layout">
        <div>
          <header className="section-header" style={{ textAlign: "left" }}>
            <h2 className="section-title">Wedding Wishes</h2>
            <p className="section-subtitle" style={{ marginLeft: 0 }}>
              A few words from those who love us.
            </p>
          </header>
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
                />
              </label>
              <button className="btn btn--solid" type="submit">
                Leave a wish
              </button>
            </div>
          </form>
        </div>
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
      </div>
    </section>
  );
}
