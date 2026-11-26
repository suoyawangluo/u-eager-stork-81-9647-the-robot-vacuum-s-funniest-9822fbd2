# The Robot Vacuum's Funniest Excuse

[![make.fun · u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/suoyawangluo/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/suoyawangluo/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

A make.fun bounty entry: one line, at most 120 characters, in which a robot
vacuum explains why it missed a spot. Built for the
[make.fun bounty](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
— invite code `xxbm6cca` ([make.fun/r/xxbm6cca](https://make.fun/r/xxbm6cca)).

## The entry

> I didn't miss that spot — the dust there unionized, and I don't cross a picket line.

84 characters, one line. The vacuum speaks in its own voice: it did not miss
the spot by accident — the dust there organised, and a machine does not cross
a picket line.

## How it works

`main.ts` (Node 22, standard library only) assembles the line from its named
parts, checks it against the gate (1–120 characters, single line, not only
whitespace), writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` when
set), then reads it back and prints its sha256.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
