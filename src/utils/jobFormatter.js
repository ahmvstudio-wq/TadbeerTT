/**
 * Parses raw job descriptions that may contain raw markdown headers (## Job Description)
 * or inline asterisk bullets (* item 1 * item 2) into structured overview and bullet lists.
 */
export const parseJobDescription = (rawText) => {
  if (!rawText) return { overview: '', bullets: [] };

  // Remove leading markdown headings like "## Job Description"
  let clean = rawText
    .replace(/^##\s*Job\s*Description\s*/i, '')
    .replace(/^Job\s*Description\s*:\s*/i, '')
    .trim();

  let bullets = [];
  let overview = '';

  // Case 1: Inline asterisks delimiter (" * item1 * item2")
  if (clean.includes(' * ')) {
    const parts = clean.split(/\s*\*\s+/).map(s => s.trim()).filter(Boolean);
    // If original string did not start with an asterisk, first part is overview
    if (!rawText.trim().startsWith('*') && !rawText.trim().startsWith('## Job Description *')) {
      overview = parts[0];
      bullets = parts.slice(1);
    } else {
      bullets = parts;
    }
  } 
  // Case 2: Newline bullet points (\n* item1 or \n- item1)
  else if (/\n[\*\-•]/.test(clean)) {
    const lines = clean.split(/\n+/).map(l => l.trim()).filter(Boolean);
    lines.forEach(line => {
      if (/^[\*\-•]\s*/.test(line)) {
        bullets.push(line.replace(/^[\*\-•]\s*/, '').trim());
      } else {
        if (!overview) overview = line;
        else overview += ' ' + line;
      }
    });
  } 
  // Case 3: Plain paragraph text
  else {
    overview = clean;
  }

  // Strip bold syntax like **text**
  const formatText = (str) => str ? str.replace(/\*\*(.*?)\*\*/g, '$1').trim() : '';

  return {
    overview: formatText(overview),
    bullets: bullets.map(formatText)
  };
};
