class CommentCollection {

    getApprovedComments() {
        return this.comments.filter(comment => comment.status === 'approved');
    }

    getTotalRating(commentSubset = this.comments) {
        let totalRating = 0;
        for ( const comment of commentSubset ) {
          totalRating += comment.rating || 0;
        }
        return totalRating;
    }

    getAverageRating(commentSubset = this.comments) {
        return this.getTotalRating(commentSubset) / (commentSubset.length || 1);
    }

    getCommentsRatedHigherThan(minRating, commentSubset=this.comments ){
        return commentSubset.filter(comment => comment.rating >= minRating);
    }

    getCommentsCount(commentSubset=this.comments){
        return commentSubset.length;
    }

    sortByDate(commentSubset=this.comments){
        return commentSubset.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    addComment(comment){
        this.comments.push(comment);
    }
    
    constructor(comments = []){
        this.comments = comments;
    }
}

let allComments = new CommentCollection(comments);
let approvedComments = allComments.getApprovedComments();
let averageRating = allComments.getAverageRating(approvedComments);
let featuredComments = allComments.getCommentsRatedHigherThan(4, approvedComments);
let totalComments = allComments.getCommentsCount();
let approvedCount = allComments.getCommentsCount(approvedComments);