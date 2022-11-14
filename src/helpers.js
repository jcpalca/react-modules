
/**
 *  Function accepts an array of items.
 *  Function returns a random choice of item from the array and returns it.
 */

function choice(items) {
  const randomIndex = Math.floor(Math.random() * (items.length));
  return items[randomIndex];
}

/**
 *  Function accepts an array of items, and an itemMatch.
 *  Function removes from items the first entry that matches the given item and returns it.
 *  If item is not found in items, function returns undefined.
 */

function remove(items, itemMatch) {
  for(let i = 0; i < items.length; i++) {
    if(items[i] === itemMatch) {
      items.splice(i, 1);
      return itemMatch;
    }
  }
}

export {choice, remove};
