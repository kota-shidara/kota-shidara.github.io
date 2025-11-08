# 基本情報
- 設楽広太（しだら こうた）
- 1997年生

# 略歴

期間 | 内容
--- | ---
2019/8 - 2025/10 | 株式会社Flamers 共同創業 / CTO
2017/10 - 2019/6 | ビジネス・エンジニア長期インターン 1社
2016/4 - 2022/3 | 東京大学理科一類 入学 → 工学部社会基盤学科 卒業（2年間の休学）

# 自身の強み
- 会社の創業から累計2億円以上の資金調達を経験しました。事業や開発を経営視点で捉え、会社を主語にした意思決定を行う力があります。
- CTOとして、サーバー/インフラ/クライアントの全ての領域で責任が取れるように、常に新しい技術を習得してきました。技術の素早いキャッチアップに自信があります。
- 技術のみならず、UI・UXや事業へのインパクトに関心があります。顧客へのヒアリングや自身の消費者への憑依など、消費者を理解するための一次情報の取得を積極的に行いたい意思があります。
- メンバーに対しては、誠実に向き合い、心理的安全性高く、開発を楽しいと思ってもらいたいという気持ちで接してきました。楽しく働くチームの一翼を担えると思います。

# 技術スタック
## 言語
- プロダクションのコードを書いた経験があるもの
  - Ruby（7年）
  - C#（4年）
  - Kotlin（2年）
  - Swift（2年）
- そこそこ触ったことがあるもの
  - Python（卒論の機械学習, numpy, pandas, scikit-learn / Flask / アルゴリズム実装 / ROS 2）
  - Go（プロダクションでWebRTCを用いたサーバー構築を主にコードレビューとバグFIXで担当）
  - JavaScript（プロダクションでRailsのStimulusで実装等）
  - TypeScript（プロダクションでのAWS CDKで利用）
- かじった程度
  - Dart（Flutterの技術検証で学習）

## フレームワーク/ツール
- プロダクションのコードを書いた経験があるもの
  - Ruby on Rails（7年）
  - Unity（4年）
  - Jetpack Compose（2年）
  - SwiftUI（2年）
- かじった程度
  - Kubernetes（プライベートで学習。Pod, Service, Deployment等の簡単な理解）
  - ROS 2（プライベートで学習）
  - Flutter（技術検証程度）
  - Flask（卒論で簡単なサーバーを構築）

## クラウドインフラ
- AWS（5年）
  - EC2, ECS, Fargate, Lambda等の基本的なサービスの構築・運用経験
  - CodePipeline, CodeBuild等を利用したCI構築
  - AWS CDKでのIaC構築
- GCP
  - プロダクションで利用するPub/Subの構築（Androidのサブスクサーバー通知）

## その他
- GitHub Actions（実務で利用）
- Docker（日常的に利用）
- Figma（半年）

# 株式会社Flamers（2019/8 - 2025/10）
## 活動概要

時期 | 内容
--- | ---
2019/8 | 大学在学中に、就活の課題感を起点として友人2人と共同創業。
2019/11 | Heart Driven Fund（現[Dawn Capital](https://dawn-capital.vc/)）より[資金調達を実施](https://prtimes.jp/main/html/rd/p/000000001.000053336.html)
2020/6 | 長期インターンサイトVoilをリリース。開発・営業・キャリアアドバイザーを担当し黒字化を実現。
2022春 | メタバースマッチングアプリ事業を[VRChat内でのイベント](https://note.com/memoriavr/n/n319f34e53d4b)で仮説検証の末、事業化に成功。
2022/10 | [ANRI, basepartners等を引き受け先とした1億円のシード資金調達を実施](https://prtimes.jp/main/html/rd/p/000000010.000053336.html)。
2023/4 | [メタバースマッチングアプリ Memotia](https://memotia.com/)をリリース。技術面で事業をリードしつつ、採用・マネジメントを行い、10名程度のエンジニアチームを組成。
2025/11現在 | 集客コストを上回るLTVを獲得することに成功。累計数万人が利用。

## サーバー

### ポリモーフィックなモデル設計
- UserとGuestの2つの認証方法を、重複したコード少なく実装するために、ポリモーフィックなモデル設計を行いました。

### Apple/Googleのサブスクリプション実装
- iOSとAndroidのクライアントライブラリとサーバー通知の仕様を把握し、Rails/iOS/Androidの実装とディレクションを行いました（実装は主にAndroidを担当）。
- リリース後の実データを見て、公式ドキュメントの理解通りデータが記録されているかを検証しました。[検証ログiOS版](https://zenn.dev/link/comments/4ea2cd272e3784), [Android版](https://zenn.dev/link/comments/1fa236836939ed)

### AWS Lambdaを利用した並列実行基盤の作成
- RailsでのMiniMagick処理が並列化できず、要件である1分に150人がアクセスすると全体で5分を超えていました。
- ボトルネックをLambdaに切り出して並列実行を実現。控えていた大規模なプロモーションに耐えうる構成としました。

### その他（サーバー）
- Appleでサインイン機能の実装とディレクションをしました（iOSを自分が実装, Railsをメンバーへ依頼）。[調査ログ](https://zenn.dev/dara/scraps/e659306593b8e7)
- ユーザー同士のリアルタイムなマッチメイキングを高速に行うため、事前にユーザーごとの相性をバッチで計算し、Redisに保存する機構の実装とディレクションをしました。

## インフラ
### AWS CDKを用いて、ECS on EC2でWebRTCサーバーの構築

- AWS CDKを用いて、ECS on EC2の利用したサーバーを構築と、CodePipeline, CodeBuildを用いたCIの構築を行いました。
- WebRTC通信を行いており、大量のUDPポートを公開する必要がありました。Fargateにする場合、これをNLBを構築して実現する必要があり、リリースまでの期日を考慮すると学習コストの観点から実現可能性が低いと判断しました。EC2であればセキュリティグループでポートレンジを開放することで実現できるため、その手段を選択しました。

### その他（インフラ）
- [AWS WAF](https://aws.amazon.com/jp/waf/)を用いて、海外からの不正アクセスを排除しました。
- ECS on Fargate構成のRailsサーバーのIaC化をディレクションしました（実装はメンバーが担当）。
- ElasticBeanstalkを利用したサーバー構築を3サービスほど主担当として実装しました（IaC導入以前）。

## クライアント（モバイル・Unity）
### Unityとモバイルを連携させる技術選定

- Unity単体でのアプリではなく、モバイルアプリのUIとUnityが共存したアプリを開発するため、Unity as a Libraryという仕組みを取り入れました。[技術調査ログiOS版](https://zenn.dev/flamers/articles/3cd8f4781b4892), [Android版](https://zenn.dev/flamers/articles/aeadd5c721a0d6)
- 既存でVRとPCプラットフォームで動作していたアプリを、2.5ヶ月でiOS/Androidともに審査を通過させ、リリースしました。

### マルチプラットフォームVRアプリ開発の技術選定
- Meta社のOculusに特化したSDKではなく、多様なVR機器に対応できるOpenXR, Unity XR Interaction Toolkitを選定しました。
- 当時はVR開発環境も情報が少なく環境も変化していた中で、VR系の開発を行う知人やX上で見かけた方にDMを送りMTGを複数件設定しました。

## その他技術領域

### GitHub Actionsを利用したUnityとモバイルのビルド作成パイプラインの構築

- アプリケーションのリリース先や、ビルドの状態を開発者がその時の必要性に応じてビルド可能であるCIを構築しました。
- 具体的な設定項目: リリースプラットフォーム / APIの向き先 / 軽量ビルド化 / 開発者モード

<img src="img/resume/ci-settings.png" width="35%">

### Difyのプロダクション利用を決定

- ビジネスサイドのメンバーが改善を重ねることで、エンジニアの稼働を取らずに、安定した品質を出せることが検証できたため採用を決定しました。アプリ内やCSで実稼働しています。
- LangFlow等の他のツールも触った上で、使用感を比較検討しました。

## マネジメント

### チームに対して、DevinやClaudeCodeの導入・活用を促すオンボーディングを実施

- MTGを設定し、その場でのハンズオンやプロンプト例などの自作ドキュメントを配布しました。
- 結果、ほぼ全てのメンバーが利用し、さらにrulesの整備も活性化しました。
- 使用感の振り返りMTGを実施し、Devinに関してはフィードバック内容を開発元に送信しました。

### モチベーション向上のための会議体や内容の模索

- 企画と開発に分断を感じたため、プロジェクト毎にPM・デザイナー・エンジニアでショートなMTGを週2回ほど開催しました。
- 結果、コミュニケーション頻度が増え、意図の伝達がスムーズになり、エンジニアメンバーがより前向きに企画の実装に向き合えるようになりました。
- スクラムの振り返りフォーマットを、KPTから[Fun Done Learn](https://www.ogis-ri.co.jp/otc/hiroba/others/ActivityPocket/FunDoneLearn.html)に切り替えて、より明るい雰囲気にすることを模索しました。

### 開発合宿の企画

- リリース目標に対して開発がビハインドしている時期に、任意参加で休日に楽しく稼働してもらえるよう、合宿と銘打った企画を実施しました。
- ランチを豪華なものとしたり、進捗をチーム全体に自慢するなどして、楽しいお祭のようなイベントだと感じてもらえるよう工夫しました。

### アルゴリズムや機械学習の社内勉強会の開催

- 社内エンジニア数名とともに、以下の内容についての勉強会講師を務めました。
  - SOLID原則, 各種アルゴリズム（累積和、二分探索、動的計画法、深さ/幅優先探索）, scikit-learnを用いた簡単な教師あり学習
- ビジネスサイドも含めてGASの勉強会を開催しました。

## 経営
- プレシード資金調達の最終ピッチに共同創業者として同席し、資金調達に成功しました。
- 長期インターン事業のプロダクト案を提示し、実装してリリース、黒字化を達成しました。
- ユニコーン企業を狙うためにはより大きな新規事業の必要性があることを提案し、探索のリソース確保を決定しました。
- VR新規事業の方向性をゲームからソーシャルに転換することを提案し、メンバーとともに探索の方向性を変更しました。
- シード調達において、メタバースマッチングアプリの事業計画や、VRデバイスの普及予測などを作成し、ピッチを経て1億円の資金調達に成功しました。
- エンジニア採用を担当し、15名以上を採用しました。

## UI/UX企画
- 企画からUIデザインまでを行い、数値的な成果をあげました。
- 消費者視点を意識すること、既存の競合サービスから着想を得ること、数値での効果測定が可能であることを重要視しています。

### 初めてのマッチングから通話の実施率の向上
- マッチングしてから通話まで至らない原因として、「相手が通話をしたいか分からない」という課題があることを、実際のチャットを140組分析して特定しました。
- 自分自身が通話を希望するかをシステムが取得し、相手側に伝える施策を実施しました。数値分析から企画、UIデザイン、実装までを担当しました。
- 結果、男性16% → 25%, 女性17% → 22%に上昇しました。

<img src="img/resume/talk_intention.png" width="90%">

### 身分証の提出率の向上
- マッチングアプリにおいて異性とチャットをする際に必要な身分証の提出率が低い課題に対して、ユーザーのモチベーション設計を他社アプリを参考に企画しました。
- 以前はチャット画面を開くと最初から身分証の提出を求められていましたが、1通目まで送信を可能にすること、ぼやけた状態での相手からのメッセージの存在確認ができ、読みたい場合に提出が求められるようにすること、の2点を企画・UIデザイン・実装しました。
- 結果、男性48% → 54%, 女性62% → 60%に変化しました。

<img src="img/resume/identification_rate.png" width="90%">

# アウトプット
## 登壇

| 時期 | イベント | スライド |
| --- | --- | --- |
| 2023/9 | CA.Unity #7 | [Windows/Macの証明書の取得と、署名済みインストーラーを作成するビルドプロセスの紹介](https://learning.unity3d.jp/9921/) |
| 2023/6 | （主催）[Unity/VR開発 ◯◯はいいぞ選手権](https://flamers.connpass.com/event/284221/) |  [Zip配布の卒業 インストーラーはいいぞ！](https://speakerdeck.com/dara_dara/zippei-bu-nozu-ye-insutorahaiizo) |
| 2023/1 | IDEACTIVE（初心者必見！XRビジネス＋開発スタートダッシュ講座） |  [初心者必見！Unityを用いた、cluster worldと自作VRアプリの作り方](https://speakerdeck.com/dara_dara/tesuto)
| 2023/1 | （企画から登壇まで）[設計談義会](https://iwakenlab.connpass.com/event/271524/) | [日常と照らし合わせて理解するSOLID原則](https://speakerdeck.com/dara_dara/ri-chang-tozhao-rasihe-waseteli-jie-surusolidyuan-ze)
| 2023/3 | [IwakenLabオールスターLT祭 ～XR好き40名大集結～](https://iwakenlab.connpass.com/event/270558/) | [素早いリリースと自身のCTO化を実現した爆速成長サイクルを振り返る](https://speakerdeck.com/dara_dara/iwakenlab-2023ltji)
| 2022/19 | [VRM勉強会](https://vrm.connpass.com/event/260117/) | [自作アプリにおける、キャリブレーションや表情設定とマルチプレイ同期](https://speakerdeck.com/dara_dara/vrmabatanokiyariburesiyonyabiao-qing-she-ding-tomarutipureitong-qi)

## 執筆

### 書籍

-  [XR好きのための役立つTips集](https://www.amazon.co.jp/XR%E5%A5%BD%E3%81%8D%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E5%BD%B9%E7%AB%8B%E3%81%A4Tips%E9%9B%86-%E6%8A%80%E8%A1%93%E3%81%AE%E6%B3%89%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E5%A0%A4-%E6%B5%B7%E6%96%97/dp/4295602043)
    - MetaのAppLab（現在は廃止）にアプリをリリースするまでの手順をまとめて執筆

### Zenn
- [TOKYO GAME SHOW（等ビッグイベント）における、デモ展示の技術責任者の心得](https://zenn.dev/flamers/articles/8609b9002d992a)
- [CTO/エンジニアリングマネージャー 1年目の軌跡](https://zenn.dev/flamers/articles/924e3eb0c4d464)
- Apple/Googleのサブスクリプション実装におけるサーバー通知の扱い [iOS版](https://zenn.dev/dara/scraps/c40d0d32822d5b), [Android版](https://zenn.dev/dara/scraps/23e3597c0755a1)
- [トランザクション分離レベルについての実験](https://zenn.dev/dara/articles/22463be74ac059)

## その他
- Meta Quest向けのカジュアルゲームをリリース（制作期間2ヶ月） [MagicBattlesVR](https://sidequestvr.com/app/4841/magicbattlesvr)

# 学歴/研究
- 卒業論文 [画像キャプション技術を活用した橋梁点検用Webシステムの開発](https://www.jstage.jst.go.jp/article/jsceiii/3/J2/3_65/_article/-char/ja/) （CNN/LSTMを用いた画像キャプション技術のWebシステムの構築）
- 土木学会・インフラデータチャレンジ [アイデア部門優秀賞受賞](https://www.kensetsunews.com/web-kan/315861)

# 資格等
- 実用英語技能検定 準1級（2015年）
- IELTS 7.0（2019年）

# その他
- 趣味で3曲を作曲 [YouTube](https://www.youtube.com/@%E3%81%93%E3%81%93%E3%81%BD%E3%82%93%E3%81%A0%E3%83%BC%E3%82%89)
- Voicy公式ITビジネスニュースにおいて、2021/2~2022/1の1年間、火曜日パーソナリティを担当 [放送例](https://voicy.jp/channel/480/223983)

# 各種リンク
- [X](https://x.com/3tdara)
- [Facebook](https://www.facebook.com/kota.shidara)
- [YOUTRUST](https://youtrust.jp/users/b51e8eab6c02363f95f36b1ccfce9af9)
- [Zenn](https://zenn.dev/dara)
- [SpeakerDeck](https://speakerdeck.com/dara_dara)
