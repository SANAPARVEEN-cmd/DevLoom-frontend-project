// ================= COMMUNITY-SPECIFIC JS =================

// SELECT ELEMENTS
const createPostBtn = document.querySelector(".create-post-btn");
const postsContainer = document.querySelector(".posts");

// UPGRADE EXISTING POSTS
function upgradePost(post) {
  const footer = post.querySelector(".post-footer");

  footer.innerHTML = `
    <span class="like-btn">👍 <span class="like-count">0</span></span>
    <span class="comment-btn">💬 <span class="comment-count">0</span></span>
    <span class="delete-btn">🗑</span>
  `;

  const commentSection = document.createElement("div");
  commentSection.classList.add("comment-section");
  commentSection.style.display = "none";

  commentSection.innerHTML = `
    <input type="text" class="comment-input" placeholder="Write a comment..." />
    <button class="add-comment-btn">Post</button>
    <div class="comments-list"></div>
  `;

  post.appendChild(commentSection);

  attachPostEvents(post);
}

// ADD NEW POST
function addPost(title, content) {
  const post = document.createElement("div");
  post.classList.add("post-card");

  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <div class="post-footer"></div>
  `;

  postsContainer.prepend(post);

  upgradePost(post);
}

// CREATE POST BUTTON
createPostBtn.addEventListener("click", () => {
  const title = prompt("Enter post title:");
  const content = prompt("Enter post content:");

  if (!title || !content) return;

  addPost(title, content);
});

// POST EVENTS
function attachPostEvents(post) {
  const likeBtn = post.querySelector(".like-btn");
  const likeCount = post.querySelector(".like-count");

  const commentBtn = post.querySelector(".comment-btn");
  const commentSection = post.querySelector(".comment-section");
  const commentInput = post.querySelector(".comment-input");
  const addCommentBtn = post.querySelector(".add-comment-btn");
  const commentsList = post.querySelector(".comments-list");
  const commentCount = post.querySelector(".comment-count");

  const deleteBtn = post.querySelector(".delete-btn");

  let liked = false;

  // LIKE
  likeBtn.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent);

    if (!liked) {
      likeCount.textContent = count + 1;
      likeBtn.classList.add("liked");
      liked = true;
    } else {
      likeCount.textContent = count - 1;
      likeBtn.classList.remove("liked");
      liked = false;
    }
  });

  // COMMENT TOGGLE
  commentBtn.addEventListener("click", () => {
    commentSection.classList.toggle("active");
  });

  // ADD COMMENT
  addCommentBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text) return;

    const comment = document.createElement("p");
    comment.textContent = "💬 " + text;
    comment.style.marginTop = "5px";

    commentsList.appendChild(comment);
    commentInput.value = "";

    let count = parseInt(commentCount.textContent);
    commentCount.textContent = count + 1;
  });

  // DELETE
  deleteBtn.addEventListener("click", () => {
    if (confirm("Delete this post?")) {
      post.classList.add("fade-out");

      setTimeout(() => {
        post.remove();
      }, 300);
    }
  });
}

// INIT EXISTING POSTS
document.querySelectorAll(".post-card").forEach(post => {
  upgradePost(post);
});