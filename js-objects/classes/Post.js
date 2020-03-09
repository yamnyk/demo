let _COUNTER = 1;
let _PREFIX = 112;

function generateID() {
  return parseInt(
    _PREFIX.toString()
      .concat(_COUNTER++)
  );
}

class Post {
  id;
  title;
  authorID;
  text;
  dateCreated;
  
  constructor(title = "Empty Post Title",authorID,text,dateCreated) {
    this.id = generateID();
    this.title = title;
    this.authorID = authorID;
    this.text = text;
    this.dateCreated = dateCreated;
  }
  
}