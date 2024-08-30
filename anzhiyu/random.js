var posts=["2024/07/31/hexo/","2024/07/31/markdown/","2024/08/30/week3/","2024/08/30/week2/","2024/08/30/week1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };