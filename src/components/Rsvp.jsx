import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useLocalList } from "../hooks/useLocalList";
import { wedding } from "../data/wedding";

const empty = {
  name: "",
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
    <section className="section section--ivory" id="rsvp">
      <div className="wrap rsvp-layout">
        <Reveal>
          <SectionHeader
            kicker="Kindly reply"
            title="Wedding Invitation"
            subtitle="This invitation is for one guest. Kindly reply with your own name, and let us know whether you will be with us."
          />
          <p>
            {wedding.groom.full} and {wedding.bride.full} request the honour of your presence on{" "}
            {wedding.date.display}, in {wedding.location.city}. Each invitation admits one person
            only; additional guests require their own invitation.
          </p>
        </Reveal>
        <Reveal delay={80}>
          {done ? (
            <div className="form-card rsvp-success">
              <p className="kicker">Received with gratitude</p>
              <h3>
                {form.attending === "yes"
                  ? `We will look for you, ${form.name.split(" ")[0]}.`
                  : `You will be missed, ${form.name.split(" ")[0]}.`}
              </h3>
              <p>
                {form.attending === "yes"
                  ? "Your seat will be waiting at Lupit Church. Thank you for sharing this day with us."
                  : "Thank you for letting us know. You remain close to us, even from afar."}
              </p>
            </div>
          ) : (
            <form className="form-card" onSubmit={onSubmit}>
              <div className="form-grid">
                <label className="field">
                  <span>Guest name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                </label>
                <fieldset className="field">
                  <legend className="field-label">Attendance</legend>
                  <div className="choice-row">
                    <label className="choice">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={form.attending === "yes"}
                        onChange={onChange}
                      />
                      Joyfully accept
                    </label>
                    <label className="choice">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={form.attending === "no"}
                        onChange={onChange}
                      />
                      Regretfully decline
                    </label>
                  </div>
                </fieldset>
                <label className="field">
                  <span>A note (optional)</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Dietary notes, a song, or a few words for us"
                  />
                </label>
                <button className="btn" type="submit">
                  Send reply
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
