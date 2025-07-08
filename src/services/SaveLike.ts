export const saveLikeService = {
    saveLike: (blogId: string): string => {
        try {
            localStorage.setItem(`liked_blog_${blogId}`, "true");
            return "Saved successfully"
        } catch (error) {
            return "There an error on the system"
        }
    },
    deleteLike: (blogId: string): string => {
        try {
            localStorage.removeItem(`liked_blog_${blogId}`);
            return "Saved successfully"
        } catch (error) {
            return "There an error on the system"
        }
    },
    hasUserLiked: (blogId: string): boolean => {
        try {
            return localStorage.getItem(`liked_blog_${blogId}`) === "true";
        } catch (error) {
            return false
        }
    }
}