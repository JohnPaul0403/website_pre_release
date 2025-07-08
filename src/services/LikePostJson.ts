import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogs.json');
const jsonString = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(jsonString);

export const likePostService = {
    likePost: (blogId: string): string => {
        try {
            const index = data.blogs.findIndex((blog: any) => blog.id === blogId);
            if (index === -1) throw new Error('Blog not found');

            data.blogs[index].like_count = (data.blogs[index].like_count || 0) + 1;

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

            return "Success";
        } catch (error) {
            return "There was an error on the system";
        }
    },
    unlikePost: (blogId: string): string => {
        try {
            const index = data.blogs.findIndex((blog: any) => blog.id === blogId);
            if (index === -1) throw new Error('Blog not found');

            data.blogs[index].like_count = (data.blogs[index].like_count || 0) - 1;

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

            return "Success";
        } catch (error) {
            return "There was an error on the system"
        }
    },
    getLikeCount: (blogId: string): number => {
        try {
            const index = data.blogs.findIndex((blog: any) => blog.id === blogId);
            if (index === -1) throw new Error('Blog not found');

            return data.blogs[index].like_count as number;
        } catch (error) {
            return 0;
        }
    }
}