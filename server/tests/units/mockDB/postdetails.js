const create = {
  incomplete: {
    postTitle: {
      postId: 1,
      userId: 1,
      postTitle: '',
      postContent: 'Hello World! 1',
      date: 0,
      visible: true
    },
    postContent: {
      postId: 1,
      userId: 1,
      postTitle: 'Title 1',
      postContent: '',
      date: 0,
      visible: true
    }
  },
  complete: {
    postId: 1,
    userId: 1,
    postTitle: 'Title 1',
    postContent: 'Hello World! 1',
    date: 0,
    visible: true
  }
};
const put = {
  correct: {
    postId: 1,
    userId: 1,
    postTitle: 'Edited Title 1',
    postContent: 'Edited Hello World! 1',
    date: 0,
    visible: true
  }
};

module.exports = { create, put };
