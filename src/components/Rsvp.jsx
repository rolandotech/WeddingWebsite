import { useState } from "react";
import { useLocalList } from "../hooks/useLocalList";
import { wedding } from "../data/wedding";

const empty = {
  name: "",
  email: "",
  phone: "",
  attending: "yes",
  message: "",
};

export default function Rsvp() {
  const [, addReply] = useLocalList("rd-rsvp");
  const [form, setForm] = useState(empty);
  const [done, setDone] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addReply({
      ...form,
      guests: "1",
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
    setDone(true);
  };

  return (
    <section className="section section--white" id="rsvp">
      <div className="wrap rsvp-layout">
        <div>
          <header className="section-header" style={{ textAlign: "left" }}>
            <h2 className="section-title">RSVP</h2>
            <p className="section-subtitle" style={{ marginLeft: 0 }}>
              {wedding.rsvpNote}
            </p>
          </header>
        </div>
        {done ? (
          <div className="form-card rsvp-success">
            <h3>Thank you for informing us of your attendance!</h3>
            <p>
              {form.attending === "yes"
                ? `We will look for you, ${form.name.split(" ")[0]}. Your seat will be waiting at Sacred Heart Seminary and Shrine.`
                : `You will be missed, ${form.name.split(" ")[0]}.`}
            </p>
            <p>— {wedding.groom.first} and {wedding.bride.first}</p>
          </div>
        ) : (
          <form className="form-card" onSubmit={onSubmit}>
            <div className="form-grid">
              <label className="field">
                <span>Name:</span>
                <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              </label>
              <label className="field">
                <span>Email:</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
              </label>
              <label className="field">
                <span>Phone:</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </label>
              <label className="field">
                <span>Message:</span>
                <textarea name="message" value={form.message} onChange={onChange} />
              </label>
              <fieldset className="field field--choice">
                <legend className="field-label">Are you attending?</legend>
                <div className="choice-row">
                  <label className="choice">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={form.attending === "yes"}
                      onChange={onChange}
                    />
                    Yes, I&apos;ll be there.
                  </label>
                  <label className="choice">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === "no"}
                      onChange={onChange}
                    />
                    No, I can&apos;t make it.
                  </label>
                </div>
              </fieldset>
              <button className="btn btn--solid" type="submit">
                S u b m i t
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
