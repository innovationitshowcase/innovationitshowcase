export class Project {
    constructor(projectTitle, author, videoURL, thumbnailPath = "placeholder-thumbnail.png") {
        this.projectTitle = projectTitle;
        this.author = author;
        this.videoURL = videoURL;
        this.thumbnailPath = thumbnailPath;
    }
}
