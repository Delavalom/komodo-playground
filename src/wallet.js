const balances = new Map();

export function getBalance(userId) {
  return balances.get(userId) ?? 0;
}

export function credit(userId, amount) {
  balances.set(userId, getBalance(userId) + amount);
}
