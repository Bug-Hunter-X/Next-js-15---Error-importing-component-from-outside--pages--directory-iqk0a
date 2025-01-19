# Next.js 15 - Error importing component from outside `pages` directory

This repository demonstrates a common error in Next.js 15 when importing a component that is not exported.  The issue arises when attempting to use a component from outside the `pages` directory without proper export.

## How to reproduce the error

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

You'll see an error message indicating that the component is not exported.

## Solution

The solution is to ensure the component is properly exported from the file it's defined in.
