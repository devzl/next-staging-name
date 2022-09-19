# Next staging branch name

This action generate a staging name in a future day.

# Usage

## Inputs

### `targetDay`

**Required** The target day. Default `"Wednesday"`.

## Outputs

### `targetDayFormatted`

Next day abbrv with date.

## Example usage

```
- name: Get next Wednesday
  uses: devzl/next-staging-name@1.0.0
  id: nextWednesday
  with:
    targetDay: 'Wednesday'
```

# If you modify or fork this repo

## Compile it before using it

`ncc build index.js --license licenses.txt`