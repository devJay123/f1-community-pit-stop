import React from 'react';

export default function BoardForm() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="title">제목</label>
          <input id="title" name="title" type="text" />
        </div>
        <div>
          <label htmlFor="userid">작성자</label>
          <input id="userid" name="userid" type="text" />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea id="content" name="content" cols={40} rows={12} />
        </div>
        <div>
          <button className="btn">글쓰기</button>
          <button className="btn">다시쓰기</button>
        </div>
      </form>
    </div>
  );
}
