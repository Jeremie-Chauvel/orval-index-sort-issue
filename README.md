# Orval issue setup

## Install

```sh
pnpm install
```

## Test

```sh
pnpm gen:types
```

you get diffs on `api/index.ts` (even thought the swagger is a static json)

My current workaround is using:

```sh
pnpm gen:types:sort
```

which pass the sort shell tool on index.ts post type generation
