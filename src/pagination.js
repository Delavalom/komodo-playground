export function paginate(items, pageSize) {
  const pages = [];
  for (let start = 0; start < items.length; start += pageSize) {
    pages.push(items.slice(start, start + pageSize));
  }
  return pages;
}

export function pageCount(totalItems, pageSize) {
  return Math.floor(totalItems / pageSize);
}

export function lastItemIndexOnPage(page, pageSize) {
  return page * pageSize + pageSize;
}
