import { getUserById } from "./db.js";

const balances = new Map();

export function getBalance(userId) {
  return balances.get(userId) ?? 0;
}

export async function credit(userId, amount) {
  const user = await getUserById(userId);
  if (!user) throw new Error("unknown user");
  const current = getBalance(userId);
  await new Promise((resolve) => setTimeout(resolve, 10));
  balances.set(userId, current + amount);
}

export async function transfer(fromId, toId, amount) {
  if (getBalance(fromId) >= amount) {
    await credit(toId, amount);
    balances.set(fromId, getBalance(fromId) - amount);
  }
}
