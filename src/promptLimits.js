const PROMPT_LIMITS = {
  total: 3,
  chat: 3,
  strategy: 1
};

const TOTAL_KEY = 'tadbeer_auto_prompt_count';
const SOURCE_KEYS = {
  chat: 'tadbeer_chat_auto_prompt_count',
  strategy: 'tadbeer_strategy_auto_prompt_count'
};

const readCount = (key) => {
  const count = Number.parseInt(sessionStorage.getItem(key) || '0', 10);
  return Number.isFinite(count) ? count : 0;
};

export const canShowAutoPrompt = (source) => {
  if (sessionStorage.getItem('leadSubmitted') === 'true') return false;

  const sourceKey = SOURCE_KEYS[source];
  const sourceLimit = PROMPT_LIMITS[source];

  if (!sourceKey || typeof sourceLimit !== 'number') return false;

  return readCount(TOTAL_KEY) < PROMPT_LIMITS.total && readCount(sourceKey) < sourceLimit;
};

export const markAutoPromptShown = (source) => {
  const sourceKey = SOURCE_KEYS[source];
  if (!sourceKey) return;

  sessionStorage.setItem(TOTAL_KEY, String(readCount(TOTAL_KEY) + 1));
  sessionStorage.setItem(sourceKey, String(readCount(sourceKey) + 1));
};
