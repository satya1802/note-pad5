"use client";
// Generated screens hold state and handle events, which a server component
// cannot do. Next.js renders on the server unless a module says otherwise.

// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search, Trash, Filter } = Icons;

const PRODUCT = "note pad 5";
const SCREEN = "Notes";
const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;

const ITEMS = [
  { id: "n-104", title: "Sourdough timing", tag: "Recipes", folder: "Kitchen", updated_at: "2026-11-04", body: "Levain at 8pm, autolyse 9pm. Bulk 4h at 24C, fold every 45 min. Cold proof overnight, bake 250C lid on for 20 min then 230C lid off for 22. The rye batch needed 10 min less." },
  { id: "n-098", title: "Q4 review notes", tag: "Work", folder: "Work log", updated_at: "2026-11-03", body: "Ask about the hiring freeze before December planning. Three things to raise: onboarding docs are stale, the Tuesday sync overlaps standup, and the handover checklist never got written down after Priya left." },
  { id: "n-091", title: "Lisbon, five days", tag: "Travel", folder: "Trips", updated_at: "2026-10-29", body: "Flights booked for 12 March. Stay in Alfama, not Baixa. Tram 28 early or not at all. Time out market for one dinner, pasteis from Manteigaria. Day trip to Sintra on the Wednesday, buy the train ticket the night before." },
  { id: "n-087", title: "Bike service list", tag: "Errands", folder: "House", updated_at: "2026-10-27", body: "Rear brake pads worn, chain stretched past the 0.75 mark. Drop at Ferris Wheels on Saturday morning, ask them to check the headset play while it is in." },
  { id: "n-079", title: "App idea: tide clock", tag: "Ideas", folder: "Scratch", updated_at: "2026-10-21", body: "A single face that shows the tide instead of the hour. One dial, no menus. Pull the data once a week and cache it so it still reads right with no signal on the coast path." },
  { id: "n-068", title: "Mum's lemon cake", tag: "Recipes", folder: "Kitchen", updated_at: "2026-10-14", body: "225g butter, 225g sugar, 4 eggs, 225g self raising flour, zest of two lemons. 180C for 45 minutes. Syrup of juice and 85g caster sugar poured over while still hot and still in the tin." },
];
const TAGS = ["All", "Work", "Ideas", "Recipes", "Travel", "Errands"];

const wordCount = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);
const shortDate = (iso) => {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
};

export default function Screen() {
  const navigate = useNavigate();
  const [tag, setTag] = React.useState("All");
  const [query, setQuery] = React.useState("");
  const [notes, setNotes] = React.useState(ITEMS);
  const [pendingDelete, setPendingDelete] = React.useState(null);
  const glass = { backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: brand.radius };
  const needle = query.trim().toLowerCase();
  const items = notes.filter(
    (i) =>
      (tag === "All" || i.tag === tag) &&
      (i.title.toLowerCase().includes(needle) || i.body.toLowerCase().includes(needle))
  );

  const removeNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
    setPendingDelete(null);
  };

  return (
    <div className="space-y-6" style={{ color: "var(--brand-fg)", fontFamily: brand.fontBody }}>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: brand.fontHeading }}>{SCREEN}</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--brand-fg-muted)" }}>{notes.length} kept on this device in {PRODUCT}</p>
        </div>
        <label htmlFor="tech-search" className="sr-only">Search notes by title and body</label>
        <input id="tech-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title and body…" className="h-11 w-72 px-4 text-sm outline-none placeholder:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-0" style={{ ...glass, color: "inherit" }} />
      </div>
      <div role="group" aria-label="Filter notes by tag" className="flex gap-2">
        {TAGS.map((t) => (
          <button key={t} type="button" aria-pressed={tag === t} onClick={() => setTag(t)} className="rounded-full px-4 py-2 text-sm font-bold transition-shadow" style={tag === t ? { background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`, color: "#fff", boxShadow: `0 0 24px ${mix(brand.primaryColor, 70)}` } : { ...glass, borderRadius: 9999 }}>{t}</button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {items.map((item, index) => (
          <article key={item.id} className="group relative overflow-hidden p-6 backdrop-blur-xl transition-transform hover:-translate-y-1" style={{ ...glass, boxShadow: "0 30px 70px -35px rgba(0,0,0,0.8)" }}>
            <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px] transition-opacity group-hover:opacity-100" style={{ backgroundColor: index % 2 ? mix(brand.accentColor, 55) : mix(brand.primaryColor, 60), opacity: 0.7 }} />
            <div className="relative flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center text-xl font-extrabold text-white" style={{ background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`, borderRadius: `calc(${brand.radius} - 4px)` }}>{item.title[0]}</span>
              <button
                type="button"
                aria-label={pendingDelete === item.id ? `Confirm delete of ${item.title}` : `Delete ${item.title}`}
                onClick={() => (pendingDelete === item.id ? removeNote(item.id) : setPendingDelete(item.id))}
                onBlur={() => pendingDelete === item.id && setPendingDelete(null)}
                onKeyDown={(e) => e.key === "Escape" && setPendingDelete(null)}
                className="rounded-full px-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: pendingDelete === item.id ? brand.accentColor : "var(--brand-fg-muted)", outlineColor: brand.primaryColor }}
              >
                {pendingDelete === item.id ? "Delete?" : <Trash className="h-5 w-5" aria-hidden />}
              </button>
            </div>
            <h2 className="relative mt-5 text-xl font-extrabold">
              <button type="button" onClick={() => navigate("note-detail")} className="text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ outlineColor: brand.primaryColor }}>
                {item.title}<span className="sr-only"> — open note</span>
              </button>
            </h2>
            <p className="relative text-sm" style={{ color: "var(--brand-fg-muted)" }}>{item.folder} · Updated {shortDate(item.updated_at)}</p>
            <div className="relative mt-5 flex items-center justify-between">
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: mix(item.tag === "Ideas" ? brand.accentColor : brand.primaryColor, 30), color: "#fff" }}>{item.tag}</span>
              <span className="text-2xl font-extrabold tabular-nums" style={{ color: brand.accentColor }}>{wordCount(item.body)}<span className="sr-only"> words</span></span>
            </div>
          </article>
        ))}
      </div>
      {items.length === 0 ? (
        <p className="p-10 text-center text-sm" style={glass}>
          {notes.length === 0
            ? "No notes yet — your first one starts in the editor and stays on this device."
            : needle
            ? `Nothing here matches “${query.trim()}” — try fewer words or clear the search.`
            : `No notes tagged ${tag} yet — pick All to see every note.`}
        </p>
      ) : null}
    </div>
  );
}
