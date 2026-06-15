# Shadow Architecture

Shadow is organized as a small monorepo.

## API

The API handles agent mint records, training records, content ownership hashes, connected accounts, revenue entries and workflow checks.

## Web

The web app is a Next.js command center for the user.

## Ownership

Content is hashed before use. A future chain adapter can attach transaction hashes and token IDs to each asset record.

## Governance

Owner approval remains the default for external actions.
