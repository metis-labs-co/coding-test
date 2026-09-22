# Debugging exercise

A small full-stack app: an Express API that serves a list of products, and a React
client that lets you search them. The app has several bugs. Your task is to find them,
explain what is going wrong, and fix them.

There is no trick to this. Run the app, use it, and follow anything that looks off.

## Getting started

Requires Node 20 or later.

```bash
npm install
npm run dev
```

This starts both services:

- API on http://localhost:3000
- Client on http://localhost:5173

Other useful commands:

```bash
npm run lint    # ESLint across client and server
npm run build   # Type-check both workspaces and build the client
```

## What the app should do

- On load, the client shows every item as a card with its name, category, price and
  a stock badge.
- Typing in the search box filters the list by name, case-insensitively, and
  updates as you type.
- Each item's stock badge matches the data on the server.
- Any search input is safe to type. If the request fails, the client shows an error
  instead of a blank list.

If the app behaves differently from the above, that is a bug.

## Where things live

```
client/src/components/ItemList.tsx   search box, loading state and the list
client/src/api.ts                    fetch wrapper for the API
client/vite.config.ts                dev server config and API proxy
server/src/index.ts                  Express app and the /api/items endpoint
server/src/data.ts                   the item data and its type
```

## How to approach it

- Talk through what you are doing as you go. We care more about how you reason
  about a problem than about typing speed.
- Use whatever tools you would normally reach for: the browser dev tools, the
  network tab, the terminal output, the linter.
- When you find something, say what the symptom is, what the cause is, and what
  you would change. Then make the change.
- Some bugs are easier to see than others. If you get stuck, ask.

Your interviewer will tell you how long you have.
