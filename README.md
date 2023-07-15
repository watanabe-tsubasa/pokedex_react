# pokedex_react

## app

- PokeDexの本体で`bun`をランタイムとして使用しています。

```bash
cd app
bun run dev
```

で動かせます

`build`

```bash
bun build ./src/index.tsx
```

これでbuildディレクトリの中にindex.jsが生成されるのでpublicフォルダーの中に入れて、一緒にデプロイしてください

## pakedex_datamaking

日本語訳をするためのデータ作成をした痕跡を残したファイルなので、実行ファイルとはなんら関係ありません。

`./app/src/utils/enToJa.ts` を作成するためのフォルダー

### 手順

- `get_data.py`で英語 > 日本語のJSONを作成
- 日本語名が""のデータをフィルターして、`prompt.md`にしたがって`ChatGPT`でデータ作成
- 何度か繰り返した後、`add.py`で結合し`filled_json.json`に出力
- `enToJs.ts`にコピペ

## version

7/15 ver 1.0

- 検索サジェストの枠が狭くスマホだと多少タップしにい
- 検索した時にAPI叩いている時の間がちょっと気になる。実装している時考えたがうまく実装できなかった部分なので、更新する機会があれば検討
