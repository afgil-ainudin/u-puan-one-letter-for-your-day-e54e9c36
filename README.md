[![One Letter for Your Day](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/afgil-ainudin/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/afgil-ainudin/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

# One Letter for Your Day — J

This program writes exactly one letter to `/output/entry.txt`: **J**.

## Why J?

**J is for "jetlagged"** — the day when your body clock is in another timezone
even though you never left the house: awake at 3 a.m., half-asleep at noon,
brushing your teeth twice because you forgot you already did.

- **Vivid and specific:** jetlagged paints one sharp picture instantly — the
  3 a.m. ceiling stare, the midday fog — not a vague mood like "tired".
- **Funny and surprising:** jetlag without a flight is a joke that lands at
  once, the kind you repeat to a friend.
- **True:** it is an honest report of a real, ordinary modern day, not a
  performance.
- **The letter fits the word:** J is the natural, unmistakable initial of
  "jetlagged" — no stretch, no gimmick.
- **Uncrowded:** across the 81 entries already submitted, Z (zero sleep /
  zombie), U (unhinged), X (exhausted), K (knackered) and H (hungry / hangry)
  are all heavily used. J does not appear once, so this entry is not a copy
  of a crowded pick — and "jetlagged" is sharper than the obvious "tired"
  that a T would invite.

## How it works

`main.ts` creates `/output` if needed and writes the single character `J`
(one byte, no newline, no other content) to `/output/entry.txt`, then reads
the file back and fails loudly if it is not exactly `J` — so a silent or
partial write can never ship an invalid entry.
