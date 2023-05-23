/* eslint-disable camelcase */
// eslint-disable-next-line max-classes-per-file
export class Comment {
  constructor(username, creation_date, comment) {
    this.username = username;
    this.creation_date = creation_date;
    this.comment = comment;
  }
}

export class Reserve {
  constructor(username, date_start, date_end) {
    this.username = username;
    this.date_start = date_start;
    this.date_end = date_end;
  }
}

export class Launch {
  likes;

  reserves = []

  comments = []

  constructor(id, name, lsp_name, mission_type, pad, location, image) {
    this.id = id;
    this.name = name;
    this.lsp_name = lsp_name;
    this.mission_type = mission_type;
    this.pad = pad;
    this.location = location;
    this.image = image;
  }
}
