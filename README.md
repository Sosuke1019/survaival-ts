# survaival-ts
サバイバルTypeScript- 作って学ぶTypeScript

## 簡単な関数を作ってみよう
- type annotationはTs固有なので、ブラウザやNode.jsでは実行不可。よって、Tsコンパイラが生成してくれたJsファイルを実行環境で動かす。
- Jsファイルを本番環境にデプロイする。

## Reactでいいねボタンを作ろう
- Reactの特徴
    1. Reactはvirtual DOM(仮想DOM)を採用
        - DOM API によってHTMLとCSSをオブジェクトとして操作できる。
        - virtual DOMはリアルDOMのプロキシのようなもので、リアルDOMに比べて状態管理上のバグを起こしにくくなっている。
        - 仮想DOMを操作し、その変更はリアルDOMに伝わり、画面に描画される。
        - つまり、仮想DOMは複雑なUIをラクに実装するための仕組み。
    2. 宣言的UI
    　- どのように表示するのかの部分はなく、「このような表示になってほしい」という目標だけ書かれている。
    3. コンポーネントベース
        - コンポーネントはボタンや入力欄、フォーム、ページなどのUIの部品(大小様々)
        - コンポーネントは再利用できるので便利
        - オープンソースのコンポーネントを使うことも可能
- JSXはJsを拡張した言語で、Jsの中にXMLを直接書けるようにしたもの。JSXのTs版がTSX。
- JSXを戻り値にする関数を「関数コンポーネント」という。