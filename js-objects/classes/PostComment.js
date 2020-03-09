_COUNTER = 1;
_PREFIX = 113;

class PostComment {
  constructor(postID, dateCreated, authorID, text) {
    this.id = generateID();
    this.postID = postID;
    this.dateCreated = dateCreated;
    this.authorID = authorID;
    this.text = text;
  }
}