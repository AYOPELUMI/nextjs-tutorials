
'use client'
type Props = {
    params: {
        slug: string;
    }
};

export default function Page({
    params
} : Props) {
    const { slug } = params;
    return (
        <div>
            <h1>Hello routing {slug}</h1>
        </div>
    );
}
