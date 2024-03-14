import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl); // 初期値を渡す
    const [loading, setLoading] = useState(false); // 初期状態はfalseにしておく
    
    // クリック時に画像を取得する処理
    const handleClick = async () => {
        setLoading(true); //読み込み中フラグを立てる
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url); // 画像URLの状態を更新する
            setLoading(false); // ローディング状態を更新する
        })
    
    }
    // ローディング中でなければ、画像を表示する
    return (
        <div>
            <button onClick={handleClick}>他の猫も見る</button>
            <div>{loading || <img src={imageUrl} />}</div>
        </div>
    );
};
// Next.jsにページコンポーネントを認識させる行
export default IndexPage;

// レスポンスに含まれる画像情報の型
type Image = {
    url: string;
};

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async() => {
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
};
// The Cat APIにリクエストし猫画像を取得する
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images: unknown = await res.json();
    // 配列として表現されているか確認
    if (!Array.isArray(images)) {
        throw new Error("猫の画像を取得できませんでした")
    }
    const image: unknown = images[0];
    // Imageの構造をなしているか確認
    if (!isImage(image)) {
        throw new Error("猫の画像を取得できませんでした")
    }
    return images[0];
}

// 型ガード関数
const isImage = (value:unknown): value is Image => {
    // 値がオブジェクトなのか?
    if (!value || typeof value !== "object") {
        return false
    }
    // urlプロパティが存在し、かつ、それが文字列なのか？
    return "url" in value && typeof value.url === "string";
}
