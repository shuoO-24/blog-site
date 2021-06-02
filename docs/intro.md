---
sidebar_position: 1
---

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`下周考试！`)
}}>
{children}
</span>
);

<Highlight color="#25c2a0">Go to review SQL for PSTAT 10 Final!!!</Highlight>
