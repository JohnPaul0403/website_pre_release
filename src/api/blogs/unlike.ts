import { likePostService } from "../../services/LikePostJson";

export async function post({ request }) {
  const url = new URL(request.url);
  const blogId = url.searchParams.get('id');
  if (blogId ==null) {
    return new Response(JSON.stringify({
        success: false,
        message: "Blogid not found"
    }))
  }
  const result = likePostService.unlikePost(blogId);
  const likeCount = likePostService.getLikeCount(blogId);
  return new Response(JSON.stringify({
    success: result === "Success",
    likeCount: likeCount
  }));
}