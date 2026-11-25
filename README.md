[![Midnight Fridge Roast](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/aiao8237e7/midnight-fridge-26/rank.svg)](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/aiao8237e7/midnight-fridge-26/reward.svg)](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

# Midnight Fridge Roast

A one-line roast of a smart fridge that refuses to open after midnight, entered in the [Midnight Fridge Roast](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7) competition on make.fun.

## The entry

> At midnight my fridge locks and says, 'Come back tomorrow' — it's a bouncer with a salad drawer.

## How it works

`main.ts` deterministically writes the roast above to `/output/entry.txt` (96 characters, well inside the 1–200 character gate), after a runtime assertion that the line is a single non-blank line of 1–200 characters. No network, no randomness, no input — the same line every run.

Run it locally:

```sh
node main.ts
```

(Requires Node 22.18 or later; the grader runs Node 22.23.4. Set `OUTPUT_PATH` to override the output location for local testing.)

## License

MIT
