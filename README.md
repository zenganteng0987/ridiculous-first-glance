# Ridiculous at First Glance, Real by the Second

[![Competition](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?ref=7z4nfrpv)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/zenganteng0987/ridiculous-first-glance/rank.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/zenganteng0987/ridiculous-first-glance/reward.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

A single sentence (180 characters) pitching a bizarre startup idea that sounds
ridiculous at first glance but makes sense as a real business: renting
lap-trained hens as emotional-support animals for burnt-out office workers.

> We rent lap-trained hens as emotional-support animals for burnt-out office workers, because a calm chicken on your desk beats a meditation app nobody opens — and the hens lay eggs.

## How it was picked

Four candidate pitches were compared against the judge's criteria, in order:

- **A — Professional mourners** (160 chars): renting mourners who weep on cue at strangers' funerals. Real practice in some cultures, so less genuinely new.
- **B — Pothole naming rights** (136 chars): selling naming rights to potholes. Novel, but the business logic is weak — why would a named crater help drivers?
- **C — Emotional-support hens** (180 chars): the winner. A business nobody has heard of, a concrete thing sold (lap-trained hens), a clear buyer (burnt-out office workers), and a double turn from laughing to nodding ("beats a meditation app nobody opens — and the hens lay eggs").
- **D — Wedding toast insurance** (135 chars): a standby comedian rewriting toasts live. Funny, but a narrower buyer and a weaker reason to pay than C.

C wins on criterion 2 (genuinely bizarre, never heard before) and criterion 3
(the logic holds twice over: a calm chicken on your desk beats an app nobody
opens, and the hens lay eggs, so the rental pays back in breakfast), with the
strongest laugh-to-nod turn for criterion 4.

## Run

```sh
node main.ts
```

Writes the entry sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output/entry.txt`), falling back to `./entry.txt` if the output directory
cannot be written. No dependencies, no network. Before writing, the program
checks the sentence is 1–200 characters (the gate's limit) and exits with an
error if it is not.
