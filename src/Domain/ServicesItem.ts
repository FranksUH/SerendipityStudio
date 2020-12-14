export interface IServiceItem
{
    Id: string;
    Name: string;
    Description: string;
    Price: number;
    Likes: number;
    ImageURL?: string|null;
    ShareURL?: string|null;
}