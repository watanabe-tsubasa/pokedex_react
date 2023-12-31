const data = {
  'deoxys-normal': 'デオキシス',
  'darmanitan-standard': 'ヒヒダルマ',
  'wormadam-plant': 'ミノマダム（草）',
  'giratina-altered': 'ギラティナ（アナザーフォルム）',
  'basculin-red-striped': 'バスラオ（赤しまりん）',
  'shaymin-land': 'シェイミ（ランドフォルム）',
  'thundurus-incarnate': 'ボルトロス（霊獣）',
  'aegislash-shield': 'ギルガルド（シールドフォルム）',
  'meowstic-male': 'ニャオニクス（オス）',
  'tornadus-incarnate': 'トルネロス（霊獣）',
  'zygarde-50': 'ジガルデ（50%フォルム）',
  'meloetta-aria': 'メロエッタ（ボイスフォルム）',
  'gourgeist-average': 'パンプジン（オバケ）',
  'keldeo-ordinary': 'ケルディオ（ノーマルフォルム）',
  'lycanroc-midday': 'ルガルガン（真昼のすがた）',
  'pumpkaboo-average': 'バケッチャ（普通）',
  'toxtricity-amped': 'ストリンダー（スパイク）',
  'landorus-incarnate': 'ランドロス（霊獣）',
  'wishiwashi-solo': 'ヨワシ（ソロフォルム）',
  'morpeko-full-belly': 'モルペコ（まんぷくもち）',
  'eiscue-ice': 'コオリッポ（アイスフェイス）',
  'indeedee-male': 'イエッサン（オス）',
  'enamorus-incarnate': 'ダストダス（ゴクゴク）',
  'urshifu-single-strike': 'ウーラオス（たいけつのすがた）',
  'wormadam-trash': 'ミノマダム（ゴミ）',
  'deoxys-defense': 'デオキシス（ディフェンスフォルム）',
  'rotom-wash': 'ロトム（せんたく）',
  'rotom-fan': 'ロトム（ふうせん）',
  'giratina-origin': 'ギラティナ（オリジンフォルム）',
  'pumpkaboo-small': 'バケッチャ（小さい）',
  'shaymin-sky': 'シェイミ（スカイフォルム）',
  'kyurem-white': 'キュレム（ホワイトキュレム）',
  'castform-snowy': 'ポワルン（スノーフォルム）',
  'blastoise-mega': 'カメックス（メガ）',
  'basculegion-male': 'バスラオ（ブルーストライプメス）',
  'thundurus-therian': 'ボルトロス（霊獣）',
  'gourgeist-super': 'パンプジン（スーパーサイズ）',
  'aerodactyl-mega': 'プテラ（メガ）',
  'meloetta-pirouette': 'メロエッタ（ステップフォルム）',
  'darmanitan-zen': 'ヒヒダルマ（ダルマモード）',
  'kyurem-black': 'キュレム（ブラックキュレム）',
  'deoxys-attack': 'デオキシス（アタックフォルム）',
  'rotom-mow': 'ロトム（ふうそう）',
  'minior-red-meteor': 'メテノ（スター）',
  'alakazam-mega': 'フーディン（メガ）',
  'pumpkaboo-large': 'バケッチャ（大きい）',
  'castform-sunny': 'ポワルン（サニーフォルム）',
  'mewtwo-mega-y': 'ミュウツー（メガY）',
  'gourgeist-small': 'パンプジン（小さい）',
  'rotom-heat': 'ロトム（ヒート）',
  'deoxys-speed': 'デオキシス（スピードフォルム）',
  'kangaskhan-mega': 'ガルーラ（メガ）',
  'pinsir-mega': 'カイロス（メガ）',
  'scizor-mega': 'ハッサム（メガ）',
  'gengar-mega': 'ゲンガー（メガ）',
  'gourgeist-large': 'パンプジン（大きい）',
  'mimikyu-disguised': 'ミミッキュ（ばけたすがた）',
  'venusaur-mega': 'フシギバナ（メガ）',
  'altaria-mega': 'チルタリス（メガ）',
  'latios-mega': 'ラティオス（メガ）',
  'ampharos-mega': 'デンリュウ（メガ）',
  'wormadam-sandy': 'ミノマダム（砂）',
  'castform-rainy': 'ポワルン（レインフォルム）',
  'swampert-mega': 'ラグラージ（メガ）',
  'heracross-mega': 'ヘラクロス（メガ）',
  'keldeo-resolute': 'ケルディオ（かくごのすがた）',
  'lucario-mega': 'ルカリオ（メガ）',
  'houndoom-mega': 'ヘルガー（メガ）',
  'absol-mega': 'アブソル（メガ）',
  'tornadus-therian': 'トルネロス（霊獣）',
  'charizard-mega-y': 'リザードン（メガY）',
  'meowstic-female': 'ニャオニクス（メス）',
  'mawile-mega': 'クチート（メガ）',
  'kyogre-primal': 'カイオーガ（原始）',
  'rayquaza-mega': 'レックウザ（メガ）',
  'floette-eternal': 'フラエッテ（エターナルフラワー）',
  'audino-mega': 'タブンネ（メガ）',
  'camerupt-mega': 'バクーダ（メガ）',
  'gallade-mega': 'エルレイド（メガ）',
  'gardevoir-mega': 'サーナイト（メガ）',
  'aggron-mega': 'ボスゴドラ（メガ）',
  'gyarados-mega': 'ギャラドス（メガ）',
  'basculin-blue-striped': 'バスラオ（青しまりん）',
  'hoopa-unbound': 'フーパ（いましめられしフーパ）',
  'rotom-frost': 'ロトム（フロスト）',
  'mewtwo-mega-x': 'ミュウツー（メガX）',
  'rattata-alola': 'コラッタ（アローラ）',
  'oricorio-baile': 'オドリドリ（バオップ）',
  'landorus-therian': 'ランドロス（霊獣）',
  'blaziken-mega': 'バシャーモ（メガ）',
  'pidgeot-mega': 'ピジョット（メガ）',
  'sceptile-mega': 'ジュカイン（メガ）',
  'pikachu-kalos-cap': 'ピカチュウ（カロスキャップ）',
  'pikachu-phd': 'ピカチュウ（はかせ）',
  'pikachu-hoenn-cap': 'ピカチュウ（ホウエンキャップ）',
  'raichu-alola': 'ライチュウ（アローラ）',
  'meowth-alola': 'ニャース（アローラ）',
  'tyranitar-mega': 'バンギラス（メガ）',
  'charizard-mega-x': 'リザードン（メガX）',
  'greninja-ash': 'ゲッコウガ（アッシュ・ゲッコウガ）',
  'sandshrew-alola': 'サンド（アローラ）',
  'pikachu-unova-cap': 'ピカチュウ（イッシュキャップ）',
  'graveler-alola': 'ゴローン（アローラ）',
  'muk-alola': 'ベトベトン（アローラ）',
  'pikachu-alola-cap': 'ピカチュウ（アローラキャップ）',
  'vulpix-alola': 'ロコン（アローラ）',
  'garchomp-mega': 'ガブリアス（メガ）',
  'latias-mega': 'ラティアス（メガ）',
  'persian-alola': 'ペルシアン（アローラ）',
  'golem-alola': 'ゴローニャ（アローラ）',
  'dugtrio-alola': 'ダグトリオ（アローラ）',
  'pikachu-sinnoh-cap': 'ピカチュウ（シンオウキャップ）',
  'oricorio-sensu': 'オドリドリ（スーパースター）',
  'oricorio-pau': 'オドリドリ（パウスター）',
  'pikachu-pop-star': 'ピカチュウ（ポップスター）',
  'gumshoos-totem': 'デカグース（トーテム）',
  'geodude-alola': 'イシツブテ（アローラ）',
  'grimer-alola': 'ベトベター（アローラ）',
  'medicham-mega': 'チャーレム（メガ）',
  'pikachu-belle': 'ピカチュウ（アイドル）',
  'oricorio-pom-pom': 'オドリドリ（エンブレム）',
  'linoone-galar': 'マッスグマ（ガラル）',
  'marowak-alola': 'ガラガラ（アローラ）',
  'lycanroc-midnight': 'ルガルガン（まよなかのすがた）',
  'abomasnow-mega': 'ユキノオー（メガ）',
  'zygarde-50-power-construct': 'ジガルデ（50%フォルム・パワーコンストラクト）',
  'salazzle-totem': 'エンニュート（トーテム）',
  'slowbro-mega': 'ヤドラン（メガ）',
  'minior-red-meteor': 'メテノ（スターメテオ）',
  'steelix-mega': 'ハガネール（メガ）',
  'minior-orange-meteor': 'メテノ（スターオレンジ）',
  'pikachu-original-cap': 'ピカチュウ（オリジナルキャップ）',
  'ninetales-alola': 'キュウコン（アローラ）',
  'groudon-primal': 'グラードン（原始）',
  'sharpedo-mega': 'サメハダー（メガ）',
  'diancie-mega': 'ディアンシー（メガ）',
  'banette-mega': 'ジュペッタ（メガ）',
  'vikavolt-totem': 'クワガノン（トーテム）',
  'minior-violet-meteor': 'メテノ（スターパープル）',
  'pikachu-rock-star': 'ピカチュウ（ロックスター）',
  'glalie-mega': 'オニゴーリ（メガ）',
  'kommo-o-totem': 'ジャラランガ（トーテム）',
  'salamence-mega': 'ボーマンダ（メガ）',
  'pikachu-libre': 'ピカチュウ（マスクドバトラー）',
  'minior-green-meteor': 'メテノ（スターグリーン）',
  'pikachu-cosplay': 'ピカチュウ（コスプレ）',
  'lurantis-totem': 'ラランテス（トーテム）',
  'sableye-mega': 'ヤミラミ（メガ）',
  'minior-yellow': 'メテノ（スタイエロー）',
  'aegislash-blade': 'ギルガルド（ブレードフォルム）',
  'mimikyu-totem-busted': 'ミミッキュ（トーテム・もぎたてフェイス）',
  'pumpkaboo-super': 'バケッチャ（特大）',
  'necrozma-dusk': 'ネクロズマ（たそがれのたてがみ）',
  'ribombee-totem': 'アブリボン（トーテム）',
  'sandslash-alola': 'サンドパン（アローラ）',
  'minior-indigo-meteor': 'メテノ（スターインディゴ）',
  'greninja-battle-bond': 'ゲッコウガ（バトルボンド）',
  'lopunny-mega': 'ミミロップ（メガ）',
  'necrozma-dawn': 'ネクロズマ（あかつきのつばさ）',
  'zygarde-10-power-construct': 'ジガルデ（10%フォルム・パワーコンストラクト）',
  'raticate-totem-alola': 'コラッタ（トーテム・アローラ）',
  'eevee-starter': 'イーブイ（スターター）',
  'meowth-galar': 'ニャース（ガラル）',
  'minior-indigo': 'メテノ（スターインディゴ）',
  'zygarde-complete': 'ジガルデ（パーフェクトフォルム）',
  'minior-orange': 'メテノ（スターオレンジ）',
  'slowpoke-galar': 'ヤドン（ガラル）',
  'ponyta-galar': 'ポニータ（ガラル）',
  'togedemaru-totem': 'トゲデマル（トーテム）',
  'slowbro-galar': 'ヤドラン（ガラル）',
  'diglett-alola': 'ディグダ（アローラ）',
  'weezing-galar': 'マタドガス（ガラル）',
  'slowking-galar': 'ヤドキング（ガラル）',
  'exeggutor-alola': 'ナッシー（アローラ）',
  'darumaka-galar': 'ダルマッカ（ガラル）',
  'darmanitan-galar-zen': 'ヒヒダルマ（ガラルのすがた・ダルマモード）',
  'pikachu-starter': 'ピカチュウ（スターターキャップ）',
  'indeedee-female': 'イエッサン（メス）',
  'metagross-mega': 'メタグロス（メガ）',
  'darmanitan-galar-standard': 'ヒヒダルマ（ガラルのすがた）',
  'zigzagoon-galar': 'ジグザグマ（ガラル）',
  'zygarde-10': 'ジガルデ（10%フォルム）',
  'wishiwashi-school': 'ヨワシ（たいしょうのすがた）',
  'lycanroc-dusk': 'ルガルガン（たそがれのすがた）',
  'rockruff-own-tempo': 'イワンコ（イワンコのすがた）',
  'cramorant-gulping': 'ウッウ（ぺこぺこ）',
  'manectric-mega': 'ライボルト（メガ）',
  'corsola-galar': 'サニゴーン（ガラル）',
  'articuno-galar': 'フリーザー（ガラル）',
  'morpeko-hangry': 'モルペコ（はらペコ）',
  'rapidash-galar': 'ギャロップ（ガラル）',
  'zacian-crowned': 'ザシアン（剣の王冠）',
  'toxtricity-low-key': 'ストリンダー（ロックフォーム）',
  'cramorant-gorging': 'ウッウ（ごくごく）',
  'zarude-dada': 'ザルード（ダダマネキ）',
  'butterfree-gmax': 'バタフリー（キョダイマックス）',
  'calyrex-shadow': 'バドレックス（シャドーライダー）',
  'eternatus-eternamax': 'ムゲンダイナ（ムゲンマックス）',
  'zamazenta-crowned': 'ザマゼンタ（盾の王冠）',
  'pikachu-gmax': 'ピカチュウ（キョダイマックス）',
  'venusaur-gmax': 'フシギバナ（キョダイマックス）',
  'raticate-alola': 'コラッタ（アローラ）',
  'mr-mime-galar': 'バリヤード（ガラル）',
  'machamp-gmax': 'カイリキー（キョダイマックス）',
  'garbodor-gmax': 'ダストダス（キョダイマックス）',
  'snorlax-gmax': 'カビゴン（キョダイマックス）',
  'melmetal-gmax': 'メルメタル（キョダイマックス）',
  'rillaboom-gmax': 'ゴリランダー（キョダイマックス）',
  'cinderace-gmax': 'エースバーン（キョダイマックス）',
  'inteleon-gmax': 'インテレオン（キョダイマックス）',
  'corviknight-gmax': 'アーマーガア（キョダイマックス）',
  'orbeetle-gmax': 'イオルブ（キョダイマックス）',
  'drednaw-gmax': 'カジリガメ（キョダイマックス）',
  'coalossal-gmax': 'セキタンザン（キョダイマックス）',
  'flapple-gmax': 'アップリュー（キョダイマックス）',
  'appletun-gmax': 'タルップル（キョダイマックス）',
  'sandaconda-gmax': 'サダイジャ（キョダイマックス）',
  'toxtricity-amped-gmax': 'ストリンダー（キョダイマックス）',
  'centiskorch-gmax': 'マルヤクデ（キョダイマックス）',
  'hatterene-gmax': 'ブリムオン（キョダイマックス）',
  'grimmsnarl-gmax': 'オーロンゲ（キョダイマックス）',
  'alcremie-gmax': 'マホイップ（キョダイマックス）',
  'copperajah-gmax': 'ダイオウドウ（キョダイマックス）',
  'duraludon-gmax': 'ジュラルドン（キョダイマックス）',
  'urshifu-single-strike-gmax': 'ウーラオス（たいけつのすがた・キョダイマックス）',
  'urshifu-rapid-strike-gmax': 'ウーラオス（そうげきのすがた・キョダイマックス）',
}