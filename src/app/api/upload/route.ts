import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('file') as unknown as File;
        const type = data.get('type');

        if (!file) {
            return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        let filename = '';
        if (type === 'profile') {
            filename = 'profile.png'; // Standardize to png or keep original extension? Let's use png for simplicity in data
            // Actually, let's keep it simple and overwrite profile.png. 
            // If the user uploads jpg, we might want to save as profile.jpg and update portfolio.ts, 
            // but updating portfolio.ts programmatically is risky.
            // For now, let's save as profile.png and assume the user is okay with that or the frontend handles it.
            // Better: Save as is, but for this specific request "change the profile", replacing the file is easiest.
            // Let's stick to 'profile.png' for the target file name to match the implementation plan.
            // Wait, the current profile image is '/profile.svg'. I should probably update it to '/profile.png' in portfolio.ts first.
        } else if (type === 'resume') {
            filename = 'resume.pdf';
        } else {
            return NextResponse.json({ success: false, message: 'Invalid upload type' }, { status: 400 });
        }

        const publicPath = path.join(process.cwd(), 'public', filename);
        await writeFile(publicPath, buffer);

        return NextResponse.json({ success: true, message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
    }
}
