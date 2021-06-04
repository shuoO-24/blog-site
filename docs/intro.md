---
sidebar_position: 1
id: intro
title: 你好呀
---

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: '#f0d8e7',
      borderRadius: '10px',
      color: '#fff',
      padding: '20px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`下周考试！`)
}}>
{children}
</span>
);


<br />


<Highlight color="#f0d8e7">Go to review SQL for PSTAT 10 Final!!!</Highlight>
