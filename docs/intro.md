---
sidebar_position: 1
id: intro
---

代码书写人生。

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: '#f0d8e7',
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

<Highlight color="#f0d8e7">Go to review SQL for PSTAT 10 Final!!!</Highlight>
