"use client";
// Generated screens hold state and handle events, which a server component
// cannot do. Next.js renders on the server unless a module says otherwise.

// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Select, Separator, Tabs, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { X, Edit } = Icons;

const NOW = new Date('2026-11-05T16:20:00');

const FOLDERS = ['Inbox', 'Work', 'Personal', 'Recipes', 'Reading'];

const INITIAL_TAGS = [
  { id: 't-1', name: 'deadlines' },
  { id: 't-2', name: 'ideas' },
  { id: 't-3', name: 'travel' },
  { id: 't-4', name: 'baking' },
  { id: 't-5', name: 'quotes' },
  { id: 't-6', name: 'health' },
  { id: 't-7', name: 'finance' },
];

const INITIAL_NOTES = [
  {
    id: 'n-1',
    title: 'Q4 roadmap — what actually ships',
    body:
      'Ship list, in order:\n1. Offline note cache (Mira, 14 Nov)\n2. Tag rename — blocked on the migration script\n3. Export to .txt — nice to have, cut if the 14th slips\n\nDecision from Monday: no rich text. Plain body only, keeps the storage layer boring.',
    folder: 'Work',
    tags: ['t-1', 't-2'],
    created_at: '2026-10-28T10:02:00',
    updated_at: '2026-11-05T09:14:00',
  },
  {
    id: 'n-2',
    title: 'Lisbon — hostel, trains, the pastel place',
    body:
      'Flight TP1943, 21 Nov, lands 13:05.\nHostel: Baixa, booking ref 8KQ-204, paid.\nTrain to Sintra leaves Rossio every 30 min, buy the day ticket at the machine not the desk.\nManteigaria on Rua do Loreto — the one Joana said, not the Belem queue.',
    folder: 'Personal',
    tags: ['t-3'],
    created_at: '2026-11-01T20:41:00',
    updated_at: '2026-11-04T21:08:00',
  },
  {
    id: 'n-3',
    title: 'Sourdough log — 70% hydration',
    body:
      'Bake 11: 400g white, 100g wholemeal, 350g water, 10g salt, 90g levain.\nAutolyse 45 min. Four folds, 30 min apart. Bulk 4h20 at 23°C.\nCrumb was tighter than bake 10 — fridge proof was only 9h, push to 14h next time.',
    folder: 'Recipes',
    tags: ['t-4'],
    created_at: '2026-10-19T08:30:00',
    updated_at: '2026-11-03T17:40:00',
  },
  {
    id: 'n-4',
    title: 'Finish before Christmas',
    body:
      'Tokarczuk — Flights (p. 212)\nLe Guin — The Dispossessed, restart\nKeegan — Small Things Like These, one sitting\n\n"We are volcanoes." — keep this one for the Thursday letter.',
    folder: 'Reading',
    tags: ['t-5', 't-2'],
    created_at: '2026-09-30T19:12:00',
    updated_at: '2026-11-02T07:55:00',
  },
  {
    id: 'n-5',
    title: 'Dentist — Dr. Halloway, 14 Nov 08:30',
    body: 'Bring the old X-rays. Parking behind the surgery is permit-only after 09:00, so get there early.',
    folder: 'Inbox',
    tags: ['t-6'],
    created_at: '2026-11-02T12:00:00',
    updated_at: '2026-11-02T12:00:00',
  },
  {
    id: 'n-6',
    title: 'Rent split + utilities, November',
    body:
      'Rent 1,340.00 — my share 670.00, sent 1 Nov\nElectric 86.40 — split three ways, Theo owes 28.80\nWater on the quarterly, next bill 12 Dec\nBroadband 39.00 — on my card, Nadia transfers Friday',
    folder: 'Personal',
    tags: ['t-7'],
    created_at: '2026-11-01T09:20:00',
    updated_at: '2026-11-01T09:47:00',
  },
  {
    id: 'n-7',
    title: 'Standup, Tue 3 Nov',
    body:
      'Mira: cache writes landed, needs a second pair of eyes on the eviction rule.\nTheo: out Thursday.\nMe: tag filter, then the delete confirm.\nNo blockers worth raising.',
    folder: 'Work',
    tags: [],
    created_at: '2026-11-03T09:35:00',
    updated_at: '2026-11-03T09:52:00',
  },
  {
    id: 'n-8',
    title: '',
    body: 'call back the letting agent about the boiler — ref MW-7741',
    folder: 'Inbox',
    tags: [],
    created_at: '2026-11-05T15:58:00',
    updated_at: '2026-11-05T15:58:00',
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function pad(n) {
  return String(n).padStart(2, '0');
}

function clockOf(d) {
  return pad(d.getHours()) + ':' + pad(d.getMinutes());
}

function when(iso) {
  const d = new Date(iso);
  const mins = Math.floor((NOW - d) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + ' min ago';
  const sameDay = d.toDateString() === NOW.toDateString();
  if (sameDay) return 'Today ' + clockOf(d);
  const y = new Date(NOW.getTime() - 86400000);
  if (d.toDateString() === y.toDateString()) return 'Yesterday ' + clockOf(d);
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' · ' + clockOf(d);
}

function longWhen(iso) {
  const d = new Date(iso);
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear() + ', ' + clockOf(d);
}

function snippet(body) {
  const s = body.replace(/\s+/g, ' ').trim();
  return s.length > 72 ? s.slice(0, 72) + '…' : s;
}

export default function Screen() {
  const navigate = useNavigate();
  const [notes, setNotes] = React.useState(INITIAL_NOTES);
  const [tags, setTags] = React.useState(INITIAL_TAGS);
  const [activeId, setActiveId] = React.useState('n-1');
  const [draft, setDraft] = React.useState({
    title: INITIAL_NOTES[0].title,
    body: INITIAL_NOTES[0].body,
    folder: INITIAL_NOTES[0].folder,
    tags: INITIAL_NOTES[0].tags,
  });
  const [tab, setTab] = React.useState('write');
  const [saveState, setSaveState] = React.useState('idle');
  const [lastSavedAt, setLastSavedAt] = React.useState(null);
  const [plainNotice, setPlainNotice] = React.useState('');
  const [newTag, setNewTag] = React.useState('');
  const [tagError, setTagError] = React.useState('');
  const [toast, setToast] = React.useState(null);
  const [dialog, setDialog] = React.useState(null); // {kind:'delete'} | {kind:'switch', to}
  const [offlineShown, setOfflineShown] = React.useState(true);
  const [justSavedId, setJustSavedId] = React.useState(null);
  const timers = React.useRef([]);

  React.useEffect(function () {
    return function () {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function later(fn, ms) {
    timers.current.push(setTimeout(fn, ms));
  }

  const activeNote = notes.find(function (n) {
    return n.id === activeId;
  }) || null;

  const isNew = activeId === 'new';

  const dirty = isNew
    ? draft.title.trim() !== '' || draft.body.trim() !== '' || draft.tags.length > 0
    : !!activeNote &&
      (draft.title !== activeNote.title ||
        draft.body !== activeNote.body ||
        draft.folder !== activeNote.folder ||
        draft.tags.join('|') !== activeNote.tags.join('|'));

  const words = draft.body.trim() ? draft.body.trim().split(/\s+/).length : 0;

  const bg = brand.backgroundColor;
  const primary = brand.primaryColor;
  const accent = brand.accentColor;
  const neutral = brand.neutralColor;
  const radius = brand.radius;

  const glass = {
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: radius,
    backdropFilter: 'blur(18px)',
  };
  const fieldStyle = {
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: radius,
    color: '#ffffff',
  };

  function openNote(id) {
    if (dirty) {
      setDialog({ kind: 'switch', to: id });
      return;
    }
    commitOpen(id);
  }

  function commitOpen(id) {
    if (id === 'new') {
      setActiveId('new');
      setDraft({ title: '', body: '', folder: 'Inbox', tags: [] });
    } else {
      const n = notes.find(function (x) {
        return x.id === id;
      });
      if (!n) return;
      setActiveId(id);
      setDraft({ title: n.title, body: n.body, folder: n.folder, tags: n.tags });
    }
    setTab('write');
    setSaveState('idle');
    setPlainNotice('');
    setTagError('');
    setDialog(null);
  }

  function handleSave(e) {
    if (e) e.preventDefault();
    if (!dirty && saveState !== 'idle') return;
    setSaveState('saving');
    later(function () {
      const stamp = new Date(NOW.getTime()).toISOString();
      if (isNew) {
        const id = 'n-' + (Date.now() % 100000);
        const created = {
          id: id,
          title: draft.title,
          body: draft.body,
          folder: draft.folder,
          tags: draft.tags,
          created_at: stamp,
          updated_at: stamp,
        };
        setNotes(function (prev) {
          return [created].concat(prev);
        });
        setActiveId(id);
        setJustSavedId(id);
        setToast({ tone: 'ok', text: 'Saved to this browser. ' + (draft.title.trim() || 'Untitled note') + ' is in your list.' });
      } else {
        setNotes(function (prev) {
          return prev.map(function (n) {
            return n.id === activeId
              ? Object.assign({}, n, {
                  title: draft.title,
                  body: draft.body,
                  folder: draft.folder,
                  tags: draft.tags,
                  updated_at: stamp,
                })
              : n;
          });
        });
        setJustSavedId(activeId);
        setToast({ tone: 'ok', text: 'Changes saved to this browser.' });
      }
      setSaveState('saved');
      setLastSavedAt(stamp);
      later(function () {
        setJustSavedId(null);
      }, 1200);
    }, 650);
  }

  function handleDiscard() {
    if (isNew) {
      setDraft({ title: '', body: '', folder: 'Inbox', tags: [] });
    } else if (activeNote) {
      setDraft({ title: activeNote.title, body: activeNote.body, folder: activeNote.folder, tags: activeNote.tags });
    }
    setSaveState('idle');
    setPlainNotice('');
    setToast({ tone: 'info', text: 'Changes discarded. The note is back to how you last saved it.' });
  }

  function confirmDelete() {
    const gone = activeNote;
    const rest = notes.filter(function (n) {
      return n.id !== activeId;
    });
    setNotes(rest);
    setDialog(null);
    setToast({
      tone: 'warn',
      text: '“' + ((gone && gone.title.trim()) || 'Untitled note') + '” is deleted. It is gone from this browser for good.',
    });
    if (rest.length) {
      const n = rest[0];
      setActiveId(n.id);
      setDraft({ title: n.title, body: n.body, folder: n.folder, tags: n.tags });
    } else {
      setActiveId('new');
      setDraft({ title: '', body: '', folder: 'Inbox', tags: [] });
    }
    setTab('write');
    setSaveState('idle');
  }

  function toggleTag(id) {
    setDraft(function (d) {
      const has = d.tags.indexOf(id) > -1;
      return Object.assign({}, d, {
        tags: has
          ? d.tags.filter(function (t) {
              return t !== id;
            })
          : d.tags.concat([id]),
      });
    });
    setSaveState('idle');
  }

  function addTag(e) {
    e.preventDefault();
    const name = newTag.trim().toLowerCase();
    if (!name) {
      setTagError('Give the tag a name first — a word or two is plenty.');
      return;
    }
    const existing = tags.find(function (t) {
      return t.name === name;
    });
    if (existing) {
      setTagError('You already have a tag called “' + name + '”. Pick it from the list instead.');
      return;
    }
    const id = 't-' + (Date.now() % 100000);
    setTags(tags.concat([{ id: id, name: name }]));
    setDraft(function (d) {
      return Object.assign({}, d, { tags: d.tags.concat([id]) });
    });
    setNewTag('');
    setTagError('');
    setSaveState('idle');
  }

  function bodyKeys(e) {
    const mod = e.metaKey || e.ctrlKey;
    if (mod && ['b', 'i', 'u'].indexOf(e.key.toLowerCase()) > -1) {
      e.preventDefault();
      setPlainNotice('Plain text only — bold, italics and headings are not stored in a note body.');
    }
    if (mod && e.key.toLowerCase() === 's') {
      e.preventDefault();
      handleSave();
    }
  }

  React.useEffect(
    function () {
      if (!dialog) return;
      function onKey(ev) {
        if (ev.key === 'Escape') setDialog(null);
      }
      document.addEventListener('keydown', onKey);
      return function () {
        document.removeEventListener('keydown', onKey);
      };
    },
    [dialog]
  );

  const tagName = function (id) {
    const t = tags.find(function (x) {
      return x.id === id;
    });
    return t ? t.name : 'tag';
  };

  const css =
    '.np-focus:focus-visible{outline:2px solid ' +
    primary +
    ';outline-offset:2px;border-radius:' +
    radius +
    '}' +
    '.np-rise{animation:npRise .32s cubic-bezier(.2,.7,.3,1) both}' +
    '@keyframes npRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
    '.np-pop{animation:npPop .2s ease-out both}' +
    '@keyframes npPop{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}' +
    '.np-scroll::-webkit-scrollbar{width:8px}.np-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,.16);border-radius:8px}' +
    '@media (prefers-reduced-motion: reduce){*{animation:none !important;transition:none !important}}';

  const statusChip = (function () {
    if (saveState === 'saving') return { text: 'Saving to this device…', tone: 'busy' };
    if (dirty) return { text: 'Unsaved changes', tone: 'warn' };
    if (saveState === 'saved') return { text: 'Saved ' + (lastSavedAt ? when(lastSavedAt) : 'just now'), tone: 'ok' };
    if (isNew) return { text: 'New note — nothing stored yet', tone: 'idle' };
    return { text: 'Stored in this browser', tone: 'ok' };
  })();

  const chipColor =
    statusChip.tone === 'warn' ? accent : statusChip.tone === 'busy' ? primary : statusChip.tone === 'ok' ? primary : neutral;

  return (
    <div
      className="min-h-full w-full px-5 py-8 sm:px-8"
      style={{ backgroundColor: bg, fontFamily: brand.fontBody, color: '#e9f1fb' }}
    >
      <style>{css}</style>

      {/* ambient glow — signature of the editor canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-72"
        style={{
          background:
            'radial-gradient(60% 120% at 18% 0%, ' +
            primary +
            '26 0%, transparent 62%), radial-gradient(50% 110% at 82% 0%, ' +
            accent +
            '22 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* ---------- header ---------- */}
        <header className="mb-6">
          <button
            type="button"
            onClick={function () {
              if (dirty) {
                setDialog({ kind: 'switch', to: 'notes-screen' });
              } else {
                navigate('notes');
              }
            }}
            className="np-focus mb-4 inline-flex min-h-[44px] items-center gap-2 px-3 text-sm font-semibold transition-colors"
            style={{ color: neutral, borderRadius: radius }}
          >
            <Icons.ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All notes
          </button>

          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <div>
              <h1
                className="text-[34px] font-black leading-tight tracking-tight sm:text-[40px]"
                style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}
              >
                Note editor
              </h1>
              <p className="mt-2 max-w-[62ch] text-sm" style={{ color: neutral }}>
                {isNew
                  ? 'A blank note. Type a title, a body, or neither — it saves either way.'
                  : 'Editing “' +
                    ((activeNote && activeNote.title.trim()) || 'Untitled note') +
                    '” · last change ' +
                    (activeNote ? when(activeNote.updated_at) : '') +
                    '.'}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold" style={{ color: chipColor }}>
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: chipColor, boxShadow: '0 0 12px ' + chipColor }}
                />
                {statusChip.text}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={handleDiscard}
                disabled={!dirty || saveState === 'saving'}
                className="np-focus min-h-[44px] px-4 text-sm font-semibold transition-opacity"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: radius,
                  color: dirty ? '#e9f1fb' : 'rgba(233,241,251,0.38)',
                  cursor: dirty ? 'pointer' : 'not-allowed',
                }}
              >
                Discard changes
              </Button>

              <Button
                type="button"
                onClick={function () {
                  setDialog({ kind: 'delete' });
                }}
                disabled={isNew}
                className="np-focus min-h-[44px] px-4 text-sm font-semibold"
                style={{
                  backgroundColor: isNew ? 'transparent' : accent + '1f',
                  border: '1px solid ' + (isNew ? 'rgba(255,255,255,0.14)' : accent + '66'),
                  borderRadius: radius,
                  color: isNew ? 'rgba(233,241,251,0.38)' : accent,
                  cursor: isNew ? 'not-allowed' : 'pointer',
                }}
              >
                <Icons.Trash className="mr-2 inline h-4 w-4" aria-hidden="true" />
                Delete note
              </Button>

              <Button
                type="button"
                onClick={handleSave}
                disabled={saveState === 'saving' || (!dirty && !isNew)}
                className="np-focus min-h-[48px] px-6 text-sm font-black tracking-wide"
                style={{
                  background:
                    saveState === 'saving' || (!dirty && !isNew)
                      ? 'rgba(255,255,255,0.1)'
                      : 'linear-gradient(90deg, ' + primary + ', ' + accent + ')',
                  color: saveState === 'saving' || (!dirty && !isNew) ? 'rgba(233,241,251,0.5)' : bg,
                  borderRadius: radius,
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: dirty && saveState !== 'saving' ? '0 18px 48px -18px ' + primary + 'cc' : 'none',
                  cursor: saveState === 'saving' || (!dirty && !isNew) ? 'not-allowed' : 'pointer',
                }}
              >
                {saveState === 'saving' ? (
                  <span className="inline-flex items-center gap-2">
                    <Icons.Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Saving…
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Icons.Check className="h-4 w-4" aria-hidden="true" />
                    Save note
                  </span>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* ---------- offline / local-only strip ---------- */}
        {offlineShown ? (
          <div
            className="mb-6 flex items-start gap-3 px-4 py-3 text-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.045)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: radius,
            }}
          >
            <Icons.AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: neutral }} aria-hidden="true" />
            <p className="flex-1" style={{ color: neutral }}>
              Working offline. Notes are written to this browser on this device only — there is no account and no cloud copy.
            </p>
            <button
              type="button"
              onClick={function () {
                setOfflineShown(false);
              }}
              aria-label="Dismiss the local storage notice"
              className="np-focus -m-2 p-2"
              style={{ color: neutral }}
            >
              <Icons.X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}

        {/* ---------- toast ---------- */}
        {toast ? (
          <div
            role="status"
            className="np-pop mb-6 flex items-start gap-3 px-4 py-3 text-sm"
            style={{
              backgroundColor: (toast.tone === 'warn' ? accent : primary) + '14',
              border: '1px solid ' + (toast.tone === 'warn' ? accent : primary) + '59',
              borderRadius: radius,
            }}
          >
            {toast.tone === 'warn' ? (
              <Icons.Trash className="mt-[2px] h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
            ) : (
              <Icons.CheckCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: primary }} aria-hidden="true" />
            )}
            <p className="flex-1" style={{ color: '#ffffff' }}>
              {toast.text}
            </p>
            <button
              type="button"
              onClick={function () {
                setToast(null);
              }}
              aria-label="Dismiss this message"
              className="np-focus -m-2 p-2"
              style={{ color: neutral }}
            >
              <Icons.X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}

        {/* ---------- body ---------- */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* rail */}
          <section className="lg:col-span-4 xl:col-span-3" aria-labelledby="rail-heading">
            <div style={glass} className="overflow-hidden">
              <div className="flex items-center justify-between gap-3 px-5 pt-5">
                <h2 id="rail-heading" className="text-base font-bold" style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}>
                  All notes
                </h2>
                <span
                  className="px-2 py-[2px] text-xs font-bold"
                  style={{ color: primary, backgroundColor: primary + '1f', borderRadius: 999, fontVariantNumeric: 'tabular-nums' }}
                >
                  {notes.length}
                </span>
              </div>

              <div className="px-5 pb-4 pt-3">
                <Button
                  type="button"
                  onClick={function () {
                    openNote('new');
                  }}
                  className="np-focus w-full min-h-[44px] text-sm font-bold"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px dashed ' + accent + '80',
                    borderRadius: radius,
                    color: accent,
                  }}
                >
                  <Icons.Plus className="mr-2 inline h-4 w-4" aria-hidden="true" />
                  New blank note
                </Button>
              </div>

              <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.13)' }} />

              {notes.length === 0 ? (
                <div className="p-5">
                  <Empty
                    title="Nothing saved on this device yet"
                    description="Your notes live in this browser only. Write the first one and it appears here straight away."
                    action={
                      <Button
                        type="button"
                        onClick={function () {
                          openNote('new');
                        }}
                        className="np-focus min-h-[44px] px-5 text-sm font-bold"
                        style={{
                          background: 'linear-gradient(90deg, ' + primary + ', ' + accent + ')',
                          color: bg,
                          borderRadius: radius,
                        }}
                      >
                        Start a note
                      </Button>
                    }
                  />
                </div>
              ) : (
                <ul className="np-scroll max-h-[560px] overflow-y-auto">
                  {notes.map(function (n) {
                    const active = n.id === activeId;
                    return (
                      <li
                        key={n.id}
                        className={justSavedId === n.id ? 'np-rise' : ''}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}
                      >
                        <button
                          type="button"
                          onClick={function () {
                            openNote(n.id);
                          }}
                          aria-current={active ? 'true' : undefined}
                          className="np-focus w-full px-5 py-4 text-left transition-colors"
                          style={{
                            backgroundColor: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                            borderLeft: '3px solid ' + (active ? primary : 'transparent'),
                          }}
                        >
                          <span className="flex items-baseline justify-between gap-3">
                            <span
                              className="truncate text-sm font-bold"
                              style={{
                                color: n.title.trim() ? '#ffffff' : neutral,
                                fontStyle: n.title.trim() ? 'normal' : 'italic',
                              }}
                            >
                              {n.title.trim() || 'Untitled note'}
                            </span>
                            <span
                              className="shrink-0 text-[11px]"
                              style={{ color: neutral, fontVariantNumeric: 'tabular-nums' }}
                            >
                              {when(n.updated_at)}
                            </span>
                          </span>
                          <span className="mt-1 block truncate text-xs" style={{ color: neutral }}>
                            {snippet(n.body) || 'Empty body'}
                          </span>
                          <span className="mt-2 flex flex-wrap items-center gap-1.5">
                            <span
                              className="inline-flex items-center gap-1 px-2 py-[2px] text-[11px] font-semibold"
                              style={{ borderRadius: 999, border: '1px solid rgba(255,255,255,0.16)', color: neutral }}
                            >
                              <Icons.Package className="h-3 w-3" aria-hidden="true" />
                              {n.folder}
                            </span>
                            {n.tags.map(function (t) {
                              return (
                                <span
                                  key={t}
                                  className="px-2 py-[2px] text-[11px] font-semibold"
                                  style={{ borderRadius: 999, backgroundColor: accent + '1f', color: accent }}
                                >
                                  #{tagName(t)}
                                </span>
                              );
                            })}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>

          {/* editor */}
          <section className="lg:col-span-8 xl:col-span-9" aria-labelledby="editor-heading">
            <form
              onSubmit={handleSave}
              style={Object.assign({}, glass, {
                boxShadow: '0 40px 90px -50px ' + primary + '99',
              })}
              className="overflow-hidden"
            >
              <div className="px-5 pt-5 sm:px-7">
                <h2 id="editor-heading" className="sr-only">
                  {isNew ? 'Write a new note' : 'Edit this note'}
                </h2>
                <Tabs
                  tabs={[
                    { key: 'write', label: 'Write' },
                    { key: 'organize', label: 'Organize & details' },
                  ]}
                  active={tab}
                  onChange={setTab}
                />
              </div>

              <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

              {tab === 'write' ? (
                <div className="np-pop px-5 py-6 sm:px-7 sm:py-8" role="region" aria-label="Write">
                  <div className="mb-6">
                    <Label htmlFor="note-title" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em]" style={{ color: neutral }}>
                      Title
                    </Label>
                    <Input
                      id="note-title"
                      value={draft.title}
                      onChange={function (e) {
                        setDraft(Object.assign({}, draft, { title: e.target.value }));
                        setSaveState('idle');
                      }}
                      placeholder="Thursday call with the letting agent"
                      className="np-focus w-full px-4 py-3 text-xl font-bold"
                      style={Object.assign({}, fieldStyle, { fontFamily: brand.fontHeading })}
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <Label htmlFor="note-body" className="block text-xs font-bold uppercase tracking-[0.12em]" style={{ color: neutral }}>
                        Body — plain text
                      </Label>
                      <p className="text-xs" style={{ color: neutral, fontVariantNumeric: 'tabular-nums' }}>
                        {words} words · {draft.body.length} characters
                      </p>
                    </div>
                    <Textarea
                      id="note-body"
                      value={draft.body}
                      onChange={function (e) {
                        setDraft(Object.assign({}, draft, { body: e.target.value }));
                        setSaveState('idle');
                      }}
                      onKeyDown={bodyKeys}
                      rows={14}
                      placeholder={'Boiler ref MW-7741.\nAsk about the service date and who pays the call-out.'}
                      aria-describedby="plain-help"
                      className="np-focus w-full resize-y px-4 py-4 text-[15px] leading-[1.6]"
                      style={Object.assign({}, fieldStyle, { fontFamily: brand.fontBody })}
                    />
                    <p id="plain-help" className="mt-2 text-xs" style={{ color: neutral }}>
                      Notes are stored as plain text. Line breaks are kept; bold, headings and lists are not. Press ⌘/Ctrl + S to save.
                    </p>

                    <div aria-live="polite">
                      {plainNotice ? (
                        <div
                          className="np-pop mt-3 flex items-start gap-3 px-4 py-3 text-sm"
                          style={{ backgroundColor: accent + '14', border: '1px solid ' + accent + '59', borderRadius: radius }}
                        >
                          <Icons.AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                          <p className="flex-1" style={{ color: '#ffffff' }}>
                            {plainNotice}
                          </p>
                          <button
                            type="button"
                            onClick={function () {
                              setPlainNotice('');
                            }}
                            aria-label="Dismiss the plain-text notice"
                            className="np-focus -m-2 p-2"
                            style={{ color: neutral }}
                          >
                            <Icons.X className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="np-pop px-5 py-6 sm:px-7 sm:py-8" role="region" aria-label="Organize and details">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                      <Label htmlFor="note-folder" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em]" style={{ color: neutral }}>
                        Folder
                      </Label>
                      <Select
                        id="note-folder"
                        value={draft.folder}
                        onChange={function (e) {
                          setDraft(Object.assign({}, draft, { folder: e.target.value }));
                          setSaveState('idle');
                        }}
                        className="np-focus w-full px-4 py-3 text-sm font-semibold"
                        style={fieldStyle}
                      >
                        {FOLDERS.map(function (f) {
                          return (
                            <option key={f} value={f} style={{ color: '#0b1b36' }}>
                              {f}
                            </option>
                          );
                        })}
                      </Select>
                      <p className="mt-2 text-xs" style={{ color: neutral }}>
                        A note lives in exactly one folder. It keeps the folder when you come back to this browser.
                      </p>

                      <div className="mt-8">
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: neutral }}>
                          This note’s details
                        </h3>
                        <dl className="text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
                          <div className="flex justify-between gap-4 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
                            <dt style={{ color: neutral }}>Created</dt>
                            <dd style={{ color: '#ffffff' }}>{isNew ? 'Not saved yet' : longWhen(activeNote.created_at)}</dd>
                          </div>
                          <div className="flex justify-between gap-4 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
                            <dt style={{ color: neutral }}>Last updated</dt>
                            <dd style={{ color: '#ffffff' }}>{isNew ? '—' : longWhen(activeNote.updated_at)}</dd>
                          </div>
                          <div className="flex justify-between gap-4 py-2">
                            <dt style={{ color: neutral }}>Stored</dt>
                            <dd style={{ color: '#ffffff' }}>This browser, this device</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div>
                      <h3 id="tags-heading" className="mb-2 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: neutral }}>
                        Tags
                      </h3>
                      <p className="mb-3 text-xs" style={{ color: neutral }}>
                        Tap a tag to add or remove it. A note can carry as many as you like.
                      </p>
                      <ul className="flex flex-wrap gap-2" aria-labelledby="tags-heading">
                        {tags.map(function (t) {
                          const on = draft.tags.indexOf(t.id) > -1;
                          return (
                            <li key={t.id}>
                              <button
                                type="button"
                                aria-pressed={on}
                                onClick={function () {
                                  toggleTag(t.id);
                                }}
                                className="np-focus inline-flex min-h-[40px] items-center gap-1.5 px-3.5 text-sm font-semibold transition-colors"
                                style={{
                                  borderRadius: 999,
                                  backgroundColor: on ? accent + '2b' : 'rgba(255,255,255,0.05)',
                                  border: '1px solid ' + (on ? accent + '99' : 'rgba(255,255,255,0.14)'),
                                  color: on ? '#ffffff' : neutral,
                                }}
                              >
                                {on ? <Icons.Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Icons.Plus className="h-3.5 w-3.5" aria-hidden="true" />}
                                #{t.name}
                              </button>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-6">
                        <Label htmlFor="new-tag" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em]" style={{ color: neutral }}>
                          Create a tag
                        </Label>
                        <div className="flex flex-wrap gap-3">
                          <Input
                            id="new-tag"
                            value={newTag}
                            onChange={function (e) {
                              setNewTag(e.target.value);
                              setTagError('');
                            }}
                            onKeyDown={function (e) {
                              if (e.key === 'Enter') addTag(e);
                            }}
                            placeholder="invoices"
                            aria-invalid={tagError ? 'true' : undefined}
                            aria-describedby={tagError ? 'tag-error' : undefined}
                            className="np-focus min-w-[180px] flex-1 px-4 py-3 text-sm"
                            style={Object.assign({}, fieldStyle, {
                              border: '1px solid ' + (tagError ? accent + 'aa' : 'rgba(255,255,255,0.14)'),
                            })}
                          />
                          <Button
                            type="button"
                            onClick={addTag}
                            className="np-focus min-h-[44px] px-5 text-sm font-bold"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.07)',
                              border: '1px solid rgba(255,255,255,0.18)',
                              borderRadius: radius,
                              color: '#ffffff',
                            }}
                          >
                            Add tag
                          </Button>
                        </div>
                        <div aria-live="polite">
                          {tagError ? (
                            <p id="tag-error" className="np-pop mt-2 flex items-start gap-2 text-sm" style={{ color: accent }}>
                              <Icons.AlertCircle className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
                              {tagError}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="my-7">
                        <Separator className="opacity-20" />
                      </div>

                      <h3 className="text-sm font-bold" style={{ color: '#ffffff', fontFamily: brand.fontHeading }}>
                        Delete this note
                      </h3>
                      <p className="mt-1 max-w-[52ch] text-xs" style={{ color: neutral }}>
                        Deleting removes the note from this browser immediately. There is no cloud backup, so it cannot be brought back.
                      </p>
                      <Button
                        type="button"
                        disabled={isNew}
                        onClick={function () {
                          setDialog({ kind: 'delete' });
                        }}
                        className="np-focus mt-3 min-h-[44px] px-4 text-sm font-bold"
                        style={{
                          backgroundColor: isNew ? 'transparent' : accent + '1f',
                          border: '1px solid ' + (isNew ? 'rgba(255,255,255,0.14)' : accent + '66'),
                          borderRadius: radius,
                          color: isNew ? 'rgba(233,241,251,0.38)' : accent,
                          cursor: isNew ? 'not-allowed' : 'pointer',
                        }}
                      >
                        <Icons.Trash className="mr-2 inline h-4 w-4" aria-hidden="true" />
                        {isNew ? 'Nothing to delete yet' : 'Delete permanently'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-7">
                <p className="text-xs" style={{ color: neutral }}>
                  {draft.folder} · {draft.tags.length === 0 ? 'no tags' : draft.tags.length + (draft.tags.length === 1 ? ' tag' : ' tags')} ·
                  an empty title or body still saves.
                </p>
                <Button
                  type="submit"
                  disabled={saveState === 'saving' || (!dirty && !isNew)}
                  className="np-focus min-h-[44px] px-5 text-sm font-black"
                  style={{
                    background:
                      saveState === 'saving' || (!dirty && !isNew)
                        ? 'rgba(255,255,255,0.1)'
                        : 'linear-gradient(90deg, ' + primary + ', ' + accent + ')',
                    color: saveState === 'saving' || (!dirty && !isNew) ? 'rgba(233,241,251,0.5)' : bg,
                    borderRadius: radius,
                    cursor: saveState === 'saving' || (!dirty && !isNew) ? 'not-allowed' : 'pointer',
                  }}
                >
                  {saveState === 'saving' ? 'Saving…' : 'Save note'}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* ---------- dialogs ---------- */}
      {dialog ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5" style={{ backgroundColor: 'rgba(6,20,43,0.78)' }}>
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-desc"
            className="np-pop w-full max-w-md p-6"
            style={{
              backgroundColor: 'rgba(14,32,60,0.96)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: radius,
              boxShadow: '0 50px 100px -40px ' + accent + '99',
            }}
          >
            {dialog.kind === 'delete' ? (
              <React.Fragment>
                <h2 id="dialog-title" className="text-xl font-black" style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}>
                  Delete “{(activeNote && activeNote.title.trim()) || 'Untitled note'}”?
                </h2>
                <p id="dialog-desc" className="mt-3 text-sm leading-relaxed" style={{ color: neutral }}>
                  It is removed from this browser right away and will not be here next time you open the app. There is no cloud copy to
                  restore from.
                </p>
                <div className="mt-6 flex flex-wrap justify-end gap-3">
                  <Button
                    type="button"
                    onClick={function () {
                      setDialog(null);
                    }}
                    className="np-focus min-h-[44px] px-4 text-sm font-semibold"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255,255,255,0.18)',
                      borderRadius: radius,
                      color: '#ffffff',
                    }}
                  >
                    Keep the note
                  </Button>
                  <Button
                    type="button"
                    autoFocus
                    onClick={confirmDelete}
                    className="np-focus min-h-[44px] px-5 text-sm font-black"
                    style={{ backgroundColor: accent, color: bg, borderRadius: radius }}
                  >
                    Delete permanently
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h2 id="dialog-title" className="text-xl font-black" style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}>
                  Leave without saving?
                </h2>
                <p id="dialog-desc" className="mt-3 text-sm leading-relaxed" style={{ color: neutral }}>
                  “{(isNew ? draft.title.trim() : (activeNote && activeNote.title.trim())) || 'Untitled note'}” has edits that are not in
                  this browser yet. Save them first, or carry on and lose them.
                </p>
                <div className="mt-6 flex flex-wrap justify-end gap-3">
                  <Button
                    type="button"
                    onClick={function () {
                      const to = dialog.to;
                      setDialog(null);
                      if (to === 'notes-screen') {
                        navigate('notes');
                      } else {
                        commitOpen(to);
                      }
                    }}
                    className="np-focus min-h-[44px] px-4 text-sm font-semibold"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255,255,255,0.18)',
                      borderRadius: radius,
                      color: '#ffffff',
                    }}
                  >
                    Discard and leave
                  </Button>
                  <Button
                    type="button"
                    autoFocus
                    onClick={function () {
                      setDialog(null);
                    }}
                    className="np-focus min-h-[44px] px-5 text-sm font-black"
                    style={{ background: 'linear-gradient(90deg, ' + primary + ', ' + accent + ')', color: bg, borderRadius: radius }}
                  >
                    Keep editing
                  </Button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
