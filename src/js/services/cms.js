export default function (query) {
  return fetch('https://api.graphcms.com/simple/v1/neverbuild', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(res => ({ data: res.data }));
}
